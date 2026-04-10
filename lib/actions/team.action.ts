// lib/actions/team.action.ts
'use server'

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { s3Client } from "../s3";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { auth } from "@/auth";

// 權限檢查
// 定義回傳型別，讓前端 switch 更好寫
export type TeamAccessLevel = 'GUEST' | 'FORBIDDEN' | 'READ_ONLY' | 'EDITOR_ACCESS';

export async function checkUserTeamStatus(teamId: string): Promise<TeamAccessLevel> {
    const session = await auth();
    
    // 1. 沒登入
    if (!session?.user?.id) return 'GUEST';

    const member = await prisma.teamMember.findFirst({
        where: {
            teamId: teamId,
            userId: session.user.id
        }
    });

    // 2. 不是成員
    if (!member) return 'FORBIDDEN';

    // 3. 判斷權限等級
    // 只有 VIEWER 是唯讀，其餘 (OWNER, ADMIN, EDITOR) 皆為可編輯
    if (member.role === 'VIEWER') {
        return 'READ_ONLY';
    }

    return 'EDITOR_ACCESS';
}
/**
 * 建立一個新團隊，並自動將建立者設為 OWNER
 */
export async function createTeam(teamData: {name:string, description?:string, color?: string, avatar?: string }, userId: string) {
    try {
        if (!teamData.name.trim()) {
            return { success: false, error: "團隊名稱不可為空" };
        }

        // 🚀 關鍵：使用 Prisma Transaction 確保兩筆寫入同時成功
        const newTeam = await prisma.$transaction(async (tx) => {
            // 1. 建立 Team 本體
            const team = await tx.team.create({
                data: {
                    name: teamData.name.trim(),
                    description: teamData.description,
                    color: teamData.color,
                    avatar: teamData.avatar
                }
            });

            // 2. 建立 TeamMember 關聯，並設定為 OWNER
            await tx.teamMember.create({
                data: {
                    teamId: team.id,
                    userId: userId,
                    role: "OWNER", 
                }
            });

            return team;
        });

        // 讓團隊列表的頁面重新整理以顯示新資料
        revalidatePath('/team'); // 請根據你實際的團隊頁面路由調整

        return { success: true, data: newTeam };
    } catch (error) {
        console.error("Failed to create team:", error);
        return { success: false, error: "建立團隊失敗，請稍後再試" };
    }
}
/**
 * 取得單一團隊的詳細資料 (供 Settings Modal 預設值使用)
 */
export async function getTeamDetails(teamId:string, userId:string) {
    try{
        const member = await prisma.teamMember.findFirst({
            where:{ teamId, userId}
        });
        if(!member) {
            return { success: false, error: "無權限查看此團隊或團隊不存在" };        
        }

        const team = await prisma.team.findUnique({
            where: {id:teamId},
            select: {
                id: true,
                name: true,
                description: true,
                color: true,
                avatar: true
            }
        });

        if (!team) {
            return { success: false, error: "找不到該團隊" };
        }

        return { success: true, data: team };
    } catch (error) {
        console.error("Failed to fetch team details:", error);
        return { success: false, error: "讀取團隊資料失敗" };
    }
}
/**
 * 取得特定團隊的所有成員
 */
export async function getTeamMembers(teamId: string) {
    try {
        const members = await prisma.teamMember.findMany({
            where: { 
                teamId: teamId 
            },
            include: {
                user: {
                    select: { 
                        id: true, 
                        userName: true, 
                        image: true,
                        email: true // 如果你的 schema 有 email，也可以抓出來用
                    }
                },
                team:{
                    select: { 
                        name: true
                    }
                }
            },
            orderBy: {
                // 可以依照加入時間排序，或是你的 schema 裡有的時間欄位
                joinedAt: 'asc' 
            }
        });

        // 將資料庫的格式轉換成前端 UI 需要的格式
        const formattedMembers = members.map(m => ({
            id: m.user.id,
            name: m.user.userName || "Unknown",
            handle: `@${m.user.userName}`,
            role: m.role, // 這裡會抓到 "OWNER", "ADMIN", "MEMBER" 等
            avatar: m.user.image || "/api/placeholder/40/40",
            teamMemberId: m.id, // 順便把中介表的 ID 傳下去，之後踢人或改權限會用到
            teamName: m.team.name
        }));

        return { success: true, data: formattedMembers };
    } catch (error) {
        console.error("Failed to fetch team members:", error);
        return { success: false, error: "讀取團隊成員失敗" };
    }
}
/**
 * 取得特定使用者所屬的所有團隊列表
 */
