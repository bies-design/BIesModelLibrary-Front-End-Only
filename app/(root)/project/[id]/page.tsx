"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { 
    ArrowUp, ArrowDown, ArrowLeft, Folder, FolderOpen, Box, 
    Plus, Edit2, Trash2, Link as LinkIcon, PlusCircle, 
    Milestone, ChevronRight, Globe,
    Share2,
    Search,
    File
} from "lucide-react";
import { 
    getProjectDetails, createPhase, deletePhase, updatePhase,
    createProjectAsset, moveAssetToPhase, removeAssetFromProject,
    getAvailablePosts, deleteProject, updateProject,
    reorderPhases, reorderAssets, updateProjectAsset,
    moveAssetStructure
} from "@/lib/actions/project.action"; 
import { Tabs, Tab, useDisclosure, addToast, Spinner, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Textarea, Tooltip } from "@heroui/react";
import { ProjectStatus } from "@/prisma/generated/prisma";
import ProjectSettingsModal from "@/components/modals/ProjectSettingsModal";
import { checkUserTeamStatus, TeamAccessLevel } from "@/lib/actions/team.action";
import AssetNode from "@/components/project/AssetNode";

// --- 型別定義 ---
type AssetType = 'FOLDER' | 'POST' | 'LINK';

interface Post {
    id: string;
    shortId: string;
    title: string;
    category: string;
    type: string;
}

interface ProjectAsset {
    id: string;
    name: string | null;
    description: string | null;
    type: AssetType;
    sortOrder: number;
    parentId: string | null;
    phaseId: string | null;
    postId: string | null;
    url: string | null;
    post?: Post;
    children?: ProjectAsset[];
}

interface Phase {
    id: string;
    name: string;
    sortOrder: number;
}

interface ProjectData {
    id: string;
    teamId: string;
    name: string;
    description: string | null;
    client: string | null;
    location: string | null;
    coverImage: string | null;
    status: ProjectStatus;
    phases: Phase[];
    assets: ProjectAsset[];
    createdAt: Date | string; 
    updatedAt: Date | string; 
}

// --- 樹狀結構工具 ---
const buildAssetTree = (assets: ProjectAsset[], phaseId: string | null): ProjectAsset[] => {

    const assetMap: Record<string, ProjectAsset & { children: ProjectAsset[] }> = {};
    const roots: ProjectAsset[] = [];
    assets.forEach(asset => {
        assetMap[asset.id] = { ...asset, children: [] };
    });
    assets.forEach(asset => {
        const node = assetMap[asset.id];
        const pId = asset.parentId;
        if (pId && assetMap[pId]) {
            assetMap[pId].children.push(node);
        } else if (asset.phaseId === phaseId) {
            roots.push(node);
        }
    });
    const sortByOrder = (a: ProjectAsset, b: ProjectAsset) => (a.sortOrder || 0) - (b.sortOrder || 0);
    roots.sort(sortByOrder);
    Object.values(assetMap).forEach(node => {
        if (node.children) node.children.sort(sortByOrder);
    });
    return roots;
};



