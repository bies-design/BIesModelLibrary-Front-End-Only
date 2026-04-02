'use client';
import React,{useState} from 'react'
import {Card, CardBody, toggle, Tooltip, user} from "@heroui/react";
import Image from 'next/image';
import { Rotate3D,File, Star } from 'lucide-react';
import { card } from '@/app/globalUse';
import { useRouter } from 'next/navigation';
import { toggleCollection } from '@/lib/actions/post.action';

//定義Props的type
interface PostCardProps {
  dbId:string;
  shortId:string;
  coverImage:string;
  type:'2D' | '3D';
  title:string;
  clickable?:boolean;
  isCollectedInitial?:boolean;
  onCollectionToggle?: (id: string, newIsCollected: boolean) => void;
  teamColor?: string | null;
  teamName:string;
}
// 將父層傳入的參數解構出 selectedCategory
const PostCard = ({
  dbId,
  shortId,
  coverImage,
  type,
  title,
  clickable = true,
  isCollectedInitial = false,
  onCollectionToggle,
  teamColor = null,
  teamName
}:PostCardProps) => {
  // const minioUrl =`${process.env.NEXT_PUBLIC_S3_ENDPOINT}/images`;
  // const imageUrl = `${minioUrl}/${coverImage}`;
  const [isCollected, setIsCollected] = useState<boolean>(isCollectedInitial);
  // prevent over clicked
  const [isToggling, setIsToggling] = useState(false);
  const router = useRouter();

  const handleStarClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    // 如果正在發 API，擋住連點
    if(isToggling) return;

    const nextStatus = !isCollected;
    // (Optimistic UI)：先讓ui變色
    setIsCollected(nextStatus);
    setIsToggling(true);

    //瞬間通知外層 (Models) 狀態改變了
    if (onCollectionToggle) onCollectionToggle(dbId, nextStatus);

    const result = await toggleCollection(dbId);

    // 如果伺服器發生錯誤 (例如斷網)，把星星的顏色退回原本的狀態
    if(!result.success){
      setIsCollected(isCollected);
      console.log(result.error);
    }

    setIsToggling(false);
  };

  return (
    <Tooltip content={title} placement='bottom'>
      <div key={dbId} onClick={()=> {if(clickable) router.push(`/post/${shortId}`);}} className={`${clickable ? "hover-lift cursor-pointer" : ""} w-[300px] h-[300px] `}>
        <Card className="w-full h-full flex-col pb-4 pt-4 pl-4 pr-4 bg-[#ecece9] dark:bg-[#3F3F46] shadow-[4px_4px_3px_rgba(0,0,0,0.5),inset_0px_3px_4px_rgba(255,255,255,1)] dark:shadow-[4px_4px_5px_rgba(0,0,0,0.32),inset_0px_2px_5px_rgba(255,255,255,0.25)]">
          <CardBody 
            className="py-0 px-0 rounded-[20px] relative items-center w-full shadow-[0px_3px_5px_1px_rgba(255,255,255,0.16),0px_-2px_2.5px_rgba(0,0,0,0.25)]">
              
            {/* Image縮放的裁剪框 */}
            <div className='relative w-full h-[230px] overflow-hidden rounded-[20px] group bg-[#FFFFF4] dark:bg-[#18181B] '>  
              
              <Image
                className="object-cover w-full h-full transition-transform duration-300 scale-110 hover:scale-140"
                src={coverImage}
                alt="Project Image"
                width={230}
                height={230}
                unoptimized={true} //專案上線後要拿掉
              />
              {/* 內凹陰影覆蓋層 */}
              <div className="absolute rounded-[20px] pointer-events-none z-10 inset-0">
              </div>
              {teamColor && teamColor !== "" && 
              
                <div 
                  className="absolute top-4 left-2 p-2 z-30 cursor-help" // 增加 padding 讓感應區變大
                  onClick={(e) => e.stopPropagation()}
                >
                  <Tooltip content={teamName} placement="bottom" className='text-white!'>
                    <div
                      className="w-4 h-4 rounded-full border border-white/20 shadow-md"
                      style={{ backgroundColor: teamColor }}
                    />
                  </Tooltip>
                </div>
              }
              {/* 右上角的懸浮小圖示 到時候需要一個boolean來判斷是否顯示*/}
              {(type === '3D' )?(
                <div className="text-black dark:text-white bg-[#FFFFF4] dark:bg-[#3F3F46] absolute top-3 right-5 p-2 rounded-full backdrop-blur-md z-20 border border-white/10">
                  <Rotate3D
                    width={16}
                    height={16}
                  />
                </div>):(
                <div className="text-black dark:text-white bg-[#FFFFF4] dark:bg-[#3F3F46] absolute top-3 right-5 p-2 rounded-full backdrop-blur-md z-20 border border-white/10">
                  <File
                    width={16}
                    height={16}
                  />
                </div>)}
            </div>
          </CardBody>
          <div className=" mt-2 px-5 flex items-center justify-between text-sm min-w-0">
            <p className='flex items-center gap-1 min-w-0'>
              <Image
                className='shrink-0 invert dark:invert-0'
                src="/icons/buildingIcon.svg"
                alt="Building Icon"
                width={16}
                height={16}
              />
              <span className='truncate text-black dark:text-[#E4E4E7] font-medium'>{title}</span>
            </p>
            {/* shrink 0 for 當文字過長也不可以擠壓到按鈕 */}
            <div className='flex gap-2 h-8 shrink-0'>         
              <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <linearGradient id="star-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FFF282" />
                        <stop offset="100%" stopColor="#FFC837" />
                    </linearGradient>
                </defs>
              </svg>
              <Tooltip content={`Collection`} placement='bottom'>
                <button
                  onClick={handleStarClick}
                  aria-label={`Collection ${title}`}
                  className='hover-lift bg-[#FFFFF4] dark:bg-[#52525B] rounded-lg px-2 py-1 shadow-[inset_0px_2px_5px_rgba(255,255,255,0.8),inset_0px_-1px_3px_rgba(0,0,0,0.8)] dark:shadow-[inset_0px_2px_1px_rgba(255,255,245,0.2),inset_0px_-2px_8px_rgba(0,0,0,0.4)]
                    active:shadow-sm'>
                  <Star
                    fill={isCollected ? 'url(#star-gradient)' : 'none'}
                    stroke={isCollected ? 'none' : 'currentColor'}
                    size={18}
                    className='text-black dark:text-white'
                  />
                </button>
              </Tooltip>
            </div>
          </div>
        </Card>
      </div>
    </Tooltip>
  );
}

export default PostCard;