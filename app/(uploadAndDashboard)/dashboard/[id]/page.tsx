'use client'
import React from 'react';
import SidebarDashboard from '@/components/sidebar/SidebarDashboard';
import { useState } from 'react';
import SidebarBlobs from '@/components/blobs/SidebarBlobs';
import Settings from '@/components/dashboard/Settings';
import Team from '@/components/dashboard/Team';
import Models from '@/components/dashboard/Models';

const Dashboard = () => {
    const [selected,setSelected] = useState("Settings");
    const handleOnSelect = (value:string) => setSelected(value);
    //let the children component call setStep
    return (
    <div className='min-h-screen bg-[#27272A] relative'>
        <div className='flex w-full min-h-screen gap-4 p-2 '>
            <div className='relative max-w-[275px] min-w-[200px] w-[25dvw] overflow-hidden rounded-lg border-[5px] border-[rgba(40,48,62,0.6)]'>
                    <SidebarBlobs/>
                    {/* 建立一個絕對定位的層，專門放陰影，並確保它在背景之上 */}
                    <div className='absolute inset-0 pointer-events-none shadow-[inset_0px_0px_27.1px_0px_#000000] z-10'/>
                        <SidebarDashboard 
                            currentSelect={selected}
                            onSelect={handleOnSelect}                        
                        />
            </div>
            <div className='grow rounded-lg overflow-hidden p-8 shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D]'>
                {selected === "Settings" && <Settings/>}
                {selected === "Team" && <Team/>}
                {selected === "Models" && <Models/>}
            </div>
        </div>
    </div>  
    );
}

export default Dashboard