export default function ProjectDetailPage() {
    const router = useRouter();
    const params = useParams();
    const projectId = params.id as string;
    const teamIdRef = useRef<string | null>(null);

    const searchParams = useSearchParams();
    const searchKey = searchParams.get('search') || '';

    // 開關遍及模式已達到頁面整潔
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [project, setProject] = useState<ProjectData | null>(null);
    const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({});
    const [accessLevel, setAccessLevel] = useState<TeamAccessLevel | 'LOADING'>('LOADING');

    const { isOpen: isEditOpen, onOpen: onEditOpen, onOpenChange: onEditOpenChange } = useDisclosure();
    const [isPhaseModalOpen, setIsPhaseModalOpen] = useState<boolean>(false);
    const [isAddAssetModalOpen, setIsAddAssetModalOpen] = useState<boolean>(false);
    const [isEditAssetModalOpen, setIsEditAssetModalOpen] = useState<boolean>(false);
    
    const [editingPhase, setEditingPhase] = useState<{id?: string, name: string} | null>(null);
    const [editingAsset, setEditingAsset] = useState<ProjectAsset | null>(null);
    const [targetContext, setTargetContext] = useState<{phaseId: string | null, parentId: string | null}>({phaseId: null, parentId: null});
    const [availablePosts, setAvailablePosts] = useState<Post[]>([]);

    const [newFolderName, setNewFolderName] = useState<string>("");
    const [newFolderDescription, setNewFolderDescription] = useState<string>("");

    const [newLinkData, setNewLinkData] = useState({ name: "", url: "", description: ""});

    const isFetchingRef = useRef<boolean>(false);
    const isSubmittingRef = useRef<boolean>(false);

    const [draggedNode, setDraggedNode] = useState<ProjectAsset | null>(null);
    const [dropTarget, setDropTarget] = useState<{ id: string, position: 'before' | 'after' | 'inside' } | null>(null);

    // 🚀 關鍵 3：從 URL 解析搜尋與過濾參數
    const searchKeyword = searchParams.get('search') || "";
    const typeFilter = searchParams.get('type') || "ALL";

    useEffect(() => {
        if (!projectId || isFetchingRef.current) return;
        const init = async () => {
            isFetchingRef.current = true;
            try {
                const res = await getProjectDetails(projectId);
                if (res.success && res.data) {
                    setProject(res.data as unknown as ProjectData);
                    teamIdRef.current = res.data.teamId;
                    const status = await checkUserTeamStatus(res.data.teamId);
                    setAccessLevel(status);
                    // 初始化：如果沒有搜尋，預設展開頂層 Phase
                    if (!searchKeyword) {
                        const initialExpanded: Record<string, boolean> = { unclassified: true };
                        res.data.phases.forEach((p: any) => initialExpanded[p.id] = true);
                        setExpandedNodes(initialExpanded);
                    }
                }
            } finally { isFetchingRef.current = false; }
        };
        init();
    }, [projectId]);

    const isEditor = accessLevel === 'EDITOR_ACCESS';
    const toggleNode = (nodeId: string) => setExpandedNodes(prev => ({ ...prev, [nodeId]: !prev[nodeId] }));

    // ==========================================
    // 關鍵 ：(全域快捷搜尋) 的核心邏輯
    // ==========================================

    const handleDropAsset = async (dragged: ProjectAsset, target: ProjectAsset, position: 'before' | 'after' | 'inside') => {
        if (!project || isSubmittingRef.current || dragged.id === target.id) return;
        
        // 預防錯誤：不能將父資料夾拖入自己的子資料夾中
        let isInvalidMove = false;
        let currentParent = target.parentId;
        while (currentParent) {
            if (currentParent === dragged.id) isInvalidMove = true;
            const parentNode = project.assets.find(a => a.id === currentParent);
            currentParent = parentNode?.parentId || null;
        }
        if (isInvalidMove) {
            addToast({ title: "無效的移動", description: "無法將資料夾移入其子目錄中", color: "danger" });
            return;
        }

        isSubmittingRef.current = true;

        // 1. 決定新的 phaseId 與 parentId
        let newPhaseId = target.phaseId;
        let newParentId = target.parentId;
        if (position === 'inside' && target.type === 'FOLDER') {
            newParentId = target.id;
        }

        // 2. 呼叫 Action：如果結構有改變，先更新資料庫的父節點綁定
        if (dragged.phaseId !== newPhaseId || dragged.parentId !== newParentId) {
            await moveAssetStructure(dragged.id, newPhaseId, newParentId);
        }

        // 3. 重新計算目標層級的排序陣列
        let siblings = project.assets.filter(a => a.phaseId === newPhaseId && a.parentId === newParentId && a.id !== dragged.id);
        siblings.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

        let insertIndex = siblings.findIndex(s => s.id === target.id);
        if (position === 'after') insertIndex += 1;
        if (position === 'inside') insertIndex = siblings.length; 

        siblings.splice(insertIndex, 0, dragged);
        const updatedOrders = siblings.map((s, i) => ({ id: s.id, sortOrder: i }));

        // 4. Optimistic UI：先更新前端畫面讓使用者覺得瞬間完成
        setProject(prev => {
            if (!prev) return prev;
            const newAssets = prev.assets.map(a => {
                if (a.id === dragged.id) return { ...a, phaseId: newPhaseId, parentId: newParentId, sortOrder: updatedOrders.find(o => o.id === a.id)?.sortOrder || 0 };
                const match = updatedOrders.find(o => o.id === a.id);
                return match ? { ...a, sortOrder: match.sortOrder } : a;
            });
            return { ...prev, assets: newAssets };
        });

        // 確保目標資料夾是展開的
        if (position === 'inside') setExpandedNodes(prev => ({ ...prev, [target.id]: true }));

        // 5. 呼叫 Action：背景更新所有影響到的排序
        await reorderAssets(updatedOrders);
        isSubmittingRef.current = false;
        // 拖曳成功後的 Toast 提示
        addToast({ 
            title: "移動成功", 
            description: `已將「${dragged.name || dragged.post?.title || '未命名資源'}」移動至新位置`, 
            color: "success" 
        });
    };

    // 1. 取得某個檔案的「完整麵包屑路徑」 (例如：執行階段 > 圖說資料夾)
    const getAssetPath = (asset: ProjectAsset): string => {
        if (!project) return "未分類";
        const pathArray = [];
        let current: ProjectAsset | undefined = asset;

        // 向上尋找所有父層資料夾
        while (current?.parentId) {
            const parent = project.assets.find(a => a.id === current!.parentId);
            if (parent) {
                pathArray.unshift(parent.name || "未命名資料夾");
                current = parent;
            } else {
                break;
            }
        }

        // 加上最頂層的階段 (Phase) 名稱
        if (asset.phaseId) {
            const phase = project.phases.find(p => p.id === asset.phaseId);
            pathArray.unshift(phase?.name || "未知階段");
        } else {
            pathArray.unshift("未分類");
        }

        return pathArray.join(" > ");
    };
    // 2. 即時計算搜尋結果
    const searchResults = useMemo(() => {
        if (!project || !searchKeyword) return null;

        return project.assets.filter(asset => {
            const keyword = searchKeyword.toLowerCase();
            const nameMatch = (asset.name || "").toLowerCase().includes(keyword);
            const titleMatch = (asset.post?.title || "").toLowerCase().includes(keyword);
            const descMatch = (asset.description || "").toLowerCase().includes(keyword);
            
            // 如果搜尋關鍵字有中，再看 Type Filter 有沒有擋
            const isMatch = nameMatch || titleMatch || descMatch;
            
            if (isMatch && typeFilter !== 'ALL') {
                return asset.type === typeFilter;
            }
            return isMatch;
        });
    }, [project, searchKeyword, typeFilter]);

    // 3. 一鍵定位魔法 (Locate Asset)
    const handleLocateAsset = (asset: ProjectAsset) => {
        if (!project) return;

        // A. 透過改變 URL，關閉搜尋面板
        const params = new URLSearchParams(searchParams.toString());
        params.delete('search');
        router.push(`${window.location.pathname}?${params.toString()}`, { scroll: false });

        // B. 自動展開所有父層結構
        const newExpanded = { ...expandedNodes };
        if (asset.phaseId) newExpanded[asset.phaseId] = true;
        else newExpanded["unclassified"] = true;

        let current: ProjectAsset | undefined = asset;
        while (current?.parentId) {
            newExpanded[current.parentId] = true;
            current = project.assets.find(a => a.id === current!.parentId);
        }
        setExpandedNodes(newExpanded);

        // C. 等待 React 渲染展開後的 DOM，然後滾動並高亮
        setTimeout(() => {
            const element = document.getElementById(`asset-${asset.id}`);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "center" });
                
                // 加入高亮閃爍特效 (黃色半透明)
                element.classList.add("bg-amber-500/30", "scale-[1.02]", "transition-all", "duration-500");
                
                // 2 秒後移除特效
                setTimeout(() => {
                    element.classList.remove("bg-amber-500/30", "scale-[1.02]");
                }, 2000);
            }
        }, 150); // 給予一點延遲，確保樹狀圖已展開
    };

    const handleShare = async () => {
        try {
            // 1. 決定要分享的網址
            // 如果有傳 shortId 就拼湊，沒有就拿當前瀏覽器網址
            const shareUrl = projectId 
                ? `${window.location.origin}/project/${projectId}` 
                : window.location.href;

            // 2. 執行複製動作
            await navigator.clipboard.writeText(shareUrl);

            // 3. 彈出成功通知
            addToast({ 
                title: "已複製分享網址", 
                description: "連結已成功複製到剪貼簿",
                color: "success" ,
                timeout: 3000,
                shouldShowTimeoutProgress: true,
            });
        } catch (err) {
            console.error("無法複製網址: ", err);
            addToast({ 
                title: "複製失敗", 
                description: "請手動複製網址列連結",
                color: "danger" ,
                timeout: 3000,
                shouldShowTimeoutProgress: true,
            });
        }
    };
    // 1. Phase 排序
    const handleReorderPhase = async (currentIndex: number, direction: 'up' | 'down') => {
        if (!project || isSubmittingRef.current) return;
        const newPhases = [...project.phases].sort((a,b) => a.sortOrder - b.sortOrder);
        const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
        if (targetIndex < 0 || targetIndex >= newPhases.length) return;

        [newPhases[currentIndex], newPhases[targetIndex]] = [newPhases[targetIndex], newPhases[currentIndex]];
        const updatedOrders = newPhases.map((p, i) => ({ id: p.id, sortOrder: i }));
        setProject({ ...project, phases: newPhases.map((p, i) => ({ ...p, sortOrder: i })) });

        isSubmittingRef.current = true;
        await reorderPhases(updatedOrders);
        isSubmittingRef.current = false;
    };

    // 3. 資產編輯
    const handleUpdateAssetInfo = async () => {
        if (!editingAsset || isSubmittingRef.current) return;
        isSubmittingRef.current = true;
        const res = await updateProjectAsset(editingAsset.id, { 
            name: editingAsset.name, 
            url: editingAsset.url,
            description: editingAsset.description,
        });
        if (res.success) {
            setProject(prev => prev ? {
                ...prev,
                assets: prev.assets.map(a => a.id === editingAsset.id ? { 
                    ...a, 
                    name: editingAsset.name, 
                    url: editingAsset.url,
                    description: editingAsset.description
                } : a)
            } : null);
            setIsEditAssetModalOpen(false);
            addToast({ title: "改動已更新", color: "success" });
        }
        isSubmittingRef.current = false;
    };

    const handleUpdateProject = async (formData: any) => {
        try {
            const res = await updateProject(projectId, formData);
            if (res.success && res.data) {
                addToast({ title: "成功", description: "專案更新成功！", color: "success" });
                setProject(prev => prev ? { ...prev, ...res.data } : null);
            }
        } catch (error) { console.error(error); }
    };

    const handleSavePhase = async (e: any) => {
        e.preventDefault();
        if (isSubmittingRef.current || !editingPhase?.name || !project) return;
        isSubmittingRef.current = true;
        const res = editingPhase.id 
            ? await updatePhase(editingPhase.id, editingPhase.name)
            : await createPhase(projectId, editingPhase.name, project.phases.length);
        if (res.success) {
            const updated = await getProjectDetails(projectId);
            if (updated.data) setProject(updated.data as unknown as ProjectData);
            setIsPhaseModalOpen(false);
        }
        isSubmittingRef.current = false;
    };
    
    const handleDeletePhase = async (id: string) => {
        if (!confirm("確定刪除此階段嗎？")) return;
        await deletePhase(id);
        const updated = await getProjectDetails(projectId);
        if (updated.data) setProject(updated.data as unknown as ProjectData);
    };

    const openAddAssetModal = async (phaseId: string | null, parentId: string | null) => {
        setTargetContext({ phaseId, parentId });
        setIsAddAssetModalOpen(true);
        const res = await getAvailablePosts(teamIdRef.current);
        if (res.success && res.data) setAvailablePosts(res.data);
    };

    const handleCreateAsset = async (type: 'FOLDER' | 'POST' | 'LINK', specificPostId?: string) => {
        if (isSubmittingRef.current) return;
        isSubmittingRef.current = true;
        const payload = {
            projectId, phaseId: targetContext.phaseId, parentId: targetContext.parentId,
            type, 
            name: type === 'FOLDER' ? newFolderName : newLinkData.name,
            description: type === 'FOLDER' ? newFolderDescription: newLinkData.description,
            postId: specificPostId, url: newLinkData.url
        };
        const res = await createProjectAsset(payload);
        if (res.success) {
            const updated = await getProjectDetails(projectId);
            if (updated.data) setProject(updated.data as unknown as ProjectData);
            
            setNewFolderName(""); 
            setNewFolderDescription("");
            setNewLinkData({ name: "", url: "", description: "" });
            setIsAddAssetModalOpen(false);
        }
        isSubmittingRef.current = false;
    };

    const handleRemoveAsset = async (assetId: string) => {
        if (!confirm("確定移除此資源？")) return;
        await removeAssetFromProject(assetId);
        const updated = await getProjectDetails(projectId);
        if (updated.data) setProject(updated.data as unknown as ProjectData);
    };

    const handleDeleteProject = async () => {
        if (!confirm("警告：確定要刪除整個專案嗎？")) return;
        const res = await deleteProject(projectId);
        if (res.success) router.push(`/projects/${teamIdRef.current}`);
    };

    if (accessLevel === 'LOADING') return <div className="h-screen flex items-center justify-center bg-[#18181B]"><Spinner color="danger" /></div>;
    if (!project) return null;

    const getImageUrl = (imageVal: any) => {
        if(!imageVal) return "";
        if(imageVal.startsWith("http")) return imageVal;
        return `${process.env.NEXT_PUBLIC_S3_ENDPOINT_SERVER}/${process.env.NEXT_PUBLIC_S3_IMAGES_BUCKET}/${imageVal}`;
    };
    const bgImageUrl = getImageUrl(project.coverImage);


    return (
        <div className="md:max-w-[90dvw] mx-auto p-6 text-white">
            {/* Header */}
            <div 
                className={` relative rounded-xl shadow-sm p-6 mb-6 flex justify-between items-start overflow-hidden ${
                    !bgImageUrl ? 'bg-white dark:bg-black/50' : 'text-white'
                }`}
                style={{
                    backgroundImage: bgImageUrl 
                        // 改用由左至右的漸層：左側 90% 黑確保文字清晰，右側 40% 黑透出圖片
                        ? `linear-gradient(to right, rgba(24, 24, 27, 0.95) 20%, rgba(24, 24, 27, 0.4) 100%), url(${bgImageUrl})` 
                        : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* 左側：上一頁按鈕 + 專案資訊 */}
                <div className=" z-10 relative flex items-start gap-4">
                    {/* 上一頁按鈕 */}
                    <button 
                        onClick={() => router.back()}
                        className="absolute -top-4 -left-4 text-slate-400 hover:text-slate-700 dark:text-slate-100 dark:hover:text-slate-500 shrink-0"
                        title="回上一頁"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    {/* 專案文字資訊 */}
                    <div className="flex-1 min-w-0">
                        <h1 className={`text-2xl font-bold ${!bgImageUrl ? "text-slate-500 dark:text-white " : "text-white "} flex items-center gap-2 mb-2`}>
                            📁 {project.name}
                        </h1>
                        <p className={`ml-9 text-sm ${!bgImageUrl ? "text-slate-500 dark:text-slate-300" : "text-slate-300"}`}>狀態：{project.status ? project.status : "未設定"}</p>
                        <p className={`ml-9 text-sm ${!bgImageUrl ? "text-slate-500 dark:text-slate-300" : "text-slate-300"}`}>業主：{project.client ? project.client : "未設定"}</p>
                        <p className={`ml-9 text-sm ${!bgImageUrl ? "text-slate-500 dark:text-slate-300" : "text-slate-300"}`}>地點：{project.location ? project.location : "未設定"}</p>
                        {/* <div className={`ml-9 my-1 text-sm max-w-2xl max-h-24 overflow-y-auto break-all whitespace-pre-wrap pr-2 ${!bgImageUrl ? "text-slate-500 dark:text-slate-300" : "text-slate-300"}`}>
                            描述：{project.description ? project.description : "未設定"}
                        </div> */}
                        {/* <p className={`ml-9 text-sm ${!bgImageUrl ? "text-slate-500 dark:text-slate-300" : "text-slate-300"}`}>上傳時間：{project.createdAt ? new Date(project.createdAt).toLocaleDateString() + " " + new Date(project.createdAt).toLocaleTimeString() : ""}</p> */}
                        <p className={`ml-9 text-sm ${!bgImageUrl ? "text-slate-500 dark:text-slate-300" : "text-slate-300"}`}>最後編輯時間：{project.updatedAt ? new Date(project.updatedAt).toLocaleDateString() + " " + new Date(project.updatedAt).toLocaleTimeString() : ""}</p>                        
                    </div>
                </div>
                
                {isEditor && (
                    <div className="z-10 flex flex-col items-center gap-3">
                        <button 
                            onClick={handleShare}  
                            className="flex items-center gap-2 hover-lift bg-green-400/50 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm shadow-[inset_0px_2px_4px_rgba(255,255,255,0.5),inset_0px_-1px_2px_rgba(0,0,0,0.8)]  transition-colors flex-shrink-0"
                        >
                            <Share2 size={16} className="max-sm:h-5"/> 
                            <p className="hidden sm:block">分享專案</p>
                        </button>
                        {/* 新增階段按鈕 */}
                        <button 
                            onClick={() => { setEditingPhase({name: ""}); setIsPhaseModalOpen(true); }}  
                            className="flex items-center gap-2 hover-lift bg-slate-800 text-white px-4 py-2 rounded-lg text-sm shadow-[inset_0px_2px_4px_rgba(255,255,255,0.5),inset_0px_-1px_2px_rgba(0,0,0,0.8)] hover:bg-slate-700 transition-colors flex-shrink-0"
                        >
                            <Plus size={16} className="max-sm:h-5"/>
                            <p className="hidden sm:block">新增階段</p>
                        </button>
                        {/* 編輯專案按鈕 */}
                        <button 
                            onClick={onEditOpen}
                            className="hover-lift flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm shadow-[inset_0px_2px_4px_rgba(255,255,255,0.5),inset_0px_-1px_2px_rgba(0,0,0,0.8)] hover:bg-blue-100 dark:bg-blue-950/80 dark:text-blue-400 dark:hover:bg-blue-900/50 transition-colors flex-shrink-0"
                            title="編輯專案資訊"
                        >
                            <Edit2 size={16} className="max-sm:h-5"/> 
                            <p className="hidden sm:block">編輯資訊</p>
                        </button>
                        {/* 刪除專案按鈕 */}
                        <button 
                            onClick={handleDeleteProject}
                            className="flex items-center gap-2 hover-lift bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm shadow-[inset_0px_2px_4px_rgba(255,255,255,0.5),inset_0px_-1px_2px_rgba(0,0,0,0.8)] hover:bg-red-100 dark:bg-red-950/50 dark:text-red-400 dark:hover:bg-red-900/50 transition-colors flex-shrink-0"
                            title="刪除此專案"
                        >
                            <Trash2 size={16} className="max-sm:h-5"/> 
                            <p className="hidden sm:block">刪除專案</p>
                        </button>

                    </div>
                )}
            </div>

            {/* Tree Area */}
            <div className="bg-white dark:bg-black/50 rounded-xl shadow-sm p-4 min-h-[400px] relative">
                {/* 🚀 關鍵 5：方案 A 的浮動搜尋結果面板 (Command Palette) */}
                {searchKeyword && searchResults && (
                    <div className="absolute inset-0 z-40 bg-[#1C1C1F] rounded-xl shadow-2xl border border-white/10 overflow-hidden flex flex-col backdrop-blur-md bg-opacity-95">
                        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/20">
                            <h2 className="text-lg font-bold flex items-center gap-2">
                                <Search className="text-[#D70036]" size={20} />
                                搜尋結果 "{searchKeyword}"
                            </h2>
                            <span className="text-sm text-gray-400">共找到 {searchResults.length} 筆項目</span>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto p-2">
                            {searchResults.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-48 text-gray-500">
                                    <p>沒有找到符合條件的資源</p>
                                </div>
                            ) : (
                                searchResults.map(asset => (
                                    <div 
                                        key={asset.id} 
                                        onClick={() => handleLocateAsset(asset)}
                                        className="group flex items-center gap-4 p-3 mb-2 rounded-lg hover:bg-white/10 cursor-pointer transition-colors border border-transparent hover:border-white/5"
                                    >
                                        <div className="bg-black/30 p-3 rounded-lg shrink-0">
                                            {asset.type === 'FOLDER' ? <Folder size={24} className="text-amber-400" /> : 
                                            asset.type === 'POST' ? <Box size={24} className="text-[#8DB2E8]" /> : 
                                            <Globe size={24} className="text-emerald-400" />}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-bold text-white truncate text-lg">
                                                {asset.name || asset.post?.title || "無標題"}
                                            </h4>
                                            <p className="flex gap-1 items-center text-xs text-gray-200 mt-1">
                                                <FolderOpen size={14}/> 路徑：{getAssetPath(asset)}
                                            </p>
                                            {asset.description && (
                                                <p className="flex gap-1 items-center text-xs text-gray-200 mt-1 truncate">
                                                    <File size={12}/>{asset.description}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex gap-1 shrink-0 text-sm text-[#D70036] sm:opacity-0 group-hover:opacity-100 px-2 font-bold">
                                            <p className="hidden sm:block">點擊定位</p>
                                            <p className="text-2xl md:text-sm">↵</p>
                                            
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                )}
                <div className="flex w-full justify-end">
                    <button 
                        onClick={() => {setIsEditMode(!isEditMode)}}
                        className={`p-1.5 ${isEditMode ? "text-slate-400 bg-blue-400/60" : "text-white bg-blue-400/50"} flex items-center gap-1 hover:bg-blue-400 hover:text-slate-800 rounded`}
                    >
                        <Edit2 size={14}/>
                        {isEditMode ? "結束編輯" : "編輯"}
                    </button>
                </div>
                <div className={`flex flex-col gap-1 select-none transition-opacity duration-300 ${searchKeyword ? 'opacity-20 pointer-events-none' : 'opacity-100'}`}>
                    {project.phases.sort((a,b) => a.sortOrder - b.sortOrder).map((phase, phaseIdx) => {
                        const phaseTree = buildAssetTree(project.assets, phase.id);
                        const isExpanded = expandedNodes[phase.id];
                        return (
                            <div key={phase.id} className="mb-1">
                                <div className="flex items-center justify-between p-2.5 hover:bg-slate-100 dark:hover:bg-slate-500 cursor-pointer rounded-lg transition-colors group" onClick={() => toggleNode(phase.id)}>
                                    <div className="flex text-xl items-center gap-2 font-semibold text-slate-800 dark:text-white">
                                        <Milestone size={26} className="text-yellow-300" />
                                        {phase.name}
                                    </div>
                                    {isEditor && isEditMode && (
                                        <div className="flex gap-1">
                                            {/* Phase 排序按鈕 */}
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); handleReorderPhase(phaseIdx, 'up'); }}
                                                disabled={phaseIdx === 0}
                                                className="p-1.5 text-slate-400 hover:bg-white hover:text-slate-800 disabled:opacity-20 disabled:hover:text-slate-400 rounded"
                                            >
                                                <ArrowUp size={18} />
                                            </button>
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); handleReorderPhase(phaseIdx, 'down'); }}
                                                disabled={phaseIdx === project.phases.length - 1}
                                                className="p-1.5 text-slate-400 hover:bg-white hover:text-slate-800 disabled:opacity-20 disabled:hover:text-slate-400 rounded"
                                            >
                                                <ArrowDown size={18} />
                                            </button>
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); openAddAssetModal(phase.id, null); }}
                                                className="p-1.5 text-emerald-500 hover:bg-emerald-50 rounded"
                                                title="加入資源"
                                            >
                                                <PlusCircle size={18} />
                                            </button>
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); setEditingPhase(phase); setIsPhaseModalOpen(true);}}
                                                className="p-1.5 text-blue-500 hover:bg-blue-50 rounded"
                                            >
                                                <Edit2 size={18} />
                                            </button>
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); handleDeletePhase(phase.id); }}
                                                className="p-1.5 text-red-500 hover:bg-red-50 rounded"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                                {isExpanded && (
                                    <div className="ml-6 border-l border-white/10 mt-1 pb-2">
                                        {phaseTree.length > 0 ? phaseTree.map((node, idx) => (
                                            <AssetNode 
                                                key={node.id} node={node} depth={0} isEditor={isEditor} 
                                                expandedNodes={expandedNodes} onToggle={toggleNode} onAdd={openAddAssetModal} 
                                                draggedNode={draggedNode} 
                                                setDraggedNode={setDraggedNode}
                                                dropTarget={dropTarget} 
                                                setDropTarget={setDropTarget} 
                                                onDropNode={handleDropAsset}
                                                onDelete={handleRemoveAsset}
                                                onEdit={(n: any) => { setEditingAsset(n); setIsEditAssetModalOpen(true); }} 
                                                isEditMode={isEditMode}
                                            />
                                        )) : <div className="py-4 pl-10 text-xs text-gray-600 italic">此階段尚無資源</div>}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {/* Unclassified 區塊 */}
                    <div className="mt-6 pt-6 border-t border-white/5">
                        <div 
                            className="group flex items-center justify-between p-2.5 hover:bg-slate-100 dark:hover:bg-slate-500 cursor-pointer rounded-lg transition-colors"
                            onClick={() => toggleNode("unclassified")}
                        >
                            <div className="text-xl font-semibold flex items-center gap-2 font-medium text-slate-600 dark:text-white">
                            {expandedNodes["unclassified"] ? <FolderOpen size={26} className="text-yellow-400" /> : <Folder size={26} className="text-yellow-400" />}
                                未分類
                            </div>
                            {isEditor && (
                                <button 
                                    onClick={(e) => { e.stopPropagation(); openAddAssetModal(null, null); }}
                                    className="p-1.5 text-emerald-500 hover:bg-emerald-50 rounded"
                                    title="加入資源至未分類"
                                >
                                    <PlusCircle size={18} />
                                </button>
                            )}
                        </div>
                        {expandedNodes["unclassified"] && (
                            <div className="ml-6 border-l border-white/10">
                                {buildAssetTree(project.assets, null).map((node, idx, arr) => (
                                    <AssetNode 
                                        key={node.id} node={node} depth={0} isEditor={isEditor} 
                                        expandedNodes={expandedNodes} onToggle={toggleNode} onAdd={openAddAssetModal} 
                                        draggedNode={draggedNode} 
                                        setDraggedNode={setDraggedNode}
                                        dropTarget={dropTarget} 
                                        setDropTarget={setDropTarget} 
                                        onDropNode={handleDropAsset}
                                        onDelete={handleRemoveAsset}
                                        onEdit={(n: any) => { setEditingAsset(n); setIsEditAssetModalOpen(true); }} 
                                        isEditMode={isEditMode}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* --- Modals --- */}
            {/* 編輯資產 Modal */}
            <Modal placement="center" isOpen={isEditAssetModalOpen} onOpenChange={() => setIsEditAssetModalOpen(false)} classNames={{closeButton:"p-3 text-2xl"}} className="dark text-white bg-[#18181B] shadow-[inset_0px_2px_4px_rgba(255,255,255,0.4),inset_0px_-1px_2px_rgba(0,0,0,0.8),3px_3px_4px_rgba(0,0,0,0.4)]">
                <ModalContent>
                    <ModalHeader>Edit {editingAsset?.type}</ModalHeader>
                    <ModalBody>
                        <Input label="Name" variant="flat" value={editingAsset?.name || ""} onValueChange={(v) => setEditingAsset(prev => prev ? {...prev, name: v} : null)} classNames={{inputWrapper:"bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] text-black dark:text-white "}}/>
                        {editingAsset?.type === 'LINK' && (
                            <Input label="URL" variant="flat" value={editingAsset?.url || ""} onValueChange={(v) => setEditingAsset(prev => prev ? {...prev, url: v} : null)} classNames={{inputWrapper:"bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] text-black dark:text-white "}}/>
                        )}
                        <Textarea 
                            label="Description" 
                            variant="flat"
                            value={editingAsset?.description || ""} 
                            onValueChange={(v) => setEditingAsset(prev => prev ? {...prev, description: v} : null)} 
                            classNames={{inputWrapper:"bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] text-black dark:text-white "}}
                        />
                        
                    </ModalBody>
                    <ModalFooter>
                        <Button color="default" variant="flat" onClick={() => setIsEditAssetModalOpen(false)} className="hover-lift shadow-[inset_0px_2px_4px_rgba(255,255,255,0.4),inset_0px_-1px_2px_rgba(0,0,0,0.8)]">
                            Cancel
                        </Button>
                        <Button onClick={handleUpdateAssetInfo} className=" bg-[#D70036] text-white hover-lift shadow-[inset_0px_2px_4px_rgba(255,255,255,0.5),inset_0px_-1px_2px_rgba(0,0,0,0.8)]">
                            Save Changes
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* 其餘 Modal... */}
            <ProjectSettingsModal isOpen={isEditOpen} onOpenChange={onEditOpenChange} mode='edit' teamId={project.teamId} projectData={project} onSubmit={handleUpdateProject} />
            <Modal placement="center" isOpen={isPhaseModalOpen} onOpenChange={() => setIsPhaseModalOpen(false)} classNames={{closeButton:"p-3 text-2xl"}} className="dark text-white bg-[#18181B] shadow-[inset_0px_2px_4px_rgba(255,255,255,0.4),inset_0px_-1px_2px_rgba(0,0,0,0.8),3px_3px_4px_rgba(0,0,0,0.4)]">
                <ModalContent>
                    <ModalHeader>{editingPhase?.id ? "Edit Phase" : "New Phase"}</ModalHeader>
                    <ModalBody>
                        <Input label="Phase Name" value={editingPhase?.name} onValueChange={(v) => setEditingPhase(prev => ({...prev!, name: v}))} classNames={{inputWrapper:"bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] text-black dark:text-white "}} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="default" variant="flat" className="hover-lift shadow-[inset_0px_2px_4px_rgba(255,255,255,0.4),inset_0px_-1px_2px_rgba(0,0,0,0.8)]" onClick={() => setIsPhaseModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button 
                            color="primary" 
                            //當名稱為空或是只有空白鍵時，禁用按鈕
                            isDisabled={!editingPhase?.name?.trim()} 
                            onClick={handleSavePhase}
                            className="hover-lift shadow-[inset_0px_2px_4px_rgba(255,255,255,0.5),inset_0px_-1px_2px_rgba(0,0,0,0.8)]"
                        >
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Modal placement="center" isOpen={isAddAssetModalOpen} onOpenChange={() => setIsAddAssetModalOpen(false)} classNames={{closeButton:"p-3 text-2xl"}} className="dark text-white bg-[#18181B] shadow-[inset_0px_2px_4px_rgba(255,255,255,0.4),inset_0px_-1px_2px_rgba(0,0,0,0.8),3px_3px_4px_rgba(0,0,0,0.4)]">
                <ModalContent>
                    <ModalHeader>Add Asset</ModalHeader>
                    <ModalBody className="pb-8">
                        <Tabs color="danger" variant="underlined">
                            <Tab key="post" title="Post">
                                <div className="flex flex-col gap-2 mt-4 max-h-[40vh] overflow-y-auto">
                                    {availablePosts.map(p => (
                                        <div key={p.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 bg-[#27272A] shadow-[4px_4px_5px_rgba(0,0,0,0.32),inset_0px_2px_5px_rgba(255,255,255,0.25)] transition-all">
                                            <div className="flex items-center gap-3"><Box size={20} className="text-[#8DB2E8]" /><div className="overflow-hidden"><p className="text-sm font-medium truncate w-48">{p.title}</p><p className="text-[10px] text-gray-500 uppercase">{p.category}</p></div></div>
                                            <Button size="sm" className="bg-[#D70036] hover-lift shadow-[inset_0px_2px_4px_rgba(255,255,255,0.5),inset_0px_-1px_2px_rgba(0,0,0,0.8)] text-white font-bold" variant="flat" onClick={() => handleCreateAsset('POST', p.id)}>Add</Button>
                                        </div>
                                    ))}
                                </div>
                            </Tab>
                            <Tab key="folder" title="Folder">
                                <div className="flex flex-col gap-4 mt-4">
                                    <Input label="Name" variant="flat" value={newFolderName} onValueChange={setNewFolderName} classNames={{inputWrapper:"bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] text-black dark:text-white "}}/>
                                    <Textarea label="Description" placeholder="請描述此檔案" variant="flat" value={newFolderDescription} onValueChange={setNewFolderDescription} classNames={{inputWrapper:"bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] text-black dark:text-white "}}/>
                                    <Button className="bg-[#D70036] hover-lift shadow-[inset_0px_2px_4px_rgba(255,255,255,0.5),inset_0px_-1px_2px_rgba(0,0,0,0.8)] text-white font-bold" onClick={() => handleCreateAsset('FOLDER')} isDisabled={!newFolderName.trim()}>
                                        Create Folder
                                    </Button>
                                </div>
                            </Tab>
                            <Tab key="link" title="Link">
                                <div className="flex flex-col gap-4 mt-4">
                                    <Input label="Name" variant="flat" value={newLinkData.name} onValueChange={(v) => setNewLinkData(prev => ({...prev, name: v}))}  classNames={{inputWrapper:"bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] text-black dark:text-white "}}/>
                                    <Input label="URL" variant="flat" value={newLinkData.url} onValueChange={(v) => setNewLinkData(prev => ({...prev, url: v}))} classNames={{inputWrapper:"bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] text-black dark:text-white "}}/>
                                    <Textarea 
                                        label="Description" 
                                        placeholder="請描述此連結" 
                                        variant="flat" 
                                        value={newLinkData.description} 
                                        onValueChange={(v) => setNewLinkData(prev => ({...prev, description: v}))}
                                        classNames={{inputWrapper:"bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] text-black dark:text-white "}}
                                    />
                                    <Button className="bg-[#D70036] hover-lift shadow-[inset_0px_2px_4px_rgba(255,255,255,0.5),inset_0px_-1px_2px_rgba(0,0,0,0.8)] text-white font-bold" onClick={() => handleCreateAsset('LINK')} isDisabled={!newLinkData.name || !newLinkData.url}>
                                        Add Link
                                    </Button>
                                </div>
                            </Tab>
                        </Tabs>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
}