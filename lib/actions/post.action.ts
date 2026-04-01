"use server";

import { GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client } from "../s3";
import prisma from "@/lib/prisma";
import { auth } from "@/auth"; // 你的 auth 設定
import { Metadata } from "@/components/forms/MetadataForm";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";
import { success } from "zod";
import { error } from "console";

interface UpdatePostParams {
    shortId: string;
    postType: '2D' | '3D';
    metadata: Metadata;
    coverImageKey: string | null;
    imageKeys: string[];
    modelIds?: string[];
    pdfIds?: string[];
}

interface CreatePostParams {
    postType: '2D' | '3D';
    metadata: Metadata;
    coverImageKey: string | null;
    imageKeys: string[];
    modelIds?: string[];
    pdfIds?: string[];
}
// This is for both 3d and 2d post
export async function createPost(params: CreatePostParams) {
    const shortId = nanoid(10);
    const session = await auth();
    if (!session?.user?.id) {
        return { success: false, error: "Unauthorized" };
    }
    const { 
        postType,
        metadata, 
        coverImageKey, 
        imageKeys, 
        modelIds = [], 
        pdfIds = [] 
    } = params;
    const isTeamPost = metadata.team && metadata.team !== "none" && metadata.team.trim() !== "";
    try {
        // 🚀 1. 準備基礎資料 (不包含關聯物件)
        const data: any = {
            shortId: shortId,
            title: params.metadata.title,
            category: params.metadata.category,
            description: params.metadata.description,
            type: postType,
            keywords: params.metadata.keywords,
            coverImage: params.coverImageKey!,
            images: params.imageKeys,
            uploaderId: session.user.id,
            relatedPosts: params.metadata.relatedPosts.map(post => post.id),
            permission: params.metadata.permission,
            models: {
                connect: modelIds.map(id => ({ id }))
            },
            pdfIds: {
                connect: pdfIds.map(id => ({ id }))
            },
        };

        // 🚀 2. 只有在確定有團隊時，才把 team 物件塞進去
        if (isTeamPost) {
            data.teamId = metadata.team;
        }

        // 寫入 PostgreSQL
        const newPost = await prisma.post.create({
            data: data
        });

        return { success: true, postId: newPost.id };

    } catch (error) {
        console.error("Create post failed:", error);
        return { success: false, error: "Database error" };
    }
}

