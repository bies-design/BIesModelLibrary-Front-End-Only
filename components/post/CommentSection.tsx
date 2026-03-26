// components/post/CommentSection.tsx
"use client";
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Avatar, Input, Button, image } from '@heroui/react';

export default function CommentSection() {
    const {data:session} = useSession();
    
    const getImageUrl = (imageVal: string | null | undefined) => {
        if(!imageVal) return "";
        if(imageVal.startsWith("http")) return imageVal;
        return `${process.env.NEXT_PUBLIC_S3_ENDPOINT_SERVER}/${process.env.NEXT_PUBLIC_S3_IMAGES_BUCKET}/${imageVal}`;
    };
    const userData = {
        name:session?.user.name,
        image:getImageUrl(session?.user.image),
    }
    const [comment, setComment] = useState("");

    return (
        <div className="mt-8 pt-8 border-t border-[#3F3F46]">
            <h2 className="text-xl text-white mb-6">Comments <span className="text-[#A1A1AA] text-base">(0)</span></h2>
            <div className="flex gap-4 items-center">
                <Avatar 
                    src={userData.image || ""} 
                    name={userData.name || ""}
                    className="w-10 h-10 text-large" 
                    showFallback
                />
                <div className='flex-1 relative'>
                    <input 
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        type="text" 
                        placeholder="Come and comment now" 
                        className="w-full glass-panel rounded-full px-6 py-3 text-sm focus:bg-white/20 pr-24 outline-none"
                    />
                    <button className="absolute right-1 bottom-1 rounded-r-full border-l-1 border-white/20 text-white px-6 py-2 text-sm font-medium hover:bg-white/30">
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
}