"use client";

import React, { useState, useEffect, useRef } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Checkbox,
    Spinner,
    Select,
    SelectItem,
} from "@heroui/react";
import { Search, Inbox, Rotate3D, File, Loader2 } from "lucide-react";
import { getPostsByScroll } from "@/lib/actions/post.action";
import PostCard from "../cards/PostCard";

export interface SelectedPost {
    id: string;
    title: string;
}

interface RelatedPostsModalProps {
    isOpen: boolean;
    onOpenChange: () => void;
    currentSelectedPosts: SelectedPost[];
    onConfirm: (SelectedPost: SelectedPost[]) => void;
    excludePostShortIds?: string[];
}

const RelatedPostsModal = ({ 
    isOpen, 
    onOpenChange, 
    currentSelectedPosts, 
    onConfirm, 
    excludePostShortIds = []
}: RelatedPostsModalProps) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [category, setCategory] = useState<string>("ALL");
    const [isQueryArrange, setIsQueryArrange] = useState<string>('Newest');
    
    const [posts, setPosts] = useState<any[]>([]); 
    const [isLoading, setIsLoading] = useState(false);
    
    const isFetchingRef = useRef(false);
    
    const [selectedIdSet, setSelectedIdSet] = useState<Set<string>>(
        new Set(currentSelectedPosts.map(p => p.id))
    );

    const [selectedPostsList, setSelectedPostsList] = useState<SelectedPost[]>(currentSelectedPosts);
    
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    // 移除原本的 useNativeInView 與 loadMoreRef

    useEffect(() => {
        if (isOpen) {
            setSelectedIdSet(new Set(currentSelectedPosts.map(p => p.id))); 
            setSelectedPostsList(currentSelectedPosts);
            setPage(1);
            setHasMore(true);
            setSearchQuery("");
            setCategory("ALL");
            setIsQueryArrange("Newest");
        }
    }, [isOpen, currentSelectedPosts]);

    useEffect(() => {
        if (!isOpen) return;
        
        const timer = setTimeout(() => {
            setPage(1);
            setHasMore(true);
            fetchPosts(1, true, searchQuery, category, isQueryArrange);
        }, 300); 

        return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery, category, isQueryArrange, isOpen]);

    const fetchPosts = async (currentPage: number, isReset: boolean = false, currentSearch: string = searchQuery, currentCategory: string = category, currentSort: string = isQueryArrange) => {
        
        if(!isReset && isFetchingRef.current) return;

        isFetchingRef.current = true;
        setIsLoading(true);
        
        if(isReset){
            setPosts([]);
        }

        try {
            const result = await getPostsByScroll(currentPage, 9, currentCategory, currentSort, currentSearch, "ALL", '', "ALL");
            if (result.success && result.data) {
                const filteredPosts = result.data.filter(post => !excludePostShortIds.includes(post.shortId));

                if (isReset) {
                    setPosts(filteredPosts);
                } else {
                    // 確保沒有重複的 key 渲染問題
                    setPosts(prev => {
                        const newPosts = filteredPosts.filter(fp => !prev.some(p => p.id === fp.id));
                        return [...prev, ...newPosts];
                    });
                }
                setHasMore(result.hasMore || false);
            }
        } catch (error) {
            console.error("Failed to fetch posts:", error);
        } finally {
            setIsLoading(false);
            isFetchingRef.current = false;
        }
    };

    // 🚀 這是新的滾動偵測邏輯：直接抓取 ModalBody 的滾動狀態
    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        
        // 當滾動到距離底部 200px 以內時，觸發載入下一頁
        if (scrollHeight - scrollTop <= clientHeight + 200) {
            if (hasMore && !isFetchingRef.current) {
                const nextPage = page + 1;
                setPage(nextPage);
                fetchPosts(nextPage, false, searchQuery, category, isQueryArrange);
            }
        }
    };

    const handleToggleSelection = (post: any) => {
        const newIdSet = new Set(selectedIdSet);
        let newList = [...selectedPostsList];

        if (newIdSet.has(post.id)) {
            newIdSet.delete(post.id);
            newList = newList.filter((p) => p.id !== post.id);
        } else {
            newIdSet.add(post.id);
            newList.push({ id: post.id, title: post.title });
        }
        setSelectedIdSet(newIdSet);
        setSelectedPostsList(newList);
    };

    const handleConfirm = (onClose: () => void) => {
        onConfirm(selectedPostsList);
        onClose();
    };

    return (
        <Modal 
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
            scrollBehavior="inside"
            placement="center"
            size="5xl"
            classNames={{
                wrapper:"z-999",
                backdrop:"z-998"
            }}
            className="dark bg-[#18181B] text-white shadow-[inset_0px_2px_4px_rgba(255,255,255,0.4),inset_0px_-1px_2px_rgba(0,0,0,0.8),3px_3px_4px_rgba(0,0,0,0.4)]"
        >
        <ModalContent>
            {(onClose) => (
            <>
                <ModalHeader className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold">Select Associated Posts</h2>
                    {/* ... (Search 和 Select 保持不變) ... */}
                    <Input
                        placeholder="Search by title..."
                        value={searchQuery}
                        onValueChange={setSearchQuery}
                        startContent={<Search size={16} className="text-zinc-400" />}
                        classNames={{
                            inputWrapper: "bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] hover:bg-[#3F3F46] focus-within:!bg-[#3F3F46]",
                            input: "text-white"
                        }}
                    />
                    <div className="flex gap-2 ">
                        <Select 
                            label="Choose a category : " 
                            labelPlacement="inside"
                            placeholder="Select a category"
                            className="max-w-xs"
                            classNames={{
                                trigger: "bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] rounded-xl text-white data-[hover=true]:bg-gray-600",
                                listbox: "bg-[#27272A]", 
                                popoverContent: "bg-[#27272A] border-1 border-white/10", 
                            }}
                            selectedKeys={[category]}
                            onChange={(e) => setCategory(e.target.value || "ALL")}
                        >
                            <SelectItem key="ALL" className="text-white">ALL</SelectItem>
                            <SelectItem key="Buildings" className="text-white">Buildings</SelectItem>
                            <SelectItem key="Products" className="text-white">Products</SelectItem>
                            <SelectItem key="Elements" className="text-white">Elements</SelectItem>
                            <SelectItem key="2D Drawings" className="text-white">2D Drawings</SelectItem>
                        </Select>
                        <Select 
                            label="order by : " 
                            labelPlacement="inside"
                            placeholder="order by"
                            className="max-w-30 h-10"
                            classNames={{
                                trigger: "bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] rounded-xl text-white data-[hover=true]:bg-gray-600",
                                listbox: "bg-[#27272A]", 
                                popoverContent: "bg-[#27272A] border-1 border-white/10", 
                            }}
                            selectedKeys={[isQueryArrange]}
                            onChange={(e) => setIsQueryArrange(e.target.value || "Newest")}
                        >
                            <SelectItem key="Newest" className="text-white">Newest</SelectItem>
                            <SelectItem key="Hottest" className="text-white">Hottest</SelectItem>
                        </Select>
                    </div>
                </ModalHeader>
                
                {/* 🚀 綁定 onScroll 事件到這個會產生捲軸的元素上 */}
                <ModalBody 
                    className="max-h-[500px] overflow-y-auto"
                    onScroll={handleScroll}
                >
                    {isLoading && page === 1 ? (
                        <div className="flex justify-center items-center h-full"><Spinner color="white"/></div>
                    ) : posts.length === 0 ? (
                        <p className="text-center text-zinc-500 py-10">No posts found.</p>
                    ) : (
                        <div className="flex flex-wrap max-sm:justify-center gap-2">
                            {posts.map((post) => (
                                <div 
                                    key={post.id}
                                    onClick={() => handleToggleSelection(post)}
                                    className={`relative flex items-center cursor-pointer transition-colors rounded-2xl
                                        ${selectedIdSet.has(post.id) 
                                        ? 'bg-[#3F3F46]/50 border-primary' 
                                        : 'bg-[#27272A] border-transparent hover:border-zinc-600'}`}
                                >
                                    <Checkbox 
                                        isSelected={selectedIdSet.has(post.id)}
                                        onValueChange={() => handleToggleSelection(post)}
                                        color="primary"
                                        className="shrink-0 absolute bottom-5.5 left-3 z-50"
                                    />
                                    
                                    <PostCard 
                                        key={post.id}
                                        dbId={post.id}
                                        shortId={post.shortId}
                                        coverImage={post.coverImage}
                                        type={post.type}
                                        title={post.title}
                                        clickable={false}
                                        isCollectedInitial={post.isCollected}
                                        teamColor={post.team?.color}
                                        teamName={post.team?.name}
                                    />
                                </div>
                            ))}
                            
                            {/* 狀態提示區 */}
                            <div className='flex w-full justify-center py-4 h-10'>
                                {isLoading && page > 1 && (
                                <div className="flex items-center gap-2 text-zinc-400">
                                    <Loader2 className="animate-spin w-4 h-4" />
                                    <span className="text-sm">Loading more...</span>
                                </div>
                                )}
                                {!hasMore && posts.length > 0 && (
                                <p className='text-xs text-zinc-500'>
                                    You have reached the end.
                                </p>
                                )}
                            </div>
                        </div>
                    )}
                </ModalBody>
                
                <ModalFooter className="flex justify-between items-center">
                    {/* ... (Footer 保持不變) ... */}
                    <span className="text-sm text-zinc-400">
                        {selectedIdSet.size} model(s) selected
                    </span>
                    <div className="flex gap-2">
                        <Button variant="light" onPress={onClose} className="text-white shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_4px_2px_#FFFFFF33]">
                            Cancel
                        </Button>
                        <Button color="primary" onPress={() => handleConfirm(onClose)} className="shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_4px_2px_#FFFFFF33]">
                            Confirm Selection
                        </Button>
                    </div>
                </ModalFooter>
            </>
            )}
        </ModalContent>
        </Modal>
    );
};

export default RelatedPostsModal;