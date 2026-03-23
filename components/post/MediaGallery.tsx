// components/post/MediaGallery.tsx
"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Viewer3D, { Viewer3DRef } from '@/components/viewer/Viewer3D';
import { Rotate3D, FileText, Loader2 } from 'lucide-react';

export default function MediaGallery({ post }: { post: any }) {
    const [activeSource, setActiveSource] = useState<'cover' | '3D' | number>('cover');
    const viewerRef = useRef<Viewer3DRef>(null);
    const [is3DLoading, setIs3DLoading] = useState(false);

    const minioUrl = process.env.NEXT_PUBLIC_S3_ENDPOINT;

    const getActiveImageUrl = () => {
        if (activeSource === 'cover') return `${post.coverImage}`;
        if (typeof activeSource === 'number') return `${post.images[activeSource]}`;
        return ""; // 3D 模式下不顯示 Image
    };

    const handleLoad3D = async () => {
        // 如果已經在 3D 模式，則不執行任何動作
        if(activeSource === '3D') return;
        setActiveSource('3D');
        setIs3DLoading(true);
        // 等待下一幀以確保 Viewer3D 已掛載，然後載入模型
        setTimeout(async () => {
            for (const model of post.models) {
                try {
                    console.log(`正在透過 API 抓取模型數據: ${model.name}`);
                    console.warn("現在抓取model fileId為",model.fileId);
                    const response = await fetch(`/api/frags/${model.fileId}`);
                    
                    if (!response.ok) {
                        throw new Error(`API 回傳錯誤 (${response.status}): ${model.name}`);
                    }

                    const buffer = await response.arrayBuffer();
                    
                    viewerRef.current?.loadModel(buffer, model.name);
                    
                    console.log(`[Success] ${model.name} 已成功載入場景`);
                } catch (error) {
                    console.error(`載入模型 ${model.name} 時出錯:`, error);
                    // 可以選擇在此處跳出或繼續載入下一個模型
                } finally {
                    setIs3DLoading(false);
                }
            }

        }, 100);
    };

    return (
        <div className="flex flex-col gap-4">
            {/* 主展示區 */}
            <div className="w-full bg-black/80 aspect-video rounded-xl overflow-hidden relative border border-[#3F3F46]">
                {activeSource === '3D' ? (
                    <div className="relative w-full h-full">
                        <Viewer3D ref={viewerRef} allFiles={[]} />
                        
                        {is3DLoading && (
                            <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-md transition-opacity duration-300">
                                <Loader2 className="w-12 h-12 text-[#D70036] animate-spin mb-3" />
                                <p className="text-white text-sm font-medium tracking-wider">
                                    Loading 3D Workspace...
                                </p>
                            </div>
                        )}
                    </div>
                ) : (
                    <Image 
                        src={getActiveImageUrl()}
                        alt="Preview" fill className="object-contain object-center bg-bla" unoptimized 
                    />
                )}
            </div>

            {/* 縮圖輪播 */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {/* 3D 入口 (如果是 3D 貼文) */}
                {post.type === '3D' && (
                    <div onClick={handleLoad3D} className={`w-[120px] shrink-0 aspect-video rounded-lg border-2 flex items-center justify-center bg-black/40 ${activeSource === '3D' ? 'border-[#D70036]' : 'border-transparent'}`}>
                        <Rotate3D className="text-white" />
                    </div>
                )}
                {/* 圖片縮圖 */}
                <div onClick={() => setActiveSource('cover')} className={`w-[120px] shrink-0 aspect-video relative rounded-lg border-2 ${activeSource === 'cover' ? 'border-[#D70036]' : 'border-transparent'}`}>
                    <Image src={post.coverImage} alt="thumb" fill className="object-contain bg-black/60 rounded-md" unoptimized />
                </div>
                {post.images?.map((imgKey: string, index: number) => (
                    <div 
                        key={index}
                        onClick={() => setActiveSource(index)} 
                        className={`w-[120px] shrink-0 aspect-video relative rounded-lg border-2 cursor-pointer transition ${activeSource === index ? 'border-[#D70036]' : 'border-transparent'}`}
                    >
                        <Image 
                            src={imgKey} 
                            alt={`thumb-${index}`} 
                            fill 
                            className="object-contain rounded-md bg-black/60" 
                            unoptimized 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}