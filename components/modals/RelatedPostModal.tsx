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
import Image from "next/image";
import { getPostsByScroll } from "@/lib/actions/post.action";
import PostCard from "../cards/PostCard";
import { useNativeInView } from '@/hooks/useIntersectionObserver';

// 假設你有一個 Server Action 或 API 可以撈取所有的 Posts
// import { getAllPostsForSelection } from "@/lib/actions/post.action"; 

interface RelatedPostsModalProps {
    isOpen: boolean;
    onOpenChange: () => void;
    currentSelectedIds: string[];
    onConfirm: (selectedIds: string[]) => void;
}

const RelatedPostsModal = ({ isOpen, onOpenChange, currentSelectedIds, onConfirm }: RelatedPostsModalProps) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [category, setCategory] = useState<string>("ALL");
    const [posts, setPosts] = useState<any[]>([]); // 儲存從資料庫撈回來的貼文
    const [isLoading, setIsLoading] = useState(false);
    
    // 使用 Set 來管理選中的狀態，尋找與刪除的效能更好 (O(1))
    const [selectedSet, setSelectedSet] = useState<Set<string>>(new Set(currentSelectedIds));

    // for infinite scrolling
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    // DOM 參考與偵測
    const loadMoreRef = useRef<HTMLDivElement>(null);
    const isIntersecting = useNativeInView(loadMoreRef, '200px'); //

    // 當 Modal 打開時，撈取資料並同步初始狀態
    useEffect(() => {
        if (isOpen) {
            setSelectedSet(new Set(currentSelectedIds)); // 每次打開都重置為父層傳進來的狀態
            setPage(1);
            setHasMore(true);
            setSearchQuery("");
            setCategory("ALL");
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;
        
        // 使用 setTimeout 做簡單的 Debounce，讓使用者打完字再搜尋
        const timer = setTimeout(() => {
            setPage(1);
            setHasMore(true);
            fetchPosts(1, true, searchQuery, category);
        }, 300); 

        return () => clearTimeout(timer);
    }, [searchQuery, category, isOpen]);

    const fetchPosts = async (currentPage: number, isReset: boolean = false, currentSearch: string = searchQuery,currentCategory: string = category) => {
        setIsLoading(true);
        try {
            const result = await getPostsByScroll(currentPage, 10, currentCategory, "Newest", currentSearch);
            if (result.success && result.data) {
                if (isReset) {
                setPosts(result.data);
                } else {
                setPosts(prev => [...prev, ...result.data!]);
                }
                setHasMore(result.hasMore || false);
            }
        } catch (error) {
            console.error("Failed to fetch posts:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // 監聽是否滾到底部，觸發載入下一頁
    useEffect(() => {
        if(!isOpen) return;
        if (isIntersecting && hasMore && !isLoading) {
            const nextPage = page + 1;
            setPage(nextPage);
            fetchPosts(nextPage, false, searchQuery,category);
        }
    }, [isIntersecting, hasMore, isLoading, isOpen]);

    // 處理 Checkbox 的勾選/取消
    const handleToggleSelection = (id: string) => {
        const newSet = new Set(selectedSet);
        if (newSet.has(id)) {
        newSet.delete(id);
        } else {
        newSet.add(id);
        }
        setSelectedSet(newSet);
    };

    const handleConfirm = (onClose: () => void) => {
        // 將 Set 轉回 Array，傳給父層的表單狀態
        onConfirm(Array.from(selectedSet));
        onClose();
    };

    return (
        <Modal 
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
            scrollBehavior="inside"
            placement="center"
            size="5xl"
            className="bg-[#18181B] text-white  border-[#27272A]"
        >
        <ModalContent>
            {(onClose) => (
            <>
                <ModalHeader className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold">Select Associated Posts</h2>
                    <Input
                        placeholder="Search by title..."
                        value={searchQuery}
                        onValueChange={setSearchQuery}
                        startContent={<Search size={16} className="text-zinc-400" />}
                        classNames={{
                            inputWrapper: "bg-[#27272A] hover:bg-[#3F3F46] focus-within:!bg-[#3F3F46]",
                            input: "text-white"
                        }}
                    />

                    <Select 
                        label="Choose a category : " 
                        labelPlacement="outside-left"
                        placeholder="Select a category"
                        className="max-w-xs"
                        classNames={{
                            label: "text-lg",
                            trigger: " rounded-xl text-white data-[hover=true]:bg-gray-600",
                            listbox: "bg-[#27272A]", // 下拉選單整體的背景
                            popoverContent: "bg-[#27272A] border-1 border-white/10", 
                        }}
                        selectedKeys={[category]}
                        onChange={(e) => {
                            const newCategory = e.target.value;
                            setCategory(newCategory || "ALL");
                        }}
                    >
                        <SelectItem key="ALL" className="text-white data-[hover=true]:bg-primary">ALL</SelectItem>
                        <SelectItem key="Buildings" className="text-white data-[hover=true]:bg-primary">Buildings</SelectItem>
                        <SelectItem key="Products" className="text-white data-[hover=true]:bg-primary">Products</SelectItem>
                        <SelectItem key="Elements" className="text-white data-[hover=true]:bg-primary">Elements</SelectItem>
                        <SelectItem key="2D Drawings" className="text-white data-[hover=true]:bg-primary">2D Drawings</SelectItem>
                    </Select>
                    
                </ModalHeader>
                <ModalBody className="max-h-[500px] overflow-y-auto">
                    {isLoading && page === 1 ? (
                        <div className="flex justify-center items-center h-full"><Spinner color="white"/></div>
                    ) : posts.length === 0 ? (
                        <p className="text-center text-zinc-500 py-10">No posts found.</p>
                    ) : (
                        <div className="flex flex-wrap max-sm:justify-center gap-2">
                            {posts.map((post) => (
                                <div 
                                    key={post.id}
                                    onClick={() => handleToggleSelection(post.id)}
                                    className={`relative flex items-center cursor-pointer transition-colors rounded-2xl
                                        ${selectedSet.has(post.id) 
                                        ? 'bg-[#3F3F46]/50 border-primary' 
                                        : 'bg-[#27272A] border-transparent hover:border-zinc-600'}`}
                                >
                                    <Checkbox 
                                        isSelected={selectedSet.has(post.id)}
                                        onValueChange={() => handleToggleSelection(post.id)}
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
                                    />
                                </div>
                            ))}
                            {/* 放置於清單最底部的偵測點與載入動畫 */}
                            <div ref={loadMoreRef} className='flex justify-center py-4 h-10'>
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
                <span className="text-sm text-zinc-400">
                    {selectedSet.size} model(s) selected
                </span>
                <div className="flex gap-2">
                    <Button variant="light" onPress={onClose} className="text-white">
                    Cancel
                    </Button>
                    <Button color="primary" onPress={() => handleConfirm(onClose)}>
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