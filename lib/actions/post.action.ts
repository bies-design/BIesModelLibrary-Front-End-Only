"use server";

import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../s3";
import prisma from "@/lib/prisma";
import { auth } from "@/auth"; // 你的 auth 設定
import { Metadata } from "@/components/forms/MetadataForm";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";
import { PostType } from "@/app/(root)/page";
import { checkUserTeamStatus } from "./team.action";

interface UpdatePostParams {
    shortId: string;
    metadata: Metadata;
    coverImageKey: string | null;
    imageKeys: string[];
    fileIds?: string[];
    filesToDelete?: string[]; 
    teamId: string | null;
}

interface CreatePostParams {
    metadata: Metadata;
    coverImageKey: string | null;
    imageKeys: string[];
    fileIds?: string[];
    teamId: string | null;
}
// This is for both 3d and 2d post
export async function createPost(params: CreatePostParams) {
    const shortId = nanoid(10);
    
    const { 
        metadata, 
        fileIds = [],
        teamId
    } = params;
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return { success: false, error: "Unauthorized" };
        }

        // 1. teamId 是不是你有權限發文的 team。
        const isTeamPost = teamId && teamId !== "none" && teamId !== "";

        if (isTeamPost) {
            const teamStatus = await checkUserTeamStatus(teamId);

            if (teamStatus !== "EDITOR_ACCESS") {
                return { success: false, error: "Permission denied" };
            }
        }

        let fileRecords: { id: string; uploaderId: string; teamId: string | null; fileId: string; name: string }[] = [];

        // 2. fileIds 裡的檔案是不是你本人上傳的，或屬於你有權限的 team。
        if (fileIds.length > 0) {
            fileRecords = await prisma.fileRecord.findMany({
                where: { id: { in: fileIds } },
                select: {
                    id: true,
                    uploaderId: true,
                    teamId: true,
                    fileId: true,
                    name: true,
                }
            });

            if (fileRecords.length !== fileIds.length) {
                return { success: false, error: "Some files were not found" };
            }

            const hasForbiddenFile = fileRecords.some(file => {
                if (file.uploaderId === session.user.id) return false;

                if (isTeamPost && file.teamId === teamId) return false;

                return true;
            });

            if (hasForbiddenFile) {
                return { success: false, error: "Permission denied for one or more files" };
            }
        }
        // 3. metadata.associations 裡的 projectId / phaseId 是不是屬於你有權限的 project，而且 phase 屬於同一個 project。
        const validAssociations = metadata.associations?.filter(a => a.projectId) ?? [];

        if (validAssociations.length > 0) {
            const projectIds = Array.from(new Set(validAssociations.map(a => a.projectId)));

            const projects = await prisma.project.findMany({
                where: { id: { in: projectIds } },
                select: {
                    id: true,
                    teamId: true,
                }
            });

            if (projects.length !== projectIds.length) {
                return { success: false, error: "Some projects were not found" };
            }

            for (const project of projects) {
                const projectAccess = await checkUserTeamStatus(project.teamId);
                if (projectAccess !== "EDITOR_ACCESS") {
                    return { success: false, error: "Permission denied for one or more projects" };
                }
            }

            const phaseIds = validAssociations
                .map(a => a.phaseId)
                .filter((id): id is string => Boolean(id));

            if (phaseIds.length > 0) {
                const phases = await prisma.phase.findMany({
                    where: { id: { in: phaseIds } },
                    select: {
                        id: true,
                        projectId: true,
                    }
                });

                if (phases.length !== phaseIds.length) {
                    return { success: false, error: "Some phases were not found" };
                }

                const associationProjectByPhaseId = new Map(
                    validAssociations
                        .filter((assoc): assoc is typeof assoc & { phaseId: string } => Boolean(assoc.phaseId))
                        .map(assoc => [assoc.phaseId, assoc.projectId])
                );

                const hasInvalidPhase = phases.some(phase => (
                    associationProjectByPhaseId.get(phase.id) !== phase.projectId
                ));

                if (hasInvalidPhase) {
                    return { success: false, error: "Phase does not belong to selected project" };
                }
            }
        }

        let postType = "OTHER";

        if (fileIds.length > 0) {
            const types = fileRecords.map(record => {
                const lowerName = (record.fileId || record.name || "").toLowerCase();
                if (lowerName.endsWith('.ifc') || lowerName.endsWith('.obj') || lowerName.endsWith('.gltf') || lowerName.endsWith('.3dm') || lowerName.endsWith('.frag')) return 'MODEL_3D'; 
                if (lowerName.endsWith('.pdf') || lowerName.endsWith('.docx') || lowerName.endsWith('.xlsx')) return 'DOCUMENT';
                if (lowerName.endsWith('.dwg') || lowerName.endsWith('.png') || lowerName.endsWith('.dxf')) return 'DRAWING';
                if (lowerName.endsWith('.jpg') || lowerName.endsWith('.jpeg') || lowerName.endsWith('.webp')) return 'IMAGE';
                return 'OTHER';
            });

            // 萃取出不重複的類別清單
            const uniqueTypes = Array.from(new Set(types));
            postType = uniqueTypes.length === 1 ? uniqueTypes[0] : "MIX";
        }
        //  1. 準備基礎資料 (不包含關聯物件)
        const data: any = {
            shortId: shortId,
            title: params.metadata.title,
            category: params.metadata.category,
            description: params.metadata.description,
            type: postType,
            keywords: params.metadata.keywords,
            coverImage: params.coverImageKey,
            images: params.imageKeys,
            uploader: {
                connect: {id: session.user.id}
            },
            relatedPosts: params.metadata.relatedPosts.map(post => post.id),
            permission: params.metadata.permission,
            files: {
                connect: fileIds.map(id => ({ id }))
            }
        };

        if(isTeamPost){
            data.team = {
                connect: { id: teamId}
            };
        }
        // 將關聯的檔案歸檔給團隊
        if (isTeamPost && fileIds.length > 0) {
            await prisma.fileRecord.updateMany({
                where: { id: { in: fileIds } },
                data: { teamId: teamId } // 將這些檔案的所有權綁定給團隊
            });
            console.log(`✅ 已將 ${fileIds.length} 個檔案歸檔至團隊: ${teamId}`);
        }

        // 寫入 PostgreSQL
        const newPost = await prisma.post.create({
            data: data
        });

        if (validAssociations.length > 0) {
            await prisma.projectAsset.createMany({
                data: validAssociations.map(assoc => ({
                    postId: newPost.id,          // 剛剛建立的 Post ID
                    projectId: assoc.projectId,  // 關聯的專案 ID
                    phaseId: assoc.phaseId,      // 關聯的階段 ID (可能為 null，代表未分類)
                    sortOrder: 0                 // 預設排序
                }))
            });
        }

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
        metadata, 
        coverImageKey, 
        imageKeys, 
        fileIds = [], 
        teamId
    } = params;

    try {
        const isTeamPost = teamId && teamId !== "none" && teamId !== "";
        const oldPost = await prisma.post.findUnique({
            where: { shortId: shortId },
            select: {
                id: true,
                shortId: true,
                uploaderId: true,
                teamId: true,
                coverImage: true,
                images: true,
            }
        });

        if (!oldPost) {
            return { success: false, error: "Post not found" };
        }

        // 權限二次驗證
        const isOwner = oldPost.uploaderId === session.user.id;
        let isTeamEditor = false;
        if (oldPost.teamId) {
            const oldPostTeamStatus = await checkUserTeamStatus(oldPost.teamId);
            isTeamEditor = oldPostTeamStatus === "EDITOR_ACCESS";
        }

        if (!isOwner && !isTeamEditor) {
            return { success: false, error: "Permission denied" };
        }

        if (isTeamPost) {
            const newTeamStatus = await checkUserTeamStatus(teamId);
            if (newTeamStatus !== "EDITOR_ACCESS") {
                return { success: false, error: "Permission denied" };
            }
        }

        let fileRecords: { id: string; uploaderId: string; teamId: string | null; fileId: string; name: string }[] = [];

        if (fileIds.length > 0) {
            fileRecords = await prisma.fileRecord.findMany({
                where: { id: { in: fileIds } },
                select: {
                    id: true,
                    uploaderId: true,
                    teamId: true,
                    fileId: true,
                    name: true,
                }
            });

            if (fileRecords.length !== fileIds.length) {
                return { success: false, error: "Some files were not found" };
            }

            const hasForbiddenFile = fileRecords.some(file => {
                if (file.uploaderId === session.user.id) return false;
                if (isTeamPost && file.teamId === teamId) return false;
                if (oldPost.teamId && file.teamId === oldPost.teamId && isTeamEditor) return false;
                return true;
            });

            if (hasForbiddenFile) {
                return { success: false, error: "Permission denied for one or more files" };
            }
        }

        const validAssociations = metadata.associations?.filter(a => a.projectId) ?? [];

        if (validAssociations.length > 0) {
            const projectIds = Array.from(new Set(validAssociations.map(a => a.projectId)));

            const projects = await prisma.project.findMany({
                where: { id: { in: projectIds } },
                select: {
                    id: true,
                    teamId: true,
                }
            });

            if (projects.length !== projectIds.length) {
                return { success: false, error: "Some projects were not found" };
            }

            for (const project of projects) {
                const projectAccess = await checkUserTeamStatus(project.teamId);
                if (projectAccess !== "EDITOR_ACCESS") {
                    return { success: false, error: "Permission denied for one or more projects" };
                }
            }

            const phaseIds = validAssociations
                .map(a => a.phaseId)
                .filter((id): id is string => Boolean(id));

            if (phaseIds.length > 0) {
                const phases = await prisma.phase.findMany({
                    where: { id: { in: phaseIds } },
                    select: {
                        id: true,
                        projectId: true,
                    }
                });

                if (phases.length !== phaseIds.length) {
                    return { success: false, error: "Some phases were not found" };
                }

                const associationProjectByPhaseId = new Map(
                    validAssociations
                        .filter((assoc): assoc is typeof assoc & { phaseId: string } => Boolean(assoc.phaseId))
                        .map(assoc => [assoc.phaseId, assoc.projectId])
                );

                const hasInvalidPhase = phases.some(phase => (
                    associationProjectByPhaseId.get(phase.id) !== phase.projectId
                ));

                if (hasInvalidPhase) {
                    return { success: false, error: "Phase does not belong to selected project" };
                }
            }
        }

        // 1. 自動判斷 Post Type (跟 create 邏輯一模一樣)
        let postType = "OTHER";
        if (fileIds.length > 0) {
            const types = fileRecords.map(record => {
                const lowerName = (record.fileId || record.name || "").toLowerCase();
                if (lowerName.endsWith('.ifc') || lowerName.endsWith('.obj') || lowerName.endsWith('.gltf') || lowerName.endsWith('.3dm') || lowerName.endsWith('.frag')) return 'MODEL_3D'; 
                if (lowerName.endsWith('.pdf') || lowerName.endsWith('.docx') || lowerName.endsWith('.xlsx')) return 'DOCUMENT';
                if (lowerName.endsWith('.dwg') || lowerName.endsWith('.png') || lowerName.endsWith('.dxf')) return 'DRAWING';
                if (lowerName.endsWith('.jpg') || lowerName.endsWith('.jpeg') || lowerName.endsWith('.webp')) return 'IMAGE';
                return 'OTHER';
            });

            const uniqueTypes = Array.from(new Set(types));
            postType = uniqueTypes.length === 1 ? uniqueTypes[0] : "MIX";
        }

        // 2. 處理 S3 垃圾回收 (Images & Files)
        const s3DeletePromises: Promise<any>[] = [];
        
        // 處理舊封面
        if (oldPost.coverImage && oldPost.coverImage !== coverImageKey) {
            const command = new DeleteObjectCommand({ Bucket: process.env.S3_IMAGES_BUCKET || "images", Key: oldPost.coverImage });
            s3DeletePromises.push(s3Client.send(command).catch(err => console.error(`刪除舊封面失敗`, err)));
        }

        // 處理附加圖片
        const oldImages = oldPost.images || [];
        const removedImages = oldImages.filter(oldKey => !imageKeys.includes(oldKey));
        removedImages.forEach(key => {
            const command = new DeleteObjectCommand({ Bucket: process.env.S3_IMAGES_BUCKET || "images", Key: key });
            s3DeletePromises.push(s3Client.send(command).catch(err => console.error(`刪除舊圖片失敗`, err)));
        });

        await Promise.all(s3DeletePromises);
        
        const updateData: any = {
            title: metadata.title,
            category: metadata.category,
            description: metadata.description,
            type: postType, // 👈 塞入重新判斷的 Type
            keywords: metadata.keywords,
            coverImage: coverImageKey,
            images: imageKeys,
            relatedPosts: metadata.relatedPosts.map(post => post.id), 
            permission: metadata.permission,
            files: {
                // Prisma 的 set 操作會自動幫我們拔掉舊關聯，並綁上這批新的 ID
                set: fileIds.map(id => ({ id })) 
            }
        };

        // 處理團隊關聯
        if(isTeamPost){
            updateData.team = {
                connect: { id: teamId}
            };
        }

        // 將關聯的檔案歸檔給團隊
        if (isTeamPost && fileIds.length > 0) {
            await prisma.fileRecord.updateMany({
                where: { id: { in: fileIds } },
                data: { teamId: teamId } // 將這些檔案的所有權綁定給團隊
            });
            console.log(`✅ 已將 ${fileIds.length} 個檔案歸檔至團隊: ${teamId}`);
        }
        
        // 4. 執行 Prisma 更新
        const updatedPost = await prisma.post.update({
            where: { shortId: shortId },
            data: updateData
        });

        // 5. 更新專案關聯 (ProjectAsset) - Wipe and Replace 策略
        // 先砍掉舊的關聯
        await prisma.projectAsset.deleteMany({
            where: { postId: updatedPost.id }
        });

        // 再寫入新的關聯
        if (validAssociations.length > 0) {
            await prisma.projectAsset.createMany({
                data: validAssociations.map(assoc => ({
                    postId: updatedPost.id,
                    projectId: assoc.projectId,
                    phaseId: assoc.phaseId,
                    sortOrder: 0
                }))
            });
            console.log(`✅ 已更新 ${validAssociations.length} 筆專案關聯`);
        }

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
    scope: "ALL" | "PERSONAL" | "TEAM" | "COLLECTION" | string = "ALL",
    teamId: string = "",
    includeFileType: PostType = "ALL"
) => {
    try {
        const session = await auth();
        let userCollection: string[] = [];

        const getReadablePostFilter = async () => {
            if (!session?.user?.id) {
                return { permission: "standard" };
            }

            const userTeamRecords = await prisma.teamMember.findMany({
                where: { userId: session.user.id },
                select: { teamId: true }
            });

            const userTeamIds = userTeamRecords.map(record => record.teamId);

            return {
                OR: [
                    { permission: "standard" },
                    { uploaderId: session.user.id },
                    ...(userTeamIds.length > 0 ? [{ teamId: { in: userTeamIds } }] : [])
                ]
            };
        };

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
        
        if (includeFileType !== "ALL") {
            whereCondition.type = includeFileType;
        }
        
        let shouldApplyReadableFilter = scope === "ALL";

        if(scope && scope !== "ALL"){
            if(!session?.user.id){
                return {success:false, error:"Unauthorized", data: [], hasMore: false};
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

                    whereCondition.id = {in: collectionIds};
                    shouldApplyReadableFilter = true;
                    break;

                default:
                    shouldApplyReadableFilter = true;
                    break;
            }
        }

        if (shouldApplyReadableFilter) {
            whereCondition.AND = [
                ...(Array.isArray(whereCondition.AND) ? whereCondition.AND : []),
                await getReadablePostFilter()
            ];
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
                coverImage: post.coverImage ? `${minioEndpoint}/${minioImageBucket}/${post.coverImage}` : null,
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
        return { success: false, error: "Database error", data: [], hasMore: false };
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
        let userTeamIds: string[] = [];

        if(session?.user.id){
            const currentUser = await prisma.user.findUnique({
                where: {id: session.user.id},
                select: {userCollection:true}
            });
            userCollection = currentUser?.userCollection || [];

            const userTeamRecords = await prisma.teamMember.findMany({
                where: { userId: session.user.id },
                select: { teamId: true }
            });

            userTeamIds = userTeamRecords.map(record => record.teamId);
        }

        const readablePostFilter = session?.user?.id
            ? {
                OR: [
                    { permission: "standard" },
                    { uploaderId: session.user.id },
                    ...(userTeamIds.length > 0 ? [{ teamId: { in: userTeamIds } }] : [])
                ]
            }
            : { permission: "standard" };

        // 1. 從資料庫中一次撈出所有符合 ID 的貼文
        // (只需要拿渲染 PostCard 必備的欄位即可，節省頻寬)
        const posts = await prisma.post.findMany({
            where: {
                id: {
                    in: postIds // 使用 Prisma 的 'in' 操作符
                },
                AND: [readablePostFilter]
            },
            select: {
                id: true,         
                shortId: true,   
                title: true,      
                coverImage: true, 
                type: true,
                team: {
                    select: {
                        name: true,
                        color: true
                    }
                }
            }
        });

        // 2. 將撈回來的 coverImage 轉換成 MinIO Presigned URL
        // (這段邏輯跟你原本 getPostsByScroll 裡面做的一模一樣)
        const minioEndpoint = process.env.S3_ENDPOINT_SERVER;
        const minioImageBucket = process.env.S3_IMAGES_BUCKET;
        const postWithPublicUrls = posts.map((post) => {
            return {
                ...post,
                coverImage: post.coverImage ? `${minioEndpoint}/${minioImageBucket}/${post.coverImage}` : null,
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
            include: {
                files:true,
                uploader: {   
                    select: { id: true, userName: true, image: true } // 記得把你 schema 裡的 userName 改成對應的欄位名 (name 或 userName)
                },
                team: {
                    select: {
                        id: true,
                        name: true,
                        color: true,
                    }
                },
                projectAssets: {
                    include: {
                        project: { select: { id: true, name: true } },
                        phase: { select: { id: true, name: true } }
                    }
                }
            },
        });

        if (!post) return { success: false, error: "Post not found" };

        const session = await auth();
        const isPublicPost = post.permission === "standard";
        // 非公開貼文邏輯
        if (!isPublicPost) {
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
                    select: { id: true },
                });

                isTeamMember = Boolean(member);
            }

            if (!isOwner && !isTeamMember) {
                return { success: false, error: "Permission denied" };
            }
        }

        const isOwner = session?.user?.id === post.uploaderId;
        let isTeamEditor = false;
        if (session?.user?.id && post.teamId) {
            const teamStatus = await checkUserTeamStatus(post.teamId);
            isTeamEditor = teamStatus === "EDITOR_ACCESS";
        }
        
        const minioEndpoint = process.env.S3_ENDPOINT_SERVER;
        const minioImageBucket = process.env.S3_IMAGES_BUCKET;
        const publicCoverImageUrls = post.coverImage ? `${minioEndpoint}/${minioImageBucket}/${post.coverImage}` : null;

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
                canEditPost: isOwner || isTeamEditor,
            }
        };
    } catch (error) {
        console.error("Failed to fetch post detail:", error);
        return { success: false, error: "Database error" };
    }
};

