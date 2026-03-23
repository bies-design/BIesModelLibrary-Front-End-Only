'use client';
import React from 'react'
import {Card, CardBody, Tooltip, user} from "@heroui/react";
import Image from 'next/image';
import { Rotate3D,File } from 'lucide-react';
import { card } from '@/app/globalUse';
import { useRouter } from 'next/navigation';

//定義Props的type
interface PostCardProps {
  dbId:string;
  shortId:string;
  coverImage:string;
  type:'2D' | '3D';
  title:string;
}
// 將父層傳入的參數解構出 selectedCategory
const PostCard = ({
  dbId,
  shortId,
  coverImage,
  type,
  title,
}:PostCardProps) => {
  // const minioUrl =`${process.env.NEXT_PUBLIC_S3_ENDPOINT}/images`;
  // const imageUrl = `${minioUrl}/${coverImage}`;
  const router = useRouter();

  return (
    <Tooltip content={title} placement='bottom'>
      <div key={dbId} onClick={()=> router.push(`/post/${shortId}`)} className='hover-lift cursor-pointer w-[300px] h-[300px]'>
        <Card className="w-full h-full flex-col pb-4 pt-4 pl-4 pr-4 bg-[#FFFFF4] dark:bg-[#3F3F46] shadow-[4px_4px_3px_rgba(0,0,0,0.5),inset_0px_5px_0px_rgba(255,255,255,1)] dark:shadow-[4px_4px_20px_rgba(0,0,0,0.32),4px_4px_20px_rgba(0,0,0,0.66),inset_0px_2px_5px_rgba(255,255,255,0.25)]">
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
              {/* 右上角的懸浮小圖示 到時候需要一個boolean來判斷是否顯示*/}
              {(type === '3D' )?(
                <div className="bg-[#FFFFF4] dark:bg-[#3F3F46] absolute top-3 right-5 p-2 rounded-full backdrop-blur-md z-20 border border-white/10">
                  <Rotate3D
                    width={16}
                    height={16}
                  />
                </div>):(
                <div className="bg-[#FFFFF4] dark:bg-[#3F3F46] absolute top-3 right-5 p-2 rounded-full backdrop-blur-md z-20 border border-white/10">
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
            <div className='flex gap-2 shrink-0'>
              <button
                onClick={(e)=>{e.stopPropagation(); console.log("Download clicked");}}
                aria-label={`Download ${title}`}
                className='hover-lift flex items-center bg-[#FFFFF4] dark:bg-[#52525B] rounded-lg px-3 py-1.5 shadow-[inset_0px_2px_5px_rgba(255,255,255,0.8),inset_0px_-1px_3px_rgba(0,0,0,0.8)] dark:shadow-[inset_0px_2px_1px_rgba(255,255,245,0.2),inset_0px_-2px_8px_rgba(0,0,0,0.4)]
              active:shadow-sm'>
                <Image
                  className='invert dark:invert-0'
                  src="/icons/Downloadicons.svg"
                  alt="Download Icon"
                  width={16}
                  height={16}
                />
                <p className='ml-1 font-medium text-black dark:text-[#E4E4E7] font-medium'><span className='hidden lg:inline'>Download</span></p>
              </button>
              <Tooltip content={`Archive`} placement='bottom'>
                <button
                  onClick={(e)=>{e.stopPropagation(); console.log("Archive clicked");}}
                  aria-label={`Archive ${title}`}
                  className='hover-lift bg-[#FFFFF4] dark:bg-[#52525B] rounded-lg px-2 py-1 shadow-[inset_0px_2px_5px_rgba(255,255,255,0.8),inset_0px_-1px_3px_rgba(0,0,0,0.8)] dark:shadow-[inset_0px_2px_1px_rgba(255,255,245,0.2),inset_0px_-2px_8px_rgba(0,0,0,0.4)]
                    active:shadow-sm'>
                  <Image 
                    className='invert dark:invert-0'
                    src="/icons/ArchiveIcon.svg"
                    alt="Archive Icon"
                    width={16}
                    height={16}
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