'use server'
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// 取得某篇貼文的所有留言 (包含發布者資訊與子留言)
export async function getCommentsByPostId(postId: string) {
    try {
        const post = await prisma.post.findUnique({
            where: { id: postId },
            select: {
                id: true,
                uploaderId: true,
                teamId: true,
                permission: true,
            }
        });

        if (!post) {
            return { success: false, error: "Post not found" };
        }

        if (post.permission !== "standard") {
            const session = await auth();

            if (!session?.user?.id) {
                return { success: false, error: "Unauthorized" };
            }

            const isOwner = post.uploaderId === session.user.id;
            let isTeamMember = false;

            if (post.teamId) {
                const member = await prisma.teamMember.findFirst({
                    where: {
                        teamId: post.teamId,
                        userId: session.user.id,
                    },
                    select: { id: true }
                });

                isTeamMember = Boolean(member);
            }

            if (!isOwner && !isTeamMember) {
                return { success: false, error: "Permission denied" };
            }
        }

        // 1. 一次性抓取該貼文的「所有」留言 (不分層級)
        const allComments = await prisma.comment.findMany({
            where: { 
                postId: postId 
            },
            include: {
                user: {
                    select: { id: true, userName: true, image: true }
                },
                parent: { // 順便抓取父留言的資訊 (為了顯示 @UserName)
                    select: {
                        user: { select: { userName: true } }
                    }
                }
            },
            orderBy: {
                createdAt: "asc" // 確保時間順序正確
            }
        });

        // 2. 利用 Map 來高效率組裝樹狀結構 (時間複雜度 O(N))
        const commentMap = new Map();
        const rootComments: any[] = [];

        // 先把所有留言放進 Map，並預先準備好一個空的 replies 陣列
        allComments.forEach(comment => {
            commentMap.set(comment.id, { ...comment, replies: [] });
        });

        // 再次走訪，把子留言塞進對應的父留言的 replies 陣列中
        allComments.forEach(comment => {
            if (comment.parentId) {
                // 如果有 parentId，代表它是子留言
                const parentComment = commentMap.get(comment.parentId);
                if (parentComment) {
                    parentComment.replies.push(commentMap.get(comment.id));
                } else {
                    // 防呆：如果父留言不小心被刪了導致找不到，就把它當作主留言顯示
                    rootComments.push(commentMap.get(comment.id));
                }
            } else {
                // 如果沒有 parentId，代表它是最外層的主留言
                rootComments.push(commentMap.get(comment.id));
            }
        });

        return { success: true, data: rootComments };
    } catch(error) {
        console.error("Failed to fetch comments:", error);
        return { success: false, error: "無法讀取留言，請稍後再試。" };
    }
}

// 建立留言 (主留言或回覆)
export async function createComment(
    postId: string, 
    postShortId: string,
    content: string, 
    parentId?: string
) {
    try{
        const session = await auth();
        if (!session?.user.id) {
            return { success: false, error: "Unauthorized" };
        }

        const post = await prisma.post.findUnique({
            where: { id: postId },
            select: {
                id: true,
                uploaderId: true,
                teamId: true,
                permission: true,
            }
        });

        if (!post) {
            return { success: false, error: "Post not found" };
        }

        if (post.permission !== "standard") {
            const isOwner = post.uploaderId === session.user.id;
            let isTeamMember = false;

            if (post.teamId) {
                const member = await prisma.teamMember.findFirst({
                    where: {
                        teamId: post.teamId,
                        userId: session.user.id,
                    },
                    select: { id: true }
                });

                isTeamMember = Boolean(member);
            }

            if (!isOwner && !isTeamMember) {
                return { success: false, error: "Permission denied" };
            }
        }
        
        if(!content.trim()){
            return { success: false, error: "留言內容不可空白" };
        }

        const newComment = await prisma.comment.create({
            data:{
                content: content.trim(),
                postId,
                userId: session.user.id,
                parentId: parentId || null,// 若有 parentId 就是回覆，否則為獨立主留言
            }
        });

        // 觸發 Next.js 快取更新，讓畫面立刻顯示新留言
        revalidatePath(`/post/${postShortId}`);

        return {success: true, data: newComment };
    }catch(error){
        console.error("Failed to create comment:", error);
        return { success: false, error: "無法建立留言，請稍後再試。" };
    }
}

// 編輯留言
export async function updateComment(commentId: string, newContent: string) {
    try {
        const session = await auth();
        if (!session?.user.id) {
            return { success: false, error: "Unauthorized" };
        }
        if (!newContent.trim()) return { success: false, error: "留言內容不可空白" };

        // 確認留言存在，且是該使用者發布的
        const existingComment = await prisma.comment.findUnique({ where: { id: commentId } });
        if (!existingComment || existingComment.userId !== session.user.id) {
            return { success: false, error: "無權限編輯此留言" };
        }

        await prisma.comment.update({
            where: { id: commentId },
            data: { content: newContent.trim() }
        });

        return { success: true };
    } catch (error) {
        console.error("Failed to update comment:", error);
        return { success: false, error: "編輯失敗，請稍後再試。" };
    }
}

// 刪除留言
export async function deleteComment(commentId: string) {
    try {
        const session = await auth();

        if (!session?.user.id) {
            return { success: false, error: "Unauthorized" };
        }
        // 確認留言存在，且是該使用者發布的
        const existingComment = await prisma.comment.findUnique({ where: { id: commentId } });
        if (!existingComment || existingComment.userId !== session.user.id) {
            return { success: false, error: "無權限刪除此留言" };
        }

        // 因為有設定 onDelete: Cascade，刪除這筆留言會連帶刪除所有子留言
        await prisma.comment.delete({
            where: { id: commentId }
        });

        return { success: true };
    } catch (error) {
        console.error("Failed to delete comment:", error);
        return { success: false, error: "刪除失敗，請稍後再試。" };
    }
}
