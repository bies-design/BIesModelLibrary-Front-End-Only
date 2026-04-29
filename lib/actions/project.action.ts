"use server"

import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { ProjectStatus } from "../../prisma/generated/prisma/client";
import { connect } from "http2";
import { s3Client } from "../s3";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { AssetType } from "../../prisma/generated/prisma/client";
import { revalidatePath } from "next/cache";
import { ProjectSortType } from "@/app/(root)/projects/[teamId]/page";
import { checkUserTeamStatus } from "./team.action";
// ==========================================
// 1. 專案 (Project) 相關
// ==========================================

// 建立新專案
export async function createProject(data: {
    name: string;
    description?: string;
    client?: string;
    location?: string;
    coverImage?: string;
    teamId: string; // 記得我們設定過，專案必須綁定團隊
    status: ProjectStatus | 'ACTIVE';
    }) {
    try {
        const session = await auth();
        if (!session?.user?.id) return { success: false, error: "Unauthorized" };

        const checkUserPermission = await checkUserTeamStatus(data.teamId);
        if(checkUserPermission != 'EDITOR_ACCESS'){
            return { success: false, error: "Permission denied" };
        }
        // 1. 建立專案
        const newProject = await prisma.project.create({
            data: {
                name: data.name,
                description: data.description,
                client: data.client,
                location: data.location,
                coverImage: data.coverImage,
                team: { connect: { id: data.teamId } },
                status: data.status,
                creator: { connect: { id: session.user.id } }
            }
        });

        return { success: true, data: newProject };
    } catch (error: any) {
        console.error("Create project error:", error);
        return { success: false, error: error.message };
    }
}
export async function updateProject(projectId: string, data:{
    name: string;
    description: string | null;
    client: string | null;
    location: string | null;
    coverImage: string | null;
    status: ProjectStatus | "ACTIVE";
}) {
    try{
        const session = await auth();
        if(!session?.user.id){
            return { success: false, error: "Unauthorized" };
        }
        const oldProject = await prisma.project.findUnique({
            where:{id:projectId},
            select:{
                teamId:true,
                coverImage:true
            }
        });

        if(!oldProject){
            return { success: false, error: "Project not found" };
        }

        const checkUserPermission = await checkUserTeamStatus(oldProject.teamId);

        if(checkUserPermission != 'EDITOR_ACCESS'){
            return { success: false, error: "Permission denied" };
        }

        const updatedProject = await prisma.project.update({
            where:{id:projectId},
            data:{
                name: data.name,
                description: data.description,
                client: data.client,
                location: data.location,
                coverImage: data.coverImage,
                status: data.status
            }
        });
        // 垃圾清理：如果「原本有封面」且「新封面跟舊封面不一樣」(代表換了新圖或移除了圖)
        if (oldProject && oldProject.coverImage && data.coverImage !== oldProject.coverImage) {
            try {
                const deleteCommand = new DeleteObjectCommand({
                    Bucket: process.env.NEXT_PUBLIC_S3_IMAGES_BUCKET!,
                    Key: oldProject.coverImage,
                });
                await s3Client.send(deleteCommand);
                console.log(`✅ 成功刪除 MinIO 舊專案封面: ${oldProject.coverImage}`);
            } catch (s3Error) {
                console.error("❌ 刪除 MinIO 舊封面失敗:", s3Error);
                // 不 throw error，避免因為 S3 偶發錯誤導致資料庫已更新但前端以為失敗
            }
        }
        return { success: true, data: updatedProject};
    }catch (error: any){
        console.error("Update project error:", error);
        return { success: false, error: error.message };
    }
}

