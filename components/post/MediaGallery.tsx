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

    const [activeSource, setActiveSource] = useState<string>('cover');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // 檔案快取
    const [fileCache, setFileCache] = useState<Record<string, File>>({});
    const [imageUrlCache, setImageUrlCache] = useState<Record<string, string>>({});

    const viewerRef = useRef<Viewer3DRef>(null);
    const pdfRef = useRef<PDFViewerRef>(null);

    const getExt = (name: string) => name.split('.').pop()?.toLowerCase() || '';
    
    // 規則 1 & 3：嚴格分離 3D 檔案，準備批次載入
    const threeDFiles = post.files?.filter((f: any) => ['ifc', 'frag'].includes(getExt(f.name))) || [];
    const has3D = threeDFiles.length > 0;
    
    // 剩下的所有檔案 (包含 pdf、圖片以及不支援的檔案)
    const otherFiles = post.files?.filter((f: any) => !['ifc', 'frag'].includes(getExt(f.name))) || [];

    const handleSourceClick = async (sourceKey: string) => {
        if (activeSource === sourceKey) {
            if (sourceKey === '3d-scene') {
                viewerRef.current?.focusAllModel();
            }
            return;
        }
        
        setActiveSource(sourceKey);

        // 規則 3：點擊唯一 3D 按鈕時，批次下載並渲染所有模型
        if (sourceKey === '3d-scene') {
            setIsLoading(true);
            try {
                const loadPromises = threeDFiles.map(async (fileRecord: any) => {
                    const fileId = fileRecord.id;
                    const modelId = fileRecord.name.replace(/\.(ifc|frag)$/i, "");
                    // 如果有，直接跳過這一個檔案的所有處理！(省去 Buffer 解析，也不會觸發紅字)
                    if (viewerRef.current?.hasModel(modelId)) {
                        return;
                    }

                    let buffer: ArrayBuffer;

                    if (!fileCache[fileId]) {
                        if (!fileRecord.viewerFileId) throw new Error(`模型 ${fileRecord.name} 尚未產生預覽檔`);
                        
                        const res = await fetch(`/api/viewfile/${fileRecord.viewerFileId}`);
                        if (!res.ok) throw new Error(`下載 ${fileRecord.name} 失敗`);
                        
                        buffer = await res.arrayBuffer();
                        const downloadedFile = new File([buffer], fileRecord.name, { type: 'application/octet-stream' });
                        
                        setFileCache(prev => ({ ...prev, [fileId]: downloadedFile }));
                    } else {
                        buffer = await fileCache[fileId].arrayBuffer();
                    }

                    viewerRef.current?.loadModel(buffer, modelId);
                });

                await Promise.all(loadPromises);

                setTimeout(() => {
                    viewerRef.current?.focusAllModel();
                }, 100);

            } catch (error) {
                console.error("載入 3D 場景失敗", error);
                alert(`載入 3D 場景失敗: ${error instanceof Error ? error.message : "請稍後再試"}`);
            } finally {
                setIsLoading(false);
            }
            return;
        }

        // 規則 1：處理其他單一檔案 (PDF 與圖片)
        if (sourceKey.startsWith('file-')) {
            const fileId = sourceKey.replace('file-', '');
            const fileRecord = post.files.find((f: any) => f.id === fileId);
            if (!fileRecord) return;

            const ext = getExt(fileRecord.name);
            const isPdf = ext === 'pdf';
            const isImage = ['jpg', 'jpeg', 'png', 'webp'].includes(ext);

            // 圖片處理
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
            // PDF 處理
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
            // 🛑 如果不是圖片也不是 PDF，程式直接 Return，不執行任何下載 (觸發下方 Unsupported UI)
        }
    };

    useEffect(() => {
        if (isFullscreen) {
            document.body.style.overflow = 'hidden';
            const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsFullscreen(false); };
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
        if(!isFullscreen) setScrollOffset(window.scrollY);
        setIsFullscreen(!isFullscreen);
    };

    // === 渲染條件判斷 ===
    const activeFileRecord = activeSource.startsWith('file-') ? post.files.find((f: any) => f.id === activeSource.replace('file-', '')) : null;
    const activeExt = activeFileRecord ? getExt(activeFileRecord.name) : '';

    const isShowCover = activeSource === 'cover';
    const isShowExtraImage = activeSource.startsWith('image-');
    const isShow3DScene = activeSource === '3d-scene';
    const isShowPdf = activeFileRecord && activeExt === 'pdf';
    const isShowFileImage = activeFileRecord && ['jpg', 'jpeg', 'png', 'webp'].includes(activeExt);
    
    // 🚀 規則 4：絕對的 Fallback (點擊的是檔案，但不是支援的 PDF 也不是支援的圖片)
    const isUnsupported = activeSource.startsWith('file-') && !isShowPdf && !isShowFileImage;

    const currentFileObj = activeFileRecord ? fileCache[activeFileRecord.id] : null;

    return (
        <div 
            ref={containerRef}
            style={isFullscreen ? {
                position: 'absolute', top: `${scrollOffset}px`, left: 0, width: '100vw', height: '100dvh', zIndex: 9999, margin: 0
            } : undefined}
            className={`${isFullscreen ? "bg-black p-4 flex flex-col gap-4" : "relative flex flex-col w-full gap-4"} `}
        >
            <button
                onClick={toggleFullscreen}
                className="absolute z-40 top-2 right-2 p-2 bg-black/50 hover:bg-black/80 text-white rounded-lg transition-opacity backdrop-blur-sm"
                title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
                {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
            </button>
            
            <div className={`${isFullscreen ? "flex-1 min-h-0 border-none rounded-none" : "aspect-video border rounded-xl border-[#3F3F46]"} w-full bg-[#18181B] overflow-hidden relative `}>
                
                {isLoading && (
                    <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/60 backdrop-blur-md">
                        <Loader2 className="w-12 h-12 text-[#D70036] animate-spin mb-3" />
                        <p className="text-white text-sm font-medium tracking-wider">Downloading files...</p>
                    </div>
                )}
                
                {/* 1. 3D Viewer (包含所有 3D 模型) */}
                <div className={`absolute inset-0 transition-opacity duration-300 bg-[#18181B] ${isShow3DScene ? 'z-20 opacity-100 pointer-events-auto' : '-z-10 opacity-0 pointer-events-none'}`}>
                    <Viewer3D 
                        key="shared-post-viewer" 
                        ref={viewerRef} 
                        file={null} 
                    />
                </div>
                
                {/* 2. PDF Viewer */}
                {isShowPdf && currentFileObj && !isLoading && (
                    <div className="absolute inset-0 z-30 bg-[#18181B]">
                        <div className='w-full h-full relative'>
                            <PDFViewer key={activeSource} ref={pdfRef} file={currentFileObj} />
                        </div>
                        
                    </div>
                )}
                
                {/* 3. 圖片展示 */}
                {(isShowCover || isShowExtraImage || (isShowFileImage && imageUrlCache[activeFileRecord?.id])) && !isLoading && (
                    <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#18181B]">
                        {(() => {
                            let currentSrc = "";
                            if (isShowCover && post.coverImage) currentSrc = post.coverImage;
                            else if (isShowExtraImage && post.images) currentSrc = post.images[parseInt(activeSource.split('-')[1])];
                            else if (isShowFileImage && activeFileRecord) currentSrc = imageUrlCache[activeFileRecord.id];

                            if (currentSrc) {
                                return <Image src={currentSrc} alt="Preview" fill className="object-contain object-center" unoptimized />;
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
                
                {/* 4. 🚀 規則 4：不支援格式的嚴格 Fallback 顯示 */}
                {isUnsupported && !isLoading && (
                    <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#18181B] text-[#A1A1AA]">
                        <FileBox size={48} className="mb-4 opacity-30" />
                        <p>此檔案格式目前暫不支援預覽</p>
                    </div>
                )}
            </div>

            {/* === 縮圖輪播區 === */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide shrink-0">
                {/* 封面圖 */}
                <div onClick={() => handleSourceClick('cover')} className={`w-[120px] shrink-0 aspect-video relative rounded-lg border-2 cursor-pointer transition ${activeSource === 'cover' ? 'border-[#D70036]' : 'border-transparent'}`}>
                    {post.coverImage ? (
                        <Image src={post.coverImage} alt="Cover" fill className="object-cover bg-black/60 rounded-md" unoptimized />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-black/60 rounded-md">
                            <ImageIcon className="text-gray-500 opacity-50" size={24} />
                        </div>
                    )}
                    <div className="absolute top-1 left-1 bg-[#D70036] text-[9px] text-white px-1.5 rounded shadow-sm">COVER</div>
                </div>

                {/* 🚀 規則 2 & 3：單一 3D 場景縮圖 */}
                {has3D && (
                    <div 
                        onClick={() => handleSourceClick('3d-scene')} 
                        className={`relative w-[120px] shrink-0 aspect-video rounded-lg border-2 flex flex-col items-center justify-center bg-black/40 cursor-pointer transition hover:bg-black/60 ${activeSource === '3d-scene' ? 'border-[#D70036]' : 'border-transparent'}`} 
                        title="View 3D Scene"
                    >
                        <Box className="text-blue-400 mb-1" size={24} />
                        <span className="text-[10px] text-white/70 truncate w-full px-2 text-center">3D Scene ({threeDFiles.length})</span>
                        
                        {/* 當所有 3D 模型皆已下載，顯示綠燈 */}
                        {threeDFiles.every((f:any) => fileCache[f.id]) && (
                            <div className="absolute top-1 right-1 w-2 h-2 bg-[#10B981] rounded-full shadow-[0_0_5px_#10B981]" title="場景已載入緩存"></div>
                        )}
                    </div>
                )}

                {/* 其他單一檔案縮圖 (PDF / Image / Unsupported) */}
                {otherFiles.map((fileRecord: any) => {
                    const sourceKey = `file-${fileRecord.id}`;
                    const ext = getExt(fileRecord.name);
                    const isActive = activeSource === sourceKey;

                    let IconComponent = FileBox;
                    let iconColor = "text-gray-400";
                    if (ext === 'pdf') { IconComponent = FileText; iconColor = "text-orange-400"; }
                    else if (['png', 'jpg', 'jpeg', 'webp'].includes(ext)) { IconComponent = ImageIcon; iconColor = "text-pink-400"; }

                    return (
                        <div key={sourceKey} onClick={() => handleSourceClick(sourceKey)} className={`relative w-[120px] shrink-0 aspect-video rounded-lg border-2 flex flex-col items-center justify-center bg-black/40 cursor-pointer transition hover:bg-black/60 ${isActive ? 'border-[#D70036]' : 'border-transparent'}`} title={fileRecord.name}>
                            <IconComponent className={`${iconColor} mb-1`} size={24} />
                            <span className="text-[10px] text-white/70 truncate w-full px-2 text-center">{fileRecord.name}</span>
                            
                            {(fileCache[fileRecord.id] || imageUrlCache[fileRecord.id]) && (
                                <div className="absolute top-1 right-1 w-2 h-2 bg-[#10B981] rounded-full shadow-[0_0_5px_#10B981]"></div>
                            )}
                        </div>
                    );
                })}
                
                {/* 附加的圖片 */}
                {post.images?.map((imgKey: string, index: number) => {
                    if (!imgKey) return null; 
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