export const getEditPostDetail = async (shortId: string) => {
    try {
        const session = await auth();

        if (!session?.user?.id) {
            return { success: false, error: "Unauthorized" };
        } 

        const post = await prisma.post.findUnique({
            where: { shortId: shortId },
            include: {
                files: true,
                projectAssets: true,
                uploader: {
                    select: { id: true, userName: true, image: true }
                },
                team: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            },
        });

        if (!post) return { success: false, error: "Post not found" };

        const isOwner = post.uploaderId === session.user.id;
        let isTeamEditor = false;
        if (post.teamId) {
            const teamStatus = await checkUserTeamStatus(post.teamId);
            isTeamEditor = teamStatus === "EDITOR_ACCESS";
        }

        if (!isOwner && !isTeamEditor) {
            return { success: false, error: "Permission denied" };
        }

        const minioEndpoint = process.env.S3_ENDPOINT_SERVER;
        const minioImageBucket = process.env.S3_IMAGES_BUCKET;

        const publicCoverImageUrls = post.coverImage 
            ? `${minioEndpoint}/${minioImageBucket}/${post.coverImage}` 
            : null;

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

        const associations = post.projectAssets.map(asset => ({
            projectId: asset.projectId,
            phaseId: asset.phaseId
        }));

        return { 
            success: true, 
            data: {
                ...post,
                coverImage: publicCoverImageUrls,
                images: publicImagesArray,
                relatedPosts: formattedRelatedPosts,
                associations: associations
            }
        };
    } catch (error) {
        console.error("Failed to fetch post detail:", error);
        return { success: false, error: "Database error" };
    }
};

