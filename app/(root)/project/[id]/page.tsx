"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { Folder, FolderOpen, File, Box, Plus, Edit2, Trash2, Link as LinkIcon, PlusCircle } from "lucide-react";

// ⚠️ 請替換成你實際放 Server Actions 的路徑
import { 
    getProjectDetails, 
    createPhase, 
    deletePhase,
    updatePhase, // 這是我幫你擴充的，請見下方說明
    addPostToPhase,
    moveAssetToPhase,
    removeAssetFromProject,
    getAvailablePosts
} from "@/lib/actions/project.action"; 
import { Project, ProjectStatus } from "@/prisma/generated/prisma";

// --- 型別定義 (已根據你 Server Action 回傳的 include 結構更新) ---
type FileRecord = { id: string; name: string; category: string; /* ...其他欄位 */ };

type Post = {
    id: string;
    title: string;
    category: string;
    type: string;
    files?: FileRecord[]; // 根據你 getProjectDetails 裡的 include 擴充
};

type ProjectAsset = {
    id: string;
    phaseId: string | null;
    post: Post;
};

type Phase = {
    id: string;
    name: string;
    sortOrder: number;
};
type a = Project
type ProjectData = {
    id: string;
    name: string;
    description?: string;
    client?: string;
    location?: string;
    coverImage?: string;
    status: ProjectStatus;
    teamId: string;
    phases: Phase[];
    assets: ProjectAsset[];
};

