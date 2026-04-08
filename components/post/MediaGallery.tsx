// components/post/MediaGallery.tsx
"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Viewer3D, { Viewer3DRef } from '@/components/viewer/Viewer3D';
import { PDFViewerRef } from '@/components/viewer/PDFViewerInternal';
import PDFViewer from '../viewer/PDFViewer';
import { Rotate3D, FileText, Loader2, Maximize, Minimize } from 'lucide-react';

type activeSourceType = 'cover' | '3D' | number | `pdf-${number}`;

export default function MediaGallery({ post }: { post: any }) {
    const [scrollOffset, setScrollOffset] = useState<number>(0);
    const [activeSource, setActiveSource] = useState<activeSourceType>('cover');
    const viewerRef = useRef<Viewer3DRef>(null);
    const pdfRef = useRef<PDFViewerRef>(null);
    const [is3DLoading, setIs3DLoading] = useState<boolean>(false);

    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [isPdfLoading, setIsPdfLoading] = useState<boolean>(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const getActiveImageUrl = () => {
        if (activeSource === 'cover') return `${post.coverImage}`;
        if (typeof activeSource === 'number') return `${post.images[activeSource]}`;
        return "";
    };

    const handleLoad3D = async () => {
        // 如果已經在 3D 模式，則不執行任何動作
        if(activeSource === '3D') return;
        setActiveSource('3D');
        setIs3DLoading(true);
        // 等待下一幀以確保 Viewer3D 已掛載，然後載入模型
        setTimeout(async () => {
            for (const model of post.files) {
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

    const handleLoadPdf = async (index: number, pdfItem: any) => {
        const pdfSourceKey = `pdf-${index}` as activeSourceType;
        if (activeSource === pdfSourceKey) return; // 如果已經是當前 PDF 就不動

        setActiveSource(pdfSourceKey);
        setPdfFile(null); // 切換時先清空舊的，避免閃爍舊畫面
        setIsPdfLoading(true);

        try {
            // 呼叫我們剛才寫好的 API
            const response = await fetch(`/api/pdfs/${pdfItem.fileId}`);
            if (!response.ok) throw new Error("PDF 抓取失敗");

            const blob = await response.blob();
            // 將 Blob 包裝成 File 物件，這樣 PDFViewer 裡面的 `instanceof File` 判斷就能成立
            const fileObj = new File([blob], pdfItem.name || `document-${index}.pdf`, { type: "application/pdf" });
            
            setPdfFile(fileObj);
        } catch (error) {
            console.error("載入 PDF 失敗:", error);
        } finally {
            setIsPdfLoading(false);
        }
    };

    // 監聽 isFullscreen 狀態，當進入全螢幕時鎖定背景捲動
    useEffect(() => {
        if (isFullscreen) {
            document.body.style.overflow = 'hidden';
            
            // 加入 ESC 鍵離開全螢幕的監聽
            const handleEsc = (e: KeyboardEvent) => {
                if (e.key === 'Escape') setIsFullscreen(false);
            };
            window.addEventListener('keydown', handleEsc);
            return () => {
                window.removeEventListener('keydown', handleEsc);
                // 元件卸載或退出全螢幕時，還原捲動
                document.body.style.overflow = 'auto';
            };
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isFullscreen]);

    const toggleFullscreen = () => {
        if(!isFullscreen){
            setScrollOffset(window.scrollY);
        }
        setIsFullscreen(!isFullscreen);
    };

    
    return (
        <div 
            ref={containerRef}
            // 🚀 關鍵：用 JS 強制設定絕對座標，蓋滿目前的視窗
            style={isFullscreen ? {
                position: 'absolute',
                top: `${scrollOffset}px`, // 扣掉下滑的距離，完美對齊視窗頂部
                left: 0,
                width: '100vw',
                height: '100dvh', // 使用 dvh 避免手機瀏覽器網址列干擾
                zIndex: 9999,
                margin: 0
            } : undefined}
            className={`${isFullscreen 
                ? "bg-black p-4 flex flex-col gap-4" 
                : "relative flex flex-col w-full gap-4"} `}
        >
            <button
                onClick={toggleFullscreen}
                className="absolute z-40 top-2 right-2 p-2 bg-black/50 hover:bg-black/80 text-white rounded-lg transition-opacity backdrop-blur-sm"
                title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
                {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
            </button>
            {/* 主展示區 */}
            <div className={`${isFullscreen 
                ? "flex-1 min-h-0 border-none rounded-none" 
                : "aspect-video border rounded-xl border-[#3F3F46]"} 
                w-full bg-black/80  overflow-hidden relative `}>
                
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
                ) : typeof activeSource === 'string' && activeSource.startsWith('pdf-') ? (
                    // ====== PDF Viewer ======
                    <div className="relative w-full h-full bg-white/5 flex items-center justify-center">
                        <PDFViewer 
                            ref={pdfRef} 
                            file={pdfFile} 
                        />
                    </div>
                ):(
                    <Image 
                        src={getActiveImageUrl()}
                        alt="Preview" fill className="object-contain object-center bg-bla" unoptimized 
                    />
                )}
            </div>

            {/* 縮圖輪播 */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide shrink-0">
                {/* 3D 入口 (如果是 3D 貼文) */}
                {post.type === '3D' && (
                    <div onClick={handleLoad3D} className={`w-[120px] shrink-0 aspect-video rounded-lg border-2 flex items-center justify-center bg-black/40 ${activeSource === '3D' ? 'border-[#D70036]' : 'border-transparent'}`}>
                        <Rotate3D className="text-white" />
                    </div>
                )}
                {post.pdfIds?.map((pdfItem: any, index: number) => {
                    const pdfSourceKey = `pdf-${index}` as activeSourceType;
                    return (
                        <div 
                            key={pdfSourceKey}
                            onClick={() => handleLoadPdf(index, pdfItem)} 
                            className={`w-[120px] shrink-0 aspect-video rounded-lg border-2 flex flex-col items-center justify-center bg-black/40 cursor-pointer transition ${activeSource === pdfSourceKey ? 'border-[#D70036]' : 'border-transparent'}`}
                        >
                            <FileText className="text-white mb-1" size={24} />
                            <span className="text-xs text-white/70 truncate w-full px-2 text-center">
                                {pdfItem.name || `PDF ${index + 1}`}
                            </span>
                        </div>
                    );
                })}
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