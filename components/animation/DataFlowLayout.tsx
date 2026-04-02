import React from 'react';
import { Zap, LayoutGrid, Square } from 'lucide-react';

const DataFlowLayout = () => {
    return (
        // 最外層容器：深色紫藍漸層背景
        <div className="relative w-full h-screen bg-gradient-to-br from-[#1a1135] to-[#25143a] overflow-hidden flex items-center justify-center font-sans">
        
        {/* === 第一層：SVG 線條與背景裝飾 === */}
        {/* 預設大小為 1200x600，利用 w-full max-w-6xl 讓它響應式縮放 */}
        <svg 
            viewBox="0 0 1200 600" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
            {/* 左側的輸入貝茲曲線 (C: 控制點1, 控制點2, 終點) */}
            <g stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" strokeLinecap="round">
            <path id="path-in-1" d="M 0 150 C 300 150, 300 300, 500 300" />
            <path id="path-in-2" d="M 0 225 C 300 225, 300 300, 500 300" />
            <path id="path-in-3" d="M 0 300 L 500 300" />
            <path id="path-in-4" d="M 0 375 C 300 375, 300 300, 500 300" />
            <path id="path-in-5" d="M 0 450 C 300 450, 300 300, 500 300" />
            </g>

            {/* 右側的輸出直線 */}
            <path 
            id="path-out" 
            d="M 700 300 L 1200 300" 
            stroke="rgba(255,255,255,0.15)" 
            strokeWidth="2" 
            fill="none" 
            />

            {/* 漂浮的小方塊裝飾 (使用 SVG 繪製確保一起縮放) */}
            <g fill="#271b40" stroke="rgba(255,255,255,0.2)" strokeWidth="2">
            {/* 左下角小方塊 */}
            <rect x="350" y="420" width="30" height="30" rx="6" />
            <circle cx="365" cy="435" r="3" fill="rgba(255,255,255,0.4)" stroke="none" />
            
            {/* 右上方小方塊 */}
            <rect x="750" y="120" width="40" height="40" rx="8" />
            <circle cx="770" cy="140" r="4" fill="rgba(255,255,255,0.4)" stroke="none" />
            </g>

            {/* 右側的文字節點 (先畫出來，後續用 GSAP 控制透明度) */}
            <g fill="#888" fontSize="14" fontFamily="monospace" className="text-nodes">
            <text x="850" y="285">.html</text>
            <text x="1050" y="285">.css</text>
            </g>

            {/* 右側線條上的固定節點小圓點 */}
            <g fill="#271b40" stroke="rgba(255,255,255,0.3)" strokeWidth="2">
            <circle cx="865" cy="300" r="6" />
            <circle cx="1065" cy="300" r="6" />
            </g>
        </svg>

        {/* === 第二層：中心主體 (Vite Logo 卡片) === */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            {/* 玻璃擬態 (Glassmorphism) 外框 */}
            <div className="w-32 h-32 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.3)] flex items-center justify-center relative">
            
            {/* 內部發光效果 */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 pointer-events-none" />
            
            {/* Vite 閃電 Logo (這裡使用 Lucide 的 Zap 暫代，並加上漸層色) */}
            <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-yellow-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg transform -rotate-12">
                <Zap size={32} fill="white" className="text-white transform rotate-12" />
            </div>

            </div>
        </div>

        </div>
    );
};

export default DataFlowLayout;