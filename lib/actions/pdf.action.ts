"use server";

import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

interface CreatePdfParams {
    name: string;
    fileId: string;
}

export async function createPdfRecord(params: CreatePdfParams) {
    try {
        // 1. 取得當前使用者 session 以獲取 uploaderId
        const session = await auth();
        // 假設你的 session 有把 user id 存在 session.user.id
        const userId = session?.user?.id; 

        if (!userId) {
            return { success: false, error: "使用者未登入" };
        }

        // 2. 透過 Prisma 建立 Pdf 紀錄
        const newPdf = await prisma.pdf.create({
            data: {
                name: params.name,
                fileId: params.fileId,
                // 使用 Prisma 的關聯寫法 (connect) 或是直接塞外鍵 (uploaderId: userId) 皆可
                uploader: {
                    connect: { id: userId } 
                }
                // 注意：posts 欄位不用填，因為這是 1 對多關聯，
                // 等到稍後執行 createPost 時，再從 Post 那邊把這個 Pdf 連接下來即可。
            }
        });

        // 3. 回傳這筆新資料的 UUID 給前端
        return { 
            success: true, 
            id: newPdf.id 
        };

    } catch (error: any) {
        console.error("Failed to create PDF database record:", error);
        return { success: false, error: error.message || "資料庫寫入失敗" };
    }
}

export async function deletePdfsByPostId(postId: string) {
    try {
        // 先找出哪些 PDF 關聯到這篇貼文
        const pdfsToDelete = await prisma.pdf.findMany({
            where: { posts: { some: { id: postId } } }
        });

        // 取出它們的 id
        const pdfIds = pdfsToDelete.map(pdf => pdf.id);

        // 如果沒有要刪除的，就提早 return
        if (pdfIds.length === 0) return { success: true };

        // 從資料庫中刪除這些 PDF 紀錄
        // 註：如果你也想從 S3 刪除實體檔案，你需要拿 pdfsToDelete 裡面的 fileId 去呼叫 S3 刪除邏輯
        await prisma.pdf.deleteMany({
            where: { id: { in: pdfIds } }
        });

        return { success: true };
    } catch (error) {
        console.error("刪除舊 PDF 失敗:", error);
        return { success: false, error: "Failed to delete old PDFs" };
    }
}
