import React from 'react'
import { card,itemsQueryForALL } from '@/app/globalUse'

const MegaMenu = () => {
const [selectedCategory,setSelectedCategory] = React.useState("ALL");

const filteredCard = selectedCategory === "ALL"
    ? card
    : card.filter((item)=> item.category === selectedCategory)

return (
    // 這裡設計延伸區塊的樣式
    <div className="w-full p-6">
        <div className="p-[2.5px] h-[50px] grid grid-cols-5 w-full h-15 gap-4 rounded-lg bg-[#80A4D7]/20 dark:bg-[#27272A] ">
            {itemsQueryForALL.map((cat,index) => {
                const isSelected = selectedCategory === cat.id;
                return(
                <button
                    key={index}
                    onClick={()=>{setSelectedCategory(cat.id)}}
                    className={`h-[45px] flex justify-center items-center gap-2 rounded-lg text-black dark:text-[#B8B8B8] hover:cursor-pointer hover-lift
                    ${isSelected ? "bg-primary/80 dark:bg-[#505057] shadow-[0px_1px_2px_0px_#0000000D]":""}
                        `}
                >
                    <cat.icon size={20} color='#a4a4b2' className='invert dark:invert-0'/>
                    <p className='font-inter text-[10px] hidden sm:inline'>{cat.label}</p>
                </button>);
            })}
        </div>
        <div>
            <ul className="grid grid-cols-4 sm:grid-cols-6 p-4 gap-3">
                {filteredCard.map((item, i) => (
                    <li key={i} className="text-sm text-zinc-400 hover:text-white cursor-pointer transition-colors text-center">
                    {item.title}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);
}

export default MegaMenu