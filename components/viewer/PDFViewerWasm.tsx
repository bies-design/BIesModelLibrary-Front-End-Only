"use client";

import React, { useEffect, useState, useMemo, forwardRef, useImperativeHandle } from 'react';
import { Loader2, ZoomIn, ZoomOut, Maximize, MousePointerSquareDashed } from 'lucide-react';
import { createPluginRegistration } from '@embedpdf/core';
import { EmbedPDF } from '@embedpdf/core/react';
import { usePdfiumEngine } from '@embedpdf/engines/react';
import { domToCanvas } from 'modern-screenshot';
import { Viewport, ViewportPluginPackage } from '@embedpdf/plugin-viewport/react';
import { Scroller, ScrollPluginPackage, useScroll } from '@embedpdf/plugin-scroll/react';
import { DocumentContent, DocumentManagerPluginPackage } from '@embedpdf/plugin-document-manager/react';
import { RenderLayer, RenderPluginPackage, useRenderCapability } from '@embedpdf/plugin-render/react';
import { ZoomPluginPackage, useZoom, ZoomMode } from '@embedpdf/plugin-zoom/react';
import { ThumbnailPluginPackage, ThumbnailsPane, ThumbImg } from '@embedpdf/plugin-thumbnail/react';
import { RotatePluginPackage, useRotate, Rotate } from '@embedpdf/plugin-rotate/react';
import { RotateCcw, RotateCw, PanelLeft } from 'lucide-react';

// ZoomToolbar 內部元件
const ZoomToolbar = ({ 
    documentId, 
    onToggleSidebar, 
    isSidebarOpen 
}: { 
    documentId: string; 
    onToggleSidebar: () => void;
    isSidebarOpen: boolean;
}) => {
    const { provides: zoom, state: zoomState } = useZoom(documentId);
    const { provides: rotate } = useRotate(documentId);

    if (!zoom || !rotate) return null;

    return (
        <div className="flex items-center justify-center gap-4 p-2 bg-[#27272A] border-b border-[#3F3F46] text-white w-full relative">
            <div className="absolute left-2 flex items-center">
                <button
                    onClick={onToggleSidebar}
                    className={`p-1 rounded transition-colors ${isSidebarOpen ? 'bg-[#3F3F46]' : 'hover:bg-[#3F3F46]'}`}
                    title="側邊欄"
                >
                    <PanelLeft className="w-5 h-5" />
                </button>
            </div>

            <button
                onClick={rotate.rotateBackward}
                className="p-1 hover:bg-[#3F3F46] rounded transition-colors"
                title="向左90度"
            >
                <RotateCcw className="w-5 h-5" />
            </button>
            <button
                onClick={rotate.rotateForward}
                className="p-1 hover:bg-[#3F3F46] rounded transition-colors"
                title="向右90度"
            >
                <RotateCw className="w-5 h-5" />
            </button>

            <span className="text-sm font-medium w-16 text-center">
                {Math.round(zoomState.currentZoomLevel * 100)}%
            </span>

            <button
                onClick={zoom.zoomOut}
                className="p-1 hover:bg-[#3F3F46] rounded transition-colors"
                title="縮小"
            >
                <ZoomOut className="w-5 h-5" />
            </button>
            <button
                onClick={zoom.zoomIn}
                className="p-1 hover:bg-[#3F3F46] rounded transition-colors"
                title="放大"
            >
                <ZoomIn className="w-5 h-5" />
            </button>

            <button
                onClick={() => zoom.requestZoom(ZoomMode.FitPage)}
                className="p-1 hover:bg-[#3F3F46] rounded transition-colors text-sm px-2 flex items-center gap-1"
                title="適合頁面"
            >
                <Maximize className="w-4 h-4" /> 填滿畫面
            </button>
        </div>
    );
};

