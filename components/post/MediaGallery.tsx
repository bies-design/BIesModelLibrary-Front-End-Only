// components/post/MediaGallery.tsx
"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Viewer3D, { Viewer3DRef } from '@/components/viewer/Viewer3D';
import { PDFViewerRef } from '@/components/viewer/PDFViewerInternal';
import PDFViewer from '../viewer/PDFViewer';
import { ImageIcon, Box, FileText, Loader2, Maximize, Minimize, FileBox } from 'lucide-react';
import { getFileDownloadUrl } from '@/lib/actions/file.action';

type activeSourceType = 'cover' | '3D' | number | `pdf-${number}`;

export default function MediaGallery({ post }: { post: any }) {
    const [scrollOffset, setScrollOffset] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const [activeSource, setActiveSource] = useState<string>('cover');// 'cover' | 'image-0' | 'file-dbId'
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // 🚀 檔案快取 (下載過就不再重複下載)
    const [fileCache, setFileCache] = useState<Record<string, File>>({});
    // 圖片的暫存網址快取
    const [imageUrlCache, setImageUrlCache] = useState<Record<string, string>>({});

    const viewerRef = useRef<Viewer3DRef>(null);
    const pdfRef = useRef<PDFViewerRef>(null);

    // 取得副檔名的 Helper
    const getExt = (name: string) => name.split('.').pop()?.toLowerCase() || '';
    
    // 處理點擊下方縮圖的邏輯
    const handleSourceClick = async (sourceKey: string) => {
        if (activeSource === sourceKey) return;
        
        // 先切換過去，如果是圖片或封面，會直接顯示
        setActiveSource(sourceKey);

        // 如果點擊的是附加檔案 (需要下載的)
        if (sourceKey.startsWith('file-')) {
            const fileId = sourceKey.replace('file-', '');
            const fileRecord = post.files.find((f: any) => f.id === fileId);
            if (!fileRecord) return;

            const ext = getExt(fileRecord.name);
            const isImage = ['jpg', 'jpeg', 'png', 'webp'].includes(ext);
            const is3D = ['ifc', 'frag', 'obj', 'gltf', '3dm'].includes(ext);
            const isPdf = ext === 'pdf';

            // 1. 如果是圖片，且還沒抓過網址
            if (isImage && !imageUrlCache[fileId]) {
                setIsLoading(true);
                try {
                    const urlResult = await getFileDownloadUrl(fileRecord.fileId, fileRecord.name);
                    if (urlResult.success && urlResult.url) {
                        setImageUrlCache(prev => ({ ...prev, [fileId]: urlResult.url! }));
                    }
                } catch (error) {
                    console.error("載入圖片失敗", error);
                } finally {
                    setIsLoading(false);
                }
            } 
            // 2. 如果是 3D 模型，必須抓取轉檔好的預覽檔 (.frag)
            else if (is3D && !fileCache[fileId]) {
                setIsLoading(true);
                try {
                    // 防呆：如果當初上傳沒有產生 viewerFileId
                    if (!fileRecord.viewerFileId) throw new Error("此模型尚未產生預覽檔");
                    
                    // 改打 /api/frags API 抓取轉換好的 3D 預覽檔
                    const res = await fetch(`/api/viewfile/${fileRecord.viewerFileId}`);
                    if (!res.ok) throw new Error("下載預覽檔失敗");
                    
                    const buffer = await res.arrayBuffer();
                    const downloadedFile = new File([buffer], fileRecord.name, { type: 'application/octet-stream' });
                    
                    setFileCache(prev => ({ ...prev, [fileId]: downloadedFile }));
                } catch (error) {
                    console.error(`載入 3D 檔案 ${fileRecord.name} 失敗`, error);
                    alert(`載入 3D 預覽失敗: ${error instanceof Error ? error.message : "請稍後再試"}`);
                } finally {
                    setIsLoading(false);
                }
            }
            // 3. 如果是 PDF，透過 S3 抓取原始檔案
            else if (isPdf && !fileCache[fileId]) {
                setIsLoading(true);
                try {
                    const urlResult = await getFileDownloadUrl(fileRecord.fileId, fileRecord.name);
                    if (urlResult.success && urlResult.url) {
                        const res = await fetch(urlResult.url);
                        if (!res.ok) throw new Error("下載 PDF 失敗");
                        
                        const blob = await res.blob();
                        const downloadedFile = new File([blob], fileRecord.name, { type: 'application/pdf' });
                        
                        setFileCache(prev => ({ ...prev, [fileId]: downloadedFile }));
                    }
                } catch (error) {
                    console.error(`載入 PDF ${fileRecord.name} 失敗`, error);
                    alert(`載入檔案失敗，請稍後再試`);
                } finally {
                    setIsLoading(false);
                }
            }
        }
    };

    // 監聽 isFullscreen 狀態，當進入全螢幕時鎖定背景捲動
    useEffect(() => {
        if (isFullscreen) {
            document.body.style.overflow = 'hidden';
            const handleEsc = (e: KeyboardEvent) => {
                if (e.key === 'Escape') setIsFullscreen(false);
            };
            window.addEventListener('keydown', handleEsc);
            return () => {
                window.removeEventListener('keydown', handleEsc);
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

    // === 渲染條件判斷 ===
    const activeFileRecord = activeSource.startsWith('file-') ? post.files.find((f: any) => f.id === activeSource.replace('file-', '')) : null;
    const activeExt = activeFileRecord ? getExt(activeFileRecord.name) : '';

    const isShowCover = activeSource === 'cover';
    const isShowExtraImage = activeSource.startsWith('image-');
    const isShow3D = activeFileRecord && ['ifc', 'frag', 'obj', 'gltf', '3dm'].includes(activeExt);
    const isShowPdf = activeFileRecord && activeExt === 'pdf';
    const isShowFileImage = activeFileRecord && ['jpg', 'jpeg', 'png', 'webp'].includes(activeExt);
    const isUnsupported = activeFileRecord && !isShow3D && !isShowPdf && !isShowFileImage;

    // 取得當前要給 Viewer 的 File 物件
    const currentFileObj = activeFileRecord ? fileCache[activeFileRecord.id] : null;

    return (
        <div 
            ref={containerRef}
            style={isFullscreen ? {
                position: 'absolute',
                top: `${scrollOffset}px`, 
                left: 0,
                width: '100vw',
                height: '100dvh', 
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
            {/* === 主展示區 === */}
            <div className={`${isFullscreen 
                ? "flex-1 min-h-0 border-none rounded-none" 
                : "aspect-video border rounded-xl border-[#3F3F46]"} 
                w-full bg-[#18181B] overflow-hidden relative `}>
                
                {isLoading && (
                    <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/60 backdrop-blur-md">
                        <Loader2 className="w-12 h-12 text-[#D70036] animate-spin mb-3" />
                        <p className="text-white text-sm font-medium tracking-wider">Downloading File...</p>
                    </div>
                )}
                
                {/* 1. 3D Viewer */}
                {isShow3D && currentFileObj && !isLoading && (
                    <div className="absolute inset-0 z-10 bg-[#18181B]">
                        <Viewer3D 
                            key={activeSource} 
                            ref={viewerRef} 
                            allFiles={[]} 
                            file={currentFileObj} 
                        />
                    </div>
                )}
                
                {/* 2. PDF Viewer */}
                {isShowPdf && currentFileObj && !isLoading && (
                    <div className="absolute inset-0 z-20 bg-[#18181B] flex items-center justify-center">
                        <PDFViewer 
                            key={activeSource} 
                            ref={pdfRef} 
                            file={currentFileObj} 
                        />
                    </div>
                )}
                
                {/* 3. Cover / 額外圖片 / 檔案清單中的圖片 */}
                {(isShowCover || isShowExtraImage || (isShowFileImage && imageUrlCache[activeFileRecord?.id])) && !isLoading && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#18181B]">
                        {(() => {
                            let currentSrc = "";
                            if (isShowCover && post.coverImage) currentSrc = post.coverImage;
                            else if (isShowExtraImage && post.images) currentSrc = post.images[parseInt(activeSource.split('-')[1])];
                            else if (isShowFileImage && activeFileRecord) currentSrc = imageUrlCache[activeFileRecord.id];

                            if (currentSrc) {
                                return (
                                    <Image 
                                        src={currentSrc}
                                        alt="Preview" 
                                        fill 
                                        className="object-contain object-center" 
                                        unoptimized 
                                    />
                                );
                            }

                            return (
                                <div className="flex flex-col items-center justify-center text-[#A1A1AA]">
                                    <ImageIcon size={48} className="mb-4 opacity-30" />
                                    <p className="text-sm">Image not available</p>
                                </div>
                            );
                        })()}
                    </div>
                )}
                
                {/* 4. 不支援的格式 */}
                {isUnsupported && !isLoading && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#18181B] text-[#A1A1AA]">
                        <FileBox size={48} className="mb-4 opacity-30" />
                        <p>此檔案格式 ({activeExt.toUpperCase()}) 目前不支援預覽</p>
                    </div>
                )}
            </div>

            {/* === 縮圖輪播區 === */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide shrink-0">
                
                {/* 封面圖 */}
                <div onClick={() => handleSourceClick('cover')} className={`w-[120px] shrink-0 aspect-video relative rounded-lg border-2 cursor-pointer transition ${activeSource === 'cover' ? 'border-[#D70036]' : 'border-transparent'}`}>
                    {/* 🚀 防呆：確保 coverImage 存在 */}
                    {post.coverImage ? (
                        <Image src={post.coverImage} alt="Cover" fill className="object-cover bg-black/60 rounded-md" unoptimized />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-black/60 rounded-md">
                            <ImageIcon className="text-gray-500 opacity-50" size={24} />
                        </div>
                    )}
                    <div className="absolute top-1 left-1 bg-[#D70036] text-[9px] text-white px-1.5 rounded shadow-sm">COVER</div>
                </div>

                {/* 關聯的實體檔案 (3D / PDF / 其他) */}
                {post.files?.map((fileRecord: any) => {
                    const sourceKey = `file-${fileRecord.id}`;
                    const ext = getExt(fileRecord.name);
                    const isActive = activeSource === sourceKey;

                    // 依據副檔名決定縮圖的圖示與顏色
                    let IconComponent = FileBox;
                    let iconColor = "text-gray-400";
                    if (['ifc', 'frag', 'obj', 'gltf', '3dm'].includes(ext)) { IconComponent = Box; iconColor = "text-blue-400"; }
                    else if (ext === 'pdf') { IconComponent = FileText; iconColor = "text-orange-400"; }
                    else if (['png', 'jpg', 'jpeg', 'webp'].includes(ext)) { IconComponent = ImageIcon; iconColor = "text-pink-400"; }

                    return (
                        <div 
                            key={sourceKey}
                            onClick={() => handleSourceClick(sourceKey)} 
                            className={`relative w-[120px] shrink-0 aspect-video rounded-lg border-2 flex flex-col items-center justify-center bg-black/40 cursor-pointer transition hover:bg-black/60 ${isActive ? 'border-[#D70036]' : 'border-transparent'}`}
                            title={fileRecord.name}
                        >
                            <IconComponent className={`${iconColor} mb-1`} size={24} />
                            <span className="text-[10px] text-white/70 truncate w-full px-2 text-center">
                                {fileRecord.name}
                            </span>
                            {/* 如果檔案已經快取在本地，給一個小綠點提示 */}
                            {fileCache[fileRecord.id] && (
                                <div className="absolute top-1 right-1 w-2 h-2 bg-[#10B981] rounded-full shadow-[0_0_5px_#10B981]" title="已下載至快取"></div>
                            )}
                        </div>
                    );
                })}
                {/* 附加的圖片 */}
                {post.images?.map((imgKey: string, index: number) => {
                    if (!imgKey) return null; // 🚀 防呆
                    return (
                        <div key={`image-${index}`} onClick={() => handleSourceClick(`image-${index}`)} className={`w-[120px] shrink-0 aspect-video relative rounded-lg border-2 cursor-pointer transition ${activeSource === `image-${index}` ? 'border-[#D70036]' : 'border-transparent'}`}>
                            <Image src={imgKey} alt={`img-${index}`} fill className="object-cover rounded-md bg-black/60" unoptimized />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}