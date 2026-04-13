import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

// 專門用來安全預覽圖片的元件
const ImageViewer = ({ file }: { file: File }) => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    useEffect(() => {
        if (!file) return;

        // 1. Component Mount 時：產生 Blob URL
        const objectUrl = URL.createObjectURL(file);
        setPreviewUrl(objectUrl);

        // 2. Component Unmount 或檔案改變時：釋放記憶體
        return () => {
            URL.revokeObjectURL(objectUrl);
        };
    }, [file]);

    if (!previewUrl) {
        return (
            <div className="flex items-center justify-center w-full h-full bg-[#18181B]">
                <Loader2 className="animate-spin text-gray-500" />
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center w-full h-full bg-[#18181B] p-4">
            <img src={previewUrl} alt="preview" className="max-w-full max-h-full object-contain rounded-lg shadow-lg" />
        </div>
    );
};

export default ImageViewer;