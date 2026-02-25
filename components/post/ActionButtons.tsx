// components/post/ActionButtons.tsx
"use client";
import React from 'react';
import { Download, Share2 } from 'lucide-react';
import { addToast } from '@heroui/react'; // 建議安裝 sonner 做提示音

export default function ActionButtons({ post }: { post: any }) {
    const handleDownload = () => {
        const file = post.models?.[0] || post.pdfIds?.[0];
        if (file) {
            window.open(`${process.env.NEXT_PUBLIC_S3_ENDPOINT}/downloads/${file.fileKey}`, '_blank');
        }
    };

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        addToast({
            description:"Link copied to clipboard!",
            color:"success",
            timeout:3000,
            shouldShowTimeoutProgress:true,
        })
    };

    return (
        <div className="flex flex-col gap-3">
            <button onClick={handleDownload} className="hover-lift w-full flex items-center justify-center gap-2 bg-[#D70036] hover:bg-[#b0002c] text-white py-3.5 rounded-xl font-medium shadow-[0px_0px_1px_0px_#000000B2,inset_0px_-4px_4px_0px_#00000040,inset_0px_4px_2px_0px_#FFFFFF33]">
                <Download size={18} /> Download
            </button>
            <button onClick={handleShare} className="glass-panel hover-lift w-full flex items-center justify-center gap-2 backdrop-blur-lg hover:bg-[#3F3F4616] text-black/80 dark:text-white py-3.5 rounded-xl font-medium transition">
                <Share2 size={18} /> Share Link
            </button>
        </div>
    );
} 