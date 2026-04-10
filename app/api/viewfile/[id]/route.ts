// src/app/api/viewfile/[id]/route.ts
import { s3Client } from "@/lib/s3";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import prisma from "@/lib/prisma";
import { auth } from "@/auth"; // 假設你有 auth
import { NextRequest, NextResponse } from "next/server";

//get model's binary!!!! data
export async function GET(req: NextRequest,{params}:{params:Promise<{id:string}>}) {

    try {
        const fragDownloadId = (await params).id;
        // 3. 從 S3 取得資料流
        const command = new GetObjectCommand({
            Bucket: process.env.S3_VIEWER_ASSETS_BUCKET,
            Key: `${fragDownloadId}`, // 你的 S3 Key 規則
        });

        const s3Response = await s3Client.send(command);

        if (!s3Response.Body) {
            return new NextResponse("File empty", { status: 404 });
        }

        // 🔥 4. 關鍵：直接回傳 Stream (瀏覽器原生的 ReadableStream)
        // 這裡我們要把 Node.js 的 Stream 轉換成 Web Stream
        // (大多數現代 Next.js 環境可以直接傳 s3Response.Body as any)
        
        // 設定標頭告訴瀏覽器這是二進制檔
        const headers = new Headers();
        headers.set("Content-Type", "application/octet-stream");
        
        // @ts-ignore: AWS SDK v3 的 Body 其實相容於 Web Response，但 TS有時候會報錯
        return new NextResponse(s3Response.Body as BodyInit, {
        status: 200,
        headers,
        });

    } catch (error) {
        console.error("Download error:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}