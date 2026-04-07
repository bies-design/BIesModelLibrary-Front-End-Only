// src/components/FloatingProgress.tsx
"use client";

import { useState } from "react";
import { useUpload, TrackedFile } from "@/context/UploadContext";
import { Card, CardBody, Progress, Button, ScrollShadow } from "@heroui/react";
import { X, Loader2, CheckCircle2, AlertCircle, FileUp, Minus } from "lucide-react";

export const FloatingProgress = () => {
    const { trackedFiles, cancelFile, cancelAll } = useUpload();
    const [ isMinimized, setIsMinimized ] = useState<boolean>(false);
    // 將物件轉為陣列以便渲染
    const filesList = Object.values(trackedFiles);

    // 如果沒有檔案在傳輸，隱藏元件
    if (filesList.length === 0) return null;

    if(isMinimized){
        return (
            <div className="fixed bottom-6 right-6 z-[9999] animate-slide-in-bottom">
                <Button
                    isIconOnly
                    variant="light"
                    className="overflow-visible text-white rounded-xl bg-[#3F3F46] shadow-[0px_0px_2px_0px_#000000B2,inset_0px_-4px_4px_0px_#00000040,inset_0px_4px_2px_0px_#FFFFFF33]"
                    onPress={() => setIsMinimized(false)}
                    aria-label="Expand uploads"
                >
                    <FileUp size={20} className="text-gray-200" />
                    
                    {/* 檔案數量提示 Badge */}
                    {filesList.length > 0 && (
                        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white shadow">
                            {filesList.length}
                        </span>
                    )}
                </Button>
            </div>
        );
    }
    return (
        <div className="fixed bottom-6 right-6 z-[9999] animate-slide-in-bottom">

            <Card className="w-[30dvw] max-w-[300px] min-w-[250px] shadow-2xl border border-default-200 bg-[#18181B] text-white">
                
                {/* Header: 標題與全部取消 */}
                <div className="px-4 py-3 border-b border-default-100/10 flex justify-between items-center bg-[#27272A]">
                    <div className="flex items-center gap-2">
                        <FileUp size={16} className="text-gray-400"/>
                        <span className="text-sm font-bold text-gray-200">
                        Uploads ({filesList.length})
                        </span>
                    </div>
                    {/* <Button 
                        size="sm" 
                        variant="light" 
                        color="danger" 
                        className="h-6 min-w-0 px-2 text-xs"
                        onPress={cancelAll}
                    >
                        Cancel All
                    </Button> */}
                    <Button
                        isIconOnly
                        size="sm"
                        variant="light"
                        className="h-6 w-6 min-w-0 text-gray-400 hover:text-white"
                        onPress={() => setIsMinimized(true)}
                        aria-label="Minimize"
                    >
                        <Minus size={18} />
                    </Button>
                </div>

                <CardBody className="p-0 bg-[#18181B]">
                    {/* 使用 ScrollShadow 避免檔案太多時佔滿畫面 */}
                    <ScrollShadow className="max-h-[320px] w-full">
                        <div className="flex flex-col p-2 gap-1">
                        {filesList.map((file) => (
                            <FileItem 
                                key={file.uppyId} 
                                file={file} 
                            />
                        ))}
                        </div>
                    </ScrollShadow>
                </CardBody>
            </Card>
        </div>
    );
};

// 單個檔案進度條元件
const FileItem = ({ file }: { file: TrackedFile }) => {
    
    // 根據狀態決定顏色與 Icon
    const getStatusConfig = () => {
        switch (file.status) {
            case 'uploading':
                return { 
                color: "success" as const, 
                text: `${file.progress}%`,
                icon: null,
                isIndeterminate: false
                };
            case 'processing':
                return { 
                color: "primary" as const, 
                text: `Converting ${file.progress}%`,
                icon: <Loader2 className="animate-spin text-blue-500" size={14} />,
                isIndeterminate: false // 轉檔時顯示流動動畫
                };
            case 'completed':
                return { 
                color: "success" as const, 
                text: "Done",
                icon: <CheckCircle2 className="text-green-500" size={14} />,
                isIndeterminate: false
                };
            case 'error':
                return { 
                color: "danger" as const, 
                text: "Error",
                icon: <AlertCircle className="text-red-500" size={14} />,
                isIndeterminate: false
                };
        }
    };

    const config = getStatusConfig();

    return (
        <div className="flex flex-col gap-2 p-3 rounded-lg hover:bg-[#27272A] transition-colors group relative border border-transparent hover:border-default-100/10">
        
        {/* 檔名與狀態 */}
        <div className="flex justify-between items-start">
            <span className="text-xs font-medium truncate max-w-[220px] text-gray-300" title={file.name}>
            {file.name}
            </span>
            
            <div className="flex items-center gap-2">
            {/* 狀態文字與 Icon */}
            <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-gray-400 font-mono">{config.text}</span>
                {config.icon}
            </div>

            {/* 取消按鈕 (只在非完成狀態顯示) */}
            {/* {file.status !== 'completed' && (
                <button 
                    onClick={(e) => { e.stopPropagation(); }}
                    className="text-gray-500 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 ml-1"
                >
                    <X size={14} />
                </button>
            )} */}
            </div>
        </div>

        {/* 進度條 */}
        <Progress 
            size="sm" 
            value={file.progress} 
            color={config.color}
            isIndeterminate={config.isIndeterminate}
            className="h-1"
            classNames={{ track: "bg-default-500/20" }}
            aria-label={`${file.name} progress`}
        />
        
        {/* 錯誤訊息 (如果有的話) */}
        {file.errorMessage && (
            <span className="text-[10px] text-red-400 truncate">
            {file.errorMessage}
            </span>
        )}
        </div>
    );
};