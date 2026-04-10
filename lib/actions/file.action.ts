"use server"

import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { FileCategory } from "@/prisma/generated/prisma";
import { s3Client } from "../s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";

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

export async function getFileDownloadUrl(fileId: string, fileName: string) {
    try {
        // 1. 基本登入驗證
        const session = await auth();
        if (!session?.user?.id) {
            return { success: false, error: "Unauthorized" };
        }

        // 2. 權限驗證：確認這筆 FileRecord 是他自己上傳的
        // (如果在 Sidebar 階段，檔案還沒發布，只會核對 uploaderId)
        const fileRecord = await prisma.fileRecord.findFirst({
            where: { fileId: fileId }
        });

        if (!fileRecord) {
            return { success: false, error: "File not found" };
        }

        // 💡 這裡可以依照你的需求加入更複雜的團隊權限檢查
        // 目前先做最基本的：必須是上傳者本人
        if (fileRecord.uploaderId !== session.user.id) {
            return { success: false, error: "Forbidden" };
        }

        // 3. 產生 Presigned URL
        const targetBucket = process.env.S3_UPLOADASSETS_BUCKET || "uploadassets";
        
        const command = new GetObjectCommand({
            Bucket: targetBucket,
            Key: fileId,
            // inline 讓瀏覽器優先預覽而非強制下載
            ResponseContentDisposition: `inline; filename="${encodeURIComponent(fileName)}"`,
        });

        // 產生一個效期 60 秒的網址，非常安全
        const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 60 });

        return { success: true, url: signedUrl };
        
    } catch (error: any) {
        console.error("Get file URL error:", error);
        return { success: false, error: error.message };
    }
}