"use server"

import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { ProjectStatus } from "../../prisma/generated/prisma/client";
import { connect } from "http2";
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
                coverImage: true,
                updatedAt: true,
            }
        });
        return { success: true, data: projects };
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

// ==========================================
// 3. 資源關聯 (ProjectAsset) 相關
// ==========================================

// 將系統中現有的 Post 加入到專案的指定階段
export async function addPostToPhase(projectId: string, postId: string, phaseId: string | null = null) {
    try {
        // 檢查是否已經存在相同的關聯 (防呆)
        const existing = await prisma.projectAsset.findUnique({
            where: {
                projectId_phaseId_postId: { projectId, phaseId: phaseId ?? "", postId }
            }
        });

        if (existing) return { success: false, error: "該資源已存在於此階段中" };

        const newAsset = await prisma.projectAsset.create({
            data: {
                projectId,
                postId,
                phaseId, // 若為 null 就是放到「未分類」
                sortOrder: 0 // 預設排序，後續可實作拖拉排序
            },
            include: {
                post: {
                    include: {
                        files: true
                    }
                }
            }
        });
        return { success: true, data: newAsset };
    } catch (error: any) {
        console.error("Add post to phase error:", error);
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