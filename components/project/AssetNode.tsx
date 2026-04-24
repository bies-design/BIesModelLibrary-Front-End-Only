"use client";

import React from "react";
import { Folder, FolderOpen, Box, Globe, PlusCircle, Edit2, Trash2 } from "lucide-react";
import { Tooltip } from "@heroui/react";

// 定義 Props 型別，確保 TypeScript 不會報錯
export interface AssetNodeProps {
    node: any; 
    depth: number;
    isEditor: boolean;
    expandedNodes: Record<string, boolean>;
    onToggle: (id: string) => void;
    onAdd: (phaseId: string | null, parentId: string | null) => void;
    onEdit: (node: any) => void;
    onDelete: (id: string) => void;
    draggedNode: any;
    setDraggedNode: React.Dispatch<React.SetStateAction<any>>;
    dropTarget: { id: string; position: 'before' | 'after' | 'inside' } | null;
    setDropTarget: React.Dispatch<React.SetStateAction<{ id: string; position: 'before' | 'after' | 'inside' } | null>>;
    onDropNode: (dragged: any, target: any, position: 'before' | 'after' | 'inside') => void;
}

export default function AssetNode({
    node, depth, isEditor, expandedNodes, onToggle,
    onAdd, onEdit, onDelete,
    draggedNode, setDraggedNode, dropTarget, setDropTarget, onDropNode
}: AssetNodeProps) {
    const isExpanded = expandedNodes[node.id];
    const hasChildren = node.children && node.children.length > 0;

    // --- 拖曳事件處理 ---
    const handleDragStart = (e: React.DragEvent) => {
        if (!isEditor) return;
        e.stopPropagation();
        setDraggedNode(node);
        e.dataTransfer.effectAllowed = 'move';
        setTimeout(() => {
            const el = document.getElementById(`asset-${node.id}`);
            if (el) el.classList.add('opacity-50');
        }, 0);
    };

    const handleDragEnd = (e: React.DragEvent) => {
        e.stopPropagation();
        setDraggedNode(null);
        setDropTarget(null);
        const el = document.getElementById(`asset-${node.id}`);
        if (el) el.classList.remove('opacity-50');
    };

    const handleDragOver = (e: React.DragEvent) => {
        if (!isEditor || !draggedNode || draggedNode.id === node.id) return;
        e.preventDefault(); 
        e.stopPropagation();

        const rect = e.currentTarget.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const height = rect.height;
        
        let position: 'before' | 'after' | 'inside' = 'inside';
        
        if (y < height * 0.25) {
            position = 'before';
        } else if (y > height * 0.75) {
            position = 'after';
        } else {
            position = node.type === 'FOLDER' ? 'inside' : 'after';
        }

        setDropTarget({ id: node.id, position });
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.stopPropagation();
        if (dropTarget?.id === node.id) {
            setDropTarget(null);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (draggedNode && dropTarget && draggedNode.id !== node.id) {
            onDropNode(draggedNode, node, dropTarget.position);
        }
        setDropTarget(null);
        setDraggedNode(null);
    };

    // 視覺回饋樣式 (使用 if 判斷，語法更清晰)
    let dropStyles = 'border-y-2 border-transparent';
    if (dropTarget && dropTarget.id === node.id) {
        if (dropTarget.position === 'before') dropStyles = 'border-t-2 border-blue-500 rounded-t-none';
        else if (dropTarget.position === 'after') dropStyles = 'border-b-2 border-blue-500 rounded-b-none';
        else if (dropTarget.position === 'inside') dropStyles = 'bg-blue-500/20 ring-1 ring-blue-500';
    }
    return (
        <div className="flex flex-col">
            <div 
                id={`asset-${node.id}`}
                draggable={isEditor}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`group flex items-center justify-between py-2 pr-4 hover:bg-white/5 rounded-lg transition-colors ${isEditor ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'} ${dropStyles}`}
                style={{ paddingLeft: `${depth * 1.5 + 1}rem` }}
                onClick={() => node.type === 'FOLDER' && onToggle(node.id)}
            >
                <div className="flex text-md items-center gap-2 overflow-hidden pointer-events-none">
                    {node.type === 'FOLDER' ? (
                        <Tooltip placement="top" content={`資料夾描述:\n${node.description ? node.description : "無描述"}`} className="whitespace-pre-line text-white bg-black">
                            <div className="flex items-center gap-2 pointer-events-auto cursor-pointer">
                                {isExpanded ? <FolderOpen size={16} className="text-amber-400 shrink-0" /> : <Folder size={16} className="text-amber-400 shrink-0" />}
                                <span className="font-medium text-gray-200 truncate">{node.name}</span>
                            </div>
                        </Tooltip>
                    ) : node.type === 'POST' ? (
                        <Tooltip placement="top" content={`貼文描述:\n${node.description ? node.description : "無描述"}`} className="whitespace-pre-line text-white bg-black">
                            <div className="flex items-center gap-2 pointer-events-auto cursor-help">
                                <Box size={16} className="text-[#8DB2E8] shrink-0" />
                                <span className="hover:underline text-gray-300 truncate cursor-pointer" onClick={(e)=>{e.stopPropagation(); window.open(`/post/${node.post?.shortId}`, '_self');}}>
                                    {node.name || node.post?.title}
                                </span>
                            </div>
                        </Tooltip>
                    ) : (
                        <Tooltip placement="top" content={`連結描述:\n${node.description ? node.description : "無描述"}`} className="whitespace-pre-line text-white bg-black">
                            <div className="flex items-center gap-2 pointer-events-auto cursor-help">
                                <Globe size={16} className="text-emerald-400 shrink-0" />
                                <a href={node.url} target="_blank" rel="noreferrer" className="hover:underline text-gray-300 truncate cursor-pointer" onClick={(e)=>e.stopPropagation()}>
                                    {node.name || '外部連結'}
                                </a>
                            </div>
                        </Tooltip>
                    )}
                </div>

                <div className="flex items-center gap-2 transition-opacity">
                    {isEditor && (
                        <>
                            {node.type === 'FOLDER' && (
                                <button onClick={(e) => { e.stopPropagation(); onAdd(node.phaseId, node.id); }} title="新增至此資料夾">
                                    <PlusCircle size={16} className="text-emerald-500 hover:text-emerald-400" />
                                </button>
                            )}
                            <button onClick={(e) => { e.stopPropagation(); onEdit(node); }}>
                                <Edit2 size={16} className="text-blue-400" />
                            </button>
                            <button onClick={(e) => { e.stopPropagation(); onDelete(node.id); }}>
                                <Trash2 size={16} className="text-red-400" />
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* 遞迴渲染子節點 */}
            {node.type === 'FOLDER' && isExpanded && (
                <div className="flex flex-col">
                    {node.children.map((child: any) => (
                        <AssetNode 
                            key={child.id} node={child} depth={depth + 1} isEditor={isEditor}
                            expandedNodes={expandedNodes} onToggle={onToggle} onAdd={onAdd} 
                            onEdit={onEdit} onDelete={onDelete} 
                            draggedNode={draggedNode} setDraggedNode={setDraggedNode}
                            dropTarget={dropTarget} setDropTarget={setDropTarget} onDropNode={onDropNode}
                        />
                    ))}
                    {!hasChildren && (
                        <div className="py-2 text-sm text-gray-600 italic" style={{ paddingLeft: `${(depth + 1) * 1.5 + 1}rem` }}>空的資料夾，拖曳資源至此</div>
                    )}
                </div>
            )}
        </div>
    );
}