"use server";

import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client } from "../s3";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth"; // 你的 auth 設定
import { Metadata } from "@/components/forms/MetadataForm";
import { nanoid } from "nanoid";


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
    try {
        // 寫入 PostgreSQL
        const newPost = await prisma.post.create({
        data: {
            shortId: shortId,
            title: params.metadata.title,
            category: params.metadata.category,
            description: params.metadata.description,
            type:postType,
            keywords: params.metadata.keywords,            
            coverImage: params.coverImageKey!,
            images: params.imageKeys,
            
            models:{
                connect: modelIds.map(id => ({ id }))
            },
            pdfIds:{
                connect: pdfIds.map(id => ({id}))
            },
            uploaderId: session.user.id,
            
            permission: params.metadata.permission,
            team: params.metadata.team === "none" ? null : params.metadata.team,
        },
        });

        return { success: true, postId: newPost.id };

    } catch (error) {
        console.error("Create post failed:", error);
        return { success: false, error: "Database error" };
    }
}

// 只抓取些許資料來渲染postcard 接收 page (第幾頁) 與 limit (每頁幾筆) 作為參數
export const getPostsByScroll = async (
    page: number = 1, 
    limit: number = 9,
    category: string = "ALL",
    sortBy: string = "Newest"
) => {
    try {
        // 計算要跳過多少筆資料
        const skip = (page - 1) * limit;
        // 動態過濾條件 (Where)
        const whereCondition = category === "ALL" ? {} : { category: category };

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
            },
        });

        // 將資料庫撈出來的 coverImage (Object Key) 轉換成 MinIO Presigned URL
        const postsWithSignedUrls = await Promise.all(
            posts.map(async (post) => {
                let signedCoverImage = post.coverImage;
                
                // 如果該筆資料有 coverImage，就向 MinIO 請求簽名網址
                if (post.coverImage) {
                    try {
                        
                        const command = new GetObjectCommand({
                            Bucket: "images", // 依照你錯誤訊息顯示的 Bucket 名稱
                            Key: post.coverImage,
                        });
                        // 產生 1 小時 (3600 秒) 有效的臨時公開網址
                        signedCoverImage = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
                    } catch (signError) {
                        console.error(`Failed to sign URL for image ${post.coverImage}:`, signError);
                        // 若簽名失敗，保留原本的值或可在此處替換為預設的 Placeholder 圖片路徑
                    }
                }

                return {
                    ...post,
                    coverImage: signedCoverImage // 替換為可直接讀取的完整 URL
                };
            })
        );

        // 2. 查詢資料總數 (用來判斷是否還有下一頁)
        const totalPosts = await prisma.post.count({ where: whereCondition });
        const hasMore = skip + posts.length < totalPosts;

        return { 
            success: true, 
            data: postsWithSignedUrls, 
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
            },
        });

        if (!post) return { success: false, error: "Post not found" };

        let signedCoverImage = post.coverImage;
        if(signedCoverImage){
            try{
                const command = new GetObjectCommand({
                    Bucket:"images",
                    Key:post.coverImage,
                })
                signedCoverImage = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
            }catch(signError){
                console.error(`Failed to sign URL for post detail image ${post.coverImage}:`, signError);
            }
            
        }

        let signedImagesArray: string[] = [];
        if (post.images && Array.isArray(post.images) && post.images.length > 0) {
            signedImagesArray = await Promise.all(
                post.images.map(async (imageKey) => {
                    try {
                        // 一樣套用防呆機制，確保拿到純檔名
                        let cleanUrl = imageKey.trim();
                        const objectKey = cleanUrl.split('/').pop() || cleanUrl;

                        const command = new GetObjectCommand({
                            Bucket: "images", // 假設這些附圖也放在 images bucket
                            Key: objectKey,
                        });
                        
                        // 回傳這張單一圖片的簽名網址
                        return await getSignedUrl(s3Client, command, { expiresIn: 3600 });
                    } catch (error) {
                        console.error(`Failed to sign array image ${imageKey}:`, error);
                        // 如果這張圖簽名失敗，回傳原本的值，避免影響其他正常的圖片
                        return imageKey; 
                    }
                })
            );
        }
        return { 
            success: true, 
            data: {
                ...post,
                coverImage: signedCoverImage,
                images: signedImagesArray
            }
        };
    } catch (error) {
        console.error("Failed to fetch post detail:", error);
        return { success: false, error: "Database error" };
    }
};