import React, { useState, useEffect, useRef } from 'react';

const DataFlowLayout = ({ theme = 'dark' }: { theme?: 'light' | 'dark' }) => {
    // 完美提取自 Vite 官網並反轉方向 (Left to Right) 的 7 條輸入路徑 (已補回隨 theme 動態切換顏色)
    const leftPaths = [
        { path: "M0.675 1.000 L598.822 255.629 L653.251 271.077 C684.866 280.049 718.596 284.659 752.638 284.659 L843.505 284.659", color: theme === 'dark' ? "#9fe6fd" : "#0284c7" },
        { path: "M0.675 164.892 C200.538 190.002 592.82 284.659 598.822 284.659 L678.22 294.518 C693.45 296.409 708.881 297.36 724.342 297.36 L843.505 298.181", color: theme === 'dark' ? "#ff8d67" : "#ea580c" },
        { path: "M0.675 256.071 L598.822 305.136 L701.108 310.061 L843.505 311.703", color: theme === 'dark' ? "#ff8d67" : "#ea580c" },
        { path: "M0.675 321.858 L598.822 326.002 L843.505 325.224", color: theme === 'dark' ? "#9fe6fd" : "#0284c7" },
        { path: "M0.675 387.646 L598.822 345.442 L701.108 340.388 L843.505 338.746", color: theme === 'dark' ? "#9fe6fd" : "#0284c7" },
        { path: "M0.675 478.825 L598.822 365.789 L678.22 355.93 C693.45 354.039 708.881 353.088 724.342 353.088 L843.505 352.268", color: theme === 'dark' ? "#9fe6fd" : "#0284c7" },
        { path: "M0.675 642.717 L598.822 394.82 L653.251 379.372 C684.866 370.399 718.596 365.789 752.638 365.789 L843.505 365.789", color: theme === 'dark' ? "#9fe6fd" : "#0284c7" }
    ];

    // 從中心點向右延伸的輸出路徑
    const rightPath = "M800 325.000 L1088.188 325.778 L1643.335 321.634";

    // 右側流程圖示 (已補回隨 theme 動態切換光暈顏色)
    const rightNodes = [
        { x: 1000, y: 325, imgSrc: "/icons/3DRealEstateConstruction.png" , dotColor: theme === 'dark' ? "#60A5FA" : "#3B82F6", label: "Step 1" },
        { x: 1160, y: 325, imgSrc: "/icons/3DRealEstateConstruction2.png", dotColor: theme === 'dark' ? "#A78BFA" : "#8B5CF6", label: "Step 2" },
        { x: 1320, y: 325, imgSrc: "/icons/3DRealEstateConstruction3.png", dotColor: theme === 'dark' ? "#FB923C" : "#EA580C", label: "Step 3" },
        { x: 1480, y: 325, imgSrc: "/icons/3DRealEstateConstruction4.png", dotColor: theme === 'dark' ? "#4ADE80" : "#22C55E", label: "Step 4" },
    ];
    
    // 定義不同主題下的軌道漸層顏色
    const trackColors = {
        dark: { start: "#c6caff", middle: "white" },
        light: { start: "white", middle: "white" }
    };

    const currentThemeColors = trackColors[theme];
    const rightStops = rightNodes.map(node => ((node.x - 800) / 843).toFixed(3));
    const TOTAL_DUR = "7s";

    // 1. Lazy Initialization: 初次渲染時就決定好 4 條啟用的路線，確保毫秒級同步
    const [activeIndices, setActiveIndices] = useState<number[]>(() => {
        return [0, 1, 2, 3, 4, 5, 6].sort(() => 0.5 - Math.random()).slice(0, 4);
    });

    // 2. 建立 Ref 來綁定原生的 SVG 動畫重播事件
    // 使用 any 避免 TypeScript 對 SVGAnimateMotionElement 支援度不佳報錯
    const syncRef = useRef<any>(null);

    useEffect(() => {
        const node = syncRef.current;
        if (!node) return;

        // 當 SVG 引擎完整跑完 7 秒週期，宣告 repeatEvent 時，我們才重新洗牌
        const handleRepeat = () => {
            setActiveIndices([0, 1, 2, 3, 4, 5, 6].sort(() => 0.5 - Math.random()).slice(0, 4));
        };

        node.addEventListener('repeatEvent', handleRepeat);

        return () => {
            node.removeEventListener('repeatEvent', handleRepeat);
        };
    }, []);

    return (
        <div className={`relative w-full h-screen overflow-hidden flex items-center justify-center font-sans`}>
            {/* 比例容器 */}
            <div className="relative w-full max-w-[1400px] aspect-[1600/650] shrink-0">
                {/* SVG 背景與動態軌跡 */}
                <svg viewBox="0 0 1600 650" className="absolute inset-0 pointer-events-none z-0">
                    <defs>
                        <linearGradient id={`base_gradient_${theme}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0" stopColor={currentThemeColors.start} stopOpacity="0" />
                            <stop offset="0.2" stopColor={currentThemeColors.start} stopOpacity="0.2" />
                            <stop offset="0.4" stopColor={currentThemeColors.middle} stopOpacity={theme === 'dark' ? "0.4" : "0.6"} />
                            <stop offset="0.6" stopColor={currentThemeColors.start} stopOpacity="0.2" />
                            <stop offset="0.8" stopColor={currentThemeColors.start} stopOpacity="0.2" />
                            <stop offset="0.9" stopColor={currentThemeColors.start} stopOpacity="0" />
                        </linearGradient>
                        <radialGradient id={`logo_bg_gradient_${theme}`} cx="50%" cy="100%" r="100%">
                            {/* 1. 金屬高光區 (底部光源直射處，極亮) */}
                            <stop offset="0%" stopColor={theme === 'dark' ? "#4A4A55" : "#94a3b8"} stopOpacity="1" />
                            
                            {/* 2. 金屬平滑過渡區 (MacBook 銀灰色) */}
                            <stop offset="92%" stopColor={theme === 'dark' ? "#35353D" : "#e2e8f0"} stopOpacity="1" />
                            
                            {/* 3. 金屬邊緣暗角 (深銀灰色，營造出微凸的立體厚度) */}
                            <stop offset="100%" stopColor={theme === 'dark' ? "#27272A" : "#ffffff"} stopOpacity="1" />
                        </radialGradient>
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <filter id="logo_energy_glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="8" result="blur" />
                            <feFlood floodColor={theme === 'dark' ? "white" : "#3b82f6"} floodOpacity={theme === 'dark' ? "0.8" : "0.4"} result="color"/>
                            <feComposite in="color" in2="blur" operator="in" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <filter id="node_color_glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="5" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* === 第 1 層: 底圖與線條 === */}
                    <g key={`bg-lines-${theme}`} stroke={`url(#base_gradient_${theme})`} strokeWidth="1.2" fill="none">
                        {leftPaths.map((item, i) => (
                            <path key={`path-bg-${i}`} d={item.path} />
                        ))}
                    </g>
                    <path key={`right-path-${theme}`} d={rightPath} stroke={`url(#base_gradient_${theme})`} strokeWidth="1.5" fill="none" />

                    {/* === 第 2 層: 左側 7 點常駐，動態控制透明度 === */}
                    {leftPaths.map((item, i) => {
                        const isActive = activeIndices.includes(i);
                        return(
                            <circle key={`dot-left-${i}`} r='3.0' fill={item.color} filter='url(#glow)'>
                                <animateMotion
                                    // 3. 把 syncRef 綁定到第 0 條軌道上作為全域時鐘基準
                                    ref={i === 0 ? syncRef : null}
                                    dur={TOTAL_DUR}
                                    repeatCount="indefinite"
                                    path={item.path}
                                    calcMode="spline"
                                    keyTimes="0; 0.1; 0.25; 0.5; 1" 
                                    keyPoints="0; 0.4; 0.4; 1; 1"
                                    keySplines="0.42 0.8 0.58 1; 0 0 1 1; 0.9 0 1 1;0 0 1 1"
                                />
                                <animate 
                                    attributeName="opacity" 
                                    values={isActive ? "0; 1; 1; 0; 0" : "0; 0; 0; 0; 0"} 
                                    keyTimes="0; 0.02; 0.48; 0.5; 1" 
                                    dur={TOTAL_DUR} 
                                    repeatCount="indefinite" 
                                />
                            </circle>
                        );
                    })}

                    {/* === 第 3 層: 右側 4 點動畫，永遠對齊左側抽到的顏色 === */}
                    {activeIndices.map((leftIdx, i) => {
                        const activeLeftItem = leftPaths[leftIdx];
                        return(
                            <circle key={`dot-right-${i}`} r="3" fill={activeLeftItem.color} filter="url(#glow)">
                                <animateMotion 
                                    dur={TOTAL_DUR} 
                                    repeatCount="indefinite" 
                                    fill={activeLeftItem.color}
                                    path={rightPath}
                                    calcMode="spline"
                                    keyTimes="0; 0.5; 0.666; 0.833; 1"
                                    keyPoints={`0; 0; ${rightStops[i]}; ${rightStops[i]}; 1`}
                                    keySplines="0 0 1 1; 0.25 1 0.5 1; 0 0 1 1; 0.42 0 1 1"
                                />
                                <animate 
                                    attributeName="opacity" 
                                    values="0; 0; 1; 0.8; 0" 
                                    keyTimes="0; 0.49; 0.5; 0.98; 1" 
                                    dur={TOTAL_DUR} 
                                    repeatCount="indefinite" 
                                />
                            </circle>
                        );
                    })}
                    
                    {/* === 第 4 層: SVG 內的 Logo 主體 === */}
                    <g transform="translate(810, 325)">
                        {/* 1. 動態邊框與陰影：淺色拔掉黑框改用白框，並加上一點通透感 */}
                        <rect 
                            x="-64" y="-64" width="128" height="128" rx="24" 
                            fill={`url(#logo_bg_gradient_${theme})`} 
                            stroke={theme === 'dark' ? "#303035" : "#ffffff"} 
                            strokeWidth={theme === 'dark' ? "4" : "1"}
                        />
                        <rect x="-64" y="-64" width="128" height="128" rx="24" fill={theme === 'dark' ? "white" : "none"} filter="url(#logo_energy_glow)" opacity="0">
                            <animate attributeName="opacity" values="0; 0; 0.5; 0; 0" keyTimes="0; 0.48; 0.53; 0.65; 1" dur={TOTAL_DUR} repeatCount="indefinite" calcMode="spline" keySplines="0 0 1 1; 0.1 0.9 0.2 1; 0.42 0 1 1; 0 0 1 1" />
                        </rect>
                        <image 
                            href="/icons/LogoSignIn.svg" 
                            x="-48" y="-48" width="96" height="96" 
                            className={`object-contain transition-all duration-300 ${theme === 'light' ? 'invert opacity-70' : ''}`} 
                        />
                    </g>

                    {/* === 第 5 層: 轉移至 SVG 內的右側步驟圖示 === */}
                    {rightNodes.map((node, i) => {
                        const baseDelay = 0.5 + i * 0.025; 
                        const peakTime = baseDelay + 0.06;
                        const fadeTime = baseDelay + 0.25;

                        return (
                            <g key={`node-svg-${i}`} transform={`translate(${node.x}, ${node.y})`}>
                                <rect x="-48" y="-120" width="96" height="96" rx="16" fill={node.dotColor} filter="url(#node_color_glow)" opacity="0">
                                    <animate attributeName="opacity" values="0; 0; 0.6; 0; 0" keyTimes={`0; ${baseDelay}; ${peakTime}; ${fadeTime}; 1`} dur={TOTAL_DUR} repeatCount="indefinite" />
                                </rect>
                                <image href={node.imgSrc} x="-48" y="-120" width="96" height="96" className="object-contain" />
                            </g>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
};

export default DataFlowLayout;