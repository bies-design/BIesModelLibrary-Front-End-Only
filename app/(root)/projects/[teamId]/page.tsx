"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Button, Spinner, useDisclosure, addToast } from "@heroui/react";
import { Plus, Edit2, FolderGit2, MapPin, Building2, ArrowLeft, MessageSquareText, FolderUp, ClipboardPen, LoaderCircle, Loader2 } from 'lucide-react';
import { createProject, getTeamProjectsByScroll, updateProject } from '@/lib/actions/project.action';
import CreateProjectModal from '@/components/modals/ProjectSettingsModal';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Footer from '@/components/Footer';
import ProjectSettingsModal from '@/components/modals/ProjectSettingsModal';
import { checkUserTeamStatus, TeamAccessLevel } from '@/lib/actions/team.action';
import { useNativeInView } from '@/hooks/useIntersectionObserver';

export type ProjectStatusType = 'ALL' | 'ACTIVE' | 'ON_HOLD' | 'COMPLETED' | 'ARCHIVED';
export type ProjectSortType = 'updated' | 'created'; 

export default function ProjectsPage() {
    
    const SearchParams = useSearchParams();
    const searchKeyword = SearchParams.get('search') || '';
    const projectStatusParam = SearchParams.get('status');
    const validPostStatus: ProjectStatusType[] = ['ALL', 'ACTIVE', 'ON_HOLD', 'COMPLETED', 'ARCHIVED'];
    // 如果網址的值不在合法清單內，就給 'ALL'
    const projectStatusTypeKeyword = (validPostStatus.includes(projectStatusParam as ProjectStatusType) 
        ? projectStatusParam 
        : 'ALL') as ProjectStatusType;

    const sortKeyword = SearchParams.get('sort');
    const validSortKeyword: ProjectSortType[] = ['updated', 'created'];
    // 如果網址的值不在合法清單內，就給 'ALL'
    const projectSortKeyword= (validSortKeyword.includes(sortKeyword as ProjectSortType) 
        ? sortKeyword 
        : 'ALL') as ProjectSortType;
    
    const [projects, setProjects] = useState<any[]>([]);
    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // 無限下滑偵測器
    const loadMoreRef = useRef<HTMLDivElement>(null);
    const isIntersecting = useNativeInView(loadMoreRef, '400px');

    // const isFetchingRef = useRef(false); // 新增純邏輯鎖定，防止非同步競爭條件

    const [accessLevel, setAccessLevel] = useState<TeamAccessLevel | 'LOADING'>('LOADING');
    const isVerifying = useRef(false);

    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
    // 記錄當前正在編輯的專案資料
    const [editingProject, setEditingProject] = useState<any>(undefined);
    const router = useRouter();
    const params = useParams(); 
    
    // 從網址列抓取 teamId (對應資料夾名稱 [teamId])
    const teamId = params.teamId as string; 

    const getImageUrl = (imageVal: string | null | undefined) => {
        if(!imageVal) return "";
        if(imageVal.startsWith("http")) return imageVal;
        return `${process.env.NEXT_PUBLIC_S3_ENDPOINT_SERVER}/${process.env.NEXT_PUBLIC_S3_IMAGES_BUCKET}/${imageVal}`;
    };

    const fetchProjects = async (currentPage: number, isReset: boolean = false) => {
        // 防呆與非同步鎖定：如果沒有 teamId 或正在抓取中，直接 return
        if (!teamId ) return; 
        
        setIsLoading(true);           // 觸發 UI loading 渲染
        try {
            const result = await getTeamProjectsByScroll(teamId, currentPage, 12, searchKeyword, projectStatusTypeKeyword, projectSortKeyword);
            if (result.success && result.data) {
                if(isReset){
                    setProjects(result.data);
                } else {
                    setProjects(prev => [...prev, ...result.data]);
                }
                setHasMore(result.hasMore || false);
            }
        } catch (error) {
            console.error("Failed to fetch projects:", error);
        } finally {
            setIsLoading(false);          // 解除 UI loading
        }
    };
    
    // 驗證權限 (只在元件掛載時執行一次)
    useEffect(() => {
        if (isVerifying.current) return;

        const verifyAccess = async () => {
            isVerifying.current = true;
            try {
                const status = await checkUserTeamStatus(teamId);
                setAccessLevel(status);
            } finally {
                isVerifying.current = false;
            }
        };
        verifyAccess();
    }, [teamId]); // 當網址的 teamId 改變時，自動重新抓取
    
    // 當「網址篩選條件」改變時，重置資料並抓取第一頁
    useEffect(() => {
        setPage(1);
        setHasMore(true);
        fetchProjects(1, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [teamId, searchKeyword, projectStatusTypeKeyword, projectSortKeyword]);

    // 監聽畫面底部，觸發載入下一頁
    useEffect(() => {
        if (isIntersecting && hasMore && !isLoading) {
            const nextPage = page + 1;
            setPage(nextPage);
            fetchProjects(nextPage, false);
        }
    }, [isIntersecting, hasMore, isLoading, page]);

    const handleOpenCreate = () => {
        setModalMode('create');
        setEditingProject(undefined);
        onOpen();
    };

    const handleOpenEdit = (e: React.MouseEvent, project: any) => {
        e.stopPropagation(); // ⚠️ 防止觸發卡片的 router.push 事件
        setModalMode('edit');
        setEditingProject(project); // 將該專案資料塞進去
        onOpen();
    };

    const handleCreateOrUpdateProject = async (formData: any) => {
        try {
            if (modalMode === 'create') {
                const res = await createProject(formData);
                if (res.success) {
                    addToast({ title: "成功", description: "專案建立成功！", color: "success" });
                    setPage(1);
                    fetchProjects(1, true); // 建立成功後刷新第一頁
                } else {
                    addToast({ title: "錯誤", description: res.error || "建立失敗", color: "danger" });
                    throw new Error(res.error); // 拋出錯誤讓 Modal 的 catch 接住，不要關閉視窗
                }
            } else { //更新模式
                const res = await updateProject(formData.id, formData);
                if (res.success) {
                    addToast({ title: "成功", description: "專案更新成功！", color: "success" });
                    setPage(1);
                    fetchProjects(1, true); // 更新成功後刷新第一頁
                } else {
                    addToast({ title: "錯誤", description: res.error || "更新失敗", color: "danger" });
                    throw new Error(res.error); // 拋出錯誤
                }
            }
        } catch (error) {
            throw error;
        }
    };
    // 防呆：如果網址沒有 teamId，顯示錯誤或導向
    if (!teamId) {
        return <div className="p-8 text-white"> 團隊不存在</div>;
    }

    return (
        <div className="md:max-w-[90dvw] max-md:px-6 mx-auto min-h-screen flex flex-col py-6 text-white">
            <div className='relative flex-1 bg-white/50 dark:bg-black/50 px-6 md:px-12 py-6 rounded-xl shadow-sm h-full'>
                {/* 上一頁按鈕 */}
                <button 
                    onClick={() => router.back()}
                    className="absolute top-2 left-2 text-slate-400 hover:text-slate-700 dark:text-slate-100 dark:hover:text-slate-500 shrink-0"
                    title="回上一頁"
                >
                    <ArrowLeft size={20} />
                </button>
                {/* 標題與操作區 */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                    <h1 className="text-2xl text-gray-600 dark:text-white font-bold font-inter flex items-center gap-2">
                        <FolderGit2 className="text-[#D70036]" /> 
                        Projects
                    </h1>
                    <p className="text-gray-400 text-sm mt-1">Manage your team project.</p>
                    </div>
                    {accessLevel === 'EDITOR_ACCESS' && (
                        <Button 
                            color="primary" 
                            endContent={<Plus size={18} />}
                            onPress={handleOpenCreate}
                            className={`bg-[#D70036] hover-lift shadow-[0px_0px_1px_0px_#000000B2,inset_0px_-4px_4px_0px_#00000040,inset_0px_4px_2px_0px_#FFFFFF33] text-white font-bold`}
                        >
                            New Project
                        </Button>
                    )}
                </div>

                {/* 專案卡片列表 */}
                {projects.length === 0 && !isLoading ? (
                    <div className="flex flex-col justify-center items-center h-64 border-2 border-dashed border-[#27272A] rounded-2xl mt-4">
                        <FolderGit2 size={48} className="text-gray-600 mb-4" />
                        <p className="text-gray-400">尚無符合條件的專案，請嘗試建立或調整篩選條件。</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {projects.map((project) => {
                            const bgImageUrl = getImageUrl(project.coverImage);
                            return(
                                <div 
                                    key={project.id || project._id} 
                                    // 整理 className：如果有圖片就拿掉背景色，沒有的話套用預設背景色
                                    className={`group relative hover-lift transition-all duration-300 shadow-[4px_4px_3px_rgba(0,0,0,0.5),inset_0px_3px_4px_rgba(255,255,255,1)] dark:shadow-[4px_4px_5px_rgba(0,0,0,0.32),inset_0px_2px_5px_rgba(255,255,255,0.25)] rounded-2xl p-6 cursor-pointer flex flex-col overflow-hidden ${
                                        !bgImageUrl ? 'bg-slate-400 dark:bg-[#18181B]' : 'text-white'
                                    }`}
                                    // 設定行內樣式：圖片 + 漸層遮罩
                                    style={{
                                        backgroundImage: bgImageUrl 
                                            ? `linear-gradient(to bottom, rgba(24, 24, 27, 0.6), rgba(24, 24, 27, 0.95)), url(${bgImageUrl})` 
                                            : 'none',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                    onClick={() => router.push(`/project/${project.id}`)}
                                >
                                    {accessLevel === 'EDITOR_ACCESS' && (
                                        <button
                                            onClick={(e) => handleOpenEdit(e, project)}
                                            className="absolute top-4 right-4 p-2 text-white md:text-gray-400 md:hover:text-white md:hover:bg-white/10 rounded-full transition-colors z-10 md:opacity-0 md:group-hover:opacity-100"
                                            title="編輯專案"
                                        >
                                            <Edit2 size={16} className='h-6 w-6' />
                                        </button>
                                    )}
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-semibold mb-2 group-hover:text-[#D70036] transition-colors">
                                            {project.name}
                                        </h3>
                                        {project.description && (
                                            <p className="text-white text-sm line-clamp-2 mb-4">
                                                {project.description}
                                            </p>
                                        )}
                                        
                                        {/* 根據你引入的 icon 預留的資訊區塊 */}
                                        <div className="flex flex-col gap-2 mt-4">
                                            <div className="flex items-center gap-2 text-sm text-white">
                                                <LoaderCircle size={14} />
                                                <span>{project.status ? project.status : "未設定" }</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-white">
                                                <MessageSquareText size={14} />
                                                <span>{project.visibility === "PUBLIC" ? "Public" : "Private"}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-white">
                                                <MapPin size={14} />
                                                <span>{project.location ? project.location : "未設定" }</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-white">
                                                <Building2 size={14} />
                                                <span>{project.client ? project.client : "未設定"}</span>
                                            </div>
                                            {/* <div className="flex items-center gap-2 text-sm text-white">
                                                <FolderUp size={14} />
                                                <span>{project.createdAt ? new Date(project.createdAt).toLocaleDateString() + " " + new Date(project.createdAt).toLocaleTimeString()  : ""}</span>
                                            </div> */}
                                            <div className="flex items-center gap-2 text-sm text-white">
                                                <ClipboardPen size={14} />
                                                <span>{project.updatedAt ? new Date(project.updatedAt).toLocaleDateString() + " " + new Date(project.updatedAt).toLocaleTimeString() : ""}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
                {/*  載入狀態指示器與觀察標籤 */}
                <div ref={loadMoreRef} className='flex justify-center mt-8 mb-8 h-10'>
                    {isLoading && (
                        <div className="flex items-center gap-2 text-[#A1A1AA]">
                            <Loader2 className="animate-spin w-5 h-5" />
                            <span>Loading projects...</span>
                        </div>
                    )}
                    {!hasMore && projects.length > 0 && (
                        <p className='text-sm text-[#5B5B5B] dark:text-[#BEBEBE] font-abeezee'>
                            You have reached the end.
                        </p>
                    )}
                </div>
                {/* 新增專案的 Modal */}
                <ProjectSettingsModal 
                    isOpen={isOpen} 
                    onOpenChange={onOpenChange} 
                    mode={modalMode}
                    teamId={teamId}
                    projectData={editingProject}
                    onSubmit={handleCreateOrUpdateProject} 
                />
            </div>
        </div>
    );
}
