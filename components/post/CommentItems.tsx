"use client";
import React, { useState } from 'react';
import { Avatar, Button, addToast } from '@heroui/react';
import { formatDistanceToNow } from 'date-fns';
import { zhTW } from 'date-fns/locale';
import { MessageSquare, Edit2, Trash2, Check, X } from 'lucide-react';
import { ReplyingToUser } from './CommentSection';
import { updateComment, deleteComment } from '@/lib/actions/comment.action';
import { useSession } from 'next-auth/react';

interface CommentItemProps {
    comment: any; // 建議之後定義完整的 Comment Type
    depth?: number; // 記錄目前的巢狀深度
    postAuthorId:string;
    onReplyClick: (user: ReplyingToUser) => void;
    currentUserId?:string;
    onRefresh: () => void;
}

export default function CommentItem({ comment, depth = 0, postAuthorId, onReplyClick, currentUserId, onRefresh }: CommentItemProps) {
    // 限制巢狀深度，避免 UI 縮進過頭（例如最多縮排 3 層，之後就不再縮排）
    const canIndent = depth < 3;
    const { data:session } = useSession();
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editContent, setEditContent] = useState<string>(comment.content);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const isOwner = currentUserId === comment.user.id;

    const handleReply = () => {
        onReplyClick({
            parentCommentId: comment.id,
            userName: comment.user.userName,
        });
    };

    const getImageUrl = (imageVal: string | null | undefined) => {
        if(!imageVal) return "";
        if(imageVal.startsWith("http")) return imageVal;
        return `${process.env.NEXT_PUBLIC_S3_ENDPOINT_SERVER}/${process.env.NEXT_PUBLIC_S3_IMAGES_BUCKET}/${imageVal}`;
    };

    const commentData = {
        image:getImageUrl(comment.user.image),
    };

    const handleSaveEdit = async () => {
        if(!session?.user.id){
            addToast({
                description:"請先登入後再修改留言",
                color:"warning",
            });
            return;
        }
        if (!editContent.trim() || editContent === comment.content) {
            setIsEditing(false);
            return;
        }
        setIsLoading(true);
        const res = await updateComment(comment.id, editContent);
        if (res.success) {
            addToast({ description: "編輯成功", color: "success" });
            setIsEditing(false);
            onRefresh(); // 刷新畫面
        } else {
            addToast({ description: res.error || "編輯失敗", color: "danger" });
        }
        setIsLoading(false);
    };

    const handleDelete = async () => {
        if(!session?.user.id){
            addToast({
                description:"請先登入後再刪除留言",
                color:"warning",
            });
            return;
        }
        if (!confirm("確定要刪除這則留言嗎？(底下的回覆也會一併刪除!)")) return;
        
        setIsLoading(true);
        const res = await deleteComment(comment.id);
        if (res.success) {
            addToast({ description: "刪除成功", color: "success" });
            onRefresh(); // 刷新畫面
        } else {
            addToast({ description: res.error || "刪除失敗", color: "danger" });
            setIsLoading(false);
        }
    };

    return (
        <div className={`mt-6 ${canIndent && depth > 0 ? 'ml-2 md:ml-10 border-l-2 border-[#3F3F46] pl-4' : ''}`}>
        <div className="flex gap-3">
            <Avatar 
                src={commentData.image || ""} 
                size="sm"
                className='shrink-0'
                showFallback
            />
            <div className="flex-1">
            <div className="relative flex items-center gap-2">
                <span className="text-white text-sm font-medium">{comment.user.userName}</span>
                {comment.user.id === postAuthorId && (
                    <span className="absolute top-10 -left-16 glass-panel text-white text-xs px-1.5 py-0.5 rounded-full ml-2">Author</span>
                )}
                <span className="text-[#A1A1AA] text-xs">
                    {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true, locale: zhTW })}
                </span>
                {isOwner && !isEditing && (
                    <div className="flex items-center gap-2 ml-auto">
                        <button onClick={() => setIsEditing(true)} disabled={isLoading} className="text-[#A1A1AA] hover:text-white transition-colors">
                            <Edit2 size={12} />
                        </button>
                        <button onClick={handleDelete} disabled={isLoading} className="text-[#A1A1AA] hover:text-red-500 transition-colors">
                            <Trash2 size={12} />
                        </button>
                    </div>
                )}
            </div>
            {/* 根據 isEditing 狀態切換顯示文字或是輸入框 */}
            {isEditing ? (
                <div className="mt-2 flex flex-col md:flex-row gap-2">
                    <input 
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        disabled={isLoading}
                        className="flex-1 glass-panel px-2 py-1.5 text-white text-sm rounded-full outline-none focus:bg-white/20"
                        autoFocus
                    />
                    <div className='flex gap-2 justify-end'>
                        <button onClick={handleSaveEdit} disabled={isLoading} className="glass-panel rounded-full text-green-500 p-1.5 transition-colors hover:bg-white/30">
                            <Check size={16} />
                        </button>
                        <button onClick={() => setIsEditing(false)} disabled={isLoading} className="glass-panel rounded-full text-red-500 p-1.5 transition-colors hover:bg-white/30">
                            <X size={14} />
                        </button>
                    </div>
                    
                </div>
            ) : (
                <p className="text-zinc-300 text-sm mt-1 leading-relaxed break-all">
                    {comment.parent?.user?.userName && (
                        <span className='text-blue-400 mr-2 hover:underline cursor-pointer'>
                            @{comment.parent.user.userName}
                        </span>
                    )}
                    {comment.content}
                </p>
            )}
            
            {/* 回覆按鈕 (編輯模式下隱藏) */}
            {!isEditing && (
                <button 
                    onClick={handleReply}
                    className="flex items-center gap-1 text-[#A1A1AA] text-xs mt-2 hover:text-white transition-colors"
                >
                    <MessageSquare size={14} /> Reply
                </button>
            )}
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