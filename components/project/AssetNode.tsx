"use client";

import React, { useEffect, useRef } from "react";
import { Folder, FolderOpen, Box, Globe, PlusCircle, Edit2, Trash2, GripVertical } from "lucide-react";
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
    setDragPreview: React.Dispatch<React.SetStateAction<{ x: number; y: number; label: string; type: 'FOLDER' | 'POST' | 'LINK' } | null>>;
    onDropNode: (dragged: any, target: any, position: 'before' | 'after' | 'inside') => void;
    getNodeById: (id: string) => any | null;
    isEditMode: boolean;
}

export default function AssetNode({
    node, depth, isEditor, expandedNodes, onToggle,
    onAdd, onEdit, onDelete,
    draggedNode, setDraggedNode, dropTarget, setDropTarget, setDragPreview, onDropNode, getNodeById,
    isEditMode
}: AssetNodeProps) {
    const isExpanded = expandedNodes[node.id];
    const hasChildren = node.children && node.children.length > 0;
    const canDrag = isEditor && isEditMode;
    const longPressTimerRef = useRef<number | null>(null);
    const activePointerIdRef = useRef<number | null>(null);
    const pointerDraggingRef = useRef(false);
    const suppressClickRef = useRef(false);
    const startPointRef = useRef<{ x: number; y: number } | null>(null);
    const pointerMoveHandlerRef = useRef<((event: PointerEvent) => void) | null>(null);
    const pointerUpHandlerRef = useRef<((event: PointerEvent) => void) | null>(null);

    const getAssetElement = () => document.getElementById(`asset-${node.id}`);
    const previewLabel = node.name || node.post?.title || '未命名資源';

    const clearLongPressTimer = () => {
        if (longPressTimerRef.current !== null) {
            window.clearTimeout(longPressTimerRef.current);
            longPressTimerRef.current = null;
        }
    };

    const removeDragVisual = () => {
        const el = getAssetElement();
        if (el) el.classList.remove('opacity-50');
    };

    const cleanupPointerListeners = () => {
        if (pointerMoveHandlerRef.current) {
            window.removeEventListener('pointermove', pointerMoveHandlerRef.current);
            pointerMoveHandlerRef.current = null;
        }
        if (pointerUpHandlerRef.current) {
            window.removeEventListener('pointerup', pointerUpHandlerRef.current);
            window.removeEventListener('pointercancel', pointerUpHandlerRef.current);
            pointerUpHandlerRef.current = null;
        }
    };

    const resetPointerDragState = () => {
        clearLongPressTimer();
        cleanupPointerListeners();
        activePointerIdRef.current = null;
        startPointRef.current = null;
        if (pointerDraggingRef.current) {
            pointerDraggingRef.current = false;
            setDraggedNode(null);
            setDropTarget(null);
            setDragPreview(null);
            removeDragVisual();
        }
    };

    const getDropPosition = (
        clientY: number,
        rect: DOMRect,
        targetType: 'FOLDER' | 'POST' | 'LINK'
    ): 'before' | 'after' | 'inside' => {
        const y = clientY - rect.top;
        const height = rect.height;

        if (y < height * 0.25) return 'before';
        if (y > height * 0.75) return 'after';
        return targetType === 'FOLDER' ? 'inside' : 'after';
    };

    const updatePointerDropTarget = (clientX: number, clientY: number) => {
        const hoveredElement = document
            .elementFromPoint(clientX, clientY)
            ?.closest('[data-asset-node-id]') as HTMLElement | null;

        if (!hoveredElement) {
            setDropTarget(null);
            return null;
        }

        const targetId = hoveredElement.dataset.assetNodeId;
        if (!targetId || targetId === node.id) {
            setDropTarget(null);
            return null;
        }

        const targetNode = getNodeById(targetId);
        if (!targetNode) {
            setDropTarget(null);
            return null;
        }

        const position = getDropPosition(clientY, hoveredElement.getBoundingClientRect(), targetNode.type);
        setDropTarget({ id: targetId, position });
        return { targetNode, position };
    };

    const autoScrollWindow = (clientY: number) => {
        const edgeThreshold = 88;
        const maxStep = 18;
        const viewportHeight = window.innerHeight;

        if (clientY < edgeThreshold) {
            const intensity = (edgeThreshold - clientY) / edgeThreshold;
            window.scrollBy({ top: -Math.max(6, Math.round(maxStep * intensity)) });
        } else if (clientY > viewportHeight - edgeThreshold) {
            const intensity = (clientY - (viewportHeight - edgeThreshold)) / edgeThreshold;
            window.scrollBy({ top: Math.max(6, Math.round(maxStep * intensity)) });
        }
    };

    // --- 拖曳事件處理 ---
    const handleDragStart = (e: React.DragEvent) => {
        if (!canDrag) return;
        e.stopPropagation();
        setDraggedNode(node);
        e.dataTransfer.effectAllowed = 'move';
        const transparentPixel = new Image();
        transparentPixel.src =
            "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        e.dataTransfer.setDragImage(transparentPixel, 0, 0);
        setDragPreview({
            x: e.clientX,
            y: e.clientY,
            label: previewLabel,
            type: node.type,
        });
        setTimeout(() => {
            const el = document.getElementById(`asset-${node.id}`);
            if (el) el.classList.add('opacity-50');
        }, 0);
    };

    const handleDragEnd = (e: React.DragEvent) => {
        e.stopPropagation();
        setDraggedNode(null);
        setDropTarget(null);
        setDragPreview(null);
        const el = document.getElementById(`asset-${node.id}`);
        if (el) el.classList.remove('opacity-50');
    };

    const handleDrag = (e: React.DragEvent) => {
        if (!canDrag) return;
        if (e.clientX === 0 && e.clientY === 0) return;
        setDragPreview({
            x: e.clientX,
            y: e.clientY,
            label: previewLabel,
            type: node.type,
        });
    };

    const handleDragOver = (e: React.DragEvent) => {
        if (!canDrag || !draggedNode || draggedNode.id === node.id) return;
        e.preventDefault(); 
        e.stopPropagation();
        setDragPreview(prev => prev ? {
            ...prev,
            x: e.clientX,
            y: e.clientY,
        } : prev);
        const position = getDropPosition(e.clientY, e.currentTarget.getBoundingClientRect(), node.type);
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
        setDragPreview(null);
    };

    const handleTouchLikePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
        if (!canDrag || e.pointerType === 'mouse') return;

        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.setPointerCapture(e.pointerId);
        activePointerIdRef.current = e.pointerId;
        startPointRef.current = { x: e.clientX, y: e.clientY };
        suppressClickRef.current = false;

        const handlePointerMove = (event: PointerEvent) => {
            if (event.pointerId !== activePointerIdRef.current) return;

            if (!pointerDraggingRef.current) {
                const startPoint = startPointRef.current;
                if (!startPoint) return;

                const movedX = Math.abs(event.clientX - startPoint.x);
                const movedY = Math.abs(event.clientY - startPoint.y);
                if (movedX > 8 || movedY > 8) {
                    resetPointerDragState();
                }
                return;
            }

            event.preventDefault();
            autoScrollWindow(event.clientY);
            setDragPreview({
                x: event.clientX,
                y: event.clientY,
                label: previewLabel,
                type: node.type,
            });
            updatePointerDropTarget(event.clientX, event.clientY);
        };

        const handlePointerUp = (event: PointerEvent) => {
            if (event.pointerId !== activePointerIdRef.current) return;

            const wasDragging = pointerDraggingRef.current;
            const dropResult = wasDragging
                ? updatePointerDropTarget(event.clientX, event.clientY)
                : null;

            resetPointerDragState();

            if (wasDragging && dropResult) {
                onDropNode(node, dropResult.targetNode, dropResult.position);
            }
        };

        pointerMoveHandlerRef.current = handlePointerMove;
        pointerUpHandlerRef.current = handlePointerUp;
        window.addEventListener('pointermove', handlePointerMove, { passive: false });
        window.addEventListener('pointerup', handlePointerUp);
        window.addEventListener('pointercancel', handlePointerUp);

        longPressTimerRef.current = window.setTimeout(() => {
            pointerDraggingRef.current = true;
            suppressClickRef.current = true;
            setDraggedNode(node);
            setDragPreview({
                x: startPointRef.current?.x ?? 0,
                y: startPointRef.current?.y ?? 0,
                label: previewLabel,
                type: node.type,
            });
            const el = getAssetElement();
            if (el) el.classList.add('opacity-50');
        }, 280);
    };

    const handleGripClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (suppressClickRef.current) {
            e.preventDefault();
            e.stopPropagation();
            suppressClickRef.current = false;
            return;
        }
        e.stopPropagation();
    };

    useEffect(() => {
        if (!canDrag) {
            resetPointerDragState();
            removeDragVisual();
        }
    }, [canDrag]);

    useEffect(() => {
        return () => {
            resetPointerDragState();
        };
    }, []);

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
                data-asset-node-id={node.id}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`group flex items-center justify-between py-2 pr-4 hover:bg-white/5 rounded-lg transition-colors ${node.type === 'FOLDER' ? 'cursor-pointer' : 'cursor-default'} ${dropStyles}`}
                style={{ paddingLeft: `${depth * 1.5 + 1}rem` }}
                onClick={() => node.type === 'FOLDER' && onToggle(node.id)}
            >
                <div className="flex text-md items-center gap-2 overflow-hidden">
                    {canDrag && (
                        <button
                            type="button"
                            draggable
                            onDragStart={handleDragStart}
                            onDrag={handleDrag}
                            onDragEnd={handleDragEnd}
                            onPointerDown={handleTouchLikePointerDown}
                            onClick={handleGripClick}
                            className="flex shrink-0 cursor-grab items-center justify-center rounded p-1 text-slate-400 transition-colors hover:bg-white/10 hover:text-slate-200 active:cursor-grabbing"
                            aria-label="拖移資源"
                            title="拖移資源"
                            style={{ touchAction: 'none' }}
                        >
                            <GripVertical size={16} />
                        </button>
                    )}
                    {node.type === 'FOLDER' ? (
                        <Tooltip placement="top" content={`資料夾描述:\n${node.description ? node.description : "無描述"}`} className="whitespace-pre-line text-white bg-black">
                            <div className="flex items-center gap-2 pointer-events-auto cursor-pointer">
                                {isExpanded ? <FolderOpen size={16} className="text-amber-400 shrink-0" /> : <Folder size={16} className="text-amber-400 shrink-0" />}
                                <span className="font-medium text-black dark:text-gray-200 truncate">{node.name}</span>
                            </div>
                        </Tooltip>
                    ) : node.type === 'POST' ? (
                        <Tooltip placement="top" content={`貼文描述:\n${node.description ? node.description : "無描述"}`} className="whitespace-pre-line text-white bg-black">
                            <div className="flex items-center gap-2 pointer-events-auto cursor-help">
                                <Box size={16} className="text-[#8DB2E8] shrink-0" />
                                <span className="hover:underline text-black dark:text-gray-300 truncate cursor-pointer" onClick={(e)=>{e.stopPropagation(); window.open(`/post/${node.post?.shortId}`, '_self');}}>
                                    {node.name || node.post?.title}
                                </span>
                            </div>
                        </Tooltip>
                    ) : (
                        <Tooltip placement="top" content={`連結描述:\n${node.description ? node.description : "無描述"}`} className="whitespace-pre-line text-white bg-black">
                            <div className="flex items-center gap-2 pointer-events-auto cursor-help">
                                <Globe size={16} className="text-emerald-400 shrink-0" />
                                <a href={node.url} target="_blank" rel="noreferrer" className="hover:underline text-black dark:text-gray-300 truncate cursor-pointer" onClick={(e)=>e.stopPropagation()}>
                                    {node.name || '外部連結'}
                                </a>
                            </div>
                        </Tooltip>
                    )}
                </div>

                <div className="flex items-center gap-2 transition-opacity">
                    {isEditor && isEditMode && (
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
                            dropTarget={dropTarget} setDropTarget={setDropTarget} setDragPreview={setDragPreview} onDropNode={onDropNode}
                            getNodeById={getNodeById}
                            isEditMode={isEditMode}
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
