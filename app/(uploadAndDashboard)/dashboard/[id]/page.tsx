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
    <div className='min-h-screen  relative'>
        <div className='flex w-full min-h-screen gap-4 p-2 '>
            <div className='relative overflow-hidden rounded-lg border-[5px] border-[#FFFFFF29]'>
                    <SidebarBlobs/>
                    {/* 建立一個絕對定位的層，專門放陰影，並確保它在背景之上 */}
                    <div className='absolute inset-0 pointer-events-none shadow-[inset_0px_0px_27.1px_0px_#000000] z-10'/>
                        <SidebarDashboard 
                            currentSelect={selected}
                            onSelect={handleOnSelect}                        
                        />
            </div>
            <div className='border-3 border-green-500 flex-grow'>
                {selected === "Settings" && <div>Settings</div>}
                {selected === "Team" && <div>Team</div>}
                {selected === "Models" && <div>Models</div>}
            </div>
        </div>
    </div>  
    );
}

export default Dashboard