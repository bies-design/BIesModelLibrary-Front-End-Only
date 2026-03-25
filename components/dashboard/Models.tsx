'use client';
import React, { useState, useRef, useEffect } from 'react';
import { 
    Search, Check, Filter, ArrowUpDown, Edit2, Download, 
    Trash2, Box, Copy, Layers, Loader2
} from 'lucide-react';
import { getPostsByScroll } from '@/lib/actions/post.action';
import { useNativeInView } from '@/hooks/useIntersectionObserver';
import PostCard from '../cards/PostCard';

type Props = {};

const Models = (props: Props) => {
    const [activeTab, setActiveTab] = useState<string>('Personal');
    const [isLoading, setIsLoading] = useState(false);

    const [posts, setPosts] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    
    const loadMoreRef = useRef(null); 
    const isIntersecting = useNativeInView(loadMoreRef, '400px');
    const isFetchingRef = useRef(false);
    const activeTabRef = useRef(activeTab);
    
    const fetchModels = async (currentPage:number, isReset:boolean = false, targetTab: string) => {
        // 鎖定防護：如果正在抓取，直接阻擋
        if (!isReset && isFetchingRef.current) return;
        
        isFetchingRef.current = true; // 同步上鎖
        setIsLoading(true);           // 觸發 UI 畫面更新

        // 如果是切換 Tab (isReset)，在發送 API 前先清空舊畫面！
        // 這樣就算後端真的大當機，畫面上也不會殘留上一個 Tab 的資料
        if (isReset) {
            setPosts([]);
            setHasMore(false);
        }

        try {
            const currentScope = activeTab.toUpperCase() as "PERSONAL" | "TEAM" | "COLLECTION";
            // 這裡將 activeTab 當作分類參數傳入，並預設以 Newest 排序
            const result = await getPostsByScroll(currentPage, 9,"ALL","Newest","",currentScope);
            
            if(currentScope === "TEAM") console.log()
            // 資料回來後，檢查使用者是不是還停在這個 Tab！
            if(activeTabRef.current === targetTab){
                if (result.success && result.data) {
                if (isReset) {
                    setPosts(result.data);
                } else {
                    setPosts((prev) => [...prev, ...result.data]);
                }
                setHasMore(result.hasMore ?? false);
            }
            }
            
        } catch (error) {
            console.error("Failed to fetch models:", error);
        } finally {
            // 只有當「這包資料」屬於「現在的 Tab」時，才解除轉圈圈狀態
            if (activeTabRef.current === targetTab) {
                setIsLoading(false);           // 關閉 UI 轉圈圈
                isFetchingRef.current = false; // 同步解鎖
            }
        }
    };

    useEffect(() => {
        activeTabRef.current = activeTab;
    }, [activeTab]);

    useEffect(() => {
        setPage(1);
        setHasMore(true);
        fetchModels(1, true, activeTab);
    }, [activeTab]);

    // 監聽下滑到底部，觸發載入下一頁
    useEffect(() => {
        // 嚴格規範：使用 isFetchingRef.current 來判斷邏輯鎖，而非 isLoading
        if (isIntersecting && hasMore && !isFetchingRef.current) {
            const nextPage = page + 1;
            setPage(nextPage);
            fetchModels(nextPage, false, activeTab);
        }
    }, [isIntersecting, hasMore, page, activeTab]);

    return (
        <div className="@container flex flex-col w-full h-full font-inter gap-4">
            {/* 標題 */}
            <h1 className="text-3xl font-bold text-white">Models</h1>

            {/* 頂部切換標籤 */}
            <div className="flex gap-2 p-1 bg-[#27272A] rounded-xl shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D]">
            {['Personal', 'Team', 'Collection'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                        activeTab === tab 
                        ? 'bg-[#3f4045] text-white shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_4px_2px_#FFFFFF33]' 
                        : 'text-gray-400 hover:text-gray-200 hover:bg-[#34353a]'
                    }`}
                >
                    {tab}
                </button>
            ))}
            </div>

            {/* 工具列 */}
            <div className="flex flex-wrap items-center justify-start gap-3 mt-2">
                <div className="relative flex-1 min-w-[200px] max-w-xs">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search+Enter" 
                        className="w-full rounded-xl pl-9 pr-4 py-2 bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] focus:border-gray-500 text-sm"
                    />
                </div>

                <button className="hover-lift p-3 bg-[#3F3F46] rounded-xl shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_4px_2px_#FFFFFF33]">
                    <Check className="w-4 h-4" />
                </button>

                <button className="hover-lift flex items-center gap-2 px-3 py-2 bg-[#3F3F46] rounded-xl shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_4px_2px_#FFFFFF33]">
                    <Filter className="w-4 h-4" /> Filter
                </button>
                <button className="hover-lift flex items-center gap-2 px-3 py-2 bg-[#3F3F46] rounded-xl shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_4px_2px_#FFFFFF33]">
                    <ArrowUpDown className="w-4 h-4" /> Sort
                </button>
                <div className="h-6 w-[1px] bg-[#3F3F46] mx-1" />
                <div className="px-3 py-2 bg-black/20 rounded-xl text-sm border border-transparent">
                    {1} Selected
                </div>

                <button className="hover-lift flex items-center gap-2 px-4 py-2 bg-[#3F3F46] rounded-xl shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_4px_2px_#FFFFFF33] text-sm">
                    <Edit2 className="w-4 h-4" /> Actions
                </button>
                <div className="h-6 w-[1px] bg-[#3F3F46] mx-1" />
                <button className="hover-lift flex items-center gap-2 px-4 py-2 bg-[#e11d48] text-white rounded-xl shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_4px_2px_#FFFFFF33] hover:bg-[#be123c] text-sm font-medium transition-colors">
                    <Layers className="w-4 h-4" /> Set Editor
                </button>
            </div>

            {/* 內容網格區 */}
            <div className="w-full flex flex-wrap gap-6">
                {posts.map((post) => (
                    <PostCard 
                        key={post.id}
                        dbId={post.id}
                        shortId={post.shortId}
                        coverImage={post.coverImage}
                        type={post.type}
                        title={post.title}
                    />
                ))}
            </div>

            {/* 無限下滑觸發區與狀態顯示 */}
            <div ref={loadMoreRef} className='flex justify-center py-8 h-20'>
            {isLoading && (
                <div className="flex items-center gap-2 text-gray-400">
                <Loader2 className="animate-spin w-5 h-5" />
                <span>Loading more models...</span>
                </div>
            )}
            {!hasMore && posts.length > 0 && (
                <p className='text-sm text-gray-500 font-medium'>
                You have reached the end.
                </p>
            )}
            {!hasMore && posts.length === 0 && !isLoading && (
                <p className='text-sm text-gray-500 font-medium'>
                No models found in this category.
                </p>
            )}
            </div>

        
        </div>
    )
}

export default Models;