export async function deleteProject(projectId: string) {
    try{    
        const session = await auth();
        if(!session?.user.id){
            return { success: false, error: "Unauthorized" };
        }
        const project = await prisma.project.findUnique({
            where: { id:projectId },
            select: { 
                id:true,
                teamId:true,
            }
        });
        if(!project){
            return { success: false, error: "Project not found" };
        }
        const checkUserPermission = await checkUserTeamStatus(project.teamId);

        if(checkUserPermission != 'EDITOR_ACCESS'){
            return { success: false, error: "Permission denied" };
        }
        const deletedProject = await prisma.project.delete({
            where:{ id: projectId}
        });

        if(deletedProject.coverImage){
            try {
                const deleteCommand = new DeleteObjectCommand({
                    Bucket: process.env.NEXT_PUBLIC_S3_IMAGES_BUCKET!,
                    Key: deletedProject.coverImage,
                });
                await s3Client.send(deleteCommand);
                console.log(`✅ 成功刪除被刪除專案的 MinIO 封面: ${deletedProject.coverImage}`);
            } catch (s3Error) {
                console.error("❌ 刪除專案封面失敗:", s3Error);
            }
        }
        return { success: true };
    }catch(error: any){
        console.error("Delete project error: ",error);
        return { success: false, error: error.message };
    }
}
// 取得團隊的所有專案列表 (卡片視圖用)
export async function getTeamProjects(teamId: string) {
    try {
        const projects = await prisma.project.findMany({
            where: { teamId: teamId },
            orderBy: { updatedAt: 'desc' },
            // 只拿列表需要的輕量資訊
            select: {
                id: true,
                name: true,
                description: true,
                client: true,
                status: true,
                location: true,
                coverImage: true,
                createdAt: true,
                updatedAt: true,
            }
        });

        const safeProjects = projects.map(project => ({
            ...project,
            createdAt: project.createdAt.toISOString(),
            updatedAt: project.updatedAt.toISOString(),
        }));

        return { success: true, data: safeProjects };
    } catch (error: any) {
        console.error("Get projects error:", error);
        return { success: false, error: error.message };
    }
}


// 取得團隊的所有專案列表 (卡片視圖用)
export async function getTeamProjectsByScroll(
    teamId: string,
    page:number = 1,
    limit: number = 12,
    search: string = "",
    status: ProjectStatus | string = "ALL",
    sortBy: ProjectSortType = "updated"
) {
    try {
        const skip = (page - 1) * limit;

        const whereCondition: any = {
            teamId: teamId,
        }

        if (search) {
            whereCondition.name = {
                contains: search,
                mode: "insensitive"
            };
        }

        if ( status !== "ALL" ){
            whereCondition.status = status as ProjectStatus;
        }

        // 2. 動態建立排序條件 (OrderBy)
        const orderByCondition = sortBy === "created" 
            ? { createdAt: "desc" as const } 
            : { updatedAt: "desc" as const };

        const projects = await prisma.project.findMany({
            where: whereCondition,
            skip: skip,
            take: limit,
            orderBy: orderByCondition,
            // 只拿列表需要的輕量資訊
            select: {
                id: true,
                name: true,
                description: true,
                client: true,
                status: true,
                location: true,
                coverImage: true,
                createdAt: true,
                updatedAt: true,
            }
        });

        const safeProjects = projects.map(project => ({
            ...project,
            createdAt: project.createdAt.toISOString(),
            updatedAt: project.updatedAt.toISOString(),
        }));

        // 4. 計算總數與是否還有下一頁
        const totalProjects = await prisma.project.count({ where: whereCondition });
        const hasMore = skip + projects.length < totalProjects;

        return { success: true, data: safeProjects, hasMore: hasMore };
    } catch (error: any) {
        console.error("Get projects error:", error);
        return { success: false, error: error.message };
    }
}

// 取得單一專案詳情 (包含樹狀結構的 Phase 與 綁定的 Post)
export async function getProjectDetails(projectId: string) {
    try {

        const project = await prisma.project.findUnique({
            where: { id: projectId },
            include: {
                // 抓出所有階段
                phases: {
                    orderBy: { sortOrder: 'asc' },
                },
                // 抓出所有綁定在這個專案的資源 (ProjectAsset)
                assets: {
                    include: {
                        post: {
                            include: {
                                files: true // 把 Post 裡面的實體檔案 (3D, PDF) 一併抓出來
                            }
                        }
                    },
                    orderBy: { sortOrder: 'asc' }
                }
            }
        });

        if (!project) return { success: false, error: "Project not found" };
        return { success: true, data: project };
    } catch (error: any) {
        console.error("Get project details error:", error);
        return { success: false, error: error.message };
    }
}