// Sidebar 縮圖列表
const ThumbnailSidebar = ({ documentId }: { documentId: string }) => {
    const { provides: scroll, state } = useScroll(documentId);

    return (
        <div className="relative h-full w-48 bg-[#18181B] border-r border-[#3F3F46] overflow-hidden flex-shrink-0">
            <ThumbnailsPane documentId={documentId}>
                {(m) => (
                    <div
                        key={m.pageIndex}
                        style={{
                            position: 'absolute',
                            top: m.top,
                            height: m.wrapperHeight,
                            width: '100%',
                        }}
                        className="flex flex-col items-center justify-center cursor-pointer p-2 hover:bg-[#27272A] transition-colors"
                        onClick={() => scroll?.scrollToPage({ pageNumber: m.pageIndex + 1 })}
                    >
                        <div
                            className={`flex items-center justify-center overflow-hidden transition-all ${
                                state.currentPage === m.pageIndex + 1 ? 'ring-2 ring-blue-500 rounded-sm' : 'border border-[#3F3F46]'
                            }`}
                            style={{ width: m.width, height: m.height }}
                        >
                            <ThumbImg documentId={documentId} meta={m} />
                        </div>
                        <span className="text-xs text-gray-400 mt-1">{m.pageIndex + 1}</span>
                    </div>
                )}
            </ThumbnailsPane>
        </div>
    );
};

export interface PDFViewerWasmProps {
    file: File | string | null;
}

export interface PDFViewerWasmRef {
    takeScreenshot: () => Promise<string | null>;
}

// 內部組件用於獲取渲染狀態並暴露給 forwardRef
const ScreenshotHandler = forwardRef<PDFViewerWasmRef, { documentId: string }> (({ documentId }, ref) => {
    useImperativeHandle(ref, () => ({
        takeScreenshot: async () => {
            let canvas: HTMLCanvasElement | null = null;
            try {
                const mainView = document.querySelector('#pdf-main-view') as HTMLElement;
                if (!mainView) return null;

                const images = Array.from(mainView.querySelectorAll('img'));
                if (images.length === 0) return null;
                
                const targetImage = images[0];
                if (!targetImage.complete || targetImage.naturalWidth === 0) return null;

                // [對齊要點 1 & 4：手動分配與深拷貝]
                // 這裡我們手動建立 Canvas 記憶體來處理點陣圖 (Bitmap) 深拷貝
                canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                if (!ctx) return null;

                canvas.width = targetImage.naturalWidth;
                canvas.height = targetImage.naturalHeight;

                // 填滿背景色 (避免透明底變成黑色)
                ctx.fillStyle = '#18181B';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // [對齊要點 4：深拷貝機制] 將 Web Worker 渲染好的 Image 像素深拷貝到 Canvas 中
                ctx.drawImage(targetImage, 0, 0);

                const dataUrl = canvas.toDataURL('image/png');
                return dataUrl;
            } catch (err) {
                console.error("PDF screenshot failed:", err);
                return null;
            } finally {
                // [對齊要點 2：嚴格的物件生命週期 (try...finally)]
                // 確保截圖操作無論成功或失敗，都強制清空 Canvas 記憶體，避免 Dangling Pointers 或 DOM 殘留
                if (canvas) {
                    canvas.width = 0;
                    canvas.height = 0;
                    canvas.remove();
                    canvas = null;
                }
            }
        }
    }));

    return null;
});

