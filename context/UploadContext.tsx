// src/context/UploadContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState, useRef } from "react";
import Uppy, { Uppy as UppyType } from "@uppy/core";
import Tus from "@uppy/tus";
import { io, Socket } from "socket.io-client";
import { addToast } from "@heroui/toast"; // 使用 HeroUI Toast
import { useSession } from "next-auth/react";
import axios from 'axios';
import { retryConvertTask, fetchActiveTasksAction } from "@/lib/actions/file.action";

// 定義 TrackedFile 介面 (如上所述)
export interface TrackedFile {
    uppyId:string;  // Uppy 的 ID (前端用)
    tusId: string;  // Tus/Server 的 ID (後端用)
    name: string;
    progress: number;
    status: 'uploading' | 'processing' | 'completed' | 'error';
    errorMessage?: string;
    retryCount: number;
}

interface UploadContextType {
    uppy: UppyType;
    trackedFiles: Record<string, TrackedFile>; // Key 是 uppyId
    cancelFile: (fileId: string) => void;
    cancelAll: () => void;
    retryConversion: (uppyId: string) => Promise<void>;
    dismissTask: (uppyId: string )=> void;
}

const UploadContext = createContext<UploadContextType | null>(null);

export const UploadProvider = ({ children }: { children: React.ReactNode }) => {
    const {data:session} = useSession();
    // 使用物件來儲存狀態，確保可以透過 ID 快速更新
    const [trackedFiles, setTrackedFiles] = useState<Record<string, TrackedFile>>({});

    // 用來快速反查 ID 的 Ref (不會觸發渲染，專門給 Socket 用)
    const tusIdMap = React.useRef<Record<string,{id:string, name:string}>>({});

    // 用來儲存socket io 連線 避免重新渲染連線斷線過度重建
    const socketRef = useRef<Socket | null>(null);

    // 1. 初始化 Uppy
    const [uppy] = useState(() => {
        const uppyInstance = new Uppy({
            id: 'uppy-global',
            autoProceed: true,
            onBeforeUpload:(files) => {
                // 每次要上傳前，檢查全域 meta 裡面有沒有 userid
                const currentMeta = uppyInstance.getState().meta;
                if (!currentMeta.userid) {
                    // 如果沒有，跳通知並中止上傳
                    // (注意這裡我們無法直接用 addToast，因為這是在 useState 裡面，但通常直接 return false 就會擋下)
                    console.error("⛔ [Uppy] 攔截上傳：尚未取得 User ID");
                    return false; 
                }
                return true;
            }
        });

        uppyInstance.use(Tus, {
            endpoint: process.env.NEXT_PUBLIC_TUS_URL, // 指向你的 Tus Server
            chunkSize: 10 * 1024 * 1024,
            retryDelays: [0, 1000, 3000, 5000],
            removeFingerprintOnSuccess: true,
        });

        return uppyInstance;
    });

    // 4. 頁面重整時：主動拉取尚未完成的任務，並重建狀態
    useEffect(() => {
        if (!session?.user?.id) return;

        const fetchActiveTasks = async () => {
            try {
                // 🔐 改用 Server Action (Proxy)，不再暴露 API Key 給前端
                const result = await fetchActiveTasksAction();
                if (!result.success) throw new Error(result.error);
                const { data } = result;

                if (data && data.length > 0) {
                    const restoredFiles: Record<string, TrackedFile> = {};

                    data.forEach((task: any) => {
                        // 因為 Uppy 實例已經清空了，沒有原本的 uppyId。
                        // 我們直接把資料庫的 fileId 當作 uppyId 來用！
                        const pseudoUppyId = task.fileId; 

                        // 🔌 關鍵 1：重建 Ref Map，這樣 Socket 封包才進得來！
                        tusIdMap.current[task.fileId] = { 
                            id: pseudoUppyId, 
                            name: task.name 
                        };

                        // 🔌 關鍵 2：重建畫面 State
                        restoredFiles[pseudoUppyId] = {
                            uppyId: pseudoUppyId,
                            tusId: task.fileId,
                            name: task.name,
                            progress: task.progress, // 從 Redis 抓回來的精準 % 數
                            status: task.status,     // 'processing' 或 'error'
                            errorMessage: task.errorMessage,
                            retryCount: 0
                        };
                    });

                    // 把這些恢復的任務塞回畫面上
                    setTrackedFiles(prev => ({ ...prev, ...restoredFiles }));
                    console.log(`♻️ 成功恢復 ${data.length} 個背景轉檔任務`);
                }
            } catch (error) {
                console.error("無法拉取背景任務狀態:", error);
            }
        };

        fetchActiveTasks();
    }, [session?.user?.id]); // 當獲取到 userId 時執行一次

    // 2. WebSocket 監聽 (處理轉檔通知)
    useEffect(() => {

        if(!session?.user.id) return;
        if(socketRef.current?.connected) return;

        const socket: Socket = io(process.env.NEXT_PUBLIC_WEBSOCKET_URL,{
            transports:['websocket'],
            withCredentials: true,
            reconnectionAttempts: 5,
            query:{
                userId: session.user.id //把 userId 當作參數傳給後端
            }
        });

        socketRef.current = socket;

        socket.on("connect", () => {
            console.log("🔌 Socket connected");
        });

        
        // 監聽進度更新
        socket.on("conversion-progress", (data: { fileId: string, progress: number }) => {
            
            // 如果 Ref 裡面找不到這個 fileId，代表是別人的檔案，直接 Return！
            // 這樣連 setTrackedFiles 都不會觸發，真正達到 0 效能浪費。
            const fileMapping = tusIdMap.current[data.fileId];
            if(!fileMapping) return;

            const uppyId = fileMapping.id;
            // console.log(`📊 收到我的進度: ${data.fileId} -> ${data.progress}%`);
            console.log(`📊 收到我的進度: ${data.progress}%`);
            setTrackedFiles((prev) => {
                // 二次防呆：確保 State 裡真的有這個檔案
                if (!prev[uppyId]) return prev;

                // 2. 更新狀態
                return {
                    ...prev,
                    [uppyId]: {
                        ...prev[uppyId],
                        status: 'processing', // 確保狀態是轉檔中
                        progress: data.progress // 🔥 這裡更新進度條！
                    }
                };
            });
        });
        // 監聽 Worker 完成訊號
        socket.on("conversion-complete", (data: { 
            fileId: string, 
            status: string,
            fileName:string, 
            message?: string 
        }) => {
            // console.log("✅ Socket 收到通知:", data);

            const fileMapping = tusIdMap.current[data.fileId];
            if(!fileMapping){
                // 忽略非本人的任務通知
                return;
            }
            // 先透過 Ref 找到 UppyId (不需要進入 setState 就能找)
            const uppyId = tusIdMap.current[data.fileId].id;
            if (!uppyId) {
                console.warn(`⚠️ 收到通知但找不到對應檔案: TusID=${data.fileId}`);
                return;
            }
            // 在這裡處理副作用 (Toast)，保證只執行一次
            if (data.status === 'success') {
                const isConvertedIfc = fileMapping.name.toLowerCase().endsWith('.ifc');
                addToast({
                    title: isConvertedIfc ? "轉檔完成" : "上傳完成",
                    description: `${data.fileName}已準備就緒`, // 這裡暫時拿不到 file.name，稍後說明
                    color: "success",
                    timeout: Infinity,
                });
                
                // 3秒後移除
                setTimeout(() => removeFileFromTracking(uppyId), 3000);
                
            } else {
                addToast({
                    title: "轉檔失敗",
                    description: data.message || "未知錯誤",
                    color: "danger",
                    timeout: Infinity,
                });
            }

            // State Updater 函式（prev => ...）必須是純函式，只能用來計算新的 State
            // 不能用來執行外部動作（如跳通知、發 API、修改 DOM）。
            setTrackedFiles((prev) => {
                const file = prev[uppyId];

                if (!file) return prev; // 防呆
                
                const updatedFiles = { ...prev };
                if (data.status === 'success') {
                    // 更新狀態為完成
                    updatedFiles[uppyId] = {
                        ...file, 
                        status: 'completed', 
                        progress: 100
                    };
                } else {
                    // 更新狀態為錯誤
                    updatedFiles[uppyId] = { 
                        ...file, 
                        status: 'error', 
                        errorMessage: data.message 
                    };
                }
            return updatedFiles;
        });
        });

        return () => {
            console.log("正在清理 Socket 連線");
            socket.disconnect();
            socketRef.current = null;
        };
    }, [session?.user.id]);

    // 輔助函式：從 React State 中移除檔案
    const removeFileFromTracking = (uppyId: string) => {
        setTrackedFiles((prev) => {
            const newState = { ...prev };
            delete newState[uppyId];
            return newState;
        });
        // 同步移除 Uppy 內部狀態 (如果還存在)
        try { uppy.removeFile(uppyId); } catch (e) {}
    };

    const dismissTask = (uppyId: string) => {
        setTrackedFiles((prev) => {
            const newState = { ...prev };
            delete newState[uppyId];
            return newState;
        });
        // 同步移除 Uppy 內部狀態 (如果還存在)
        try { uppy.removeFile(uppyId); } catch (e) {}
    };

    // 獨立的 Effect：當 Session 載入完成，將 UserID 寫入 Uppy Metadata
    useEffect(() => {
        if (uppy && session?.user?.id) {
            // 設定全域 metadata，所有新增的檔案都會自動帶上這個 ID
            uppy.setMeta({ 
                userid: session.user.id,
                email: session.user.email 
            });
            console.log("✅ [UploadContext] 已綁定 User");
        }
    }, [uppy, session]); // 👈 關鍵：這裡要監聽 session

    // 3. Uppy 事件監聽 (同步 React State)
    useEffect(() => {
        // A. 檔案加入：初始化狀態
        uppy.on('file-added', (file) => {
            setTrackedFiles(prev => ({
                ...prev,
                [file.id]: {
                    uppyId: file.id,
                    tusId: "",
                    name: file.name,
                    progress: 0,
                    status: 'uploading',
                    retryCount: 0
                }as TrackedFile
            }));
        });

        // B. 上傳進度更新
        uppy.on('upload-progress', (file, progress) => {
            if (!file || !progress.bytesTotal || !progress.bytesUploaded ) return;
            const percentage = progress.bytesTotal > 0 
                ? Math.round((progress.bytesUploaded / progress.bytesTotal) * 100) 
                : 0;

            setTrackedFiles(prev => {
                // 效能優化：進度沒變就不更新 State
                if (prev[file.id]?.progress === percentage) return prev;
                
                return {
                ...prev,
                [file.id]: { 
                    ...prev[file.id], 
                    progress: percentage, 
                    status: 'uploading' }
                };
            });
        });

        // C. 上傳完成 (Tus 結束 -> 進入 Worker 等待期)
        uppy.on('upload-success', (file) => {
            if (!file) return;
            // console.log("[Debug] File Object:", file);

            const uploadUrlFromTus = file.tus?.uploadUrl;
            const fileid = uploadUrlFromTus?.split('/').pop();
            // 判斷是否為需要轉檔的 IFC 檔案
            const isIfc = file.name.toLowerCase().endsWith('.ifc');
            console.log(`[Uppy] ${file.name} 上傳完畢。 是否需要轉檔: ${isIfc ? "Yes":"NO"}`);
            // 紀錄 TusId 對應到的 UppyId
            if(fileid) tusIdMap.current[fileid] = { id:file.id, name: file.name };

            setTrackedFiles(prev => ({
                ...prev,
                [file.id]: { 
                ...prev[file.id], 
                tusId: fileid,
                progress: isIfc ? 0 : 100, 
                status: isIfc ? 'processing' : 'completed'
                } as TrackedFile
            }));
        });

        // D. 上傳錯誤
        uppy.on('upload-error', (file, error) => {
            if (!file) return;
            setTrackedFiles(prev => ({
                ...prev,
                [file.id]: { ...prev[file.id], status: 'error', errorMessage: error.message }
            }));
            addToast({ title: "上傳失敗", description: file.name, color: "danger" });
        });

        // E. 檔案被移除 (Cancel)
        uppy.on('file-removed', (file) => {
            removeFileFromTracking(file.id);
        }); 

        // F. 全部取消 已棄用
        uppy.on('cancel-all', () => {
            setTrackedFiles({});
            addToast({ title: "已取消所有任務", color: "default" });
        });

    }, [uppy]);

    const cancelFile = (fileId: string) => {
        uppy.removeFile(fileId); // 這會觸發 'file-removed' 事件，進而清理 State
    };

    const cancelAll = () => {
        uppy.cancelAll();
    };

    const retryConversion = async (uppyId: string ) => {
        const file = trackedFiles[uppyId];
        if(!file || !file.tusId) return;

        // 檢查重試次數防護 (設定最大次數為 3)
        const MAX_RETRIES = 3;
        const currentRetry = file.retryCount || 0;

        if (currentRetry >= MAX_RETRIES) {
            addToast({ 
                title: "重試次數達上限", 
                description: "已達最大重試次數 (3次)，伺服器無法處理此檔案，請刪除後重新上傳。", 
                color: "danger" 
            });
            return;
        }

        // Optimistic Update：立刻讓畫面變成 processing 狀態
        setTrackedFiles(prev => ({
            ...prev,
            [uppyId]: { 
                ...prev[uppyId], 
                status: 'processing', 
                errorMessage: undefined, 
                progress: 0 ,
                retryCount: currentRetry + 1 // 增加次數
            }
        }));

        try {
            // 呼叫 API 重新進入佇列 (預設 priority 10)
            const result = await retryConvertTask(file.tusId, 10); 
            
            if (result.success) {
                addToast({ title: "已重新加入轉檔佇列", color: "default" });
            } else {
                throw new Error(result.error);
            }
        } catch (error: any) {
            // 如果 API 呼叫失敗，退回 Error 狀態
            setTrackedFiles(prev => ({
                ...prev,
                [uppyId]: { 
                    ...prev[uppyId], 
                    status: 'error', 
                    errorMessage: error.message 
                }
            }));
            addToast({ title: "重試失敗", description: error.message, color: "danger" });
        }
    };

    return (
        <UploadContext.Provider value={{ uppy, trackedFiles, cancelFile, cancelAll, retryConversion, dismissTask }}>
            {children}
        </UploadContext.Provider>
    );
};

export const useUpload = () => {
    const context = useContext(UploadContext);
    if (!context) throw new Error("useUpload must be used within an UploadProvider");
    return context;
};