// ==========================================
// 2. 階段 (Phase) 相關
// ==========================================

// 新增階段
export async function createPhase(projectId: string, name: string, sortOrder: number) {
    try {
        const session = await auth();
        if(!session?.user.id){
            return { success: false, error: "Unauthorized" };
        }
        const project = await prisma.project.findUnique({
            where: { id:projectId },
            select: { 
                id:true,
                teamId:true,
            }
        });
        if(!project){
            return { success: false, error: "Project not found" };
        }
        const checkUserPermission = await checkUserTeamStatus(project.teamId);

        if(checkUserPermission != 'EDITOR_ACCESS'){
            return { success: false, error: "Permission denied" };
        }
        
        const newPhase = await prisma.phase.create({
            data: {
                name,
                sortOrder,
                projectId
            }
        });
        return { success: true, data: newPhase };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

// 刪除階段 (注意：裡面的資源不會被刪除，會退回「未分類」)
export async function deletePhase(phaseId: string) {
    try {
        const session = await auth();
        if(!session?.user.id){
            return { success: false, error: "Unauthorized" };
        }
        const phase = await prisma.phase.findUnique({
            where: { id: phaseId},
            select:{
                project:{
                    select:{
                        teamId:true
                    }
                }
            }
        });
        if(!phase){
            return { success: false, error: "Phase not found" };
        }
        const checkUserPermission = await checkUserTeamStatus(phase.project.teamId);

        if(checkUserPermission != 'EDITOR_ACCESS'){
            return { success: false, error: "Permission denied" };
        }

        await prisma.phase.delete({
            where: { id: phaseId }
        });
        
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

// 更新階段名稱
export async function updatePhase(phaseId: string, newName: string) {
    try {
        const session = await auth();
        if(!session?.user.id){
            return { success: false, error: "Unauthorized" };
        }
        const phase = await prisma.phase.findUnique({
            where: { id: phaseId},
            select:{
                project:{
                    select:{
                        teamId:true
                    }
                }
            }
        });
        if(!phase){
            return { success: false, error: "Phase not found" };
        }
        const checkUserPermission = await checkUserTeamStatus(phase.project.teamId);

        if(checkUserPermission != 'EDITOR_ACCESS'){
            return { success: false, error: "Permission denied" };
        }

        const updatedPhase = await prisma.phase.update({
            where: { id: phaseId },
            data: { name: newName }
        });
        return { success: true, data: updatedPhase };
    } catch (error: any) {
        console.error("Update phase error:", error);
        return { success: false, error: error.message };
    }
}

// 批次更新階段排序
export async function reorderPhases(orders: { id: string; sortOrder: number }[]) {
    try {
        const session = await auth();
        if(!session?.user.id){
            return { success: false, error: "Unauthorized" };
        }
        if(orders.length === 0){
            return { success: true }
        }
        const phases = await prisma.phase.findMany({
            where: { 
                id: {
                    in: orders.map(orders => orders.id)
                }
            },
            select: {
                id: true,
                projectId: true,
                project: {
                    select: {
                        teamId: true
                    }
                }
            }
        });
        if (phases.length !== orders.length) {
            return { success: false, error: "Phase not found" };
        }
        const projectId = phases[0].projectId;
        const allSameProject = phases.every(phase => phase.projectId === projectId);
        if (!allSameProject) {
            return { success: false, error: "Cannot reorder phases across different projects" };
        }

        const teamId = phases[0].project.teamId;
        const checkUserPermission = await checkUserTeamStatus(teamId);
        
        if(checkUserPermission != 'EDITOR_ACCESS'){
            return { success: false, error: "Permission denied" };
        }

        await prisma.$transaction(
            orders.map(order => 
                prisma.phase.update({
                    where: { id: order.id },
                    data: { sortOrder: order.sortOrder }
                })
            )
        );
        return { success: true };
    } catch (error: any) {
        console.error("Reorder phases error:", error);
        return { success: false, error: error.message };
    }
}

// ==========================================
// 3. 資源關聯 (ProjectAsset) 相關
// ==========================================

export async function createProjectAsset(data: {
    projectId: string;
    phaseId: string | null;
    parentId: string | null;
    type: 'FOLDER' | 'POST' | 'LINK';
    name?: string;
    description?: string;
    postId?: string;
    url?: string;
}) {
    try {
        const { projectId, phaseId, parentId, type, name, description, postId, url } = data;

        const session = await auth();
        if(!session?.user.id){
            return { success: false, error: "Unauthorized" };
        }
        const project = await prisma.project.findUnique({
            where: { id:projectId },
            select: { 
                id:true,
                teamId:true,
            }
        });
        if(!project){
            return { success: false, error: "Project not found" };
        }
        const checkUserPermission = await checkUserTeamStatus(project.teamId);

        if(checkUserPermission != 'EDITOR_ACCESS'){
            return { success: false, error: "Permission denied" };
        }

        // 1. 如果是加入 Post，只可將屬於該團隊的post加入
        if (type === "POST") {
            if (!postId) {
                return { success: false, error: "Post is required" };
            }

            const post = await prisma.post.findUnique({
                where: { id: postId },
                select: {
                    id: true,
                    uploaderId: true,
                    teamId: true,
                }
            });

            if (!post) {
                return { success: false, error: "Post not found" };
            }

            const isOwnPersonalPost =
                post.uploaderId === session.user.id && post.teamId === null;

            const isSameTeamPost =
                post.teamId === project.teamId;

            if (!isOwnPersonalPost && !isSameTeamPost) {
                return {
                    success: false,
                    error: "Cannot attach a post from another team"
                };
            }

            if (isOwnPersonalPost) {
                await prisma.post.update({
                    where: { id: post.id },
                    data: { teamId: project.teamId }
                });
            }
        }

        // 不能把別的 project 的 phaseId 或 parentId 塞進這個 project 的 asset 裡
        if (phaseId) {
            const phase = await prisma.phase.findUnique({
                where: { id: phaseId },
                select: { projectId: true }
            });

            if (!phase || phase.projectId !== projectId) {
                return { success: false, error: "Invalid phase" };
            }
        }

        if (parentId) {
            const parentAsset = await prisma.projectAsset.findUnique({
                where: { id: parentId },
                select: { projectId: true }
            });

            if (!parentAsset || parentAsset.projectId !== projectId) {
                return { success: false, error: "Invalid parent asset" };
            }
        }

        //  2. 尋找當前層級 (同 Phase、同 Parent) 中最大的 sortOrder
        const aggregations = await prisma.projectAsset.aggregate({
            _max: {
                sortOrder: true,
            },
            where: {
                projectId: projectId,
                phaseId: phaseId,
                parentId: parentId,
            },
        });

        const nextSortOrder = aggregations._max.sortOrder !== null 
            ? aggregations._max.sortOrder + 1 
            : 0;

        // 2. 建立資產節點
        const newAsset = await prisma.projectAsset.create({
            data: {
                projectId,
                phaseId,
                parentId,
                type,
                name: type === 'POST' ? null : name, // Post 預設不給名，前端抓 Post Title
                description: type === 'POST' ? null : description,
                postId: type === 'POST' ? postId : null,
                url: type === 'LINK' ? url : null,
                sortOrder: nextSortOrder, // 預設排在最前面
            },
            include: {
                post: true // 方便前端立即渲染
            }
        });

        return { success: true, data: newAsset };
    } catch (error: any) {
        console.error("Create Asset Error:", error);
        return { success: false, error: error.message };
    }
}
export async function updateProjectAsset(id: string, data: { name?: string | null; url?: string | null; description?: string | null}) {
    try {
        const session = await auth();
        if(!session?.user.id){
            return { success: false, error: "Unauthorized" };
        }
        const projectAsset = await prisma.projectAsset.findUnique({
            where: { id: id},
            select: {
                project:{
                    select: {
                        teamId:true
                    }
                }
            }
        });
        if(!projectAsset){
            return { success: false, error: "ProjectAsset not found" };
        }

        const checkUserPermission = await checkUserTeamStatus(projectAsset.project.teamId);

        if(checkUserPermission != 'EDITOR_ACCESS'){
            return { success: false, error: "Permission denied" };
        }

        const updated = await prisma.projectAsset.update({
            where: { id },
            data: {
                name: data.name,
                url: data.url,
                description: data.description
            }
        });
        return { success: true, data: updated };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}
// 在專案內移動資源 (更改資源所屬的階段)
export async function moveAssetToPhase(projectAssetId: string, newPhaseId: string | null) {
    try {
        const session = await auth();

        if (!session?.user.id) {
            return { success: false, error: "Unauthorized" };
        }

        // 1. 先查 asset 屬於哪個 project/team
        const asset = await prisma.projectAsset.findUnique({
            where: { id: projectAssetId },
            select: {
                id: true,
                projectId: true,
                project: {
                    select: {
                        teamId: true,
                    }
                }
            }
        });

        if (!asset) {
            return { success: false, error: "Asset not found" };
        }

        // 2. 檢查目前使用者能不能編輯這個 asset 所屬的 project
        const checkUserPermission = await checkUserTeamStatus(asset.project.teamId);

        if (checkUserPermission !== "EDITOR_ACCESS") {
            return { success: false, error: "Permission denied" };
        }

        // 3. 如果 newPhaseId 不是 null，要確認 phase 跟 asset 屬於同一個 project
        if (newPhaseId) {
            const phase = await prisma.phase.findUnique({
                where: { id: newPhaseId },
                select: {
                    id: true,
                    projectId: true,
                }
            });

            if (!phase) {
                return { success: false, error: "Phase not found" };
            }

            if (phase.projectId !== asset.projectId) {
                return { success: false, error: "Cannot move asset to another project" };
            }
        }
        const updatedAsset = await prisma.projectAsset.update({
            where: { id: projectAssetId },
            data: { phaseId: newPhaseId }
        });
        return { success: true, data: updatedAsset };
    } catch (error: any) {
        console.error("Move asset phase error:", error);
        return { success: false, error: error.message };
    }
}
// 批次更新資源排序
export async function reorderAssets(orders: { id: string; sortOrder: number }[]) {
    try {
        const session = await auth();

        if(!session?.user.id){
            return { success: false, error: "Unauthorized" };
        }

        const projectAssets = await prisma.projectAsset.findMany({
            where: {
                id: {
                    in: orders.map(orders => orders.id)
                }
            },
            select: {
                id: true,
                projectId: true,
                project: {
                    select: {
                        teamId: true
                    }
                }
            }
        });
        if(projectAssets.length !== orders.length){
            return { success: false, error: "ProjectAsset not found" };
        }
        const projectId = projectAssets[0].projectId;
        const allSameProject = projectAssets.every(projectAsset => projectAsset.projectId === projectId);
        if(!allSameProject){
            return { success: false, error: "Cannot reorder assets across different projects" };
        }
        const teamId = projectAssets[0].project.teamId;
        const checkUserPermission = await checkUserTeamStatus(teamId);
        if(checkUserPermission != 'EDITOR_ACCESS'){
            return { success: false, error: "Permission denied" };
        }
        await prisma.$transaction(
            orders.map(order => 
                prisma.projectAsset.update({
                    where: { id: order.id },
                    data: { sortOrder: order.sortOrder }
                })
            )
        );
        return { success: true };
    } catch (error: any) {
        console.error("Reorder assets error:", error);
        return { success: false, error: error.message };
    }
}

// 從專案中移除資源關聯 (不刪除 Post 本體與原始檔案)
export async function removeAssetFromProject(projectAssetId: string) {
    try {
        const session = await auth();
        if(!session?.user.id){
            return { success: false, error: "Unauthorized" };
        }
        const projectAsset = await prisma.projectAsset.findUnique({
            where: { id: projectAssetId},
            select:{
                project:{
                    select:{
                        teamId:true
                    }
                }
            }
        });
        if(!projectAsset){
            return { success: false, error: "projectAsset not found" };
        }
        const checkUserPermission = await checkUserTeamStatus(projectAsset.project.teamId);

        if(checkUserPermission != 'EDITOR_ACCESS'){
            return { success: false, error: "Permission denied" };
        }
        await prisma.projectAsset.delete({
            where: { id: projectAssetId }
        });
        return { success: true };
    } catch (error: any) {
        console.error("Remove asset error:", error);
        return { success: false, error: error.message };
    }
}

// 取得使用者/團隊可用的所有 Post 資源 (供選取加入專案用)
export async function getAvailablePosts(teamId:string | null) {
    try {
        const session = await auth();
        if (!session?.user?.id) return { success: false, error: "Unauthorized" };
        
        const canAccessTeamPosts = teamId
            ? await checkUserTeamStatus(teamId)
            : null;

        if (teamId && canAccessTeamPosts !== "EDITOR_ACCESS") {
            return { success: false, error: "Permission denied" };
        }

        const posts = await prisma.post.findMany({
            where: {
                OR: [
                    {
                        uploaderId: session.user.id,
                        teamId: null,
                    },
                    ...(teamId ? [{ teamId }] : [])
                ]
            },
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                shortId: true,
                title: true,
                category: true,
                type: true,
            }
        });
        return { success: true, data: posts };
    } catch (error: any) {
        console.error("Get available posts error:", error);
        return { success: false, error: error.message };
    }
}

export async function moveAssetStructure(
    assetId: string, 
    newPhaseId: string | null, 
    newParentId: string | null
) {
    try {
        const session = await auth();

        if (!session?.user.id) {
            return { success: false, error: "Unauthorized" };
        }

        // 1. 先查目前要移動的 asset 屬於哪個 project/team
        const asset = await prisma.projectAsset.findUnique({
            where: { id: assetId },
            select: {
                id: true,
                projectId: true,
                project: {
                    select: {
                        teamId: true,
                    }
                }
            }
        });

        if (!asset) {
            return { success: false, error: "Asset not found" };
        }

        // 2. 檢查使用者能不能編輯這個 project
        const checkUserPermission = await checkUserTeamStatus(asset.project.teamId);

        if (checkUserPermission !== "EDITOR_ACCESS") {
            return { success: false, error: "Permission denied" };
        }

        // 3. newPhaseId 有值時，必須屬於同一個 project
        if (newPhaseId) {
            const phase = await prisma.phase.findUnique({
                where: { id: newPhaseId },
                select: {
                    id: true,
                    projectId: true,
                }
            });

            if (!phase) {
                return { success: false, error: "Phase not found" };
            }

            if (phase.projectId !== asset.projectId) {
                return { success: false, error: "Cannot move asset to another project" };
            }
        }

        // 4. newParentId 有值時，也必須屬於同一個 project
        if (newParentId) {
            const parentAsset = await prisma.projectAsset.findUnique({
                where: { id: newParentId },
                select: {
                    id: true,
                    projectId: true,
                }
            });

            if (!parentAsset) {
                return { success: false, error: "Parent asset not found" };
            }

            if (parentAsset.projectId !== asset.projectId) {
                return { success: false, error: "Cannot move asset under another project" };
            }
        }
        // 更新目標節點
        await prisma.projectAsset.update({
            where: { id: assetId },
            data: {
                phaseId: newPhaseId,
                parentId: newParentId,
                sortOrder: 0, // 移動後預設排在最前面
            }
        });
        return { success: true };
    } catch (error) {
        return { success: false, error: "移動失敗" };
    }
}