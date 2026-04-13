"use server"

import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { ProjectStatus } from "../../prisma/generated/prisma/client";
import { connect } from "http2";
import { s3Client } from "../s3";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { AssetType } from "../../prisma/generated/prisma/client";
import { revalidatePath } from "next/cache";
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
    }) {
    try {
        const session = await auth();
        if (!session?.user?.id) return { success: false, error: "Unauthorized" };

        // 1. 建立專案
        const newProject = await prisma.project.create({
            data: {
                name: data.name,
                description: data.description,
                client: data.client,
                location: data.location,
                coverImage: data.coverImage,
                team: { connect: { id: data.teamId } },
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
        const oldProject = await prisma.project.findUnique({
            where:{id:projectId},
            select:{coverImage:true}
        });

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

        // 1. 如果是加入 Post，執行團隊歸屬同步邏輯
        if (type === 'POST' && postId) {
            const targetProject = await prisma.project.findUnique({
                where: { id: projectId },
                select: { teamId: true }
            });
            if (targetProject) {
                await prisma.post.update({
                    where: { id: postId },
                    data: { teamId: targetProject.teamId }
                });
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
export async function getAvailablePosts() {
    try {
        // 這裡可以根據你的權限邏輯 (例如 teamId 或 uploaderId) 來過濾
        // 目前先示範抓取所有資源清單
        const posts = await prisma.post.findMany({
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                shortId:true,
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