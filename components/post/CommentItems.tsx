"use client";
import React, { useState } from 'react';
import { Avatar, Button } from '@heroui/react';
import { formatDistanceToNow } from 'date-fns';
import { zhTW } from 'date-fns/locale';
import { MessageSquare } from 'lucide-react';
import { ReplyingToUser } from './CommentSection';
import { updateComment, deleteComment } from '@/lib/actions/comment.action';

interface CommentItemProps {
    comment: any; // 建議之後定義完整的 Comment Type
    depth?: number; // 記錄目前的巢狀深度
    postAuthorId:string;
    onReplyClick: (user: ReplyingToUser) => void;
    currentUserId?:string;
    onRefresh: () => void;
}

export default function CommentItem({ comment, depth = 0, postAuthorId, onReplyClick, currentUserId, onRefresh }: CommentItemProps) {
    
    const [isEditing, setIsEditing] = useState(false);
    // 限制巢狀深度，避免 UI 縮進過頭（例如最多縮排 3 層，之後就不再縮排）
    const canIndent = depth < 3;

    const handleReply = () => {
        onReplyClick({
            parentCommentId: comment.id,
            userName: comment.user.userName,
        });
    }
    const getImageUrl = (imageVal: string | null | undefined) => {
        if(!imageVal) return "";
        if(imageVal.startsWith("http")) return imageVal;
        return `${process.env.NEXT_PUBLIC_S3_ENDPOINT_SERVER}/${process.env.NEXT_PUBLIC_S3_IMAGES_BUCKET}/${imageVal}`;
    };
    const commentData = {
        image:getImageUrl(comment.user.image),
    }
    return (
        <div className={`mt-6 ${canIndent && depth > 0 ? 'ml-10 border-l-2 border-[#3F3F46] pl-4' : ''}`}>
        <div className="flex gap-3">
            <Avatar 
                src={commentData.image || ""} 
                size="sm"
                showFallback
            />
            <div className="flex-1">
            <div className="flex items-center gap-2">
                <span className="text-white text-sm font-medium">{comment.user.userName}</span>
                {comment.user.id === postAuthorId && (
                    <span className="bg-[#3F3F46] text-white text-[10px] px-1.5 py-0.5 rounded ml-2">Author</span>
                )}
                <span className="text-[#A1A1AA] text-xs">
                {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true, locale: zhTW })}
                </span>
            </div>
            <p className="text-zinc-300 text-sm mt-1 leading-relaxed">
                {comment.parent?.user?.userName && (
                    <span className='text-blue-400 mr-2 hover:underline cursor-pointer'>
                        @{comment.parent.user.userName}
                    </span>
                )}
                {comment.content}
            </p>
            
            {/* 回覆按鈕 */}
            <button 
                onClick={handleReply}
                className="flex items-center gap-1 text-[#A1A1AA] text-xs mt-2 hover:text-white transition-colors"
            >
                <MessageSquare size={14} /> Reply
            </button>

            {/* 如果點擊了 Reply，這裡可以塞入我們之前的 CommentInput (傳入 parentId) */}
            {/* {showReplyInput && <CommentInput postId={comment.postId} parentId={comment.id} ... />} */}
            </div>
        </div>

        {/* 🚀 遞迴核心：如果這則留言有回覆，就呼叫自己 */}
        {comment.replies && comment.replies.length > 0 && (
            <div className="space-y-2">
            {comment.replies.map((reply: any) => (
                <CommentItem 
                    key={reply.id} 
                    comment={reply} 
                    depth={depth + 1} 
                    postAuthorId={postAuthorId}
                    onReplyClick={onReplyClick}
                    currentUserId={currentUserId}
                    onRefresh={onRefresh}
                />
            ))}
            </div>
        )}
        </div>
    );
}