export async function updatePost(params: UpdatePostParams) {
    const session = await auth();
    if (!session?.user?.id) {
        return { success: false, error: "Unauthorized" };
    }

    const { 
        shortId,
        postType,
        metadata, 
        coverImageKey, 
        imageKeys, 
        modelIds = [], 
        pdfIds = [] 
    } = params;

    try {
        // 🚀 1. 先抓出舊的貼文資料，用來比對哪些圖片被刪除了
        const oldPost = await prisma.post.findUnique({
            where: { shortId: shortId },
            include: { team: { include: { members: true } } }
        });

        if (!oldPost) {
            return { success: false, error: "Post not found" };
        }

        // 🛡️ 權限二次驗證 (Server 端防護)
        const isOwner = oldPost.uploaderId === session.user.id;
        const isTeamEditor = oldPost.team?.members.some(
            m => m.userId === session.user.id && ['OWNER', 'ADMIN', 'EDITOR'].includes(m.role)
        ) || false;

        if (!isOwner && !isTeamEditor) {
            return { success: false, error: "Permission denied" };
        }

        // 🚀 2. S3 垃圾回收 (找出被剔除的圖片)
        const s3DeletePromises: Promise<any>[] = [];
        
        // 判斷封面是否更換：如果有舊封面，且新封面 Key 跟舊的不同，就把舊的刪掉
        if (oldPost.coverImage && oldPost.coverImage !== coverImageKey) {
            const command = new DeleteObjectCommand({ Bucket: process.env.S3_IMAGES_BUCKET, Key: oldPost.coverImage });
            s3DeletePromises.push(
                s3Client.send(command).catch(err => console.error(`刪除舊封面失敗: ${oldPost.coverImage}`, err))
            );
        }

        // 判斷附加圖片是否被刪除：濾出「存在於舊陣列，但不在新陣列」的圖片 Key
        const oldImages = oldPost.images || [];
        const removedImages = oldImages.filter(oldKey => !imageKeys.includes(oldKey));
        
        removedImages.forEach(key => {
            const command = new DeleteObjectCommand({ Bucket: process.env.S3_IMAGES_BUCKET, Key: key });
            s3DeletePromises.push(
                s3Client.send(command).catch(err => console.error(`刪除舊圖片失敗: ${key}`, err))
            );
        });

        // 執行所有刪除任務 (不阻塞主流程，讓它在背景刪除即可，但這裡用 await 確保穩定也可以)
        await Promise.all(s3DeletePromises);

        // 🚀 3. 準備更新資料庫的 payload
        const isTeamPost = metadata.team && metadata.team !== "none" && metadata.team.trim() !== "";
        
        const updateData: any = {
            title: metadata.title,
            category: metadata.category,
            description: metadata.description,
            type: postType,
            keywords: metadata.keywords,
            coverImage: coverImageKey!,
            images: imageKeys,
            // 將 Client 傳來的 {id, title}[] 轉回 Prisma 需要的 string[]
            relatedPosts: metadata.relatedPosts.map(post => post.id), 
            permission: metadata.permission,
            // 重新設定關聯：使用 set 會自動替換掉舊的關聯，換成這個新的陣列
            models: {
                set: modelIds.map(id => ({ id }))
            },
            pdfIds: {
                set: pdfIds.map(id => ({ id }))
            },
        };

        // 處理團隊關聯的切換
        if (isTeamPost) {
            updateData.teamId = metadata.team;
        } else {
            updateData.teamId = null; // 如果從有團隊改成「個人(none)」，就要設為 null
        }

        //  4. 執行 Prisma 更新
        const updatedPost = await prisma.post.update({
            where: { shortId: shortId },
            data: updateData
        });

        // 刷新快取，確保列表頁和詳細頁拿到最新資料
        revalidatePath("/");
        revalidatePath(`/post/${updatedPost.shortId}`);

        return { success: true, postId: updatedPost.id, shortId: updatedPost.shortId };

    } catch (error) {
        console.error("Update post failed:", error);
        return { success: false, error: "Database error" };
    }
}

