"use client";

import React, { useMemo, useCallback, useEffect, useState, ReactElement, forwardRef, useImperativeHandle, useRef } from 'react';
import { Worker, Viewer, ProgressBar, RotateDirection, Plugin ,PluginOnCanvasLayerRender, SpecialZoomLevel} from '@react-pdf-viewer/core';
import { domToCanvas } from 'modern-screenshot';
import { defaultLayoutPlugin, ToolbarProps, ToolbarSlot } from '@react-pdf-viewer/default-layout';
import { Loader2 } from 'lucide-react';

interface PDFViewerInternalProps {
  file: string | File | null;
}

export interface PDFViewerRef {
  takeScreenshot: () => Promise<string | null>;
}

const renderToolbar = (Toolbar: (props: ToolbarProps) => ReactElement) => (
  <Toolbar>
    {(slots: ToolbarSlot) => {
      const {
        Download,
        EnterFullScreen,
        ShowSearchPopover,
        Zoom,
        ZoomIn,
        ZoomOut,
        Rotate,
      } = slots;
      return (
        <div className="absolute z-10 text-black flex w-full items-center justify-center ">
          <div className="mt-1">
            <ShowSearchPopover />
          </div>
          <div className="mt-1">
            <ZoomIn />
          </div>
          <div className="mt-1">
            <Rotate direction={RotateDirection.Backward} />
          </div>
          <div className="mx-1">
            <Zoom />
          </div>
          <div className="mt-1">
            <Rotate direction={RotateDirection.Forward} />
          </div>
          <div className="mt-1">
            <ZoomOut />
          </div>
        </div>
      );
    }}
  </Toolbar>
);

const PDFViewerInternal = forwardRef<PDFViewerRef, PDFViewerInternalProps>(({ file }, ref) => {
  const [viewUrl, setViewUrl] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRendering, setIsRendering] = useState<boolean>(false);

  // 手機版偵測狀態 (判斷螢幕寬度)
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  useEffect(() => {
    // 檢查是否為手機螢幕 (這裡以 768px 作為分界)
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // 初次渲染時執行一次
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 將事件函式用 useCallback 緩存，確保記憶體位址不變
  const handleRenderCanvasStart = useCallback(() => {
    setIsRendering(true);
  }, []);

  const handleRenderingComplete = useCallback(() => {
    setTimeout(() => {
      setIsRendering(false);
    }, 100);
  }, []);

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [],
    renderToolbar,
  });

  //  監聽渲染完成的 Plugin
  // 這裡完全符合 index.d.ts 中的 Plugin 介面定義
  const renderingListenerPlugin: Plugin = {
      // 這裡對應 index.d.ts 中的 onCanvasLayerRender
      onCanvasLayerRender: (props:PluginOnCanvasLayerRender) => {
        if(props.status) {
          handleRenderingComplete();
        }
      }
  };
  useImperativeHandle(ref, () => ({
    takeScreenshot: async () => {
      if (!containerRef.current) return null;
      try {
      // 🌟 改為尋找第一頁的 Canvas 或 Page Container
      // .rpv-core__page-layer 是 react-pdf-viewer 渲染單頁的預設 class
      const firstPageElement = containerRef.current.querySelector('.rpv-core__page-layer') as HTMLElement;
      
      const targetElement = firstPageElement || containerRef.current; // 如果找不到，退回截整個畫面

      const canvas = await domToCanvas(targetElement, {
        quality: 1,
        scale: 2,
      });
      return canvas.toDataURL('image/png');
    } catch (error) {
      console.error("PDF Screenshot failed:", error);
      return null;
    }
    }
  }));

  //安全網：如果 unknown error 導致沒有觸發 complete，3秒後強制解鎖，避免永久卡死
  useEffect(() => {
    let safetyTimer: NodeJS.Timeout;
    if (isRendering) {
        safetyTimer = setTimeout(() => {
            setIsRendering(false);
        }, 3000); // 3秒超時機制
    }
    return () => clearTimeout(safetyTimer);
  }, [isRendering]);



  useEffect(() => {
    let url = "";
    let handle: number;

    if (!file) {
      handle = requestAnimationFrame(() => {
        setViewUrl("");
      });
    } else {
      if (file instanceof File) {
        //return Blob URL
        url = URL.createObjectURL(file);
      } else if (typeof file === 'string') {
        url = file;
      }

      // 使用 requestAnimationFrame 確保在下一幀更新，
      // 避免 React 偵測到同步的 setState 導致 cascading renders 警告
      handle = requestAnimationFrame(() => {
        setViewUrl(url);
      });
    }

    return () => {
      cancelAnimationFrame(handle);
      if (url && url.startsWith('blob:')) {
        //prevent memory leaks
        URL.revokeObjectURL(url);
      }
    };
  }, [file]);

  return (
    <div className={`w-full h-full bg-[#27272A] relative overflow-hidden`} ref={containerRef}>
      
      {/* UI 遮罩層 (Blocker Overlay)
        當 isRendering 為 true 時顯示，蓋在最上層 (z-50)
        cursor-wait 提示使用者正在處理中
      */}
      {isRendering && (
        <div className="absolute inset-0 z-50 bg-black/10 backdrop-blur-[1px] flex items-center justify-center cursor-wait">
            <div className="bg-black/70 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-xl">
              {/* 如果沒有 Loader2 icon，可以用簡單的文字代替 */}
              <Loader2 className="animate-spin w-4 h-4" /> 
              <span className="text-sm font-medium">繪製中...</span>
            </div>
        </div>
      )}

      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <div className="absolute inset-0">
          {viewUrl ? (
                <Viewer 
                  fileUrl={viewUrl} 
                  // 記憶體優化核心：
                  // 如果是手機版，強制預設為 "PageFit" (符合頁面大小)，
                  // 避免載入時以 100% 或過大的比例渲染，導致 iOS Safari Canvas 瞬間撐爆 RAM。
                  defaultScale={isMobile ? SpecialZoomLevel.PageFit : 1}
                  onZoom={handleRenderCanvasStart}
                  onRotate={handleRenderCanvasStart}
                  // 2. 綁定解除鎖定的事件 (這是一頁 Canvas 畫完的時候)
                  renderLoader={(percentage: number)=>(
                    <div className="w-full h-full flex items-center justify-center text-gray-400 bg-[#27272A]">
                      <div className="w-64">
                        <ProgressBar progress={Math.round(percentage)} />
                        <p className="text-center mt-2 text-sm">載入中 {Math.round(percentage)}%</p>
                      </div>
                    </div>
                  )}
                  plugins={[defaultLayoutPluginInstance, renderingListenerPlugin]}
                />
              ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              等待pdf檔案上傳...
            </div>
          )}
        </div>
      </Worker>
    </div>
  );
});

PDFViewerInternal.displayName = "PDFViewerInternal";

export default PDFViewerInternal;