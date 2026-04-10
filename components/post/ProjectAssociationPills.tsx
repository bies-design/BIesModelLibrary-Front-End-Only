"use client";

import React from 'react';
import { Users, LayoutDashboard, Milestone, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Tooltip } from '@heroui/react';

interface AssociationProps {
    team: { id: string; name: string; color?: string | null } | null;
    associations: any[];
}

export default function ProjectAssociationPills({ team, associations }: AssociationProps) {
    const router = useRouter();

    if (!associations || associations.length === 0) return null;

    return (
        <div className="flex flex-col gap-2 mt-2">
            <p className="bg-linear-to-b from-white to-[#A1A1AA] bg-clip-text text-transparent">Project Origins</p>
        
            {associations.map((asset, index) => (
                <Tooltip placement='top' content={`${team?.name} -> ${asset.project.name} -> ${asset.phase.name} `}>
                    <div 
                    key={index}
                    onClick={() => router.push(`/project/${asset.project.id}`)} // 這裡依照你的路由調整
                    className="group glass-panel hover-lift flex items-center gap-2 p-3 rounded-xl bg-[#27272A]/50 border border-white/5 hover:border-[#8DB2E8]/30 hover:bg-[#27272A] cursor-pointer transition-all overflow-hidden"
                        >
                        {/* 團隊名字 (帶顏色圓點) */}
                        <div className="flex items-center gap-1.5 shrink-0">
                            <div 
                            className="w-2.5 h-2.5 rounded-full" 
                            style={{ backgroundColor: team?.color || '#52525B' }}
                            />
                            <span className="text-sm text-white/90 font-medium truncate max-w-[80px]">
                                {team?.name || 'Personal'}
                            </span>
                        </div>

                        <ChevronRight size={14} className="text-white shrink-0" />

                        {/* 專案名字 */}
                        <div className="flex items-center gap-1.5 shrink-0">
                            <LayoutDashboard size={14} className="text-[#8DB2E8]" />
                            <span className="text-sm text-white/90 truncate max-w-[100px]">
                            {asset.project.name}
                            </span>
                        </div>

                        <ChevronRight size={14} className="text-white shrink-0" />

                        {/* 階段名字 */}
                        <div className="flex items-center gap-1.5 shrink-0">
                            <Milestone size={14} className="text-orange-400" />
                            <span className="text-sm text-white truncate max-w-[80px]">
                            {asset.phase?.name || 'Unclassified'}
                            </span>
                        </div>
                    </div>
                </Tooltip>
            ))}
        </div>
    );
}