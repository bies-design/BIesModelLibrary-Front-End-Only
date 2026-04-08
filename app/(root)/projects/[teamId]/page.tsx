"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Button, Spinner, useDisclosure } from "@heroui/react";
import { Plus, FolderGit2, MapPin, Building2 } from 'lucide-react';
import { getTeamProjects } from '@/lib/actions/project.action';
import CreateProjectModal from '@/components/modals/CreateProjectModal';
import { useParams, useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
    const [projects, setProjects] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const isFetchingRef = useRef(false); // 🚀 新增純邏輯鎖定，防止非同步競爭條件

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    
    const router = useRouter();
    const params = useParams(); 
    
    // 從網址列抓取 teamId (對應資料夾名稱 [teamId])
    const teamId = params.teamId as string; 

    const fetchProjects = async () => {
        // 防呆與非同步鎖定：如果沒有 teamId 或正在抓取中，直接 return
        if (!teamId || isFetchingRef.current) return; 
        
        isFetchingRef.current = true; // 同步上鎖
        setIsLoading(true);           // 觸發 UI loading 渲染
        
        try {
            const result = await getTeamProjects(teamId);
            if (result.success && result.data) {
                setProjects(result.data);
            }
        } catch (error) {
            console.error("Failed to fetch projects:", error);
        } finally {
            setIsLoading(false);          // 解除 UI loading
            isFetchingRef.current = false; // 同步解鎖
        }
    };

    useEffect(() => {
        fetchProjects();
    }, [teamId]); // 當網址的 teamId 改變時，自動重新抓取

    // 防呆：如果網址沒有 teamId，顯示錯誤或導向
    if (!teamId) {
        return <div className="p-8 text-white"> 團隊不存在</div>;
    }

    return (
        <div className="md:max-w-[90dvw] max-md:px-6 mx-auto min-h-screen flex flex-col py-6 text-white">
            <div className='flex-1 bg-white/50 dark:bg-black/50 px-12 py-6 rounded-xl shadow-sm h-full'>
                {/* 標題與操作區 */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                    <h1 className="text-2xl text-slate-300 dark:text-white font-bold font-inter flex items-center gap-2">
                        <FolderGit2 className="text-[#D70036]" /> 
                        Projects
                    </h1>
                    <p className="text-gray-400 text-sm mt-1">Manage your team project.</p>
                    </div>
                    <Button 
                    color="primary" 
                    endContent={<Plus size={18} />}
                    onPress={onOpen}
                    className="bg-[#D70036] text-white font-bold"
                    >
                    New Project
                    </Button>
                </div>

                {/* 專案卡片列表 */}
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <Spinner size="lg" color="white" />
                    </div>
                ) : projects.length === 0 ? (
                    <div className="flex flex-col justify-center items-center h-64 border-2 border-dashed border-[#27272A] rounded-2xl">
                        <FolderGit2 size={48} className="text-gray-600 mb-4" />
                        <p className="text-gray-400">This team doesn't have any projects yet. Create one!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {projects.map((project) => (
                            <div 
                                key={project.id || project._id} 
                                className="group bg-slate-400 dark:bg-[#18181B] transition-all duration-300 rounded-2xl p-6 cursor-pointer flex flex-col"
                                onClick={() => router.push(`/project/${project.id}`)}
                            >
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#D70036] transition-colors">
                                    {project.name}
                                </h3>
                                {project.description && (
                                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                                        {project.description}
                                    </p>
                                )}
                                
                                {/* 根據你引入的 icon 預留的資訊區塊 */}
                                <div className="flex flex-col gap-2 mt-4">
                                    {project.location && (
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <MapPin size={14} />
                                        <span>{project.location}</span>
                                        </div>
                                    )}
                                    {project.client && (
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <Building2 size={14} />
                                        <span>{project.client}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            </div>
                        ))}
                        </div>
                    )
                }
                {/* 新增專案的 Modal */}
                <CreateProjectModal 
                    isOpen={isOpen} 
                    onOpenChange={onOpenChange}
                    teamId={teamId} // 將 teamId 傳入以便建立專案時綁定
                    onSuccess={() => {
                    fetchProjects(); // 建立成功後重新抓取列表
                    }}
                />
            </div>
        </div>
    );
}