"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { 
    ArrowUp, ArrowDown, ArrowLeft, Folder, FolderOpen, Box, 
    Plus, Edit2, Trash2, Link as LinkIcon, PlusCircle, 
    Milestone, ChevronRight, Globe
} from "lucide-react";
import { 
    getProjectDetails, createPhase, deletePhase, updatePhase,
    createProjectAsset, moveAssetToPhase, removeAssetFromProject,
    getAvailablePosts, deleteProject, updateProject,
    reorderPhases, reorderAssets, updateProjectAsset
} from "@/lib/actions/project.action"; 
import { Tabs, Tab, useDisclosure, addToast, Spinner, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input } from "@heroui/react";
import { ProjectStatus } from "@/prisma/generated/prisma";
import ProjectSettingsModal from "@/components/modals/ProjectSettingsModal";
import { checkUserTeamStatus, TeamAccessLevel } from "@/lib/actions/team.action";

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

// --- 遞迴渲染組件：AssetNode ---
const AssetNode = ({ 
    node, depth, isEditor, expandedNodes, onToggle, 
    onAdd, onEdit, onDelete , onReorder, totalInLevel, currentIndex 
}: any) => {
    const isExpanded = expandedNodes[node.id];
    const hasChildren = node.children && node.children.length > 0;

    return (
        <div className="flex flex-col">
            <div 
                className="group flex items-center justify-between py-2 pr-4 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                style={{ paddingLeft: `${depth * 1.5 + 1}rem` }}
                onClick={() => node.type === 'FOLDER' && onToggle(node.id)}
            >
                <div className="flex items-center gap-2 text-sm overflow-hidden">
                    {node.type === 'FOLDER' ? (
                        <>
                            {isExpanded ? <FolderOpen size={16} className="text-amber-400 shrink-0" /> : <Folder size={16} className="text-amber-400 shrink-0" />}
                            <span className="font-medium text-gray-200 truncate">{node.name}</span>
                        </>
                    ) : node.type === 'POST' ? (
                        <>
                            <Box size={16} className="text-[#8DB2E8] shrink-0" />
                            <Link href={`/post/${node.post?.shortId}`} className="hover:underline text-gray-300 truncate" onClick={(e)=>e.stopPropagation()}>
                                {node.name || node.post?.title}
                            </Link>
                        </>
                    ) : (
                        <>
                            <Globe size={16} className="text-emerald-400 shrink-0" />
                            <a href={node.url} target="_blank" className="hover:underline text-gray-300 truncate" onClick={(e)=>e.stopPropagation()}>
                                {node.name || '外部連結'}
                            </a>
                        </>
                    )}
                </div>

                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {isEditor && (
                        <>
                            {/* 資產排序 */}
                            <div className="flex gap-0.5 border-r border-white/10 pr-2 mr-1">
                                <button disabled={currentIndex === 0} onClick={(e) => { e.stopPropagation(); onReorder(node, 'up'); }} className="p-1 text-gray-500 hover:text-white disabled:opacity-10"><ArrowUp size={12}/></button>
                                <button disabled={currentIndex === totalInLevel - 1} onClick={(e) => { e.stopPropagation(); onReorder(node, 'down'); }} className="p-1 text-gray-500 hover:text-white disabled:opacity-10"><ArrowDown size={12}/></button>
                            </div>
                            {node.type === 'FOLDER' && (
                                <button onClick={(e) => { e.stopPropagation(); onAdd(node.phaseId, node.id); }} title="新增至此資料夾">
                                    <PlusCircle size={14} className="text-emerald-500 hover:text-emerald-400" />
                                </button>
                            )}
                            <button onClick={(e) => { e.stopPropagation(); onEdit(node); }}><Edit2 size={14} className="text-blue-400" /></button>
                            <button onClick={(e) => { e.stopPropagation(); onDelete(node.id); }}><Trash2 size={14} className="text-red-400" /></button>
                        </>
                    )}
                </div>
            </div>

            {node.type === 'FOLDER' && isExpanded && (
                <div className="flex flex-col">
                    {node.children.map((child: any, idx: number) => (
                        <AssetNode 
                            key={child.id} node={child} depth={depth + 1} isEditor={isEditor}
                            expandedNodes={expandedNodes} onToggle={onToggle} onAdd={onAdd} 
                            onEdit={onEdit} onDelete={onDelete} onReorder={onReorder} 
                            totalInLevel={node.children.length} currentIndex={idx} 
                        />
                    ))}
                    {!hasChildren && (
                        <div className="py-2 text-xs text-gray-600 italic" style={{ paddingLeft: `${(depth + 1) * 1.5 + 1}rem` }}>Empty folder</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default function ProjectDetailPage() {
    const router = useRouter();
    const params = useParams();
    const projectId = params.id as string;
    const teamIdRef = useRef<string | null>(null);

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
    const [newLinkData, setNewLinkData] = useState({ name: "", url: "" });

    const isFetchingRef = useRef<boolean>(false);
    const isSubmittingRef = useRef<boolean>(false);

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
                    const initialExpanded: Record<string, boolean> = { unclassified: true };
                    res.data.phases.forEach((p: any) => initialExpanded[p.id] = true);
                    setExpandedNodes(initialExpanded);
                }
            } finally { isFetchingRef.current = false; }
        };
        init();
    }, [projectId]);

    const isEditor = accessLevel === 'EDITOR_ACCESS';
    const toggleNode = (nodeId: string) => setExpandedNodes(prev => ({ ...prev, [nodeId]: !prev[nodeId] }));

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

    // 2. Asset 排序
    const handleReorderAsset = async (targetNode: ProjectAsset, direction: 'up' | 'down') => {
        if (!project || isSubmittingRef.current) return;
        const siblings = project.assets
            .filter(a => a.phaseId === targetNode.phaseId && a.parentId === targetNode.parentId)
            .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

        const currentIndex = siblings.findIndex(s => s.id === targetNode.id);
        const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
        if (targetIndex < 0 || targetIndex >= siblings.length) return;

        [siblings[currentIndex], siblings[targetIndex]] = [siblings[targetIndex], siblings[currentIndex]];
        const updatedOrders = siblings.map((s, i) => ({ id: s.id, sortOrder: i }));

        const newAssets = project.assets.map(a => {
            const match = updatedOrders.find(o => o.id === a.id);
            return match ? { ...a, sortOrder: match.sortOrder } : a;
        });
        setProject({ ...project, assets: newAssets });

        isSubmittingRef.current = true;
        await reorderAssets(updatedOrders);
        isSubmittingRef.current = false;
    };

    // 3. 資產編輯
    const handleUpdateAssetInfo = async () => {
        if (!editingAsset || isSubmittingRef.current) return;
        isSubmittingRef.current = true;
        const res = await updateProjectAsset(editingAsset.id, { 
            name: editingAsset.name, 
            url: editingAsset.url 
        });
        if (res.success) {
            setProject(prev => prev ? {
                ...prev,
                assets: prev.assets.map(a => a.id === editingAsset.id ? { ...a, name: editingAsset.name, url: editingAsset.url } : a)
            } : null);
            setIsEditAssetModalOpen(false);
            addToast({ title: "資產已更新", color: "success" });
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
        const res = await getAvailablePosts();
        if (res.success && res.data) setAvailablePosts(res.data);
    };

    const handleCreateAsset = async (type: 'FOLDER' | 'POST' | 'LINK', specificPostId?: string) => {
        if (isSubmittingRef.current) return;
        isSubmittingRef.current = true;
        const payload = {
            projectId, phaseId: targetContext.phaseId, parentId: targetContext.parentId,
            type, name: type === 'FOLDER' ? newFolderName : newLinkData.name,
            postId: specificPostId, url: newLinkData.url
        };
        const res = await createProjectAsset(payload);
        if (res.success) {
            const updated = await getProjectDetails(projectId);
            if (updated.data) setProject(updated.data as unknown as ProjectData);
            setNewFolderName(""); setNewLinkData({ name: "", url: "" });
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
                    <div>
                        <h1 className={`text-2xl font-bold ${!bgImageUrl ? "text-slate-500 dark:text-white " : "text-white "} flex items-center gap-2 mb-2`}>
                            📁 {project.name}
                        </h1>
                        <p className={`ml-9 text-sm ${!bgImageUrl ? "text-slate-500 dark:text-slate-300" : "text-slate-300"}`}>業主：{project.client ? project.client : "未知"}</p>
                        <p className={`ml-9 text-sm ${!bgImageUrl ? "text-slate-500 dark:text-slate-300" : "text-slate-300"}`}>地點：{project.location ? project.location : "未知"}</p>
                        <p className={`ml-9 text-sm ${!bgImageUrl ? "text-slate-500 dark:text-slate-300" : "text-slate-300"}`}>描述：{project.description ? project.description : "無描述"}</p>
                        <p className={`ml-9 text-sm ${!bgImageUrl ? "text-slate-500 dark:text-slate-300" : "text-slate-300"}`}>上傳時間：{project.createdAt ? new Date(project.createdAt).toLocaleDateString() + " " + new Date(project.createdAt).toLocaleTimeString() : ""}</p>
                        <p className={`ml-9 text-sm ${!bgImageUrl ? "text-slate-500 dark:text-slate-300" : "text-slate-300"}`}>最後編輯時間：{project.updatedAt ? new Date(project.updatedAt).toLocaleDateString() + " " + new Date(project.updatedAt).toLocaleTimeString() : ""}</p>                        
                    </div>
                </div>
                
                {isEditor && (
                    <div className="z-10 flex flex-col items-center gap-3">
                        {/* 新增階段按鈕 */}
                        <button 
                            onClick={() => { setEditingPhase({name: ""}); setIsPhaseModalOpen(true); }}  
                            className="flex items-center gap-2 hover-lift bg-slate-800 text-white px-4 py-2 rounded-lg text-sm shadow-[inset_0px_2px_4px_rgba(255,255,255,0.5),inset_0px_-1px_2px_rgba(0,0,0,0.8)] hover:bg-slate-700 transition-colors flex-shrink-0"
                        >
                            <Plus size={16} /> 新增階段
                        </button>
                        {/* 編輯專案按鈕 */}
                        <button 
                            onClick={onEditOpen}
                            className="hover-lift flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm shadow-[inset_0px_2px_4px_rgba(255,255,255,0.5),inset_0px_-1px_2px_rgba(0,0,0,0.8)] hover:bg-blue-100 dark:bg-blue-950/80 dark:text-blue-400 dark:hover:bg-blue-900/50 transition-colors flex-shrink-0"
                            title="編輯專案資訊"
                        >
                            <Edit2 size={16} /> 編輯資訊
                        </button>
                        {/* 刪除專案按鈕 */}
                        <button 
                            onClick={handleDeleteProject}
                            className="flex items-center gap-2 hover-lift bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm shadow-[inset_0px_2px_4px_rgba(255,255,255,0.5),inset_0px_-1px_2px_rgba(0,0,0,0.8)] hover:bg-red-100 dark:bg-red-950/50 dark:text-red-400 dark:hover:bg-red-900/50 transition-colors flex-shrink-0"
                            title="刪除此專案"
                        >
                            <Trash2 size={16} /> 刪除專案
                        </button>

                    </div>
                )}
            </div>

            {/* Tree Area */}
            <div className="bg-white dark:bg-black/50 rounded-xl shadow-sm  p-4 min-h-[400px]">
                <div className="flex flex-col gap-1 select-none">
                    {project.phases.sort((a,b) => a.sortOrder - b.sortOrder).map((phase, phaseIdx) => {
                        const phaseTree = buildAssetTree(project.assets, phase.id);
                        const isExpanded = expandedNodes[phase.id];
                        return (
                            <div key={phase.id} className="mb-1">
                                <div className="flex items-center justify-between p-2.5 hover:bg-slate-100 dark:hover:bg-slate-500 cursor-pointer rounded-lg transition-colors group" onClick={() => toggleNode(phase.id)}>
                                    <div className="flex text-lg items-center gap-2 font-medium text-slate-800 dark:text-white">
                                        <Milestone size={26} className="text-yellow-300" />
                                        {phase.name}
                                    </div>
                                    {isEditor && (
                                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            {/* Phase 排序按鈕 */}
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); handleReorderPhase(phaseIdx, 'up'); }}
                                                disabled={phaseIdx === 0}
                                                className="p-1.5 text-slate-400 hover:bg-white hover:text-slate-800 disabled:opacity-30 disabled:hover:text-slate-400 rounded"
                                            >
                                                <ArrowUp size={14} />
                                            </button>
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); handleReorderPhase(phaseIdx, 'down'); }}
                                                disabled={phaseIdx === project.phases.length - 1}
                                                className="p-1.5 text-slate-400 hover:bg-white hover:text-slate-800 disabled:opacity-30 disabled:hover:text-slate-400 rounded"
                                            >
                                                <ArrowDown size={14} />
                                            </button>
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); openAddAssetModal(phase.id, null); }}
                                                className="p-1.5 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded"
                                                title="加入資源"
                                            >
                                                <PlusCircle size={14} />
                                            </button>
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); setEditingPhase(phase); setIsPhaseModalOpen(true);}}
                                                className="p-1.5 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded"
                                            >
                                                <Edit2 size={14} />
                                            </button>
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); handleDeletePhase(phase.id); }}
                                                className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded"
                                            >
                                                <Trash2 size={14} />
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
                                                onDelete={handleRemoveAsset} onReorder={handleReorderAsset}
                                                onEdit={(n: any) => { setEditingAsset(n); setIsEditAssetModalOpen(true); }} 
                                                totalInLevel={phaseTree.length} currentIndex={idx}
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
                            <div className="flex items-center gap-2 font-medium text-slate-600 dark:text-white">
                            {expandedNodes["unclassified"] ? <FolderOpen size={26} className="text-yellow-400" /> : <Folder size={26} className="text-yellow-400" />}
                                未分類
                            </div>
                            <button 
                                onClick={(e) => { e.stopPropagation(); openAddAssetModal(null, null); }}
                                className="p-1.5 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                                title="加入資源至未分類"
                            >
                                <PlusCircle size={14} />
                            </button>
                        </div>
                        {expandedNodes["unclassified"] && (
                            <div className="ml-6 border-l border-white/10">
                                {buildAssetTree(project.assets, null).map((node, idx, arr) => (
                                    <AssetNode 
                                        key={node.id} node={node} depth={0} isEditor={isEditor} 
                                        expandedNodes={expandedNodes} onToggle={toggleNode} onAdd={openAddAssetModal} 
                                        onDelete={handleRemoveAsset} onReorder={handleReorderAsset}
                                        onEdit={(n: any) => { setEditingAsset(n); setIsEditAssetModalOpen(true); }} // 🚀 補上這裡！
                                        totalInLevel={arr.length} currentIndex={idx}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* --- Modals --- */}
            {/* 編輯資產 Modal */}
            <Modal isOpen={isEditAssetModalOpen} onOpenChange={() => setIsEditAssetModalOpen(false)} className="dark text-white bg-[#1C1C1F]">
                <ModalContent>
                    <ModalHeader>Edit {editingAsset?.type}</ModalHeader>
                    <ModalBody>
                        <Input label="Name" value={editingAsset?.name || ""} onValueChange={(v) => setEditingAsset(prev => prev ? {...prev, name: v} : null)} />
                        {editingAsset?.type === 'LINK' && (
                            <Input label="URL" value={editingAsset?.url || ""} onValueChange={(v) => setEditingAsset(prev => prev ? {...prev, url: v} : null)} />
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="light" onClick={() => setIsEditAssetModalOpen(false)}>Cancel</Button>
                        <Button color="danger" onClick={handleUpdateAssetInfo}>Save Changes</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* 其餘 Modal... */}
            <ProjectSettingsModal isOpen={isEditOpen} onOpenChange={onEditOpenChange} mode='edit' teamId={project.teamId} projectData={project} onSubmit={handleUpdateProject} />
            <Modal isOpen={isPhaseModalOpen} onOpenChange={() => setIsPhaseModalOpen(false)} className="dark text-white bg-[#1C1C1F]">
                <ModalContent>
                    <ModalHeader>{editingPhase?.id ? "Edit Phase" : "New Phase"}</ModalHeader>
                    <ModalBody>
                        <Input label="Phase Name" value={editingPhase?.name} onValueChange={(v) => setEditingPhase(prev => ({...prev!, name: v}))} />
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="light" onClick={() => setIsPhaseModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button 
                            color="danger" 
                            // 🚀 當名稱為空或是只有空白鍵時，禁用按鈕
                            isDisabled={!editingPhase?.name?.trim()} 
                            onClick={handleSavePhase}
                        >
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Modal isOpen={isAddAssetModalOpen} onOpenChange={() => setIsAddAssetModalOpen(false)} className="dark text-white bg-[#1C1C1F] max-w-lg scrollbar-hide"><ModalContent>
                <ModalHeader>Add Asset</ModalHeader>
                <ModalBody className="pb-8">
                    <Tabs color="danger" variant="underlined">
                        <Tab key="library" title="Library">
                            <div className="flex flex-col gap-2 mt-4 max-h-[40vh] overflow-y-auto">
                                {availablePosts.map(p => (
                                    <div key={p.id} className="flex items-center justify-between p-3 border border-white/5 rounded-xl hover:bg-white/5 transition-all">
                                        <div className="flex items-center gap-3"><Box size={20} className="text-[#8DB2E8]" /><div className="overflow-hidden"><p className="text-sm font-medium truncate w-48">{p.title}</p><p className="text-[10px] text-gray-500 uppercase">{p.category}</p></div></div>
                                        <Button size="sm" color="danger" variant="flat" onClick={() => handleCreateAsset('POST', p.id)}>Add</Button>
                                    </div>
                                ))}
                            </div>
                        </Tab>
                        <Tab key="folder" title="Folder"><div className="flex flex-col gap-4 mt-4"><Input label="Name" variant="bordered" value={newFolderName} onValueChange={setNewFolderName}/><Button className="bg-[#D70036] text-white font-bold" onClick={() => handleCreateAsset('FOLDER')} isDisabled={!newFolderName.trim()}>Create Folder</Button></div></Tab>
                        <Tab key="link" title="Link"><div className="flex flex-col gap-4 mt-4"><Input label="Name" variant="bordered" value={newLinkData.name} onValueChange={(v) => setNewLinkData(prev => ({...prev, name: v}))}/><Input label="URL" variant="bordered" value={newLinkData.url} onValueChange={(v) => setNewLinkData(prev => ({...prev, url: v}))}/><Button className="bg-[#D70036] text-white font-bold" onClick={() => handleCreateAsset('LINK')} isDisabled={!newLinkData.name || !newLinkData.url}>Add Link</Button></div></Tab>
                    </Tabs>
                </ModalBody>
            </ModalContent></Modal>
        </div>
    );
}