// 只抓取些許資料來渲染postcard 接收 page (第幾頁) 與 limit (每頁幾筆) 作為參數
export const getPostsByScroll = async (
    page: number = 1, 
    limit: number = 9,
    category: string = "ALL",
    sortBy: string = "Newest",
    search: string = "",
    scope: "ALL" | "PERSONAL" | "TEAM" | "COLLECTION" = "ALL",
    teamId: string = ""
) => {
    try {
        const session = await auth();
        let userCollection: string[] = [];

        if(session?.user.id){
            const currentUser = await prisma.user.findUnique({
                where: {id: session.user.id},
                select: {userCollection:true}
            });
            userCollection = currentUser?.userCollection || [];
        }

        // 計算要跳過多少筆資料
        const skip = (page - 1) * limit;
        // 動態過濾條件 (Where)
        const whereCondition: any = {};
        if(category !== "ALL") whereCondition.category = category;
        if(search){
            whereCondition.title = {
                contains: search,
                mode: "insensitive"
            };
        }
        
        if(scope !== "ALL"){
            if(!session?.user.id){
                return {success:false, error:"Unauthorized"};
            }

            switch(scope){
                case "PERSONAL":
                    whereCondition.uploaderId = session.user.id;
                    break;
                
                case "TEAM":
                    if (teamId !== "") {
                        // 🚀 狀況 A：使用者有選定特定的 Team (teamId 不是空字串)
                        
                        // 安全防護：去資料庫確認該使用者是否真的在這個團隊裡
                        // 這裡假設你有 TeamMember 這個 model 來記錄關聯
                        const isMember = await prisma.teamMember.findFirst({
                            where: { teamId: teamId, userId: session.user.id }
                        });

                        if (!isMember) {
                            // 如果他亂塞別人的 teamId，直接擋掉
                            return { success: false, error: "無權限查看此團隊或團隊不存在" };
                        }

                        // 確認有權限後，指定過濾條件
                        // ⚠️ 備註：請確認你 Post 資料表裡紀錄團隊的欄位是 teamId 還是 team
                        whereCondition.teamId = teamId; 

                    } else {
                        // 🚀 狀況 B：使用者選了 "None" (空字串)，代表要看「他所屬的所有團隊」的貼文
                        
                        // 因為 session 沒有 team 資訊，我們去資料庫查他加入了哪些團隊
                        const userTeamRecords = await prisma.teamMember.findMany({
                            where: { userId: session.user.id },
                            select: { teamId: true }
                        });

                        const userTeamIds = userTeamRecords.map(record => record.teamId);

                        if (userTeamIds.length === 0) {
                            // 如果他根本沒加入任何團隊，直接回傳空陣列
                            return { 
                                success: true, 
                                data: [], 
                                hasMore: false 
                            };
                        }

                        // 找出屬於他加入的「任何一個團隊」的貼文
                        whereCondition.teamId = { in: userTeamIds };
                    }
                    break;
                
                case "COLLECTION":
                    const currentUser = await prisma.user.findUnique({
                        where:{id: session.user.id},
                        select:{ userCollection:true}
                    });

                    const collectionIds = currentUser?.userCollection || [];

                    if (collectionIds.length === 0) {
                        return { 
                            success: true, 
                            data: [], 
                            hasMore: false 
                        };
                    }

                    whereCondition.id = {in: collectionIds}
            }
        }
        // 動態建立排序條件 (OrderBy)
        // 備註：假設你的 Hottest 是看瀏覽量(views)或按讚數，若無此欄位請自行替換
        const orderByCondition = sortBy === "Hottest" 
            ? { /* views: "desc" */ createdAt: "desc" as const } // 等你有 views 欄位再改這裡
            : { createdAt: "desc" as const};

        // 1. 查詢當頁資料
        const posts = await prisma.post.findMany({
            where:whereCondition,
            skip: skip,
            take: limit,
            orderBy: orderByCondition,
            select: {
                id: true,         
                shortId: true,   
                title: true,      
                coverImage: true, 
                type: true,   
                team:{
                    select:{
                        name: true,
                        color: true
                    }
                }    
            },
        });

        const minioEndpoint = process.env.S3_ENDPOINT_SERVER;
        const minioImageBucket = process.env.S3_IMAGES_BUCKET;
        const postWithPublicUrls = posts.map((post) => {
            return {
                ...post,
                coverImage: post.coverImage ? `${minioEndpoint}/${minioImageBucket}/${post.coverImage}`
                :null,
                isCollected: userCollection.includes(post.id)
            };
        });
        // 2. 查詢資料總數 (用來判斷是否還有下一頁)
        const totalPosts = await prisma.post.count({ where: whereCondition });
        const hasMore = skip + posts.length < totalPosts;

        return { 
            success: true, 
            data: postWithPublicUrls, 
            hasMore: hasMore 
        };
    } catch (error) {
        console.error("Failed to fetch paginated posts:", error);
        return { success: false, error: "Database error" };
    }
};

// 用來抓取3D post的detail
export const get3DPostDetail = async (shortId: string) => {
    try {
        const post = await prisma.post.findUnique({
            where: { shortId: shortId },
            //使用 include 把關聯資料完整打包
            include: {
                models: true, // 供下載按鈕與 3D Viewer 使用
                uploader: {   // 供左下角作者資訊區塊使用
                    select: { id: true, userName: true, image: true }
                },
                // 如果未來有建立留言 (comments) 的關聯，也可以加在這裡
                // comments: { include: { user: true } } 
            },
        });

        if (!post) return { success: false, error: "Post not found" };

        return { success: true, data: post };
    } catch (error) {
        console.error("Failed to fetch post detail:", error);
        return { success: false, error: "Database error" };
    }
};