export async function deletePost(postId: string){
    try{
        const session = await auth();

        if (!session?.user?.id) {
            return { success: false, error: "Unauthorized" };
        }

        // 1. 查詢該貼文，並帶出所有關聯的檔案 (FileRecord)
        const post = await prisma.post.findUnique({
            where: { id: postId },
            select: {
                id: true,
                uploaderId: true,
                teamId: true,
                coverImage: true,
                images: true,
            }
        });
        
        if (!post) {
            return { success: false, error: "找不到該貼文" };
        }

        const canDelete =
            post.uploaderId === session.user.id || 
            (post.teamId && await checkUserTeamStatus(post.teamId) === 'EDITOR_ACCESS');

        if(!canDelete){
            return { success:false, error: "Permission denied"};
        }

        const s3DeletePromises: Promise<void>[] = [];
        
        // ==========================================
        // 1. 清理圖片 (Images Bucket: 封面 & 附加圖片)
        // ==========================================
        const imageKeysToDelete: string[] = [];
        if (post.coverImage && post.coverImage.trim() !== "") {
            imageKeysToDelete.push(post.coverImage);
        }
        if (post.images && post.images.length > 0) {
            imageKeysToDelete.push(...post.images);
        }
        
        const imagesBucket = process.env.S3_IMAGES_BUCKET || "images";
        imageKeysToDelete.forEach((key) => {
            const command = new DeleteObjectCommand({ Bucket: imagesBucket, Key: key });
            s3DeletePromises.push(
                s3Client.send(command)
                    .then(() => console.log(`[S3] 圖片已刪除: ${key}`))
                    .catch(err => console.log(`[S3] 圖片刪除失敗: ${key}`, err))
            );
        });

        // ==========================================
        // 3. 等待所有 S3 刪除任務完成，再刪除貼文
        // ==========================================
        await Promise.all(s3DeletePromises);

        // 4. 最後刪除貼文本身
        await prisma.post.delete({
            where: { id: postId }
        });

        // 刪除後更新首頁或列表頁的快取
        revalidatePath("/");
        return { success: true };

    } catch (e) {
        console.error("刪除貼文失敗", e);
        return { success: false, error: "刪除失敗" };
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
