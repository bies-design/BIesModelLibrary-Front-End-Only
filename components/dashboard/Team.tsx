import React, { useState } from 'react';
import { Input, Button, Avatar, User } from "@heroui/react";
import { CirclePlus, PenLine,Search, Check, Filter, ArrowUpDown, Edit2, Download, 
    Trash2, Box, Copy, Layers, Loader2,ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const mockDataLeft = [
    { id: '4121', name: 'Tony Reichert', handle: '@tony', role: 'Employees', avatar: '/api/placeholder/40/40', checked: false },
    { id: '1123', name: 'Zoey Lang', handle: '@zoey', role: 'Manager', avatar: '/api/placeholder/40/40', checked: true },
    { id: '6542', name: 'Jane Fisher', handle: '@jane.fisher', role: 'Owner', avatar: '/api/placeholder/40/40', checked: false },
    { id: '2576', name: 'William Howard', handle: '@william.howard', role: 'Employees', avatar: '/api/placeholder/40/40', checked: true },
    { id: '8743', name: 'Kristen Copper', handle: '@kristen.copper', role: 'Employees', avatar: '/api/placeholder/40/40', checked: false },
    { id: '4121', name: 'Tony Reichert', handle: '@tony', role: 'Employees', avatar: '/api/placeholder/40/40', checked: false },
    { id: '6542', name: 'Jane Fisher', handle: '@jane.fisher', role: 'Employees', avatar: '/api/placeholder/40/40', checked: false },
    { id: '8743', name: 'Kristen Copper', handle: '@kristen.copper', role: 'Employees', avatar: '/api/placeholder/40/40', checked: false },
    { id: '8743', name: 'Kristen Copper', handle: '@kristen.copper', role: 'Employees', avatar: '/api/placeholder/40/40', checked: false },
];

const mockDataRight = [
    { id: '4121', name: 'Tony Reichert', handle: '@tony', role: 'Employees', avatar: '/api/placeholder/40/40', checked: false },
    { id: '1123', name: 'Zoey Lang', handle: '@zoey', role: 'Employees', avatar: '/api/placeholder/40/40', checked: true },
    { id: '6542', name: 'Jane Fisher', handle: '@jane.fisher', role: 'Employees', avatar: '/api/placeholder/40/40', checked: false },
    { id: '2576', name: 'William Howard', handle: '@william.howard', role: 'Employees', avatar: '/api/placeholder/40/40', checked: true },
    { id: '8743', name: 'Kristen Copper', handle: '@kristen.copper', role: 'Employees', avatar: '/api/placeholder/40/40', checked: false },
    { id: '4121', name: 'Tony Reichert', handle: '@tony', role: 'Employees', avatar: '/api/placeholder/40/40', checked: false },
    { id: '6542', name: 'Jane Fisher', handle: '@jane.fisher', role: 'Employees', avatar: '/api/placeholder/40/40', checked: false },
    { id: '8743', name: 'Kristen Copper', handle: '@kristen.copper', role: 'Employees', avatar: '/api/placeholder/40/40', checked: false },
    { id: '8743', name: 'Kristen Copper', handle: '@kristen.copper', role: 'Employees', avatar: '/api/placeholder/40/40', checked: false },
];

type Props = {};

const Team = (props: Props) => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const ListHeader = () => (
        <div className="grid grid-cols-[40px_100px_1fr_120px] items-center gap-4 py-3 px-2 bg-[#212126] rounded-t-xl text-sm font-medium text-gray-400 mb-2">
        <div className="flex justify-center">
            <div className="w-5 h-5 rounded-[6px] border-2 border-gray-600 bg-transparent" />
        </div>
        <div>Woker ID</div> {/* 依照截圖的拼字 */}
        <div className="flex items-center gap-1">
            Member <ChevronDown className="w-4 h-4" />
        </div>
        <div>Role</div>
        </div>
    );

    const ListRow = ({ data }: { data: any }) => (
        <div className="grid grid-cols-[40px_100px_1fr_120px] items-center gap-4 py-3 px-2 hover:bg-white/5 rounded-lg transition-colors group">
            {/* 獨立 Checkbox */}
            <div className="flex justify-center">
                <div className={`w-5 h-5 rounded-[6px] border flex items-center justify-center transition-colors ${
                data.checked 
                    ? 'bg-[#f43f5e] border-[#f43f5e]' 
                    : 'border-gray-600 bg-transparent group-hover:border-gray-400'
                }`}>
                {data.checked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                </div>
            </div>

            {/* Worker ID + Copy Icon */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
                {data.id}
                <button className="text-gray-500 hover:text-gray-300 transition-colors">
                <Copy className="w-4 h-4" />
                </button>
            </div>

            {/* Member Info */}
            <div className="flex items-center gap-3">
                <img src={data.avatar} alt={data.name} className="w-10 h-10 rounded-full object-cover bg-gray-700" />
                <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-200">{data.name}</span>
                <span className="text-xs text-gray-500">{data.handle}</span>
                </div>
            </div>

            {/* Role */}
            <div className="flex items-center justify-between text-sm text-gray-200 cursor-pointer group/role">
                {data.role}
                <ChevronDown className="w-4 h-4 text-gray-500 group-hover/role:text-gray-300 transition-colors" />
            </div>
        </div>
    );

    return (
        <div className='flex text-white flex-col w-full h-full font-inter gap-4'>
            <h1 className="text-3xl font-bold text-white">Team Members</h1>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8'>
                <div>
                    <Input
                        label="Team Name"
                        labelPlacement="outside"
                        type="text"
                        defaultValue="Gomore"
                        variant="flat"
                        classNames={{
                            inputWrapper: "bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D]",
                        }}
                    />
                </div>
                <div>
                    <Input
                        label="Add Members"
                        labelPlacement="outside"
                        type="text"
                        defaultValue="Enter UserID"
                        variant="flat"
                        classNames={{
                            inputWrapper: "bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D]",
                        }}
                    />
                </div>
                {/* --- Row 4 Right: Password Actions --- */}
                <div className="flex items-end">
                    <Button 
                        className="hover-lift flex items-center gap-2 px-4 py-2 bg-[#e11d48] text-white rounded-xl shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_4px_2px_#FFFFFF33] hover:bg-[#be123c] text-sm font-medium transition-colors"
                        variant="flat"
                        startContent={<CirclePlus size={16} />}
                    >
                        Add Members
                    </Button>
                </div>
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

            <div className="w-full flex flex-wrap gap-x-12 gap-y-8">
                
                {/* 左側列表 */}
                <div className="flex flex-col">
                    <ListHeader />
                    <div className="flex flex-col gap-1">
                        {mockDataLeft.map((worker, index) => (
                        <ListRow key={`left-${index}`} data={worker} />
                        ))}
                    </div>
                </div>

                {/* 右側列表 */}
                <div className="flex flex-col">
                    <ListHeader />
                    <div className="flex flex-col gap-1">
                        {mockDataRight.map((worker, index) => (
                        <ListRow key={`right-${index}`} data={worker} />
                        ))}
                    </div>
                </div>

                

            </div>
            {/* 底部 Pagination (跨越兩欄，並靠左對齊) */}
            <div className="col-span-full flex items-center gap-2 mt-4 text-sm font-medium">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-300 transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                </button>
                
                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <button
                    key={num}
                    onClick={() => setCurrentPage(num)}
                    className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
                        currentPage === num 
                        ? 'bg-[#f43f5e] text-white' 
                        : 'text-gray-400 hover:bg-white/10 hover:text-gray-200'
                    }`}
                    >
                    {num}
                    </button>
                ))}
                
                <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-300 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

export default Team;