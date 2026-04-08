"use server"

import { s3Client } from "../s3";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";

//get model list "string!!!!!! data" based on user id
export async function getUserModels() {
    const session = await auth();

    if(!session?.user.id){
        return {success: false, error: "Unauthorized"};
    }
    try {
        const models = await prisma.model.findMany({
        where: {
            uploaderId: session.user.id,
            status: 'completed', 
        },
        orderBy: {
            createdAt: 'desc', // 最新的在最上面
        },
        });

        return { success: true, data: models };
    } catch (error) {
        console.error("Failed to fetch models:", error);
        return { success: false, error: "Failed to fetch models" };
    }
}

//delete model from the db and minio
export async function deleteModel(modelFileId: string) {
    const session = await auth();

    if (!session?.user?.id) {
        return { success: false, error: "Unauthorized" };
    }

    try {
        // 1. 先從資料庫找出這筆模型 (為了拿到 fileId 和確認權限)
        const model = await prisma.model.findUnique({
            where: { fileId:modelFileId },
        });

        if (!model) {
            return { success: false, error: "Model not found" };
        }

        // 確認刪除者是否為上傳者 (安全性檢查)
        if (model.uploaderId !== session.user.id) {
            return { success: false, error: "Permission denied" };
        }

        const fileId = model.fileId;

        if (fileId) {
            // 2. 刪除 MinIO 上的檔案
            // 我們要刪除兩個東西：原始 IFC 和 轉檔後的 Frag
            // 使用 Promise.all 同時執行，加快速度
            
            const deleteOps = [];

            // A. 刪除原始 IFC 檔 (在 S3_IFC_BUCKET)
            // Tus 上傳的檔案通常就是 fileId 本身，或者 fileId.ifc，看你的設定
            // 這裡假設 Tus 存的是純 ID，或者你可以試試 `${fileId}.ifc`
            deleteOps.push(
                s3Client.send(new DeleteObjectCommand({
                    Bucket: process.env.S3_IFC_BUCKET,
                    Key: fileId, // 或者是 `${fileId}.ifc`，取決於 Tus 怎麼存
                }))
            );

            // B. 刪除轉檔後的 Frag 檔 (通常和 IFC 同 bucket 或不同)
            // 假設你的 frag 是存成 `${fileId}.frag`
            deleteOps.push(
                s3Client.send(new DeleteObjectCommand({
                Bucket: process.env.S3_FRAGS_BUCKET, // 如果你有分開 Bucket，這裡改成 S3_FRAGS_BUCKET
                Key: `${fileId}.frag`,
                }))
            );

            // 執行 S3 刪除 (即使檔案不存在也不會報錯，S3 對 Delete 操作很寬容)
            await Promise.allSettled(deleteOps);
            console.log(`🗑️ [S3] 關聯檔案已刪除: ${fileId}`);
        }

        // 3. 刪除資料庫紀錄
        await prisma.model.delete({
            where: { fileId:fileId },
        });

        console.log(`🗑️ [DB] 模型紀錄已刪除: ${model.name}`);

        return { success: true };

    } catch (error) {
        console.error("Delete model failed:", error);
        return { success: false, error: "Failed to delete model" };
    }
}