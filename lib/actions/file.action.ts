"use server"

import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { FileCategory } from "@/prisma/generated/prisma";
import { s3Client } from "../s3";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";

// 🚀 新版：獲取使用者上傳的所有檔案
export async function getUserFiles() {
    try {
        const session = await auth();
        if (!session?.user?.id) {
        return { success: false, error: "Unauthorized" };
        }

        const files = await prisma.fileRecord.findMany({
        where: {
            uploaderId: session.user.id,
            // 如果你想過濾掉已經綁定到貼文的檔案，可以加上 postId: null
            // postId: null 
        },
        orderBy: {
            createdAt: 'desc'
        },
        select: {
            id: true,
            shortId: true,
            name: true,
            viewerFileId:true,
            fileId: true,
            size: true,
            status: true,
            category: true, // 💡 把分類拿回來，前端才能 filter
            createdAt: true,
        }
        });

        return { success: true, data: files };
    } catch (error: any) {
        console.error("Failed to fetch user files:", error);
        return { success: false, error: error.message };
    }
}

// 🚀 新版：刪除檔案 (同時清理 FileRecord)
export async function deleteFileRecord(fileId: string) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
        return { success: false, error: "Unauthorized" };
        }

        // 1. 驗證權限並取得檔案資訊
        const fileRecord = await prisma.fileRecord.findUnique({
            where: { fileId: fileId }
        });

        if (!fileRecord || fileRecord.uploaderId !== session.user.id) {
            return { success: false, error: "Not found or forbidden" };
        }

        const minioId = fileRecord.fileId;
        const fileType = minioId.split('.').pop();
        if(minioId){
            if(fileType === "ifc"){
                const deleteOps = [];
                // 刪除兩個bucket的檔案
                deleteOps.push(
                    s3Client.send(new DeleteObjectCommand({
                        Bucket: process.env.S3_UPLOADASSETS_BUCKET,
                        Key: fileId,
                    }))
                );
                if(fileRecord.viewerFileId){
                    deleteOps.push(
                        s3Client.send(new DeleteObjectCommand({
                        Bucket: process.env.S3_VIEWER_ASSETS_BUCKET,
                        Key: fileRecord.viewerFileId,
                    })));
                }

                await Promise.allSettled(deleteOps);
                console.log(`🗑️ [S3] 兩個關聯檔案已刪除: ${fileId},${fileRecord.viewerFileId}`);

                // 2. 刪除資料庫紀錄
                await prisma.fileRecord.delete({
                    where: { fileId: fileId }
                });
            }else {
                await s3Client.send(new DeleteObjectCommand({
                    Bucket: process.env.S3_UPLOADASSETS_BUCKET,
                    Key: fileId,
                }))
                console.log(`🗑️ [S3] 關聯檔案已刪除: ${fileId}`);

                // 2. 刪除資料庫紀錄
                await prisma.fileRecord.delete({
                    where: { fileId: fileId }
                });
            }
        }
        return { success: true };
    } catch (error: any) {
        console.error("Failed to delete file:", error);
        return { success: false, error: error.message };
    }
}