export async function getUserTeams(userId: string) {
    try {
        const userTeams = await prisma.teamMember.findMany({
            where: { 
                userId: userId 
            },
            include: {
                team: true // 把關聯的 Team 本體資料一起抓出來
            },
            orderBy: {
                joinedAt: 'asc'
            }
        });

        // 整理資料格式回傳給前端
        const formattedTeams = userTeams.map(ut => ({
            id: ut.team.id,
            name: ut.team.name,
            role: ut.role // "OWNER", "ADMIN", "MEMBER" 等
        }));

        return { success: true, data: formattedTeams };
    } catch (error) {
        console.error("Failed to fetch user teams:", error);
        return { success: false, error: "無法讀取團隊列表" };
    }
}

/**
 * 將使用者加入特定團隊 (支援透過 ID 或 Email 搜尋)
 */
export async function addMemberToTeam(teamId: string, identifier: string, adderId: string) {
    try {
        if (!identifier.trim()) return { success: false, error: "請輸入 User ID 或 Email" };

        // 1. 權限檢查：確認執行動作的人 (adderId) 是否為該團隊的 OWNER 或 ADMIN
        // 請確保 'OWNER', 'ADMIN' 這些字串符合你 Prisma Schema 裡的 Enum 定義
        const adder = await prisma.teamMember.findFirst({
            where: { 
                teamId: teamId, 
                userId: adderId, 
                role: { in: ['OWNER', 'ADMIN'] } 
            }
        });

        if (!adder) {
            return { success: false, error: "權限不足，只有管理員可以新增成員" };
        }

        // 2. 尋找目標使用者 (支援 ID 或 Email 雙重比對)
        const targetUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { id: identifier.trim() },
                    { email: identifier.trim() }
                ]
            }
        });

        if (!targetUser) {
            return { success: false, error: "找不到該使用者，請確認 ID 或 Email 是否正確" };
        }

        // 3. 檢查目標使用者是否已經在這個團隊中了
        const existingMember = await prisma.teamMember.findFirst({
            where: { 
                teamId: teamId, 
                userId: targetUser.id 
            }
        });

        if (existingMember) {
            return { success: false, error: "該使用者已經在此團隊中" };
        }

        // 4. 新增至團隊 (預設給予一般成員角色)
        // ⚠️ 注意：這裡的 'MEMBER' 也請改成你定義的一般員工角色 (例如 'Employees')
        const newMember = await prisma.teamMember.create({
            data: {
                teamId: teamId,
                userId: targetUser.id,
                role: "VIEWER" 
            }
        });

        return { success: true, data: newMember };
    } catch (error) {
        console.error("Failed to add member to team:", error);
        return { success: false, error: "新增成員失敗，請稍後再試" };
    }
}
/**
 * 根據指定條件 (ID 或 Username) 搜尋使用者
 */
export async function searchUsersForTeam(query: string, searchType: "username" | "id", excludeTeamId: string) {
    try {
        if (!query || query.trim() === "") {
            return { success: true, data: [] }; // 如果是空的，直接回傳空陣列
        }

        const searchTerm = query.trim();
        let whereClause: any = {};

        // 根據選擇的條件設定查詢邏輯
        if (searchType === "username") {
            whereClause = { userName: { contains: searchTerm, mode: 'insensitive' } };
        } else if (searchType === "id") {
            // ID 通常比較精確，但這裡依然用 contains 支援部分輸入 (前提是你的 ID 在 Prisma 是 String 型別)
            whereClause = { id: { contains: searchTerm, mode: 'insensitive' } };
        }

        // 排除已經在團隊中的人
        if (excludeTeamId) {
            whereClause = {
                ...whereClause,
                NOT: {
                    teamMembers: { some: { teamId: excludeTeamId } }
                }
            };
        }

        const users = await prisma.user.findMany({
            where: whereClause,
            select: { id: true, userName: true, email: true, image: true },
            // 這裡移除了 take: 5，所以會「列出所有符合條件的使用者」
        });

        return { success: true, data: users };
    } catch (error) {
        console.error("Failed to search users:", error);
        return { success: false, error: "搜尋失敗" };
    }
}
/**
 * 更新團隊成員角色
 */
export async function updateTeamMemberRole(teamId: string, targetUserId: string, newRole: string, updaterId: string) {
    try {
        // 1. 權限檢查：確認執行者是否有權限 (OWNER 或 ADMIN)
        const updater = await prisma.teamMember.findFirst({
            where: { teamId, userId: updaterId, role: { in: ['OWNER', 'ADMIN'] } }
        });

        if (!updater) return { success: false, error: "權限不足，只有管理員可以修改角色" };

        // 2. 防呆檢查：不能修改自己的角色 (避免不小心把自己降級導致團隊沒有 Owner)
        if (targetUserId === updaterId) {
            return { success: false, error: "無法修改自己的角色" };
        }

        // 3. 更新角色
        const updatedMember = await prisma.teamMember.updateMany({
            where: { teamId, userId: targetUserId },
            data: { role: newRole as any } // 根據你的 Prisma Enum 型別強轉
        });

        return { success: true, data: updatedMember };
    } catch (error) {
        console.error("Failed to update role:", error);
        return { success: false, error: "更新角色失敗" };
    }
}

