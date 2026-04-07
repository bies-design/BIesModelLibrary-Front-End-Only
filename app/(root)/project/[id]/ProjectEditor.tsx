// app/project/[id]/ProjectEditor.tsx
"use client";

import React, { useState } from 'react';
import { Button } from '@heroui/react';
import { FolderPlus, Settings } from 'lucide-react';

export default function ProjectEditor({ initialProject }: { initialProject: any }) {
    // 紀錄目前使用者點擊了哪個節點
    const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

    return (
        <div className="flex-grow grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 h-[calc(100vh-120px)]">
            
            {/* 👈 左側：樹狀結構編輯器 (Tree Editor) */}
            <div className="bg-[#27272A] rounded-xl border border-[#3F3F46] flex flex-col overflow-hidden shadow-[inset_0px_1px_3px_rgba(0,0,0,0.5)]">
                <div className="p-3 border-b border-[#3F3F46] flex justify-between items-center bg-[#3F3F46]/30">
                    <span className="font-medium text-sm text-gray-200">Structure Tree</span>
                    <Button size="sm" isIconOnly variant="flat" className="text-[#A1A1AA] hover:text-white">
                        <FolderPlus size={16} />
                    </Button>
                </div>
                
                <div className="p-2 overflow-y-auto flex-grow">
                    {/* 未來這裡要放 Recursive Component (遞迴元件) 來畫出樹狀圖 */}
                    <p className="text-xs text-gray-500 text-center mt-10">這裡將顯示樹狀節點...</p>
                </div>
            </div>

            {/* 👉 右側：節點檢視器 / 模型綁定區 (Node Inspector) */}
            <div className="bg-[#27272A] rounded-xl border border-[#3F3F46] flex flex-col overflow-hidden shadow-[inset_0px_1px_3px_rgba(0,0,0,0.5)]">
                <div className="p-3 border-b border-[#3F3F46] flex items-center gap-2 bg-[#3F3F46]/30">
                    <Settings size={16} className="text-gray-400" />
                    <span className="font-medium text-sm text-gray-200">Node Details</span>
                </div>
                
                <div className="p-6 overflow-y-auto flex-grow">
                    {selectedNodeId ? (
                        <div>
                            {/* 未來這裡放：更改節點名稱、綁定 Post(3D/PDF) 的 UI */}
                            <h2 className="text-xl mb-4">選中的節點 ID: {selectedNodeId}</h2>
                        </div>
                    ) : (
                        <div className="h-full flex items-center justify-center text-gray-500 text-sm">
                            請從左側選擇一個節點來進行編輯或綁定模型
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}