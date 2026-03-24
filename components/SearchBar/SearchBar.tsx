import React from 'react'
import { Input,Dropdown,DropdownTrigger,DropdownMenu,DropdownItem,Button,Popover, PopoverTrigger, PopoverContent } from '@heroui/react';
import { useTheme } from 'next-themes';
import { Search,ChevronDown ,ChevronUp} from 'lucide-react';

//定義 Props，讓父組件傳入控制函式
interface SearchBarProps {
    isMenuOpen:boolean;
    onToggle:()=>void;
}
// 接收 props
const SearchBar = ({isMenuOpen,onToggle}:SearchBarProps) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    
    return (
        <>
            <Input
                aria-label="Search 3D models"
                classNames={{
                    base: "w-full max-w-[433px] lg:max-w-[400px] xl:max-w-[600px] h-10 transition-all duration-300",
                    mainWrapper: "h-full",
                    input: `text-small  ${isDark ? "text-red-500" : "text-black"}`,
                    inputWrapper:
                    "font-abeezee h-full font-normal pr-1 pl-0 text-default-500 bg-default-400/20 dark:bg-[var(--colors-layout-foreground-900,#27272A)] rounded-full shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_0px_#00000099,0px_3px_1.8px_0px_#FFFFFF29,0px_-2px_1.9px_0px_#00000040,0px_0px_4px_0px_#FBFBFB3D]",
                }}
                placeholder="Search 3D models"
                size="sm"
                // <button className='hover-lift flex ml-[3px] pl-[17px] py-[7px] items-center rounded-l-full bg-[#D4D4D8] dark:bg-[#3F3F46] shadow-[0px_0px_2px_0px_#000000B2,inset_0px_-4px_4px_0px_#00000040,inset_0px_4px_2px_0px_#FFFFFF33] w-[90px]'><p className='font-inter text-[12px]'>ALL</p><ChevronDown size={20}/></button>
                startContent={
                    // 用純 Button 觸發 onToggle
                    <button
                        type='button'
                        onClick={onToggle}
                        aria-label="Toggle category menu"
                        className={`active-press flex ml-[3px] pl-[17px] py-[7px] items-center rounded-l-full bg-[#D4D4D8] dark:bg-[#3F3F46] shadow-[0px_0px_2px_0px_#000000B2,inset_0px_-4px_4px_0px_#00000040,inset_0px_4px_2px_0px_#FFFFFF33] w-[90px]
                        ${isMenuOpen ? "bg-red-600 text-white" : "bg-[#D4D4D8] dark:bg-[#3F3F46]"}`}>
                        <p className='font-inter text-[12px]'>ALL</p>
                        {isMenuOpen ? <ChevronUp size={20}/>:<ChevronDown size={20}/>}
                    </button>
                } 
                endContent={
                    <button
                        type="button"
                        aria-label="Search"
                        className="active-press hover:cursor-pointer rounded-full p-2 bg-[#D4D4D8] dark:bg-[#52525B] shadow-[0px_0px_2px_#000000B2,inset_0px_-4px_4px_0px_#00000040,inset_0px_4px_2px_0px_#FFFFFF33]"
                        >
                        <Search
                            size={16} // 固定圖示大小，不會受外層邊框影響
                            className="text-zinc-300 invert dark:invert-0"
                        />
                    </button>
                }
                //input type = search
                type="search"
            />
        </>
    )
}

export default SearchBar;