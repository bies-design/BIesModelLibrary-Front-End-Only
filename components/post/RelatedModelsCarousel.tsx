"use client";

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PostCard from '@/components/cards/PostCard'; // 確認路徑是否正確

interface RelatedModelsCarouselProps {
    relatedPosts: any[];
}

export default function RelatedModelsCarousel({ relatedPosts }: RelatedModelsCarouselProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            // 一次滑動大約一張卡片的寬度 + gap
            const scrollAmount = direction === 'left' ? -320 : 320;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    if (!relatedPosts || relatedPosts.length === 0) {
        return <p className="text-[#A1A1AA] text-sm">No related models.</p>;
    }

    return (
        <div className="relative w-full">
            {/* 左箭頭 */}
            <button 
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 glass-panel
                    transition-colors duration-200 hover:bg-black/30  text-white p-2 rounded-full 
                    hidden min-[360px]:block"
            >
                <ChevronLeft size={24} />
            </button>

            {/* 滑動容器 */}
            <div 
                ref={scrollContainerRef}
                className="flex gap-4 items-center overflow-x-auto scrollbar-hide p-5 rounded-2xl snap-x snap-mandatory hide-scrollbar"
            >
                {relatedPosts.map((relPost: any) => (
                    // shrink-0 防止擠壓，snap-start 確保滑動對齊
                    <div key={relPost.id} className="shrink-0 snap-start w-[300px]">
                        <PostCard 
                            dbId={relPost.id}
                            shortId={relPost.shortId}
                            coverImage={relPost.coverImage}
                            type={relPost.type}
                            title={relPost.title}
                            isCollectedInitial={relPost.isCollected}
                            teamColor={relPost.team?.color}
                            teamName={relPost.team?.name}
                        />
                    </div>
                ))}
            </div>

            {/* 右箭頭 */}
            <button 
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 
                    transition-colors duration-200 hover:bg-black/30 glass-panel text-white p-2 rounded-full 
                    hidden min-[360px]:block"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
}