// 用來抓取2D post的detail
export const get2DPostDetail = async (shortId: string) => {
    try {
        const post = await prisma.post.findUnique({
            where: { shortId: shortId },
            // 【關鍵】使用 include 把關聯資料完整打包
            include: {
                models: true, // 供下載按鈕與 3D Viewer 使用
                pdfIds: true,   // 供下載與 PDF Viewer 使用
                uploader: {   // 供左下角作者資訊區塊使用
                    select: { id: true, userName: true, image: true }
                },
                // 如果未來有建立留言 (comments) 的關聯，也可以加在這裡
                // comments: { include: { user: true } } 
            },
        });

        if (!post) return { success: false, error: "Post not found" };

        return { success: true, data: post };
    } catch (error) {
        console.error("Failed to fetch post detail:", error);
        return { success: false, error: "Database error" };
    }
};

export const getRelatedPostsByIds = async (postIds: string[]) => {
    // 防呆：如果傳進來的陣列是空的，直接回傳空陣列，不要去吵資料庫
    if (!postIds || postIds.length === 0) {
        return { success: true, data: [] };
    }

    try {
        const session = await auth();
        let userCollection: string[] = [];

        if(session?.user.id){
            const currentUser = await prisma.user.findUnique({
                where: {id: session.user.id},
                select: {userCollection:true}
            });
            userCollection = currentUser?.userCollection || [];
        }


        // 1. 從資料庫中一次撈出所有符合 ID 的貼文
        // (只需要拿渲染 PostCard 必備的欄位即可，節省頻寬)
        const posts = await prisma.post.findMany({
            where: {
                id: {
                    in: postIds // 使用 Prisma 的 'in' 操作符
                }
            },
            select: {
                id: true,         
                shortId: true,   
                title: true,      
                coverImage: true, 
                type: true,       
            }
        });

        // 2. 將撈回來的 coverImage 轉換成 MinIO Presigned URL
        // (這段邏輯跟你原本 getPostsByScroll 裡面做的一模一樣)
        const minioEndpoint = process.env.S3_ENDPOINT_SERVER;
        const minioImageBucket = process.env.S3_IMAGES_BUCKET;
        const postWithPublicUrls = posts.map((post) => {
            return {
                ...post,
                coverImage: post.coverImage ? `${minioEndpoint}/${minioImageBucket}/${post.coverImage}`
                :null,
                isCollected: userCollection.includes(post.id)
            };
        });

        // 3. 回傳處理好的陣列
        return { 
            success: true, 
            data: postWithPublicUrls 
        };

    } catch (error) {
        console.error("Failed to fetch related posts by IDs:", error);
        return { success: false, error: "Database error" };
    }
};
// lib/actions/post.action.ts
export const getPostDetail = async (shortId: string) => {
    try {
        const post = await prisma.post.findUnique({
            where: { shortId: shortId },
            // 把 models 和 pdfs 一次全部 include 起來
            include: {
                models: true, 
                pdfIds: true, // 依照你先前的命名，這裡是 pdfIds
                uploader: {   
                    select: { id: true, userName: true, image: true } // 記得把你 schema 裡的 userName 改成對應的欄位名 (name 或 userName)
                },
                team:{
                    select:{
                        id: true,
                        name: true,
                        members:{
                            select: {
                                userId: true,
                                role: true
                            }
                        }
                    }
                }
            },
        });

        if (!post) return { success: false, error: "Post not found" };

        const minioEndpoint = process.env.S3_ENDPOINT_SERVER;
        const minioImageBucket = process.env.S3_IMAGES_BUCKET;
        const publicCoverImageUrls = `${minioEndpoint}/${minioImageBucket}/${post.coverImage}`

        let publicImagesArray: string[] = [];
        if (post.images && Array.isArray(post.images) && post.images.length > 0) {
            publicImagesArray = post.images.map((image) => {
                return `${minioEndpoint}/${minioImageBucket}/${image}`;
            })
        }
        
        return { 
            success: true, 
            data: {
                ...post,
                coverImage: publicCoverImageUrls,
                images: publicImagesArray,
            }
        };
    } catch (error) {
        console.error("Failed to fetch post detail:", error);
        return { success: false, error: "Database error" };
    }
};

