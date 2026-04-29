"use client";
import React, { useState, useMemo, useEffect } from 'react';
import { 
    Input, Button, addToast, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure,
    Select, SelectItem, Avatar, Dropdown, DropdownTrigger, DropdownItem, DropdownMenu, Tabs, Tab
} from "@heroui/react";
import { Settings, Trash2, Users, Loader2, CirclePlus, Search, Check, Filter, ArrowUpDown, Edit2, Layers, Copy, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createTeam, getTeamDetails, getTeamMembers, searchUsersForTeam, addMemberToTeam, updateTeamMemberRole, removeTeamMember, leaveTeam, deleteTeam, updateTeamSettings } from '@/lib/actions/team.action';
import TeamSettingsModal from '../modals/TeamSettingsModal';
import Records from './Records';

// 定義團隊成員的資料型別
type TeamMember = {
    id: string;
    name: string;
    handle: string;
    role: string;
    avatar: string;
    teamName: string;
};

const ITEMS_PER_PAGE = 18; // 每頁總共顯示 18 筆 (左 9 右 9)

const Teams = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentTeamId = searchParams.get('teamId');
    const [teamDetails, setTeamDetails] = useState<any>(null);
    const [activeTab, setActiveTab] = useState<string>("members");

    // Settings modal (Edit Mode)
    const { isOpen: isSettingsOpen, onOpen: onSettingsOpen, onOpenChange: onSettingsChange } = useDisclosure();    
    // Create Team modal (Create Mode)
    const { isOpen: isCreateOpen, onOpen: onCreateOpen, onOpenChange: onCreateChange } = useDisclosure();    
    
    // add member modal
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    
    // 狀態：Modal 內的輸入框內容與載入狀態
    const [searchType, setSearchType] = useState<"username" | "id">("username");
    const [searchInput, setSearchInput] = useState<string>("");
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState<string>(""); // 存放被勾選的人
    const [isAddingMember, setIsAddingMember] = useState<boolean>(false);
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    
    // 狀態：團隊成員資料與載入狀態
    const [members, setMembers] = useState<TeamMember[]>([]);
    const [isLoadingMembers, setIsLoadingMembers] = useState<boolean>(false);
    
    // --- State 管理 ---
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [listSearchType, setListSearchType] = useState<"username" | "id" | "role">("username");
    
    // 使用 Set 來儲存被選取的 ID，效能更好且不會重複
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
    
    // 管理建立團隊的狀態
    const [teamName, setTeamName] = useState<string>("");
    const [isCreatingTeam, setIsCreatingTeam] = useState<boolean>(false);
    
    const getImageUrl = (imageVal: string | null | undefined) => {
        if(!imageVal) return "";
        if(imageVal.startsWith("http")) return imageVal;
        return `${process.env.NEXT_PUBLIC_S3_ENDPOINT_SERVER}/${process.env.NEXT_PUBLIC_S3_IMAGES_BUCKET}/${imageVal}`;
    };

    // 載入團隊成員的函數
    const loadMembers = async (teamId: string) => {
        setIsLoadingMembers(true);
        const result = await getTeamMembers(teamId);
        if (result.success && result.data) {
            setMembers(result.data);
        } else {
            addToast({ description: result.error || "讀取失敗", color: "danger" });
        }
        setIsLoadingMembers(false);
    };
    
    const loadTeamDetails = async (teamId:string) => {
        if (!session?.user?.id) return;
        const result = await getTeamDetails(teamId, session.user.id);
        if (result.success && result.data) {
            setTeamDetails(result.data);
            setTeamName(result.data.name);
        } else {
            setTeamDetails(null);
            addToast({ description: "無法載入團隊詳細資料", color: "danger" });
        }
    };

    useEffect(() => {
        if (currentTeamId) {
            setTeamName("");
            setMembers([]);
            setTeamDetails(null);
            if(currentTeamId !== 'create'){
                loadMembers(currentTeamId);
                loadTeamDetails(currentTeamId);
            }
            
        }else {
            setTeamName("");
            setMembers([]);
            setTeamDetails(null);
        }
    }, [currentTeamId, session?.user?.id]);

    // 重新設計的 Create Team 邏輯 (支援接收 Modal 傳來的完整資料)
    const handleCreateTeamWithData = async (newTeamData: any) => {
        if (!session?.user?.id) {
            addToast({ description: "請先登入後再建立團隊", color: "warning" });
            return;
        }

        setIsCreatingTeam(true);
        try {
            // 注意：這裡假設你已經修改了 createTeam Server Action 以支援接收物件
            // 稍後會提醒你如何修改那一邊
            const result = await createTeam(newTeamData);

            if (result.success && result.data?.id) {
                addToast({ description: `團隊 ${newTeamData.name} 建立成功！`, color: "success" });
                router.push(`/dashboard/${session.user.id}?tab=Teams&teamId=${result.data.id}`);
            } else {
                addToast({ description: result.error || "建立失敗", color: "danger" });
            }
        } catch (error) {
            console.error(error);
            addToast({ description: "發生未知錯誤，請稍後再試", color: "danger" });
        } finally {
            setIsCreatingTeam(false);
        }
    };

    const handleUpdateTeam = async(updatedData: any) => {
        if (!currentTeamId || !session?.user?.id) return;
        
        const result = await updateTeamSettings(currentTeamId, session.user.id, updatedData);
        
        if (result.success) {
            addToast({ description: "團隊設定已更新", color: "success" });
            loadMembers(currentTeamId); 
            loadTeamDetails(currentTeamId);
        } else {
            addToast({ description: result.error, color: "danger" });
        }
    };

    // --- 資料處理邏輯 ---
    const currentUserRoleInTeam = useMemo(() => {
        if (!session?.user?.id || !members || members.length === 0) return null;
        
        const currentUserData = members.find(m => m.id === session.user.id);
        return currentUserData ? currentUserData.role : null;
    }, [members, session?.user?.id]);
    const hasEditPermission = currentUserRoleInTeam === 'OWNER' || currentUserRoleInTeam === 'ADMIN';

    // 1. 搜尋過濾
    const filteredMembers = useMemo(() => {
        if (!searchQuery) return members;
        const query = searchQuery.toLowerCase();
        return members.filter(m => {
            if (listSearchType === "username") {
                return m.name.toLowerCase().includes(query) || m.handle.toLowerCase().includes(query);
            } else if(listSearchType === "id") {
                return m.id.toLowerCase().includes(query);
            } else {
                return m.role.toLowerCase().includes(query);
            }
        });
    }, [searchQuery, members, listSearchType]);

    // 2. 分頁計算
    const totalPages = Math.max(1, Math.ceil(filteredMembers.length / ITEMS_PER_PAGE));
    const validCurrentPage = Math.min(currentPage, totalPages);

    const paginatedMembers = useMemo(() => {
        const startIndex = (validCurrentPage - 1) * ITEMS_PER_PAGE;
        return filteredMembers.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filteredMembers, validCurrentPage]);

    // 3. 切成左右兩欄
    const halfLength = Math.ceil(paginatedMembers.length / 2);
    const leftColumnData = paginatedMembers.slice(0, halfLength);
    const rightColumnData = paginatedMembers.slice(halfLength);

    // --- 互動邏輯 (保持不變) ---
    const handleToggleSelect = (id: string) => { /* ... */ };
    const handleSelectAll = () => { /* ... */ };
    const isCurrentPageAllSelected = paginatedMembers.length > 0 && paginatedMembers.every(m => selectedIds.has(m.id));
    
    useEffect(() => {
        const fetchResults = async () => {
            if (!searchInput.trim()) {
                setSearchResults([]);
                setSelectedUserId("");
                return;
            }
            if(!currentTeamId) return;
            setIsSearching(true);
            const result = await searchUsersForTeam(searchInput, searchType, currentTeamId);
            if (result.success && result.data) {
                setSearchResults(result.data);
            }
            setIsSearching(false);
        };

        const delayDebounceFn = setTimeout(() => { fetchResults(); }, 300);
        return () => clearTimeout(delayDebounceFn);
    }, [searchInput, searchType, currentTeamId]);

    const handleAddMember = async (onClose: () => void) => {
        if (!selectedUserId) {
            addToast({ description: "請先從列表中選擇一名使用者", color: "warning" });
            return;
        }

        setIsAddingMember(true);
        try {
            const result = await addMemberToTeam(currentTeamId!, selectedUserId, session!.user.id);
            if (result.success) {
                addToast({ description: "新增成員成功！", color: "success" });
                setSearchInput(""); 
                setSelectedUserId(""); 
                loadMembers(currentTeamId!); 
                onClose(); 
            } else {
                addToast({ description: result.error || "新增失敗", color: "danger" });
            }
        } catch (error) {
            addToast({ description: "發生未知錯誤", color: "danger" });
        } finally {
            setIsAddingMember(false);
        }
    };
    
    const handleUpdateRole = async (userId: string, newRole: string) => {
        if (!currentTeamId || !session?.user?.id) return;
        const result = await updateTeamMemberRole(currentTeamId, userId, newRole, session.user.id);
        if (result.success) {
            addToast({ description: "角色更新成功", color: "success" });
            loadMembers(currentTeamId);
        } else {
            addToast({ description: result.error || "更新失敗", color: "danger" });
        }
    };
    
    const handleRemoveMember = async (userId: string) => {
        if (!currentTeamId || !session?.user?.id) return;
        if (!window.confirm("確定要將此成員移出團隊嗎？")) return;
        const result = await removeTeamMember(currentTeamId, userId, session.user.id);
        if (result.success) {
            addToast({ description: "已移除該成員", color: "success" });
            loadMembers(currentTeamId);
        } else {
            addToast({ description: result.error || "移除失敗", color: "danger" });
        }
    };
    
    const handleLeaveTeam = async () => {
        if (!currentTeamId || !session?.user?.id) return;
        if (!window.confirm(`確定要離開「${teamName}」嗎？此操作無法復原。`)) return;
        const result = await leaveTeam(currentTeamId, session.user.id);
        if (result.success) {
            addToast({ description: "已成功離開團隊", color: "success" });
            router.push(`/dashboard/${session.user.id}?tab=Teams`);
            router.refresh();
        } else {
            addToast({ description: result.error || "離開失敗", color: "danger" });
        }
    };
    
    const handleDeleteTeam = async () => {
        if (!currentTeamId || !session?.user?.id) return;
        const confirmText = window.prompt(`警告：刪除團隊將會永久移除所有成員與資料。\n請輸入團隊名稱「${teamName}」以確認刪除：`);
        if (confirmText !== teamName) {
            if (confirmText !== null) addToast({ description: "團隊名稱輸入錯誤，取消刪除", color: "warning" });
            return;
        }
        const result = await deleteTeam(currentTeamId, session.user.id);
        if (result.success) {
            addToast({ description: "團隊已成功刪除", color: "success" });
            router.push(`/dashboard/${session.user.id}?tab=Teams`);
            router.refresh();
        } else {
            addToast({ description: result.error || "刪除失敗", color: "danger" });
        }
    };
    
    const handleModalOpenChange = (open: boolean) => {
        if (!open) {
            setSearchInput("");
            setSearchResults([]);
            setSelectedUserId("");
        }
        onOpenChange(); 
    };

    // --- 內部 UI 元件 ---
    const ListHeader = () => (
        <div className="grid grid-cols-[1fr_1fr_1.2fr] md:grid-cols-[1.2fr_1fr_1.2fr] items-center gap-4 py-3 px-2 bg-[#212126] rounded-t-xl text-sm font-medium text-gray-400 mb-2">
            {isEditMode ? <div>Action</div> : <div>Worker ID</div>}
            <div className="flex items-center gap-1">Member</div>
            <div>Role</div>
        </div>
    );

    const ListRow = ({ data }: { data: TeamMember }) => {
        const [isCopied, setIsCopied] = useState<boolean>(false);
        const handleCopy = async () => {
            try {
                await navigator.clipboard.writeText(data.id);
                setIsCopied(true);
                addToast({ description: "Worker ID 已複製！", color: "success" });
                setTimeout(() => setIsCopied(false), 2000);
            } catch (err) {
                addToast({ description: "複製失敗，請手動複製", color: "danger" });
            }
        };
        return (
            <div className="grid grid-cols-[0.8fr_1fr_1.2fr] md:grid-cols-[1fr_1fr_1.2fr] items-center gap-4 py-3 px-2 hover:bg-white/5 rounded-lg transition-colors group">
                <div className="flex justify-center md:items-center gap-2 text-gray-400 text-sm">
                    {!isEditMode && (<p className="hidden md:block text-gray-300">{data.id}</p>)}
                    {isEditMode ? (
                        <button title='Remove TeamMember' onClick={() => handleRemoveMember(data.id)} className="">
                            <Trash2 className="w-6 h-6 text-gray-400 hover:text-red-500 transition-colors" />
                        </button>
                    ) : (
                        <button title='Copy ID' onClick={handleCopy} className="text-gray-400 hover:text-gray-300 transition-colors">
                            {isCopied ? <Check className="w-4 h-4 text-[#10b981]" /> : <Copy className="w-4 h-4" />}
                        </button>
                    )}
                </div>
                <div className="flex flex-col md:flex-row items-center gap-3">
                    <Avatar src={getImageUrl(data.avatar)} size="sm" showFallback />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-200">{data.name}</span>
                        <span className="text-xs text-gray-500">{data.handle}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-200 cursor-pointer group/role">
                    {isEditMode ? (
                        <div className="flex-1 flex items-center gap-2">
                            <Select
                                aria-label="Role Select"
                                selectionMode='single'
                                defaultSelectedKeys={[data.role]}
                                onSelectionChange={(k) => {
                                    const newRole = Array.from(k)[0] as string;
                                    if(newRole) handleUpdateRole(data.id, newRole);
                                }}
                                classNames={{
                                    trigger: [
                                        "bg-[#18181B]",
                                        "data-[hover=true]:bg-[#27272a]", 
                                        "data-[focus=true]:bg-[#27272a]",
                                        "shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D]"
                                    ].join(" "),
                                    popoverContent:[
                                        "bg-[#18181B]",
                                        "data-[hover=true]:bg-[#27272a]", 
                                        "data-[focus=true]:bg-[#27272a]",
                                    ].join(" "),
                                    value: "text-white",
                                }}
                            >
                                <SelectItem key="OWNER" className= "text-white">OWNER</SelectItem>
                                <SelectItem key="ADMIN" className="text-white">ADMIN</SelectItem>
                                <SelectItem key="EDITOR" className="text-white">EDITOR</SelectItem>
                                <SelectItem key="VIEWER" className="text-white">VIEWER</SelectItem>
                            </Select>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1">
                            <span className="text-sm text-gray-200">{data.role}</span>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    // 狀況 1：正在載入資料時
    if (currentTeamId && isLoadingMembers) {
        return (
            <div className="flex justify-center items-center py-40 w-full h-full">
                <Loader2 className="w-10 h-10 animate-spin text-gray-500" />
            </div>
        );
    }

    // 🚀 狀況 2：沒有選團隊時 (改為觸發 Create Modal)
    if((!currentTeamId || teamName === "") || currentTeamId === "create") {
        return (
            <div className='flex flex-col items-center justify-center w-full h-full text-white font-inter gap-4 py-20'>
                <div className="w-16 h-16 bg-white/5 flex items-center justify-center rounded-full mb-2">
                    <Users size={32} className="text-gray-400" />
                </div>
                <h2 className="text-2xl font-bold">No Team Selected</h2>
                <p className="text-gray-400 text-sm">Please select a team from the sidebar or create a new one to manage members.</p>
                
                <div className='flex items-center gap-2 mt-6'>
                    <Button 
                        onPress={onCreateOpen} 
                        className="hover-lift flex items-center gap-2 px-6 py-3 bg-[#e11d48] text-white rounded-xl shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_4px_2px_#FFFFFF33] hover:bg-[#be123c] text-md font-medium transition-colors"
                    >
                        <CirclePlus size={20} /> Create New Team
                    </Button>
                </div>
                
                {/* 🚀 用於建立的 Modal */}
                <TeamSettingsModal 
                    isOpen={isCreateOpen} 
                    onOpenChange={onCreateChange}
                    mode="create" 
                    onSubmit={handleCreateTeamWithData} 
                />
            </div>
        );
    }

    // 狀況 3：有 teamId -> 顯示團隊管理介面
    return (
        <div className='flex text-white flex-col w-full h-full font-inter gap-4'>
            <div className='flex items-center gap-2'>
                {teamDetails?.avatar && (
                    <Avatar
                        src={getImageUrl(teamDetails.avatar)}
                        name={teamDetails.name}
                        size='md'
                        className='hidden md:block'
                        showFallback
                    />
                )}
                {/* 🚀 動態標題顏色 */}
                <h1 className="text-3xl text-white font-bold">
                    {teamName} {activeTab === "members" ? "Team Members" : "Team Files"}
                </h1>
                <Dropdown classNames={{ content: "bg-[#27272A] border border-[#3F3F46] min-w-[200px]" }}>
                    <DropdownTrigger>
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                            <Settings className="w-6 h-6" />
                        </button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Team Actions" itemClasses={{ base: "text-gray-300" }}>
                        <DropdownItem 
                            key="teamSettings" 
                            className={`${hasEditPermission ? 'block' : 'hidden'} text-white! data-[hover=true]:text-danger data-[hover=true]:bg-danger/10`}
                            onPress={onSettingsOpen}
                        >
                            Team Settings
                        </DropdownItem>
                        <DropdownItem 
                            key="leave" 
                            color="danger"
                            className="text-danger data-[hover=true]:text-danger data-[hover=true]:bg-danger/10"
                            onPress={handleLeaveTeam}
                        >
                            Leave Team
                        </DropdownItem>
                        <DropdownItem 
                            key="delete" 
                            color="danger"
                            className={`${currentUserRoleInTeam === 'OWNER' ? 'block' : 'hidden'} text-white bg-red-500 data-[hover=true]:text-danger data-[hover=true]:bg-danger/10 border-t border-white/10 mt-1 rounded-lg pt-2`}
                            onPress={handleDeleteTeam}
                        >
                            Delete Team (Danger Zone)
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>

            {/*  動態團隊描述與小圓點 */}
            <div className='ml-2 md:ml-16 flex flex-col md:flex-row gap-2'>
                <div className='flex items-center gap-2'>
                    {teamDetails?.color && teamDetails.color !== "" && (
                        <span 
                            className="w-3 h-3 rounded-full shrink-0 shadow-sm border border-white/10" 
                            style={{ backgroundColor: teamDetails.color }}
                        />
                    )}    
                    <p className="text-md text-white">{teamDetails?.description || ""}</p>
                </div>
                <Button 
                    onPress={() => {
                        if(currentTeamId) {
                            router.push(`/projects/${currentTeamId}`);
                        }
                    }}
                    className="shrink-0 w-[150px] hover-lift flex items-center gap-2 px-4 py-2 bg-[#e11d48] text-white rounded-xl shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_4px_2px_#FFFFFF33] hover:bg-[#be123c] text-sm font-medium transition-colors"
                    variant="flat"
                    startContent={<CirclePlus size={16} />}
                >
                    Project Page
                </Button>
            </div>
            
            {/* 用於編輯的 Modal */}
            <TeamSettingsModal 
                isOpen={isSettingsOpen} 
                onOpenChange={onSettingsChange}
                mode="edit"
                teamData={{
                    id: currentTeamId || "",
                    name: teamName,
                    description: teamDetails?.description || "",
                    color:  teamDetails?.color || "",
                    avatar: teamDetails?.avatar || "" 
                }}
                onSubmit={handleUpdateTeam}
            />

            <div className='w-full mt-2'>
                <Tabs
                    aria-label="Team Management Tabs"
                    selectedKey={activeTab}
                    onSelectionChange={(key) => setActiveTab(key.toString())}
                    variant="underlined"
                    classNames={{
                        tabList: "gap-6 w-full relative rounded-none p-0 border-b border-white/10",
                        cursor: "w-full bg-[#E5E7EB]",
                        tab: "max-w-fit px-0 h-12",
                        tabContent: "group-data-[selected=true]:text-[#E5E7EB] text-gray-500"
                    }}
                >
                    <Tab key="members" title="Team Members" />
                    <Tab key="files" title="Team Files" />
                </Tabs>
            </div>
            {activeTab === "members" && (
                <div className='flex flex-col gap-4 animate-appearance-in duration-300'>
                    {/* 工具列 */}
                    <div className="flex flex-wrap items-center justify-start gap-3 mt-2">
                        <div className=" flex flex-col md:flex-row gap-2 min-w-[300px]">
                            <Select 
                                aria-label="Search Type"
                                labelPlacement='inside'
                                label="Search Type"
                                defaultSelectedKeys={["username"]}
                                className="md:min-w-[130px]"
                                onChange={(e) => {
                                    setListSearchType(e.target.value as "username" | "id");
                                    setSearchQuery("");
                                    setCurrentPage(1);
                                }}
                                classNames={{
                                    trigger: [
                                        "bg-[#18181B]",
                                        "data-[hover=true]:bg-[#27272a]", 
                                        "data-[focus=true]:bg-[#27272a]",
                                        "shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D]"
                                    ].join(" "),
                                    popoverContent:[
                                        "bg-[#18181B]",
                                        "data-[hover=true]:bg-[#27272a]", 
                                        "data-[focus=true]:bg-[#27272a]",
                                    ].join(" "),
                                    value: "text-white",
                                }}
                            >
                                <SelectItem key="username" className="text-white">Username</SelectItem>
                                <SelectItem key="id" className="text-white">User ID</SelectItem>
                                <SelectItem key="role" className="text-white">Role</SelectItem>
                            </Select>
                            <input 
                                type="text" 
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setCurrentPage(1);
                                }}
                                placeholder="Search name or handle..." 
                                className="rounded-xl px-2 py-2 bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] focus:border-gray-500 text-sm outline-none transition-colors"
                            />
                        </div>
                        <div className='flex max-sm:w-full  items-start gap-2'>
                            <button onClick={() => setIsEditMode(!isEditMode)} className={`${hasEditPermission ? 'block' : 'hidden'} hover-lift flex items-center gap-2 px-4 py-2  ${isEditMode ? 'bg-[#640a0a]' : 'bg-[#e11d48]'} text-white rounded-xl shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_4px_2px_#FFFFFF33] text-sm font-medium transition-colors`}>
                                <Edit2 className="w-4 h-6" /> {isEditMode ? 'Finish Edit' : 'Edit'}
                            </button>
                        
                            <div className={`${hasEditPermission ? 'block' : 'hidden'} flex items-end`}>
                                <Button 
                                    onPress={onOpen}
                                    className="hover-lift flex items-center gap-2 px-4 py-2 bg-[#e11d48] text-white rounded-xl shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_4px_2px_#FFFFFF33] hover:bg-[#be123c] text-sm font-medium transition-colors"
                                    variant="flat"
                                    startContent={<CirclePlus size={16} />}
                                >
                                    Add Members
                                </Button>
                            </div>
                            <Modal 
                                isOpen={isOpen} 
                                placement='center'
                                onOpenChange={handleModalOpenChange}
                                classNames={{
                                    wrapper: "z-[9999]", 
                                    backdrop: "z-[9998]",
                                    base: "bg-[#18181B] border border-white/10 text-white",
                                    header: "border-b border-white/10",
                                    footer: "border-t border-white/10",
                                    closeButton: "hover:bg-white/10 active:bg-white/20 text-2xl",
                                }}
                                className='dark text-white bg-[#18181B] shadow-[inset_0px_2px_4px_rgba(255,255,255,0.4),inset_0px_-1px_2px_rgba(0,0,0,0.8),3px_3px_4px_rgba(0,0,0,0.4)]'
                            >
                                <ModalContent>
                                    {(onClose) => (
                                        <>
                                            <ModalHeader className="flex flex-col gap-1">Invite Team Member</ModalHeader>
                                            <ModalBody className="py-6">
                                                <div className="flex gap-2 mb-4">
                                                    <Select 
                                                        aria-label="Search Type"
                                                        defaultSelectedKeys={["username"]}
                                                        className="w-[130px]"
                                                        onChange={(e) => {
                                                            setSearchType(e.target.value as "username" | "id");
                                                            setSearchInput(""); 
                                                        }}
                                                        classNames={{
                                                            trigger: "bg-[#18181B] shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D]",
                                                            popoverContent: "bg-[#27272A] border border-[#3F3F46]"
                                                        }}
                                                    >
                                                        <SelectItem key="username" className="text-white">Username</SelectItem>
                                                        <SelectItem key="id" className="text-white">User ID</SelectItem>
                                                    </Select>
                                                    <Input
                                                        className="w-2/3"
                                                        autoFocus
                                                        placeholder={`Search by ${searchType === 'username' ? 'Username' : 'ID'}...`}
                                                        variant="flat"
                                                        value={searchInput}
                                                        onChange={(e) => setSearchInput(e.target.value)}
                                                        classNames={{ inputWrapper: "bg-[#18181B] shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D] focus-within:border-[#f43f5e]" }}
                                                    />
                                                </div>

                                                <div className="max-h-[250px] overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                                                    {isSearching && (
                                                        <div className="flex justify-center py-4"><Loader2 className="animate-spin text-gray-500 w-5 h-5" /></div>
                                                    )}
                                                    
                                                    {!isSearching && searchInput && searchResults.length === 0 && (
                                                        <p className="text-center text-gray-500 text-sm py-4">沒有找到符合條件的使用者</p>
                                                    )}

                                                    {!isSearching && searchResults.map(user => (
                                                        <div 
                                                            key={user.id}
                                                            onClick={() => setSelectedUserId(prev => prev === user.id ? "" : user.id)}
                                                            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all border
                                                                ${selectedUserId === user.id 
                                                                    ? 'bg-[#f43f5e]/20 border-[#f43f5e]' 
                                                                    : 'bg-[#27272A]/50 border-transparent hover:bg-[#3F3F46]'
                                                                }`}
                                                        >
                                                            <Avatar src={getImageUrl(user.image)} size="sm" showFallback />
                                                            <div className="flex flex-col overflow-hidden">
                                                                <span className="text-sm text-white font-medium truncate">{user.userName}</span>
                                                                <span className="text-xs text-gray-500 truncate">
                                                                    {searchType === 'id' ? `ID: ${user.id}` : user.email}
                                                                </span>
                                                            </div>
                                                            {selectedUserId === user.id && (
                                                                <Check className="ml-auto text-[#f43f5e] w-4 h-4 flex-shrink-0" />
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button 
                                                    color="default" 
                                                    variant="flat" 
                                                    onPress={() => {
                                                        setSearchInput("");
                                                        setSelectedUserId("");
                                                        onClose();
                                                    }}
                                                    className="hover-lift shadow-[inset_0px_2px_4px_rgba(255,255,255,0.4),inset_0px_-1px_2px_rgba(0,0,0,0.8)]"
                                                >
                                                    Cancel
                                                </Button>
                                                <Button 
                                                    color="primary"
                                                    className="hover-lift shadow-[inset_0px_2px_4px_rgba(255,255,255,0.5),inset_0px_-1px_2px_rgba(0,0,0,0.8)]"
                                                    isLoading={isAddingMember}
                                                    isDisabled={!selectedUserId} 
                                                    onPress={() => handleAddMember(onClose)}
                                                >
                                                    Add to Team
                                                </Button>
                                            </ModalFooter>
                                        </>
                                    )}
                                </ModalContent>
                            </Modal>
                        </div>
                    </div>

                    {/* 列表顯示區 */}
                    <div className="w-full flex flex-col lg:flex-row gap-x-12 gap-y-8 mt-4">
                        <div className="flex flex-col flex-1">
                            <ListHeader />
                            <div className="flex flex-col gap-1">
                                {leftColumnData.length > 0 ? (
                                    leftColumnData.map((worker) => (
                                        <ListRow key={`left-${worker.id}`} data={worker} />
                                    ))
                                ) : (
                                    <div className="py-8 text-center text-gray-500 text-sm">無符合的成員資料</div>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col flex-1">
                            {rightColumnData.length > 0 && <ListHeader />}
                            <div className="flex flex-col gap-1">
                                {rightColumnData.map((worker) => (
                                    <ListRow key={`right-${worker.id}`} data={worker} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 底部 Pagination */}
                    {totalPages > 1 && (
                        <div className="col-span-full flex items-center gap-2 mt-4 text-sm font-medium">
                            <button 
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={validCurrentPage === 1}
                                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-300 disabled:opacity-30 disabled:hover:text-gray-500 transition-colors"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                                <button
                                    key={num}
                                    onClick={() => setCurrentPage(num)}
                                    className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
                                        validCurrentPage === num 
                                        ? 'bg-[#f43f5e] text-white shadow-lg' 
                                        : 'text-gray-400 hover:bg-white/10 hover:text-gray-200'
                                    }`}
                                >
                                    {num}
                                </button>
                            ))}
                            
                            <button 
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={validCurrentPage === totalPages}
                                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-300 disabled:opacity-30 disabled:hover:text-gray-500 transition-colors"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                </div>
            )}
            {/* 當在 files 頁籤時，顯示預留的檔案區塊 */}
            {activeTab === "files" && currentTeamId && (
                <div className="flex-1 animate-appearance-in duration-300">
                    <Records workspaceId={currentTeamId}/>
                </div>
            )}
        </div>        
    );
}

export default Teams;