// components/post/CommentSection.tsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { addToast, Avatar } from '@heroui/react';
import { formatDistanceToNow } from 'date-fns';
import { zhTW } from 'date-fns/locale';
import { getCommentsByPostId, createComment } from '@/lib/actions/comment.action';
import { Loader2, MessageSquare, X } from 'lucide-react';
import CommentItem from './CommentItems';

export interface ReplyingToUser {
    parentCommentId: string; // for parentId
    userName: string; // For Tag display
}

interface CommentSectionProps {
    postId:string;
    postShortId:string;
    postAuthorId:string;
}
export default function CommentSection({postId, postShortId, postAuthorId}:CommentSectionProps) {
    const {data:session} = useSession();
    const inputRef = useRef<HTMLInputElement>(null);

    const [replyingTo, setReplyingTo] = useState<ReplyingToUser | null>(null);
    const [comment, setComment] = useState<string>("");
    const [comments, setComments] = useState<any[]>([]);

    const [totalCount, setTotalCount] = useState<number>(0);

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const getImageUrl = (imageVal: string | null | undefined) => {
        if(!imageVal) return "";
        if(imageVal.startsWith("http")) return imageVal;
        return `${process.env.NEXT_PUBLIC_S3_ENDPOINT_SERVER}/${process.env.NEXT_PUBLIC_S3_IMAGES_BUCKET}/${imageVal}`;
    };

    const userData = {
        name:session?.user.name,
        image:getImageUrl(session?.user.image),
    }

    const loadComment = async() => {
        const result = await getCommentsByPostId(postId);
        if (result.success && result.data) {
            setComments(result.data);
            // 計算總數 (包含子回覆)
            const count = result.data.reduce((acc, curr) => acc + 1 + (curr.replies?.length || 0), 0);
            setTotalCount(count);
        }
    }

    const handleSetReply = (user: ReplyingToUser) => {
        setReplyingTo(user);
        inputRef.current?.focus();
    }

    useEffect(() => {
        loadComment();
    }, [postId]);

    const handleSubmit = async() => {
        if(!session?.user.id){
            addToast({
                description:"請先登入後再留言",
                color:"warning",
            });
            return;
        }

        if(!comment.trim()){
            addToast({
                description: "留言內容不可空白",
                color: "warning",
            });
            return;
        }

        setIsSubmitting(true);
        try{
            const result = await createComment(
                postId, 
                postShortId,  
                comment,
                replyingTo?.parentCommentId
            );

            if(result.success){
                setComment("");
                setReplyingTo(null);
                await loadComment();
                addToast({
                    description: "留言成功",
                    color: "success",
                });
            }else{
                addToast({
                    description: result.error || "留言失敗",
                    color: "danger",
                });
            }
        }catch(error){
            console.log(error);
            addToast({
                description: "留言發生錯誤，請稍後再試",
                color: "danger",
            });
        }finally{
            setIsSubmitting(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !isSubmitting) {
            handleSubmit();
        }
    };
    
    return (
        <div className="mt-8 pt-8 border-t border-[#3F3F46]">
            <h2 className="text-xl text-white mb-6">Comments <span className="text-[#A1A1AA] text-base">({totalCount})</span></h2>
            
            {/* 留言列表顯示區 */}
            <div className="space-y-4">
                {comments.length > 0 ? (
                    comments.map((item) => (
                        <CommentItem 
                            key={item.id} 
                            comment={item}
                            onReplyClick={handleSetReply}
                            postAuthorId={postAuthorId}
                            currentUserId={session?.user.id || ""}
                            onRefresh={loadComment}
                        />
                    ))
                ) : (
                    <p className="text-zinc-500 text-sm text-center py-10">尚無留言</p>
                )}
            </div>

            
            <div className="flex gap-4 items-center mt-10">
                <Avatar 
                    src={userData.image || ""} 
                    name={userData.name || ""}
                    className="w-10 h-10 text-large" 
                    showFallback
                />
                <div className='flex-1 relative'>
                    {replyingTo && (
                        <div className="flex items-center glass-panel bg-black/50 justify-between px-6 py-2 rounded-t-full text-xs text-white">
                            <span>Replying to <span className="text-blue-400 font-medium">@{replyingTo.userName}</span></span>
                            <button 
                                onClick={() => setReplyingTo(null)} 
                                className="hover:text-white p-1 rounded-full transition-colors"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    )}
                    <input 
                        ref={inputRef}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        onKeyDown={handleKeyDown}
                        type="text" 
                        placeholder={session?.user.id 
                            ? (replyingTo ? `回覆給 @${replyingTo.userName}` : "Come and comment now")
                            : "請先登入後再留言"}
                        disabled={isSubmitting || !session?.user.id}
                        className={`w-full glass-panel px-6 py-3 text-sm focus:bg-white/20 pr-24 outline-none
                            ${replyingTo ? "rounded-b-full" : "rounded-full"}`}
                    />
                    <button 
                        onClick={handleSubmit}
                        disabled={isSubmitting || !session?.user.id || !comment.trim()}
                        className="absolute right-1 bottom-1 rounded-r-full border-l-1 border-white/20 text-white px-6 py-2 text-sm font-medium hover:bg-white/30"
                    >
                        {isSubmitting ? <Loader2 className="animate-spin w-4 h-4" /> : "Post"}
                    </button>
                </div>
            </div>
        </div>
    );
}