'use client'
import React from 'react';
import { Avatar } from "@heroui/react";
// import StepItem from "./StepItem"; // 如果分開寫的話
import { Link } from '@heroui/react';
import { MoveRight,MoveLeft ,DoorOpen} from 'lucide-react';
import Image from 'next/image';
import DashboardButton from '../buttons/DashboardButton';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface SidebarDashboardProps {
    currentSelect: string;
    onSelect:(value:string)=>void;
}

const SidebarDashboard = ({ currentSelect, onSelect }: SidebarDashboardProps) => {
    const {data:session} = useSession();
    const router = useRouter();
    return (
        <aside style={{backdropFilter:'blur(100px)',backgroundColor: '#A1A1AA40',}} className=" px-5 py-10 flex flex-col justify-between h-full">
            <div className='flex flex-col items-center gap-5'>
                <Image
                    height={70}
                    width={230}
                    src="/icons/GomorelogoWithIconAndCompanyname.svg"
                    alt='gomore logo'
                    className=''
                />
                <div className='flex gap-2 items-center'>
                    {session && 
                    <Avatar                       
                        className=""   
                        name={session.user?.name || ""}
                        size="lg"
                        src={session.user?.image || ""}
                        showFallback/>
                    }
                    <div className='flex flex-col gap'>
                        <p className='font-inter font-light text-[#ECEDEE]'>{session?.user?.name}</p>
                        <p className='font-inter font-light text-[#71717A]'>{session?.user?.role} User</p>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <DashboardButton 
                        currentSelect={currentSelect} 
                        onSelect={onSelect}/>
                </div>
            </div>
            
            {/* 底部按鈕 */}
            <div className="flex justify-center">
                <button
                    className="hover-lift bg-[#D70036] px-[12px] py-[6px] gap-[12px] rounded-lg flex items-center shadow-[0px_0px_2px_0px_#000000B2,inset_0px_-4px_4px_0px_#00000040,inset_0px_4px_2px_0px_#FFFFFF33]"
                    onClick={()=>router.push('/')}
                    aria-label="Leave Dashboard"
                    >
                    <DoorOpen size={20} className=""/>
                    <p className='text-white font-inter font-light text-xs'>Leave Dashboard</p>
                </button>
            </div>
        </aside>
    );
}

export default SidebarDashboard;