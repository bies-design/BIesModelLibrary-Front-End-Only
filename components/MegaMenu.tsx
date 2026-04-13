"use client";

import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Button } from "@heroui/react";

export default function MegaMenu() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    // 🌟 核心邏輯：更新 URL 參數
    const handleFilterChange = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());

        // 如果點擊的是 "ALL" 或者是已經選中的值，就從 URL 中移除該參數
        if (value === "ALL" || params.get(key) === value) {
            params.delete(key);
        } else {
            params.set(key, value);
        }

        // 把新的參數推到網址上 (保留原本的 search 關鍵字等其他參數)
        const queryString = params.toString();
        router.push(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
    };

    // 🎨 Helper：用來判斷按鈕是否為 Active 狀態，給予不同樣式
    const getButtonStyle = (key: string, value: string) => {
        const currentValue = searchParams.get(key);
        // 如果沒有設定該參數，代表預設是 "ALL"
        const isActive = currentValue === value || (!currentValue && value === "ALL");
        
        return isActive 
            ? "bg-[#D70036] text-white font-bold" // 啟動狀態：你的品牌紅色
            : "bg-[#27272A] text-gray-400 hover:text-white border border-white/5"; // 未啟動狀態
    };

    // ==========================================
    // 🚦 根據不同路由，定義要顯示的篩選區塊
    // ==========================================

    // 1. 首頁 (Post 列表) 的篩選器
    if (pathname === '/') {
        return (
            <div className="w-full p-6 flex flex-col gap-6">
                {/* 第一排：資源分類 */}
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Category</p>
                    <div className="flex flex-wrap gap-2">
                        <Button size="sm" className={getButtonStyle('category', 'ALL')} onClick={() => handleFilterChange('category', 'ALL')}>All</Button>
                        <Button size="sm" className={getButtonStyle('category', 'MODEL_3D')} onClick={() => handleFilterChange('category', 'MODEL_3D')}>3D Models</Button>
                        <Button size="sm" className={getButtonStyle('category', 'DOCUMENT')} onClick={() => handleFilterChange('category', 'DOCUMENT')}>Documents</Button>
                        <Button size="sm" className={getButtonStyle('category', 'DRAWING')} onClick={() => handleFilterChange('category', 'DRAWING')}>Drawings</Button>
                        <Button size="sm" className={getButtonStyle('category', 'IMAGE')} onClick={() => handleFilterChange('category', 'IMAGE')}>Images</Button>
                    </div>
                </div>

                {/* 第二排：觀看範圍 (Scope) */}
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Scope</p>
                    <div className="flex flex-wrap gap-2">
                        <Button size="sm" className={getButtonStyle('scope', 'ALL')} onClick={() => handleFilterChange('scope', 'ALL')}>All Public</Button>
                        <Button size="sm" className={getButtonStyle('scope', 'PERSONAL')} onClick={() => handleFilterChange('scope', 'PERSONAL')}>My Uploads</Button>
                        <Button size="sm" className={getButtonStyle('scope', 'TEAM')} onClick={() => handleFilterChange('scope', 'TEAM')}>Team Only</Button>
                    </div>
                </div>
            </div>
        );
    }

    // 2. 專案列表頁 (/projects) 的篩選器
    if (pathname.startsWith('/projects')) {
        return (
            <div className="w-full p-6 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Project Status</p>
                    <div className="flex flex-wrap gap-2">
                        <Button size="sm" className={getButtonStyle('status', 'ALL')} onClick={() => handleFilterChange('status', 'ALL')}>All Status</Button>
                        <Button size="sm" className={getButtonStyle('status', 'ACTIVE')} onClick={() => handleFilterChange('status', 'ACTIVE')}>Active (進行中)</Button>
                        <Button size="sm" className={getButtonStyle('status', 'ON_HOLD')} onClick={() => handleFilterChange('status', 'ON_HOLD')}>On Hold (暫停中)</Button>
                        <Button size="sm" className={getButtonStyle('status', 'COMPLETED')} onClick={() => handleFilterChange('status', 'COMPLETED')}>Completed (已完工)</Button>
                    </div>
                </div>
                
                {/* 可以擴充年份或業主篩選 */}
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Sort By</p>
                    <div className="flex flex-wrap gap-2">
                        <Button size="sm" className={getButtonStyle('sort', 'updated')} onClick={() => handleFilterChange('sort', 'updated')}>Recently Updated</Button>
                        <Button size="sm" className={getButtonStyle('sort', 'created')} onClick={() => handleFilterChange('sort', 'created')}>Newest First</Button>
                    </div>
                </div>
            </div>
        );
    }

    // 3. 單一專案詳情頁 (/project/[id]) 的篩選器
    if (pathname.startsWith('/project/')) {
        return (
            <div className="w-full p-6 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Asset Type</p>
                    <div className="flex flex-wrap gap-2">
                        <Button size="sm" className={getButtonStyle('type', 'ALL')} onClick={() => handleFilterChange('type', 'ALL')}>All Assets</Button>
                        <Button size="sm" className={getButtonStyle('type', 'POST')} onClick={() => handleFilterChange('type', 'POST')}>Posts / Models</Button>
                        <Button size="sm" className={getButtonStyle('type', 'LINK')} onClick={() => handleFilterChange('type', 'LINK')}>External Links</Button>
                    </div>
                </div>
            </div>
        );
    }

    // 4. 其他頁面 (Fallback)
    return (
        <div className="w-full p-6 flex justify-center text-gray-500 text-sm italic">
            No advanced filters available for this page.
        </div>
    );
}