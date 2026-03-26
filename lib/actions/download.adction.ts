"use server";

import { s3Client } from "@/lib/s3";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import prisma from "@/lib/prisma";
import { auth } from "@/auth"; // 假設你有用 auth

// 輔助函式：把 Stream 轉成 Buffer
const streamToBuffer = async (stream: any): Promise<Buffer> => {
    return new Promise((resolve, reject) => {
        const chunks: any[] = [];
        stream.on("data", (chunk: any) => chunks.push(chunk));
        stream.on("error", reject);
        stream.on("end", () => resolve(Buffer.concat(chunks)));
    });
};

// 用fileId呼叫
export async function downloadModelFrag(fileId: string) {
    try {
    
        // 3. 從 MinIO 下載
        const command = new GetObjectCommand({
        Bucket: process.env.S3_IFC_BUCKET, // 你的 Bucket 名稱
        Key: fileId,
        });

        const response = await s3Client.send(command);

        if (!response.Body) {
        throw new Error("File is empty");
        }

        // 4. 將 Stream 轉成 Buffer 並回傳
        // Server Action 只能回傳單純的資料，Buffer 會被序列化
        const buffer = await streamToBuffer(response.Body);
        // 轉換成一般 Array (Next.js Server Action 傳輸限制)
        return buffer.toJSON().data; 

    } catch (error) {
        console.error("Download failed:", error);
        return null;
    }
}