const PDFViewerWasm = forwardRef<PDFViewerWasmRef, PDFViewerWasmProps>(({ file }, ref) => {
    const [viewUrl, setViewUrl] = useState<string>("");
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

    useEffect(() => {
        let url = "";
        if (file instanceof File) {
            url = URL.createObjectURL(file);
        } else if (typeof file === 'string') {
            url = file;
        }
        
        setViewUrl(url);

        return () => {
            // 注意：移除這裡的 revokeObjectURL，因為它會導致 Web Worker 在完全初始化或載入文件前
            // 提早遺失 Blob 參照，進而引發 ERR_FILE_NOT_FOUND 錯誤。
            // 我們統一將 revoke 移交給 engine destroy 的 cleanup 處理。
        };
    }, [file]);

    const { engine, isLoading } = usePdfiumEngine();

    // 確保組件卸載時，正確銷毀引擎以釋放 WASM 記憶體，避免 Memory Leak
    useEffect(() => {
        return () => {
            if (engine) {
                // 如果是 Web Worker 模式的引擎，除了 destroy 外，還需要強制終止 worker
                if ('worker' in engine && typeof (engine as any).worker.terminate === 'function') {
                    try {
                        (engine as any).worker.terminate();
                        console.log("PDF engine Web Worker terminated.");
                    } catch (e) {
                        console.error("Failed to terminate PDF engine worker", e);
                    }
                } else if (engine.destroy) {
                    try {
                        engine.destroy().toPromise().catch((err: any) => {
                            console.error("Error destroying PDF engine:", err);
                        });
                    } catch (e) {
                        console.error("Failed to destroy PDF engine synchronously", e);
                    }
                }
            }
            
            // 將 revokeObjectURL 延遲執行，確保底層引擎 (Worker) 有足夠時間取消載入請求
            // 避免 `ERR_FILE_NOT_FOUND` 的非同步時序問題
            if (viewUrl && viewUrl.startsWith('blob:')) {
                setTimeout(() => {
                    URL.revokeObjectURL(viewUrl);
                }, 100);
            }
        };
    }, [engine, viewUrl]);

    const plugins = useMemo(() => {
        if (!viewUrl) return [];
        return [
            createPluginRegistration(DocumentManagerPluginPackage, {
                initialDocuments: [{ url: viewUrl }],
            }),
            createPluginRegistration(ViewportPluginPackage),
            createPluginRegistration(ScrollPluginPackage),
            createPluginRegistration(RenderPluginPackage),
            createPluginRegistration(ZoomPluginPackage),
            createPluginRegistration(RotatePluginPackage),
            createPluginRegistration(ThumbnailPluginPackage, {
                width: 120, // 設定縮圖寬度
            }),
        ];
    }, [viewUrl]);

    if (!viewUrl || isLoading || !engine) {
        return (
            <div className="w-full h-full flex items-center justify-center text-gray-500 bg-[#18181B]">
                <Loader2 className="animate-spin w-8 h-8 mr-2" />
                正在載入 PDF 引擎...
            </div>
        );
    }

    return (
        <div className="absolute inset-0 w-full h-full bg-[#27272A] flex flex-col">
            <EmbedPDF engine={engine} plugins={plugins}>
                {({ activeDocumentId }) =>
                    activeDocumentId && (
                        <DocumentContent documentId={activeDocumentId}>
                            {({ isLoaded }) =>
                                isLoaded && (
                                    <div className="flex flex-col h-full w-full">
                                        <ScreenshotHandler documentId={activeDocumentId} ref={ref} />
                                        {/* 上方工具列 */}
                                        <ZoomToolbar 
                                            documentId={activeDocumentId} 
                                            onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                                            isSidebarOpen={isSidebarOpen}
                                        />
                                        
                                        <div className="flex flex-1 overflow-hidden">
                                            {/* 左側縮圖 Sidebar */}
                                            {isSidebarOpen && (
                                                <ThumbnailSidebar documentId={activeDocumentId} />
                                            )}
                                            
                                            {/* 右側主畫面 */}
                                            <div id="pdf-main-view" className="flex-1 overflow-hidden relative">
                                                <Viewport
                                                    documentId={activeDocumentId}
                                                    style={{ backgroundColor: '#18181B', width: '100%', height: '100%' }}
                                                >
                                                    <Scroller
                                                        documentId={activeDocumentId}
                                                        renderPage={({ width, height, pageIndex }) => (
                                                            <div style={{ width, height }}>
                                                                <Rotate documentId={activeDocumentId} pageIndex={pageIndex}>
                                                                    <RenderLayer
                                                                        documentId={activeDocumentId}
                                                                        pageIndex={pageIndex}
                                                                    />
                                                                </Rotate>
                                                            </div>
                                                        )}
                                                    />
                                                </Viewport>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </DocumentContent>
                    )
                }
            </EmbedPDF>
        </div>
    );
});

PDFViewerWasm.displayName = 'PDFViewerWasm';

export default PDFViewerWasm;
