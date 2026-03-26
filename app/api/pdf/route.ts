import { NextRequest, NextResponse } from "next/server";
import { s3Client } from "@/lib/s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { nanoid } from "nanoid";
import prisma from "@/lib/prisma";
import { auth } from "@/auth"; // 請替換為你實際的 auth 路徑

export async function POST(req: NextRequest) {
    try {
        // 1. 權限審計 (Authorization Audit)
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        // 可選防呆：確認檔案類型
        if (file.type !== "application/pdf") {
            return NextResponse.json({ error: "Only PDF files are allowed" }, { status: 400 });
        }

        // 2. 轉換為 Buffer
        const buffer = Buffer.from(await file.arrayBuffer());
        
        // 3. 生成唯一檔名 (Key)
        const fileExtension = file.name.split('.').pop();
        const fileKey = `${nanoid()}.${fileExtension}`;

        // 4. 上傳到 MinIO (建議建立獨立的 S3_PDFS_BUCKET 或與 Models 共用)
        const command = new PutObjectCommand({
            Bucket: process.env.S3_PDFS_BUCKET, // 依據你的環境變數 (Environment Variables) 調整
            Key: fileKey,
            Body: buffer,
            ContentType: file.type,
        });

        await s3Client.send(command);

        // 5. 寫入 PostgreSQL 資料庫建立關聯紀錄
        const newPdf = await prisma.pdf.create({
            data: {
                name: file.name,
                fileId: fileKey, // 儲存 MinIO 上的 Key
                uploaderId: session.user.id, // 關聯上傳者
            }
        });

        // 6. 回傳資料庫產生的 ID，而非 MinIO Key，以供 Post 建立多對多連線 (Connect)
        return NextResponse.json({ success: true, dbId: newPdf.id });

    } catch (error) {
        console.error("PDF upload failed:", error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}