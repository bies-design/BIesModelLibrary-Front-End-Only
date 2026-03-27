'use client'
import React, { useState } from 'react';
import SidebarDashboard from '@/components/sidebar/SidebarDashboard';
import SidebarBlobs from '@/components/blobs/SidebarBlobs';
import Settings from '@/components/dashboard/Settings';
import Team from '@/components/dashboard/Team';
import Models from '@/components/dashboard/Models';
import { Menu, X } from 'lucide-react'; // 記得引入圖示！

const Dashboard = () => {
    const [selected, setSelected] = useState("Settings");
    // 新增狀態控制手機版側邊欄
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleOnSelect = (value: string) => {
        setSelected(value);
        // UX 優化：在手機版點擊選項後，自動把側邊欄收起來
        setIsMobileMenuOpen(false);
    };

    return (
        <div className='min-h-screen bg-[#27272A] relative'>
            {/* 加上 relative 和 overflow-hidden 讓手機版側邊欄不會跑版 */}
            <div className='flex w-full min-h-screen gap-4 p-2 relative overflow-hidden'>
                
                {/* 📱 手機版專屬：開啟/關閉側邊欄的懸浮按鈕 */}
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden absolute top-5 right-5 z-50 p-2 rounded-lg text-white bg-[#3F3F46] shadow-[0px_0px_2px_0px_#000000B2,inset_0px_-4px_4px_0px_#00000040,inset_0px_4px_2px_0px_#FFFFFF33] transition-transform active:scale-95"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* 左側步驟導覽列 */}
                <div className={`
                    z-40 overflow-hidden rounded-lg border-[5px] border-[rgba(40,48,62,0.6)] transition-transform duration-300 bg-[#27272A] shadow-2xl
                    /* 📱 手機版設定：絕對定位、根據狀態滑出或隱藏 */
                    absolute top-0 left-0 h-[90%] w-[250px] 
                    ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-[120%]"}
                    /* 💻 電腦版設定 (md 以上)：維持原本的寬度設定與相對排版 */
                    md:relative md:top-auto md:left-auto md:h-auto md:max-w-[275px] md:min-w-[200px] md:w-[25dvw] md:translate-x-0
                `}>
                    <SidebarBlobs/>
                    {/* 建立一個絕對定位的層，專門放陰影，並確保它在背景之上 */}
                    <div className='absolute inset-0 pointer-events-none shadow-[inset_0px_0px_27.1px_0px_#000000] z-10'/>
                    <SidebarDashboard 
                        currentSelect={selected}
                        onSelect={handleOnSelect}                        
                    />
                </div>

                {/* 右側主要內容區域 */}
                <div className='grow rounded-lg overflow-hidden p-8 shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D]'>
                    {selected === "Settings" && <Settings/>}
                    {selected === "Team" && <Team/>}
                    {selected === "Models" && <Models/>}
                </div>
            </div>
        </div>  
    );
}

export default Dashboard;