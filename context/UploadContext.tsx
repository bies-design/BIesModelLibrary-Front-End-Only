// src/context/UploadContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Uppy, { Uppy as UppyType } from "@uppy/core";
import Tus from "@uppy/tus";
import { io, Socket } from "socket.io-client";
import { addToast } from "@heroui/toast"; // 使用 HeroUI Toast
import { useSession } from "next-auth/react";

// 定義 TrackedFile 介面 (如上所述)
export interface TrackedFile {
    uppyId:string;  // Uppy 的 ID (前端用)
    tusId: string;  // Tus/Server 的 ID (後端用)
    name: string;
    progress: number;
    status: 'uploading' | 'processing' | 'completed' | 'error';
    errorMessage?: string;
}

interface UploadContextType {
    uppy: UppyType;
    trackedFiles: Record<string, TrackedFile>; // Key 是 uppyId
    cancelFile: (fileId: string) => void;
    cancelAll: () => void;
}

const UploadContext = createContext<UploadContextType | null>(null);

export const UploadProvider = ({ children }: { children: React.ReactNode }) => {
    const {data:session} = useSession();
    // 使用物件來儲存狀態，確保可以透過 ID 快速更新
    const [trackedFiles, setTrackedFiles] = useState<Record<string, TrackedFile>>({});

    // 用來快速反查 ID 的 Ref (不會觸發渲染，專門給 Socket 用)
    const tusIdMap = React.useRef<Record<string,{id:string, name:string}>>({});

    // 1. 初始化 Uppy
    const [uppy] = useState(() => {
        const uppyInstance = new Uppy({
        id: 'uppy-global',
        autoProceed: true,
        restrictions: { allowedFileTypes: ['.ifc'] },
        });

        uppyInstance.use(Tus, {
        endpoint: process.env.NEXT_PUBLIC_TUS_URL, // 指向你的 Tus Server
        chunkSize: 5 * 1024 * 1024,
        retryDelays: [0, 1000, 3000, 5000],
        removeFingerprintOnSuccess: true,
        });

        return uppyInstance;
    });

    // 2. WebSocket 監聽 (處理轉檔通知)
    useEffect(() => {
        const socket: Socket = io(process.env.NEXT_PUBLIC_WEBSOCKET_URL,{
            transports:['websocket']
        });

        socket.on("connect", () => {
        console.log("🔌 Socket connected");
        });
        // 監聽進度更新
        socket.on("conversion-progress", (data: { fileId: string, progress: number }) => {
            console.log(`📊 收到進度: ${data.fileId} -> ${data.progress}%`);

            setTrackedFiles((prev) => {
                // 1. 根據 TusId (fileId) 反查 UppyId
                const uppyId = Object.keys(prev).find(key => prev[key].tusId === data.fileId);
                
                if (!uppyId) return prev;

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
        socket.on("conversion-complete", (data: { fileId: string, status: string,fileName:string, message?: string }) => {
            console.log("✅ Socket 收到通知:", data);

            // 先透過 Ref 找到 UppyId (不需要進入 setState 就能找)
            const uppyId = tusIdMap.current[data.fileId].id;
            if (!uppyId) {
                console.warn(`⚠️ 收到通知但找不到對應檔案: TusID=${data.fileId}`);
                return;
            }
            // 在這裡處理副作用 (Toast)，保證只執行一次
            if (data.status === 'success') {
                addToast({
                    title: "轉檔完成",
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
            socket.disconnect();
        };
    }, []);

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

    // 獨立的 Effect：當 Session 載入完成，將 UserID 寫入 Uppy Metadata
    useEffect(() => {
        if (uppy && session?.user?.id) {
            // 設定全域 metadata，所有新增的檔案都會自動帶上這個 ID
            uppy.setMeta({ 
                userid: session.user.id,
                email: session.user.email 
            });
            console.log("✅ [UploadContext] Uppy 已綁定 User:", session.user.id);
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
                    status: 'uploading'
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
        console.log("🔍 [Debug] File Object:", file);
        console.log(`🚀 [Uppy] ${file.name} 上傳 MinIO 完畢，等待轉檔...`);
        const uploadUrlFromTus = file.tus?.uploadUrl;
        const fileid = uploadUrlFromTus?.split('/').pop();
        console.log(`🚀 [Uppy] 提取出fileid${fileid}，提供後續比對使用 填入tusId `);
        // 紀錄 TusId 對應到的 UppyId
        if(fileid) tusIdMap.current[fileid] = { id:file.id, name: file.name };

        setTrackedFiles(prev => ({
            ...prev,
            [file.id]: { 
            ...prev[file.id], 
            tusId: fileid,
            progress: 0, 
            status: 'processing' // 切換狀態為轉檔中 (藍色流動條)
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

    return (
        <UploadContext.Provider value={{ uppy, trackedFiles, cancelFile, cancelAll }}>
        {children}
        </UploadContext.Provider>
    );
};

export const useUpload = () => {
    const context = useContext(UploadContext);
    if (!context) throw new Error("useUpload must be used within an UploadProvider");
    return context;
};