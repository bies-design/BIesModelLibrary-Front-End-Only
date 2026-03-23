import { NextRequest, NextResponse } from "next/server";
import { s3Client } from "@/lib/s3"; // 你之前設定好的 s3 client
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { nanoid } from "nanoid";

export async function POST(req:NextRequest) {
    try{
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if(!file){
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        // 1.轉為buffer
        const buffer = Buffer.from (await file.arrayBuffer());

        // 2. 生成唯一檔名 (Key)
        // const fileExtension = file.name.split('.').pop() || 'pdf';
        // const fileKey = `${nanoid()}.${fileExtension}`;

        const fileKey = nanoid();

        // 3. 上傳到 MinIO (建議為 PDF 開一個獨立的 Bucket)
        const command = new PutObjectCommand({
            // 請確保你的 .env 有設定 S3_PDFS_BUCKET，或者你可以跟 3D 模型共用一個 S3_FILES_BUCKET
            Bucket: process.env.S3_PDF_BUCKET, 
            Key: fileKey,
            Body: buffer,
            ContentType: file.type, // 確保 Content-Type 正確
        });
        
        await s3Client.send(command);

        // 4. 回傳 Key 給前端
        return NextResponse.json({ success: true, key: fileKey });
    }catch(error){
        console.error("PDF upload failed:", error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}