'use client';
import React, { useState, useRef, useEffect } from 'react';
import { 
    Search, Check, Filter, ArrowUpDown, Edit2, Download, 
    Trash2, Box, Copy, Layers, Loader2
} from 'lucide-react';
import { Select,SelectItem } from '@heroui/react';
import { getPostsByScroll } from '@/lib/actions/post.action';
import { getUserTeams } from '@/lib/actions/team.action';
import { useNativeInView } from '@/hooks/useIntersectionObserver';
import PostCard from '../cards/PostCard';
import { useParams } from 'next/navigation';
type Props = {};

const Models = (props: Props) => {
    const params = useParams();
    const userId = params.id as string;

    const [userTeams, setUserTeams] = useState<any[]>([]);
    const [selectedTeamId, setSelectedTeamId] = useState<string>("");

    const [activeTab, setActiveTab] = useState<string>('Personal');
    const [isLoading, setIsLoading] = useState(false);

    const [inputValue, setInputValue] = useState("");

    const [category, setCategory] = useState<string>("ALL");
    const [searchQuery, setSearchQuery] = useState<string>("");
    
    const [isQueryArrange, setIsQueryArrange] = useState<string>('Newest');
    
    const [posts, setPosts] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    
    const loadMoreRef = useRef(null); 
    const isIntersecting = useNativeInView(loadMoreRef, '400px');
    const isFetchingRef = useRef(false);
    const activeTabRef = useRef(activeTab);
    
    const fetchModels = async (currentPage:number, isReset:boolean = false, targetTab: string,currentSearch: string = searchQuery,currentCategory: string = category, currentSort:string = isQueryArrange, currentTeamId:string = selectedTeamId) => {
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
            const result = await getPostsByScroll(currentPage, 9, currentCategory, currentSort, currentSearch, currentScope, currentTeamId);
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
        const fetchTeams = async () => {
            if (userId) {
                const result = await getUserTeams();
                if (result.success && result.data) {
                    setUserTeams(result.data);
                }
            }
        };

        // 只有切換到 Team 分頁，且還沒抓過資料時才發 API
        if (activeTab === 'Team' && userTeams.length === 0) {
            fetchTeams();
        }
    }, [activeTab, userId]); // 依賴 activeTab 和 userId

    useEffect(() => {
        activeTabRef.current = activeTab;
        setCategory("ALL");
        setInputValue("");
        setIsQueryArrange("Newest");
        setSelectedTeamId("");
    }, [activeTab]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchQuery(inputValue);
        },300)

        // if user type down in 300 ms then it restart
        return () => clearTimeout(timer);
    },[inputValue]);

    useEffect(() => {
        setPage(1);
        setHasMore(true);
        fetchModels(1, true, activeTab, searchQuery, category, isQueryArrange, selectedTeamId);
    }, [activeTab, category, searchQuery, isQueryArrange, selectedTeamId]);

    // 監聽下滑到底部，觸發載入下一頁
    useEffect(() => {
        // 嚴格規範：使用 isFetchingRef.current 來判斷邏輯鎖，而非 isLoading
        if (isIntersecting && hasMore && !isFetchingRef.current) {
            const nextPage = page + 1;
            setPage(nextPage);
            fetchModels(nextPage, false, activeTab, searchQuery, category, isQueryArrange, selectedTeamId);
        }
    }, [isIntersecting, hasMore, page, activeTab, searchQuery, category, isQueryArrange, selectedTeamId]);

    const handleCollectionToggle = (postId: string, newStatus: boolean) => {
        if (activeTab === 'Collection' && !newStatus) {
            // 情境 A：目前在「收藏」分頁，且使用者「取消收藏」
            // 動作：瞬間從畫面上把這張卡片刪掉！(不用重新發 API，也不會重置分頁)
            setPosts(prev => prev.filter(post => post.id !== postId));
        } else {
            // 情境 B：在 Personal 或 Team 分頁
            // 動作：只更新該卡片的 isCollected 屬性，不移除卡片
            setPosts(prev => prev.map(post => 
                post.id === postId ? { ...post, isCollected: newStatus } : post
            ));
        }
    };

    return (
        <div className="@container text-white flex flex-col w-full h-full font-inter gap-4">
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
            <div className="flex flex-wrap items-start justify-start gap-3 mt-2">
                <div className="relative flex-1 min-w-[200px] max-w-xs">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search posts..."
                        value={inputValue}
                        onChange={(e) => {setInputValue(e.target.value)}} 
                        className="w-full h-14 rounded-xl pl-9 pr-4 py-2 bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] focus:border-gray-500 text-sm"
                    />
                </div>
                {activeTab === 'Team' && (
                    <Select 
                        aria-label="Choose a team: " 
                        placeholder="Select a team"
                        labelPlacement='inside'
                        label="Team"
                        className="max-w-xs h-10 mb-4"
                        classNames={{
                            base:`md:w-[140px]`,
                            trigger: "bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] rounded-xl text-white data-[hover=true]:bg-gray-600",
                            listbox: "bg-[#27272A]", // 下拉選單整體的背景
                            popoverContent: "bg-[#27272A] border-1 border-white/10", 
                        }}
                        selectedKeys={[selectedTeamId]}
                        onChange={(e) => {
                            const newTeamId = e.target.value;
                            setSelectedTeamId(newTeamId || "");
                        }}
                    >
                        {[
                            { id: "", name: "All" }, 
                            ...userTeams
                        ].map((team) => (
                            <SelectItem key={team.id} className="text-white">
                                {team.name}
                            </SelectItem>
                        ))}
                    </Select>
                )}
                
                <Select 
                    aria-label="Choose a category : " 
                    placeholder="Select a category"
                    labelPlacement='inside'
                    label="Category"
                    className="max-w-xs h-10 mb-4"
                    classNames={{
                        trigger: "bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] rounded-xl text-white data-[hover=true]:bg-gray-600",
                        listbox: "bg-[#27272A]", // 下拉選單整體的背景
                        popoverContent: "bg-[#27272A] border-1 border-white/10", 
                    }}
                    selectedKeys={[category]}
                    onChange={(e) => {
                        const newCategory = e.target.value;
                        setCategory(newCategory || "ALL");
                    }}
                >
                    <SelectItem key="ALL" className="text-white">ALL</SelectItem>
                    <SelectItem key="Buildings" className="text-white">Buildings</SelectItem>
                    <SelectItem key="Products" className="text-white">Products</SelectItem>
                    <SelectItem key="Elements" className="text-white">Elements</SelectItem>
                    <SelectItem key="2D Drawings" className="text-white">2D Drawings</SelectItem>
                </Select>
                <Select 
                    aria-label="order by : " 
                    placeholder="order by"
                    labelPlacement='inside'
                    label="Order By"
                    className="max-w-30 h-10 mb-4"
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
                    <SelectItem key="Hottest" className="text-white">Hottest</SelectItem>
                </Select>

                {/* <div className="h-6 w-[1px] bg-[#3F3F46] mx-1" />
                <button className="hover-lift flex items-center gap-2 px-4 py-2 bg-[#e11d48] text-white rounded-xl shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_4px_2px_#FFFFFF33] hover:bg-[#be123c] text-sm font-medium transition-colors">
                    <Edit2 className="w-4 h-4" /> Edit
                </button> */}
            </div>

            {/* 內容網格區 */}
            <div className="w-full dark flex flex-wrap gap-6">
                {posts.map((post) => (
                    <PostCard 
                        key={post.id}
                        dbId={post.id}
                        shortId={post.shortId}
                        coverImage={post.coverImage}
                        type={post.type}
                        title={post.title}
                        isCollectedInitial={post.isCollected}
                        onCollectionToggle={handleCollectionToggle}
                        teamColor={post.team?.color}
                        teamName={post.team?.name}

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