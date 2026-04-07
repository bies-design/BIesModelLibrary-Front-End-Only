// lib/actions/project.action.ts
"use server";

import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export async function createProject(data: { name: string; description: string }) {
    try {
        const session = await auth();
        // 防呆：確保使用者有登入
        if (!session?.user?.id) {
            return { success: false, error: "Unauthorized" };
        }

        // 建立專案，同時自動建立一個與專案同名的「根節點 (Root Node)」
        const project = await prisma.project.create({
            data: {
                name: data.name,
                description: data.description,
                ownerId: session.user.id,
                // 💡 Prisma 的巢狀寫入 (Nested Writes) 魔法：
                // 建立專案的當下，順便在 ProjectNode 表裡面塞一筆 Root 節點
                nodes: {
                    create: {
                        name: data.name, // 根節點名稱預設與專案相同
                    }
                }
            }
        });

        return { success: true, id: project.id };
    } catch (error) {
        console.error("建立專案失敗:", error);
        return { success: false, error: "Failed to create project" };
    }
}