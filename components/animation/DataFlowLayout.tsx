import React from 'react';
import { Zap } from 'lucide-react';

const DataFlowLayout = () => {
    return (
        // 最外層容器：滿版背景，用來將我們固定大小的畫布置中對齊
        <div className="relative w-full h-screen bg-transparent overflow-hidden flex items-center justify-center font-sans">
        
        {/* === 固定大小的畫布 (1200px * 600px) === */}
        <div className="relative w-[1200px] h-[600px] shrink-0">
            
            {/* 第一層：SVG 線條與背景裝飾 (直接鎖死寬高) */}
            <svg 
            width="1200" 
            height="600" 
            viewBox="0 0 1200 600" 
            className="absolute inset-0 pointer-events-none"
            >
            {/* 左側的輸入貝茲曲線 (C: 控制點1, 控制點2, 終點) */}
            <g stroke="url(#line-gradient)">
                {/* 1. 最上面最彎的線 */}
                <path id="path-1" d="M 0 0.5 C 370 0.5, 479 130.5, 601.2 130.5" />
                {/* 2. 上方次彎的線 */}
                <path id="path-2" d="M 0 76.5 C 302 76.5, 480 146.5, 601.2 146.5" />
                {/* 3. 微彎的線 */}
                <path id="path-3" d="M 0 142.5 C -0.01 142.7, 460 162.5, 601.2 162.5" />
                {/* 4. 正中央水平線 (不彎) */}
                <path id="path-4" d="M 0 178.5 L 601.2 178.5" />
                {/* 5. 下半部微彎的線 */}
                <path id="path-5" d="M 0 214.5 C 0.2 214.5, 460 194.5, 601.2 194.5" />
                {/* 6. 下方次彎的線 */}
                <path id="path-6" d="M 0 280.5 C 0.15 280, 480 210.5, 601.2 210.5" />
                {/* 7. 最下面最彎的線 */}
                <path id="path-7" d="M 0 356.5 C -0.05 356.3, 479 226.5, 601.2 226.5" />
            </g>


            {/* 右側的輸出直線 */}
            <path 
                id="path-out" 
                d="M 600 300 L 1200 300" 
                stroke="rgba(255,255,255,0.15)" 
                strokeWidth="2" 
                fill="none" 
            />

            {/* 右側的文字與節點 */}
            <g fill="#888" fontSize="14" fontFamily="monospace" className="text-nodes">
                <text x="750" y="285">.html</text>
                <text x="900" y="285">.css</text>
                <text x="1050" y="285">.css</text>
            </g>

            <g fill="#271b40" stroke="rgba(255,255,255,0.3)" strokeWidth="2">
                <circle cx="770" cy="300" r="6" />
                <circle cx="920" cy="300" r="6" />
                <circle cx="1070" cy="300" r="6" />
            </g>
            </svg>

            {/* 第二層：中心主體 (這層現在是相對於 1200x600 的容器絕對置中) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-32 h-32 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.3)] flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 pointer-events-none" />
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-yellow-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg transform -rotate-12">
                <Zap size={32} fill="white" className="text-white transform rotate-12" />
                </div>
            </div>
            </div>

        </div>
        </div>
    );
};

export default DataFlowLayout;