/**
 * 從團隊中移除成員
 */
export async function removeTeamMember(teamId: string, targetUserId: string, updaterId: string) {
    try {
        // 1. 權限檢查
        const updater = await prisma.teamMember.findFirst({
            where: { teamId, userId: updaterId, role: { in: ['OWNER', 'ADMIN'] } }
        });

        if (!updater) return { success: false, error: "權限不足，只有管理員可以刪除成員" };

        // 2. 防呆檢查：不能踢掉自己
        if (targetUserId === updaterId) {
            return { success: false, error: "無法將自己移出團隊，請使用離開團隊功能" };
        }

        // 3. 刪除關聯
        await prisma.teamMember.deleteMany({
            where: { teamId, userId: targetUserId }
        });

        return { success: true };
    } catch (error) {
        console.error("Failed to remove member:", error);
        return { success: false, error: "移除成員失敗" };
    }
}
/**
 * 自主離開團隊
 */
export async function leaveTeam(teamId: string, userId: string) {
    try {
        // 1. 檢查使用者是否在團隊中，並取得他的角色
        const member = await prisma.teamMember.findFirst({
            where: { teamId, userId }
        });

        if (!member) return { success: false, error: "你不在該團隊中" };

        // 2. 孤兒團隊防呆：如果是 OWNER，檢查是不是「唯一的」 OWNER
        if (member.role === 'OWNER') {
            const otherOwnersCount = await prisma.teamMember.count({
                where: { 
                    teamId, 
                    role: 'OWNER', 
                    userId: { not: userId } 
                }
            });

            if (otherOwnersCount === 0) {
                return { 
                    success: false, 
                    error: "你是團隊中唯一的 OWNER，請先將 OWNER 權限轉讓給其他成員，或直接刪除團隊。" 
                };
            }
        }

        // 3. 執行離開 (刪除 TeamMember 關聯)
        await prisma.teamMember.deleteMany({
            where: { teamId, userId }
        });
        revalidatePath(`/dashboard/${userId}`);
        return { success: true };
    } catch (error) {
        console.error("Failed to leave team:", error);
        return { success: false, error: "離開團隊失敗，請稍後再試" };
    }
}
/**
 * 刪除團隊
 */
export async function deleteTeam(teamId: string, userId: string) {
    try {
        // 1. 權限檢查：只有 OWNER 可以刪除團隊
        const member = await prisma.teamMember.findFirst({
            where: { teamId, userId, role: 'OWNER' }
        });

        if (!member) return { success: false, error: "權限不足，只有 OWNER 可以刪除團隊" };

        await prisma.team.delete({
            where: { id: teamId }
        });

        revalidatePath(`/dashboard/${userId}`);
        return { success: true };
    } catch (error) {
        console.error("Failed to delete team:", error);
        return { success: false, error: "刪除團隊失敗，請稍後再試" };
    }
}
/**
 * 更新團隊設定
 */
export async function updateTeamSettings(
    teamId: string, 
    userId: string, 
    data: { name: string; description?: string; color?: string; avatar?: string }
) {
    try {
        // 1. 權限檢查：只有 OWNER 或 ADMIN 可以修改設定
        const member = await prisma.teamMember.findFirst({
            where: { teamId, userId },
            include: { team:true }
        });

        if (!member || (member.role !== 'OWNER' && member.role !== 'ADMIN')) {
            return { success: false, error: "權限不足" };
        }
        const oldAvatarKey = member.team.avatar;
        // 2. 更新資料庫
        const updatedTeam = await prisma.team.update({
            where: { id: teamId },
            data: {
                name: data.name,
                description: data.description,
                color: data.color,
                avatar: data.avatar,
            }
        });

        // 若有更新avatar則刪除原先舊的照片
        // 如果「有傳入新圖片」且「有舊圖片」且「新舊圖片不同」
        if (data.avatar && oldAvatarKey && data.avatar !== oldAvatarKey) {
            try {
                const deleteCommand = new DeleteObjectCommand({
                    Bucket: process.env.NEXT_PUBLIC_S3_IMAGES_BUCKET!, // 你的 Bucket 名稱
                    Key: oldAvatarKey, // 舊的檔案名稱
                });
                
                await s3Client.send(deleteCommand);
                console.log(`✅ 成功從 MinIO 刪除舊的大頭貼: ${oldAvatarKey}`);
            } catch (s3Error) {
                // ⚠️ 注意：S3 刪除失敗不應該讓整個 Action 報錯回傳 false
                // 因為資料庫已經更新成功了。所以這裡只要 catch 起來印個 log 就好。
                console.error("❌ 從 MinIO 刪除舊大頭貼失敗:", s3Error);
            }
        }
        revalidatePath('/dashboard');
        return { success: true, data: updatedTeam };
    } catch (error) {
        console.error("Update team failed:", error);
        return { success: false, error: "更新失敗" };
    }
}