export const getEditPostDetail = async (shortId: string) => {
    try {
        const post = await prisma.post.findUnique({
            where: { shortId: shortId },
            // 把 models 和 pdfs 一次全部 include 起來
            include: {
                models: true, 
                pdfIds: true, // 依照你先前的命名，這裡是 pdfIds
                uploader: {   
                    select: { id: true, userName: true, image: true } // 記得把你 schema 裡的 userName 改成對應的欄位名 (name 或 userName)
                },
                team:{
                    select:{
                        id: true,
                        name: true,
                        members:{
                            select: {
                                userId: true,
                                role: true
                            }
                        }
                    }
                }
            },
        });

        if (!post) return { success: false, error: "Post not found" };


        const minioEndpoint = process.env.S3_ENDPOINT_SERVER;
        const minioImageBucket = process.env.S3_IMAGES_BUCKET;
        const publicCoverImageUrls = `${minioEndpoint}/${minioImageBucket}/${post.coverImage}`

        let publicImagesArray: string[] = [];
        if (post.images && Array.isArray(post.images) && post.images.length > 0) {
            publicImagesArray = post.images.map((image) => {
                return `${minioEndpoint}/${minioImageBucket}/${image}`;
            })
        }
        
        let formattedRelatedPosts: { id:string, title:string }[] = [];
        if (post.relatedPosts && post.relatedPosts.length > 0) {
            // 使用 Prisma 去撈出這些 ID 對應的 Title
            const relatedPostsData = await prisma.post.findMany({
                where: {
                    id: { in: post.relatedPosts } // 使用 in 操作符一次撈取
                },
                select: {
                    id: true,
                    title: true
                }
            });
            
            formattedRelatedPosts = relatedPostsData;
        }
        return { 
            success: true, 
            data: {
                ...post,
                coverImage: publicCoverImageUrls,
                images: publicImagesArray,
                relatedPosts: formattedRelatedPosts,
            }
        };
    } catch (error) {
        console.error("Failed to fetch post detail:", error);
        return { success: false, error: "Database error" };
    }
};

