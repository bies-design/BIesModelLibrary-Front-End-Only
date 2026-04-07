"use client";
import Image from "next/image";
import React, { useRef, useLayoutEffect, useMemo,useEffect,useState } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";


// 註冊 GSAP 插件
if (typeof window !== "undefined") {
    gsap.registerPlugin(MotionPathPlugin);
}

const HeroAnimation = () => {
    const [width, setWidth] = useState<number>(1920);
    //RWD for SVG route
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize(); // 初始化
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerRef = useRef<HTMLDivElement>(null);

    // 定義左側 7 條輸入線的配置
    const inputConfig = useMemo(() => [
        { label: ".tsx",  id: "path-0" },
        { label: ".ts",   id: "path-1" },
        { label: ".jsx",  id: "path-2" },
        { label: ".js",   id: "path-3" }, // 中間
        { label: ".json", id: "path-4" },
        { label: ".css",  id: "path-5" },
        { label: ".png",  id: "path-6" },
    ], []);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
        // --------------------------------------------------------
        // 1. 左側輸入動畫 (文字 + 光球一起移動)
        // --------------------------------------------------------
        // 選取所有的 "travel-group" (包含文字和球的群組)
        const groups = gsap.utils.toArray(".input-travel-group");

        groups.forEach((group: any, i) => {
            const pathId = group.dataset.pathId;
            const pathElement = document.querySelector(pathId);
            // 找到群組內的文字元素，用於後續控制淡出
            const textElement = group.querySelector("text"); 

            if (pathElement) {
            // 隨機延遲與持續時間，製造錯落感
            const duration = 2.5 + Math.random() * 2;
            const delay = Math.random() * 2;

            // 創建 Timeline
            const tl = gsap.timeline({
                repeat: -1,
                delay: delay,
                repeatDelay: Math.random() * 0.5,
            });

            // 設定初始狀態
            tl.set(group, { opacity: 1 });
            tl.set(textElement, { opacity: 1 });

            // 設定沿路徑移動
            tl.to(group, {
                motionPath: {
                path: pathElement,
                align: pathElement,
                alignOrigin: [0.5, 0.5],
                autoRotate: false, // 文字保持水平，不隨路徑旋轉
                start: 0, 
                end: 1,
                },
                duration: duration,
                ease: "power1.inOut",
                // 在動畫過程中檢查進度，接近中心時淡出文字
                onUpdate: function () {
                const progress = this.progress();
                // 當進度超過 80% (接近晶片)，文字淡出，只剩球進入
                if (progress > 0.8 && textElement) {
                    gsap.to(textElement, { opacity: 0, duration: 0.2, overwrite: true });
                }
                }
            });
            }
        });

        // --------------------------------------------------------
        // 2. 右側輸出動畫 (光球傳導 + 點亮節點)
        // --------------------------------------------------------
        const outputSphere = document.querySelector(".output-sphere");
        const outputPath = document.querySelector("#output-path-main");
        
        // 節點元素
        const nodeHtml = document.querySelector(".node-html");
        const nodeCss = document.querySelector(".node-css");
        const nodeJs = document.querySelector(".node-js");

        if (outputSphere && outputPath) {
            const outputDuration = 3;
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.2 });

            // 1. 光球沿著路徑移動
            tl.to(outputSphere, {
            motionPath: {
                path: outputPath as SVGPathElement,
                align: outputPath as SVGPathElement,
                alignOrigin: [0.5, 0.5],
                start: 0,
                end: 1,
            },
            duration: outputDuration,
            ease: "linear",
            });

            // 2. 插入節點點亮動畫 (Keyframes)
            // 根據路徑長度 (844px) 計算各個節點的位置百分比，精確觸發
            // Node 1 (HTML) at x=126 -> ~15%
            // Node 2 (CSS)  at x=422 -> ~50%
            // Node 3 (JS)   at x=717 -> ~85%

            const pulseEffect = {
                scale: 1.5,
                fill: "#fff",
                filter: "url(#glow)", // 加強發光
                duration: 0.1,
                yoyo: true,
                repeat: 1
            };
            
            const fadeOut = {
                fill: "#555",
                scale: 1,
                filter: "none",
                duration: 0.5
            };

            // 在 Timeline 中插入回調或並行動畫
            // 當光球到達 15% 時 (HTML Node)
            tl.to(nodeHtml, pulseEffect, outputDuration * 0.15);
            tl.to(nodeHtml, fadeOut, outputDuration * 0.15 + 0.2);

            // 當光球到達 50% 時 (CSS Node)
            tl.to(nodeCss, pulseEffect, outputDuration * 0.5);
            tl.to(nodeCss, fadeOut, outputDuration * 0.5 + 0.2);

            // 當光球到達 85% 時 (JS Node)
            tl.to(nodeJs, pulseEffect, outputDuration * 0.85);
            tl.to(nodeJs, fadeOut, outputDuration * 0.85 + 0.2);
        }

        }, containerRef);

        return () => ctx.revert();
    }, [inputConfig]);

    // --------------------------------------------------------
    // 修正後的路徑生成：從左 (X=0) 到右 (X=400 中心)
    // 這樣文字移動方向才正確
    // --------------------------------------------------------
    const generateLeftPath = (index: number, total: number) => {
        const startX = 0;   // 畫面最左側
        const endX = 500;   // 接觸晶片的位置
        const endY = 322;   // 晶片中心 Y
        
        // 計算起始 Y (垂直分佈)
        const step = 350 / (total - 1);
        const startY = 122 + (index * step);

        // 控制點 (貝茲曲線)
        const cp1X = 500; 
        const cp1Y = startY; 
        const cp2X = 300; 
        const cp2Y = endY;

        return `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;
    };

    return (
        <div 
        ref={containerRef} 
        // 修改 4: scale-[1.3] 放大 30%，並保持置中
        className="relative w-full max-w-[1000px] h-[500px] flex items-center justify-center bg-transparent overflow-visible scale-[1.3] origin-center"
        >
        
        {/* 定義 SVG 濾鏡 (共用) - 製作光球的 Glow 效果 */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
            <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
            </defs>
        </svg>

        {/* =============================================
            左側：INPUTS
            =============================================
        */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-full z-0">
            <svg viewBox="0 0 400 644" className="w-full h-full overflow-visible">
            {inputConfig.map((item, i) => {
                const d = generateLeftPath(i, inputConfig.length);
                return (
                <React.Fragment key={i}>
                    {/* 隱藏的軌道路徑 (供 GSAP 使用) */}
                    <path 
                    id={item.id} 
                    d={d} 
                    fill="none" 
                    stroke="rgba(255,255,255,0.05)" // 微微顯示軌道
                    strokeWidth="1"
                    />
                    
                    {/* 修改 2: Travel Group (文字 + 光球) */}
                    {/* 初始 opacity 設為 0，由 GSAP 控制顯示 */}
                    <g className="input-travel-group" data-path-id={`#${item.id}`} style={{ opacity: 0 }}>
                        {/* 修改 1: 光球 (圓形 + 濾鏡) */}
                        <circle r="5" fill="#41D1FF" filter="url(#glow)" />
                        
                        {/* 文字標籤 (跟隨球體)
                        <text 
                            x="0" 
                            y="-12" // 讓文字浮在球上方
                            fill="#a1a1aa" 
                            fontSize="14" 
                            textAnchor="middle"
                            fontWeight="500"
                            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
                        >
                            {item.label}
                        </text> */}
                    </g>
                </React.Fragment>
                );
            })}
            </svg>
        </div>

        {/* =============================================
            中心：PROCESSOR CHIP
            =============================================
        */}
        <div className="relative z-10 mx-4">
            <div className="w-20 h-20 bg-[#0a0a0a] rounded-xl border border-gray-700 shadow-[0_0_40px_rgba(189,52,254,0.4)] flex items-center justify-center relative overflow-hidden">
            {/* 內部流光動畫 */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/20 to-transparent animate-pulse"></div>
            {/* Logo / Icon */}
            <div className="text-3xl z-10 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                <Image src="/icons/LogoSignIn.svg" width={50} height={20} alt="Gomore logo"/>
            </div>
            </div>
        </div>

        {/* =============================================
            右側：OUTPUTS
            =============================================
        */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[120px] z-0">
            <svg viewBox="0 0 844 120" className="w-full h-full overflow-visible">
            {/* 靜態主路徑 */}
            <path 
                id="output-path-main" 
                d="M0 60 L844 60" 
                stroke="rgba(255,255,255,0.1)" 
                strokeWidth="1" 
                fill="none" 
            />

            {/* 修改 3: 輸出光球 (取代舊的 beam) */}
            <circle 
                r="6" 
                fill="#bd34fe" 
                className="output-sphere" 
                filter="url(#glow)"
                style={{ opacity: 0 }} // 初始隱藏，讓 GSAP 控制
            />

            {/* 節點群組 */}
            {/* Node 1: HTML */}
            <g transform="translate(126, 60)">
                <circle r="5" fill="#555" className="node-html transition-colors" />
                <text y="24" textAnchor="middle" fill="#666" fontSize="12" className="font-mono"></text>
            </g>
            
            {/* Node 2: CSS */}
            <g transform="translate(422, 60)">
                <circle r="5" fill="#555" className="node-css transition-colors" />
                <text y="24" textAnchor="middle" fill="#666" fontSize="12" className="font-mono"></text>
            </g>

            {/* Node 3: JS */}
            <g transform="translate(717, 60)">
                <circle r="5" fill="#555" className="node-js transition-colors" />
                <text y="24" textAnchor="middle" fill="#666" fontSize="12" className="font-mono"></text>
            </g>
            </svg>
        </div>

        </div>
    );
};

export default HeroAnimation;