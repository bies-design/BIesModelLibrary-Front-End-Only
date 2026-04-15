import React, {useState, useEffect} from 'react';
import { DashboardButtons } from '@/app/globalUse';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { getUserTeams } from '@/lib/actions/team.action';


interface SidebarDashboardButtonsProps {
    currentSelect: string;
    onSelect:(value:string)=>void;
}

const DashboardButton = ({currentSelect,onSelect}:SidebarDashboardButtonsProps) => {
const button = DashboardButtons;

const { data: session } = useSession();
const router = useRouter();
const searchParams = useSearchParams();

// 取得網址上的 teamId
const currentTeamId = searchParams.get('teamId');

// 管理使用者團隊的 State
const [userTeams, setUserTeams] = useState<any[]>([]);
const [isLoadingTeams, setIsLoadingTeams] = useState(true);

// 抓取使用者團隊
useEffect(() => {
    const fetchTeams = async () => {
        if (session?.user?.id) {
            const result = await getUserTeams();
            if (result.success && result.data) {
                setUserTeams(result.data);
                
                // (選擇性) 如果目前網址沒有 teamId，且使用者有團隊，且目前選中 Teams 頁籤，則導航過去
                if (!currentTeamId && result.data.length > 0 && currentSelect === 'Teams') {
                    router.push(`/dashboard/${session.user.id}?tab=Teams&teamId=${result.data[0].id}`); 
                    // 注意：這裡的路由要配合你實際切換 tab 的寫法
                }
            }
        }
        setIsLoadingTeams(false);
    };
    fetchTeams();
}, [session?.user?.id, currentTeamId, currentSelect, router]);

const handleTeamSelect = (teamId: string) => {
    if(teamId === 'create'){
        router.push(`/dashboard/${session?.user.id}?tab=Teams&teamId=create`);
        onSelect('Teams'); 
        return;
    }
    // 更新 URL 參數
    router.push(`/dashboard/${session?.user.id}?tab=Teams&teamId=${teamId}`);      // 觸發父元件的選中狀態更新
    onSelect('Teams'); 
};

const activeTeam = userTeams.find(t => t.id === currentTeamId);

return (
        <>
        {DashboardButtons.map((btn) => {
            const isSelected = currentSelect === btn.label;

            // 🚀 關鍵判斷：如果是 Teams 按鈕，且使用者有團隊資料，就改用 Dropdown 渲染
            if (btn.label === 'Teams' && userTeams.length > 0) {
                const dropdownItems = [
                    ...userTeams,
                    { id: "create", name: "Create New Team", role: "ACTION" } // 特殊選項
                ];
                return (
                    <Dropdown key={btn.id} classNames={{ content: "bg-[#27272A] border border-white/10" }}>
                        <DropdownTrigger>
                            <div 
                                className={`cursor-pointer flex w-full rounded-lg px-[12px] py-[12px] gap-[16px] items-center justify-between transition-all
                                ${isSelected ? "bg-[#FFFFFF33] backdrop-blur-[54.7px] text-[#FFFFFF]" : "text-[#A1A1AA] hover:bg-white/5"}`}
                                onClick={() => onSelect(btn.label)} // 點擊外框還是可以觸發 tab 切換
                            >
                                <div className="flex items-center gap-[16px]">
                                    <btn.icon size={25} />
                                    {/* 顯示目前選中的團隊名稱，或者預設文字 */}
                                    <button className="truncate max-w-[90px] text-left">
                                        {isSelected && activeTeam ? activeTeam.name : btn.label}
                                    </button>
                                </div>
                                {/* 下拉箭頭小圖示 */}
                                <ChevronDown size={14} className={isSelected ? "text-white" : "text-[#A1A1AA]"} />
                            </div>
                        </DropdownTrigger>
                        <DropdownMenu 
                            aria-label="Select a team"
                            items={dropdownItems}
                            onAction={(key) => handleTeamSelect(key as string)}
                            selectedKeys={currentTeamId ? new Set([currentTeamId]) : new Set()}
                            selectionMode="single"
                            itemClasses={{
                                base: "text-gray-300 data-[hover=true]:text-white data-[hover=true]:bg-white/10",
                            }}
                        >
                            {(team) => (
                                <DropdownItem key={team.id}>
                                    {team.name}
                                    {team.role !== "ACTION" && (
                                        <span className="text-[10px] text-gray-500 ml-2">({team.role})</span>
                                    )}
                                </DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                );
            }

            // 🚀 預設的渲染方式 (適用於 Settings, Models，或者還沒有團隊時的 Teams)
            return (
                <div 
                    key={btn.id} 
                    onClick={() => onSelect(btn.label)}
                    className={`cursor-pointer flex w-full rounded-lg px-[12px] py-[12px] gap-[16px] items-center transition-all
                    ${isSelected ? "bg-[#FFFFFF33] backdrop-blur-[54.7px] text-[#FFFFFF]" : "text-[#A1A1AA] hover:bg-white/5"}`}
                >
                    <btn.icon size={25} />
                    <button className=''>{btn.label}</button>
                </div>
            );
        })}
    </>
    );
}

export default DashboardButton;