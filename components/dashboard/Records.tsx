"use client";

import React, { useEffect, useRef, useState, } from 'react';
import { useDisclosure, Select, SelectItem, Tabs, Tab, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, addToast } from '@heroui/react';
import { 
    Search, Check, Filter, ArrowUpDown, Edit2, Download, 
    Trash2, Box, Copy, Layers, Loader2, FileText, PenTool, Image as ImageIcon, FileBox, Link as LinkIcon,
    TriangleAlert,
    RefreshCcw,
    FileWarning,
    Lightbulb,
    Wrench
} from 'lucide-react';
import { deleteFileRecord, getFileDownloadUrl, getUserFilesForDashboard } from '@/lib/actions/file.action';
import Link from 'next/link';
import { classifyError } from '@/lib/utils/errorClassifier';
import { useNativeInView } from '@/hooks/useIntersectionObserver';

type RecordsProps = {
    workspaceId: string;
}

const Records = ( { workspaceId } : RecordsProps ) => {
    const [searchInput, setSearchInput] = useState<string>("");
    const [inputValue, setInputValue] = useState<string>("");
    const [category, setCategory] = useState<string>("ALL");
    const [isQueryArrange, setIsQueryArrange] = useState<string>("Newest");
    // "all" | "uploading" | "processing" | "completed" | "error"
    const [status, setStatus] = useState<string>("ALL");
    // FILES state
    const [files, setFiles] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [isFetchingNext, setIsFetchingNext] = useState<boolean>(false);

    // 觀察器 (用於無限滾動)
    const loadMoreRef = useRef<HTMLDivElement>(null); //ref 用來綁定底部的 DOM 元素
    const isIntersecting = useNativeInView(loadMoreRef, '400px');
    // 確認刪除modal
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modelToDelete, setModelToDelete] = useState<string | null>(null);
    const [modelIdToDelete, setModelIdToDelete] = useState<string | null>(null);
    // Error message modal
    const { 
        isOpen: isErrorOpen, 
        onOpen: onErrorOpen, 
        onOpenChange: onErrorOpenChange 
    } = useDisclosure(); 
    const [currentErrorMessage, setCurrentErrorMessage] = useState<string>("");
    const [currentErrorFileName, setCurrentErrorFileName] = useState<string>("");

    const [isGenerating, setIsGenerating] = useState<string | null>(null);

    // 1. 抓取第一頁 (當過濾條件改變時)
    const fetchInitialFiles = async () => {
        setLoading(true);
        // 參數順序：page, limit, category, sortBy, search, workspaceId, status
        const res = await getUserFilesForDashboard(workspaceId, category, isQueryArrange, status, inputValue, 1, 9);
        if (res?.success && res.data) {
            setFiles(res.data);
            setHasMore(res.hasMore);
            setPage(1); // 重置頁碼
        } else {
            setFiles([]);
            setHasMore(false);
        }
        setLoading(false);
    };

    // 2. 抓取下一頁 (當滾動到底部時)
    const fetchNextPage = async () => {
        if (!hasMore || isFetchingNext) return;
        setIsFetchingNext(true);
        const nextPage = page + 1;
        
        const res = await getUserFilesForDashboard(workspaceId, category, isQueryArrange, status, inputValue, nextPage, 9);
        if (res?.success && res.data) {
            setFiles(prev => [...prev, ...res.data]);
            setHasMore(res.hasMore);
            setPage(nextPage); // 更新頁碼
        }
        setIsFetchingNext(false);
    };
    
    // const fetchFiles = async () => {
    //     if(!hasMore || isFetchingNext) return;
    //     setIsFetchingNext(true);
    //     const nextPage = page + 1;
    //     setLoading(true);
    //     const res = await getUserFilesForDashboard(workspaceId, category, isQueryArrange, status, inputValue);
    //     if (res?.success && res.data) {
    //         setFiles(res.data);
    //     } else {
    //         setFiles([]);
    //     }
    //     setLoading(false);
    // };

    useEffect(() => {
        // 使用者每次打字，都會設定一個 300 毫秒後執行的計時器
        const timer = setTimeout(() => {
            setInputValue(searchInput); // 300 毫秒後，才真正把值交給 inputValue 觸發 API
        }, 300);

        // 如果在 300 毫秒內使用者又打了字，這個 return 函式會先被觸發，清掉上一個計時器
        return () => clearTimeout(timer);
    }, [searchInput]);

    useEffect(() => {
        fetchInitialFiles();
    }, [inputValue, status, isQueryArrange, category]);
    // 監聽無限滾動
    useEffect(() => {
        if (isIntersecting && hasMore && !loading && !isFetchingNext) {
            fetchNextPage();
        }
    }, [isIntersecting, hasMore, loading, page]);
    // 刪除確認邏輯
    const openDeleteModal = (name: string, id: string) => {
        setModelToDelete(name);
        setModelIdToDelete(id);
        onOpen();
    };
    const handleConfirmDelete = async () => {
        if (!modelToDelete || !modelIdToDelete) return;
        onOpenChange();
        
        await deleteFileRecord(modelIdToDelete);
        fetchInitialFiles();
    };
    const handleGetDownloadUrl = async (fileId: string, fileName: string) => {

        try {
            setIsGenerating(fileId); // 顯示該檔案正在準備中
            
            // 呼叫統一的 Server Action
            const urlResult = await getFileDownloadUrl(fileId, fileName);

            if (!urlResult.success || !urlResult.url) {
                addToast({ description: urlResult.error || "權限不足或檔案遺失，無法下載", color: "warning" });
                return;
            }

            // 建立隱藏 <a> 標籤觸發下載
            const a = document.createElement('a');
            a.href = urlResult.url;
            a.download = fileName; 
            // 避免因為 inline disposition 而無法強制下載，加上 target blank
            a.target = "_blank"; 
            document.body.appendChild(a);
            a.click();
            a.remove();
            
            addToast({
                description: `開始下載: ${fileName}`,
                color: "success"
            });
            
        } catch (error) {
            addToast({
                description: "下載失敗，請稍後再試。",
                color: "danger"
            });
            console.error("Download Error:", error);
        } finally {
            setIsGenerating(null);
        }
    };
    const openErrorModal = (fileName: string, errorMessage: string) => {
        setCurrentErrorFileName(fileName);
        setCurrentErrorMessage(errorMessage);
        onErrorOpen();
    };

    const filteredFiles = files.filter(file => {
        if (category === "ALL") return true;
        return file.category === category;
    });

    const getFileIcon = (fileCategory: string) => {
        switch(fileCategory) {
            case "MODEL_3D": return <Box className="w-6 h-6 text-blue-400"/>;
            case "DOCUMENT": return <FileText className="w-6 h-6 text-orange-400"/>;
            case "DRAWING": return <PenTool className="w-6 h-6 text-purple-400"/>;
            case "IMAGE": return <ImageIcon className="w-6 h-6 text-pink-400"/>;
            case "OTHER":
            default: return <FileBox className="w-6 h-6 text-gray-400"/>;
        }
    }

    const currentErrorInfo = currentErrorMessage
    ? classifyError(currentErrorMessage)
    : null;

    return (
        <div className="@container text-white flex flex-col w-full h-full font-inter gap-4 overflow-hidden">
            {/* 標題 */}
            {workspaceId === 'personal' &&
                <h1 className="text-3xl font-bold text-white">Records</h1>
            }
        
            {/* 工具列 */}
            <div className="flex flex-wrap items-start justify-start gap-3 mt-2">
                <div className="relative flex-1 min-w-[200px] max-w-xs">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search posts..."
                        value={searchInput}
                        onChange={(e) => {setSearchInput(e.target.value)}} 
                        className="w-full h-14 rounded-xl pl-9 pr-4 py-2 bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] focus:border-gray-500 text-sm"
                    />
                </div>
                {/* 狀態篩選 */}
                <Select 
                    aria-label="Status : " 
                    placeholder="Status"
                    labelPlacement='inside'
                    label="Status"
                    className="max-w-34 h-10 mb-4"
                    listboxProps={{
                        itemClasses:{
                            title: "text-white",
                        },
                    }}
                    classNames={{
                        trigger: "bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] rounded-xl text-white data-[hover=true]:bg-gray-600",
                        listbox: "bg-[#27272A]", // 下拉選單整體的背景
                        popoverContent: "bg-[#27272A] border-1 border-white/10", 
                    }}
                    selectedKeys={[status]}
                    onChange={(e) => {
                        const newStatus = e.target.value;
                        setStatus(newStatus || "ALL");
                    }}
                >
                    <SelectItem key="ALL" className="text-white">ALL</SelectItem>
                    <SelectItem key="uploading" className="text-white">Uploading</SelectItem>
                    <SelectItem key="processing" className="text-white">Processing</SelectItem>
                    <SelectItem key="completed" className="text-white">Completed</SelectItem>
                    <SelectItem key="error" className="text-white">Error</SelectItem>
                </Select>
                {/* 排序篩選 */}
                <Select 
                    aria-label="order by : " 
                    placeholder="order by"
                    labelPlacement='inside'
                    label="Order By"
                    className="max-w-40 h-10 mb-4"
                    listboxProps={{
                        itemClasses:{
                            title: "text-white",
                        },
                    }}
                    classNames={{
                        trigger: "bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] rounded-xl text-white data-[hover=true]:bg-gray-600",
                        listbox: "bg-[#27272A]", // 下拉選單整體的背景
                        popoverContent: "bg-[#27272A] border-1 border-white/10", 
                    }}
                    selectedKeys={[isQueryArrange]}
                    onChange={(e) => {
                        const newQueryArrange = e.target.value;
                        setIsQueryArrange(newQueryArrange || "Newest");
                    }}
                >
                    <SelectItem key="Newest" className="text-white">Newest</SelectItem>
                    <SelectItem key="Oldest" className="text-white">Oldest</SelectItem>
                    <SelectItem key="Size Big" className="text-white">Size Big</SelectItem>
                    <SelectItem key="Size Small" className="text-white">Size Small</SelectItem>
                </Select>

            </div>
            
            {/* 分類 Tabs */}
            <Tabs 
                aria-label="File Categories"
                selectedKey={category}
                onSelectionChange={(key) => setCategory(key.toString())}
                variant="underlined"
                classNames={{
                    tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                    cursor: "w-full bg-[#E5E7EB]",
                    tab: "max-w-fit px-0 h-12",
                    tabContent: "group-data-[selected=true]:text-[#E5E7EB] text-gray-500"
                }}
            >
                <Tab key="ALL" title="ALL" />
                <Tab key="MODEL_3D" title="3D Models" />
                <Tab key="DRAWING" title="Drawings" />
                <Tab key="DOCUMENT" title="Documents" />
                <Tab key="IMAGE" title="Images" />
                <Tab key="OTHER" title="Others" />
            </Tabs>

            {/* 檔案列表 */}
            <div className="max-h-[65dvh] flex-1 flex flex-col gap-3 overflow-y-auto min-h-0 pr-2">
                {loading ? (
                    <div className="flex justify-center items-center h-32">
                        <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                    </div>
                ) : filteredFiles.length > 0 ? (
                    <>
                        {filteredFiles.map((file) => (
                            <div key={file.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#18181B] rounded-xl shadow-[inset_0px_2px_4px_rgba(255,255,255,0.4),inset_0px_-1px_2px_rgba(0,0,0,0.8),3px_3px_4px_rgba(0,0,0,0.4)] gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 hidden md:block bg-[#27272A] rounded-lg">
                                        {getFileIcon(file.category)}
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="font-semibold text-white break-all">{file.name}</h3>
                                        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mt-1">
                                            <span>{file.category || "Uncategorized"}</span>
                                            <span>•</span>
                                            <span>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                                            <span>•</span>
                                            <span>{file.status}</span>
                                            <span>•</span>
                                            <span>{new Date(file.createdAt).toLocaleDateString()}</span>
                                        </div>
                                        {file.postId && file.post && (
                                            <div className="mt-1 flex items-center text-sm text-blue-400 hover:text-blue-300">
                                                <LinkIcon className="w-3 h-3 mr-1" />
                                                <Link href={`/post/${file.post.shortId}`} className="hover:underline line-clamp-1">
                                                    {file.post.title}
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 self-end sm:self-auto">
                                    {file.errorMessage && 
                                        <button onClick={() => openErrorModal(file.name, file.errorMessage)} className="p-2 hover:bg-yellow-400/30 rounded-lg transition-colors text-yellow-400 hover:text-white" title="ErrorMessage">
                                            <TriangleAlert className="w-4 h-4" />
                                        </button>
                                    }
                                    <button onClick={() => handleGetDownloadUrl(file.fileId, file.name)} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white" title="Download">
                                        <Download className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => openDeleteModal(file.name, file.fileId)} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white" title="Delete">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-gray-400 border border-dashed border-white/10 rounded-xl">
                        <Box className="w-12 h-12 mb-3 text-gray-500" />
                        <p>No files found.</p>
                    </div>
                )}

                {/* 底部 Loading 指示器與偵測點 */}
                <div ref={loadMoreRef} className="flex justify-center py-6 w-full h-10 shrink-0">
                    {isFetchingNext ? (
                        <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
                    ) : (
                        <div className="h-6 w-full" /> 
                    )}
                </div>
            </div>
            {/* 刪除確認 Modal  */}
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='center' classNames={{closeButton:"p-3 text-2xl"}} className="dark text-white bg-[#18181B] shadow-[inset_0px_2px_4px_rgba(255,255,255,0.4),inset_0px_-1px_2px_rgba(0,0,0,0.8),3px_3px_4px_rgba(0,0,0,0.4)]">
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader>Confirm Deletion</ModalHeader>
                    <ModalBody>
                        <p className="text-gray-400 whitespace-pre-line">Are you sure you want to delete this file?</p>
                        <p className="text-red-500 font-bold">This action cannot be undone.</p>              
                    </ModalBody>
                    <ModalFooter>
                        <Button color='default' variant="flat" onPress={onClose} className='text-white hover-lift shadow-[inset_0px_2px_4px_rgba(255,255,255,0.4),inset_0px_-1px_2px_rgba(0,0,0,0.8)]'>Cancel</Button>
                        <Button color="primary" onPress={handleConfirmDelete} className='hover-lift shadow-[inset_0px_2px_4px_rgba(255,255,255,0.5),inset_0px_-1px_2px_rgba(0,0,0,0.8)] text-white'>Delete</Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
            {/* 錯誤詳細資訊 Modal */}
            <Modal 
                isOpen={isErrorOpen} 
                onOpenChange={onErrorOpenChange} 
                size='lg'
                placement='center' 
                classNames={{closeButton:"p-3 text-2xl"}} 
                className="dark text-white bg-[#18181B] shadow-[inset_0px_2px_4px_rgba(255,255,255,0.4),inset_0px_-1px_2px_rgba(0,0,0,0.8),3px_3px_4px_rgba(0,0,0,0.4)]"
            >
                <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className={`flex gap-2 items-center ${
                            currentErrorInfo?.category === 'fatal' ? 'text-red-400' : 'text-yellow-400'
                        }`}>
                            {currentErrorInfo?.category === 'fatal' 
                                ? <FileWarning className="w-5 h-5" />
                                : <TriangleAlert className="w-5 h-5" />
                            }
                            {currentErrorInfo?.title || 'Processing Error'}
                        </ModalHeader>
                        <ModalBody>
                            <p className="text-sm text-gray-400 mb-2">
                                File: <span className="text-white font-medium">{currentErrorFileName}</span>
                            </p>

                            {/* 使用者友善說明（最重要） */}
                            {currentErrorInfo && (
                                <div className={`p-3 rounded-xl border mb-3 ${
                                    currentErrorInfo.category === 'fatal' 
                                        ? 'bg-red-500/10 border-red-500/30' 
                                        : 'bg-yellow-500/10 border-yellow-500/30'
                                }`}>
                                    <p className="flex items-center gap-1 text-sm text-white font-medium mb-1">
                                        <Lightbulb size={20} className='text-yellow-300'/> 建議解決方案
                                    </p>
                                    <p className="text-xs text-gray-300 leading-relaxed">
                                        {currentErrorInfo.description}
                                    </p>
                                    {currentErrorInfo.category === 'fatal' && (
                                        <ul className="mt-2 text-xs text-gray-400 list-disc list-inside space-y-0.5">
                                            <li>檢查 IFC 檔案在原軟體中是否能正常開啟</li>
                                            <li>清理模型中的退化幾何（過薄、自相交、零面積）</li>
                                            <li>嘗試匯出為 IFC4 格式（避免 IFC2x3 舊版相容性問題）</li>
                                            <li>移除非必要的 Family / Block 後重新匯出</li>
                                        </ul>
                                    )}
                                </div>
                            )}

                            {/* 原始錯誤訊息（給開發者 Debug 用，可折疊） */}
                            <details className="text-xs">
                                <summary className="flex items-center gap-1 text-gray-400 cursor-pointer hover:text-white mb-2 select-none">
                                    <Wrench size={16}/> 顯示原始錯誤訊息（供技術支援）
                                </summary>
                                <div className="bg-black/50 p-4 rounded-xl border border-white/5 font-mono text-xs text-red-400 whitespace-pre-wrap break-words max-h-40 overflow-y-auto">
                                    {currentErrorMessage}
                                </div>
                            </details>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color='default'
                                variant="flat"
                                onPress={onClose}
                                className='text-white hover-lift shadow-[inset_0px_2px_4px_rgba(255,255,255,0.4),inset_0px_-1px_2px_rgba(0,0,0,0.8)]'
                            >
                                Close
                            </Button>
                            {currentErrorInfo?.canRetry && (
                                <Button
                                    color='primary'
                                    onPress={onClose}
                                    className='hover-lift shadow-[inset_0px_2px_4px_rgba(255,255,255,0.5),inset_0px_-1px_2px_rgba(0,0,0,0.8)] text-white'
                                    startContent={<RefreshCcw className="w-4 h-4" />}
                                >
                                    {currentErrorInfo.actionText}
                                </Button>
                            )}
                        </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default Records;