export default function ProjectDetailPage() {
    const params = useParams();
    const projectId = params.id as string;

    // --- UI 渲染狀態 (useState) ---
    const [project, setProject] = useState<ProjectData | null>(null);
    const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({});
    
    // Modal 狀態
    const [isPhaseModalOpen, setIsPhaseModalOpen] = useState(false);
    const [editingPhaseId, setEditingPhaseId] = useState<string | null>(null);
    const [phaseFormName, setPhaseFormName] = useState("");

    // 資源選取 Modal 狀態 ---
    const [isAddAssetModalOpen, setIsAddAssetModalOpen] = useState<boolean>(false);
    const [targetPhaseIdForAsset, setTargetPhaseIdForAsset] = useState<string | null>(null);
    const [availablePosts, setAvailablePosts] = useState<Post[]>([]);

    // 使用 useRef 鎖定抓取 Post 資源庫的動作
    const isFetchingPostsRef = useRef(false);
    // --- 邏輯控制鎖定標記 (useRef，嚴格遵守不觸發渲染、不入依賴陣列的規範) ---
    const isFetchingRef = useRef(false);
    const isSubmittingRef = useRef(false);

    // 1. 載入專案資料 (改用 Server Action)
    useEffect(() => {
        if (!projectId || isFetchingRef.current) return;

        const fetchProject = async () => {
        isFetchingRef.current = true;
        try {
            const response = await getProjectDetails(projectId);
            
            if (response.success && response.data) {
            setProject(response.data as ProjectData); // 轉型確保 TS 不報錯

            // 預設展開所有資料夾
            const initialExpanded: Record<string, boolean> = { unclassified: true };
            response.data.phases.forEach((p: Phase) => (initialExpanded[p.id] = true));
            setExpandedNodes(initialExpanded);
            } else {
            console.error("專案載入失敗:", response.error);
            }
        } catch (error) {
            console.error("Server Action 執行錯誤:", error);
        } finally {
            isFetchingRef.current = false;
        }
        };

        fetchProject();
    }, [projectId]); 

    // 2. 切換資料夾展開/收合
    const toggleNode = (nodeId: string) => {
        setExpandedNodes((prev) => ({ ...prev, [nodeId]: !prev[nodeId] }));
    };

    // 3. 儲存階段 (新增或修改，改用 Server Action)
    const handleSavePhase = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isSubmittingRef.current || !phaseFormName.trim() || !project) return;

        isSubmittingRef.current = true;
        try {
        if (editingPhaseId) {
            // 編輯既有階段
            const res = await updatePhase(editingPhaseId, phaseFormName);
            if (res.success && res.data) {
            setProject((prev) => prev ? {
                ...prev, 
                phases: prev.phases.map(p => p.id === res.data.id ? res.data : p)
            } : null);
            closePhaseModal();
            }
        } else {
            // 新增階段
            const res = await createPhase(projectId, phaseFormName, project.phases.length);
            if (res.success && res.data) {
            setProject((prev) => prev ? {
                ...prev,
                phases: [...prev.phases, res.data]
            } : null);
            setExpandedNodes((prev) => ({ ...prev, [res.data.id]: true }));
            closePhaseModal();
            }
        }
        } catch (error) {
        console.error("儲存階段失敗", error);
        } finally {
        isSubmittingRef.current = false;
        }
    };

    // 4. 刪除階段 (改用 Server Action)
    const handleDeletePhase = async (phaseId: string) => {
        if (isSubmittingRef.current || !confirm("確定要刪除此階段嗎？階段內的資源將會移至未分類。")) return;

        isSubmittingRef.current = true;
        try {
        const res = await deletePhase(phaseId);

        if (res.success) {
            setProject((prev) => {
            if (!prev) return prev;
            // 將被刪除階段的資源 phaseId 設為 null (移至未分類)
            const updatedAssets = prev.assets.map(a => 
                a.phaseId === phaseId ? { ...a, phaseId: null } : a
            );
            return { 
                ...prev, 
                phases: prev.phases.filter(p => p.id !== phaseId),
                assets: updatedAssets
            };
            });
        }
        } catch (error) {
        console.error("刪除階段失敗", error);
        } finally {
        isSubmittingRef.current = false;
        }
    };

    // 5. 打開「加入資源」Modal 並獲取可用清單
    const openAddAssetModal = async (phaseId: string | null) => {
        setTargetPhaseIdForAsset(phaseId);
        setIsAddAssetModalOpen(true);

        if (isFetchingPostsRef.current) return;
        isFetchingPostsRef.current = true;
        
        try {
        const res = await getAvailablePosts();
        if (res.success && res.data) {
            // 過濾掉「已經在這個專案」裡的資源 (防呆)
            const currentPostIds = new Set(project?.assets.map(a => a.post.id));
            const filteredPosts = res.data.filter((p: Post) => !currentPostIds.has(p.id));
            setAvailablePosts(filteredPosts);
        }
        } catch (error) {
        console.error("無法取得可用資源", error);
        } finally {
        isFetchingPostsRef.current = false;
        }
    };

    // 6. 將選定的 Post 加入到 Phase
    const handleAddAssetToPhase = async (postId: string) => {
        if (isSubmittingRef.current || !project) return;
        
        isSubmittingRef.current = true;
        try {
        const res = await addPostToPhase(projectId, postId, targetPhaseIdForAsset);
        
        if (res.success && res.data) {
            // 成功後，將新資源塞入前端狀態
            setProject((prev) => prev ? {
                ...prev,
                assets: [...prev.assets, res.data as ProjectAsset]
            } : null);
            
            // 確保該資料夾是展開的
            const nodeKey = targetPhaseIdForAsset === null ? "unclassified" : targetPhaseIdForAsset;
            setExpandedNodes((prev) => ({ ...prev, [nodeKey]: true }));
            
            setIsAddAssetModalOpen(false);
        } else {
            alert(res.error || "加入資源失敗");
        }
        } catch (error) {
        console.error("加入資源失敗", error);
        } finally {
        isSubmittingRef.current = false;
        }
    };

    // 🌟 處理移除資源關聯
    const handleRemoveAsset = async (projectAssetId: string) => {
        if (isSubmittingRef.current || !confirm("確定要將此資源從專案中移除嗎？這不會刪除原始檔案。")) return;

        isSubmittingRef.current = true;
        try {
        const res = await removeAssetFromProject(projectAssetId);
        if (res.success) {
            // 從前端狀態中過濾掉該筆資源
            setProject((prev) => prev ? {
                ...prev,
                assets: prev.assets.filter(a => a.id !== projectAssetId)
            } : null);
        } else {
            alert(res.error || "移除失敗");
        }
        } catch (error) {
            console.error("移除資源出錯", error);
        } finally {
            isSubmittingRef.current = false;
        }
    };
    // 處理跨階段移動資源
    const handleMoveAsset = async (projectAssetId: string, newPhaseId: string) => {
        // 使用 useRef 鎖定，防止連點
        if (isSubmittingRef.current || !project) return;
        
        isSubmittingRef.current = true;
        const targetPhaseId = newPhaseId === "unclassified" ? null : newPhaseId;

        try {
            const res = await moveAssetToPhase(projectAssetId, targetPhaseId);
            
            if (res.success) {
                // 更新前端畫面狀態：將該資源的 phaseId 改為新的目標
                setProject((prev) => {
                if (!prev) return prev;
                const updatedAssets = prev.assets.map(asset => 
                    asset.id === projectAssetId ? { ...asset, phaseId: targetPhaseId } : asset
                );
                return { ...prev, assets: updatedAssets };
                });
            } else {
                alert(res.error || "移動失敗");
            }
        } catch (error) {
            console.error("移動資源失敗", error);
        } finally {
            isSubmittingRef.current = false;
        }
    };

    const openPhaseModal = (phase?: Phase) => {
        if (phase) {
            setEditingPhaseId(phase.id);
            setPhaseFormName(phase.name);
        } else {
            setEditingPhaseId(null);
            setPhaseFormName("");
        }
        setIsPhaseModalOpen(true);
    };

    const closePhaseModal = () => {
        setIsPhaseModalOpen(false);
        setEditingPhaseId(null);
        setPhaseFormName("");
    };

    if (!project) return <div className="flex justify-center items-center h-screen text-slate-500">載入專案中...</div>;

    const unclassifiedAssets = project.assets.filter((a) => a.phaseId === null);
    const getAssetsByPhase = (phaseId: string) => project.assets.filter((a) => a.phaseId === phaseId);

    const renderAssetItem = (asset: ProjectAsset) => {
        const isModel = asset.post.category === "MODEL_3D";
        // 判斷目前所在的階段，如果為 null 則是 'unclassified'
        const currentPhaseValue = asset.phaseId || "unclassified";
        return (
            <div key={asset.id} className="flex items-center justify-between py-2 pl-8 pr-4 hover:bg-slate-100 dark:hover:bg-slate-500 group border-l-2 border-transparent hover:border-blue-500 transition-colors">
                {/* 左側：連結至 Post 詳情頁面 */}
                <Link 
                    href={`/post/${asset.post.}`}
                    className="flex items-center gap-2 text-sm text-slate-700 hover:text-blue-600 transition-colors flex-1"
                >
                    {isModel ? <Box size={16} className="text-blue-500" /> : <File size={16} className="text-slate-400" />}
                    <span className="font-medium">{asset.post.title}</span>
                </Link>
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-white">
                    {isModel ? <Box size={16} className="text-blue-500" /> : <File size={16} className="text-slate-400" />}
                    <span>{asset.post.title}</span>
                </div>
                <div className="flex items-center gap-3">
                    {isModel && (
                        <button className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1">
                        [3D 瀏覽]
                        </button>
                    )}
                    <button className="text-xs text-slate-500 dark:text-white hover:text-slate-800 cursor-pointer dark:hover:text-slate-700 flex items-center gap-1">
                        <LinkIcon size={12} /> [分享]
                    </button>
                    <select 
                        value={currentPhaseValue}
                        onChange={(e) => handleMoveAsset(asset.id, e.target.value)}
                        className="text-xs border border-slate-200 rounded px-1 py-0.5 ml-2 text-slate-600 dark:text-white outline-none hover:border-blue-400 cursor-pointer"
                    >
                        {project.phases.map(p => (
                        <option key={p.id} value={p.id} className="bg-white  text-slate-500 dark:text-white dark:bg-slate-500">{p.name}</option>
                        ))}
                        <option value="unclassified" className="bg-white text-slate-500 dark:text-white dark:bg-slate-500">未分類</option>
                    </select>
                    <button 
                        onClick={() => handleRemoveAsset(asset.id)}
                        className="text-xs text-red-400 hover:text-red-600 cursor-pointer ml-2"
                    >
                        移除關聯
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="md:max-w-[90dvw] mx-auto p-6 border">
            {/* 頭部資訊區 */}
            <div className="bg-white dark:bg-black/50 rounded-xl shadow-sm  p-6 mb-6 flex justify-between items-start">
                <div>
                <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2 mb-2">
                    📁 {project.name}
                </h1>
                <p className="text-sm text-slate-500 dark:text-white">業主：{project.client ? project.client : "未知"}</p>
                <p className="text-sm text-slate-500 dark:text-white">地點：{project.location ? project.location : "未知"}</p>
                <p className="text-sm text-slate-500 dark:text-white">描述：{project.description ? project.description : "無描述"}</p>

                </div>
                <button 
                    onClick={() => openPhaseModal()}  
                    className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-700 transition-colors"
                >
                <Plus size={16} /> 新增階段
                </button>
            </div>

            {/* 樹狀列表區 */}
            <div className="bg-white dark:bg-black/50 rounded-xl shadow-sm  p-4">
                <div className="flex flex-col gap-1 select-none">
                
                {/* 1. 已建立的階段 */}
                {project.phases.sort((a, b) => a.sortOrder - b.sortOrder).map((phase) => {
                    const isExpanded = expandedNodes[phase.id];
                    const phaseAssets = getAssetsByPhase(phase.id);

                    return (
                    <div key={phase.id} className="mb-1">
                        <div 
                        className="flex items-center justify-between p-2.5 hover:bg-slate-100 dark:hover:bg-slate-500 cursor-pointer rounded-lg transition-colors group"
                        onClick={() => toggleNode(phase.id)}
                        >
                        <div className="flex items-center gap-2 font-medium text-slate-800 dark:text-white">
                            {isExpanded ? <FolderOpen size={18} className="text-amber-400" /> : <Folder size={18} className="text-amber-400" />}
                            {phase.name}
                            <span className="text-xs text-slate-400 font-normal ml-2">({phaseAssets.length})</span>
                        </div>
                        
                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button 
                                onClick={(e) => { e.stopPropagation(); openAddAssetModal(phase.id); }}
                                className="p-1.5 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded"
                                title="加入資源"
                            >
                                <PlusCircle size={14} />
                            </button>
                            <button 
                                onClick={(e) => { e.stopPropagation(); openPhaseModal(phase); }}
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
                        </div>
                        
                        {isExpanded && (
                        <div className="ml-5 mt-1 border-l-2 border-slate-100 pl-1 relative">
                            {phaseAssets.length > 0 ? (
                                    phaseAssets.map(renderAssetItem)
                                ) : (
                                    <div className="py-3 pl-8 text-sm text-slate-400 italic">此階段尚無資源</div>
                                )
                            }
                        </div>
                        )}
                    </div>
                    );
                })}

                {/* 2. 未分類節點 (PhaseId === null) */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                    <div 
                    className="flex items-center justify-between p-2.5 hover:bg-slate-100 cursor-pointer rounded-lg transition-colors"
                    onClick={() => toggleNode("unclassified")}
                    >
                        <div className="flex items-center gap-2 font-medium text-slate-600 dark:text-white">
                            {expandedNodes["unclassified"] ? <FolderOpen size={18} className="text-slate-400" /> : <Folder size={18} className="text-slate-400" />}
                            未分類
                            <span className="text-xs text-slate-400 font-normal ml-2">({unclassifiedAssets.length})</span>
                        </div>
                        <button 
                            onClick={(e) => { e.stopPropagation(); openAddAssetModal(null); }}
                            className="p-1.5 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                            title="加入資源至未分類"
                        >
                            <PlusCircle size={14} />
                        </button>
                    </div>
                    
                    {expandedNodes["unclassified"] && (
                    <div className="ml-5 mt-1 border-l-2 border-slate-100 pl-1">
                        {unclassifiedAssets.length > 0 ? (
                        unclassifiedAssets.map(renderAssetItem)
                        ) : (
                        <div className="py-3 pl-8 text-sm text-slate-400 italic">無未分類資源</div>
                        )}
                    </div>
                    )}
                </div>

                </div>
            </div>

            {/* --- 共用 Modal：新增/編輯階段 --- */}
            {isPhaseModalOpen && (
                <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50">
                <form onSubmit={handleSavePhase} className="bg-white dark:bg-black/50  p-6 rounded-xl shadow-xl w-full max-w-sm">
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                    {editingPhaseId ? "編輯專案階段" : "新增專案階段"}
                    </h2>
                    <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 dark:text-white mb-1">階段名稱</label>
                    <input 
                        autoFocus
                        type="text" 
                        placeholder="例如：概念設計階段" 
                        className="w-full border border-slate-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                        value={phaseFormName}
                        onChange={(e) => setPhaseFormName(e.target.value)}
                    />
                    </div>
                    <div className="flex justify-end gap-3">
                    <button 
                        type="button" 
                        onClick={closePhaseModal} 
                        className="px-4 py-2  text-slate-600 border hover:bg-slate-100 dark:hover:bg-slate-500 rounded-lg transition-colors font-medium"
                    >
                        取消
                    </button>
                    <button 
                        type="submit" 
                        className="px-4 py-2 bg-slate-800 dark:bg-red-300  text-white rounded-lg hover:bg-slate-700 transition-colors font-medium disabled:opacity-50"
                        disabled={!phaseFormName.trim()}
                    >
                        儲存
                    </button>
                    </div>
                </form>
                </div>
            )}
            {/* --- 從資源庫挑選 Post 加入 --- */}
            {isAddAssetModalOpen && (
                <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg max-h-[80vh] flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-slate-800">
                        加入資源至 {targetPhaseIdForAsset ? project.phases.find(p => p.id === targetPhaseIdForAsset)?.name : "未分類"}
                    </h2>
                    <button onClick={() => setIsAddAssetModalOpen(false)} className="text-slate-400 hover:text-slate-600">✕</button>
                    </div>
                    
                    <div className="overflow-y-auto flex-1 pr-2">
                    {availablePosts.length === 0 ? (
                        <div className="text-center py-8 text-slate-500">
                        {isFetchingPostsRef.current ? "載入資源庫中..." : "目前沒有可加入的資源，或所有資源皆已在此專案中。"}
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2">
                        {availablePosts.map(post => (
                            <div key={post.id} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg hover:border-blue-400">
                            <div className="flex items-center gap-3">
                                {post.category === "MODEL_3D" ? <Box size={20} className="text-blue-500" /> : <File size={20} className="text-slate-400" />}
                                <div>
                                <p className="text-sm font-medium text-slate-800">{post.title}</p>
                                <p className="text-xs text-slate-400">{post.category}</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => handleAddAssetToPhase(post.id)}
                                className="px-3 py-1.5 bg-blue-50 text-blue-600 text-xs font-medium rounded hover:bg-blue-600 hover:text-white transition-colors"
                            >
                                加入
                            </button>
                            </div>
                        ))}
                        </div>
                    )}
                    </div>
                </div>
                </div>
            )}
        </div>
    );
}