// Delete 2D post and its related pdf files on db and minio
export async function delete2DPost(postId: string) {
    try{
        // 1. 查詢該貼文，並帶出關聯的 PDF 資料
        const post = await prisma.post.findUnique({
            where:{id:postId},
            include:{pdfIds:true}
        });

        if(!post){
            return { success: false, error: "找不到該貼文" };
        }

        const s3DeletePromises: Promise<void>[] = [];

        // ==========================================
        // 清理圖片 (Cover Image & Additional Images)
        // ==========================================
        const imageKeysToDelete: string[] = [];
        if(post.coverImage){
            imageKeysToDelete.push(post.coverImage);
        }
        if(post.images && post.images.length > 0){
            imageKeysToDelete.push(...post.images);
        }
        imageKeysToDelete.forEach((key) => {
            const command = new DeleteObjectCommand({ Bucket: process.env.S3_IMAGES_BUCKET, Key: key});
            s3DeletePromises.push(
                s3Client.send(command)
                    .then(() => console.log(`minio圖片已刪除: ${key}`))
                    .catch(err => console.log(`minio圖片刪除失敗: ${key}`,err))
            )
        })

        // ==========================================
        // 清理 PDF (實體檔案 & 資料庫紀錄)
        // ==========================================
        if (post.pdfIds && post.pdfIds.length > 0) {
            // 建立 PDF 實體檔案刪除任務
            post.pdfIds.forEach((pdf) => {
                if (pdf.fileId) {
                    const command = new DeleteObjectCommand({ Bucket: process.env.S3_PDF_BUCKET, Key: pdf.fileId });
                    s3DeletePromises.push(
                        s3Client.send(command)
                            .then(() => console.log(`MinIO PDF 已刪除: ${pdf.fileId}`))
                            .catch(err => console.error(`MinIO PDF 刪除失敗: ${pdf.fileId}`, err))
                    );
                }
            });
            
            // 從資料庫中刪除這些 Pdf 紀錄
            const pdfDbIds = post.pdfIds.map(pdf => pdf.id);
            await prisma.pdf.deleteMany({
                where: {
                    id: { in: pdfDbIds }
                }
            });
        }
        // ==========================================
        // 等待所有 MinIO 刪除任務完成，再刪除貼文
        // ==========================================
        await Promise.all(s3DeletePromises);

        // 5. 最後刪除貼文本身
        await prisma.post.delete({
            where: { id: postId }
        });


        // 刪除後更新首頁或列表頁的快取
        revalidatePath("/");
        return{ success:true };
    }catch(e){
        console.error("刪除貼文失敗",e);
        return {success: false, error:"刪除失敗"};
    }
}

export async function delete3DPost(postId: string) {
    try{
        const post = await prisma.post.findUnique({
            where:{id:postId},
        });
        
        if(!post){
            return { success: false, error: "找不到該貼文" };
        }

        const s3DeletePromises: Promise<void>[] = [];

        // ==========================================
        // 清理圖片 (Cover Image & Additional Images)
        // ==========================================
        const imageKeysToDelete: string[] = [];
        if(post.coverImage){
            imageKeysToDelete.push(post.coverImage);
        }
        if(post.images && post.images.length > 0){
            imageKeysToDelete.push(...post.images);
        }
        imageKeysToDelete.forEach((key) => {
            const command = new DeleteObjectCommand({ Bucket: process.env.S3_IMAGES_BUCKET, Key: key});
            s3DeletePromises.push(
                s3Client.send(command)
                    .then(() => console.log(`minio圖片已刪除: ${key}`))
                    .catch(err => console.log(`minio圖片刪除失敗: ${key}`,err))
            )
        })

        // ==========================================
        // 等待所有 MinIO 刪除任務完成，再刪除貼文
        // ==========================================
        await Promise.all(s3DeletePromises);

        await prisma.post.delete({
            where: { id:postId }
        });

        // 刪除後更新首頁或列表頁的快取
        revalidatePath("/");
        return{ success:true };
    }catch(e){
        console.error("刪除貼文失敗",e);
        return {success: false, error:"刪除失敗"};
    }
}

export async function toggleCollection(postId:string) {
    try{
        const session = await auth();
        if(!session?.user.id) return {sucess:false, error:"Unauthorized"};

        const user = await prisma.user.findUnique({
            where: {id: session.user.id},
            select: {userCollection: true}
        });

        if(!user) return {success:false, error:"User Not Found"};

        const currentCollection = user.userCollection || [];
        const isCurrentlyCollected = currentCollection.includes(postId);

        let updateCollection;

        if(isCurrentlyCollected){
            updateCollection = currentCollection.filter(id => id !== postId);
        }else{
            updateCollection = [...currentCollection, postId];
        }

        await prisma.user.update({
            where:{id: session.user.id},
            data:{userCollection: updateCollection}
        });

        // 回傳成功，並告訴前端最終的狀態
        return { success:true, isCollected: !isCurrentlyCollected};
    } catch (error) {
        console.error("Toggle collection error:", error);
        return { success: false, error: "Failed to toggle collection" };
    }
}