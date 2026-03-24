// app/api/download/[fileId]/route.ts
import { s3Client } from "@/lib/s3";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ fileId: string }> }) {
    try {
        const session = await auth();
        if (!session) return new NextResponse("Unauthorized", { status: 401 });

        const { fileId } = await params;

        const { searchParams } = new URL(req.url);
        let fileName = searchParams.get("filename") || "file.ifc";
        let fileType = searchParams.get("type") || "ifc";

        // 這裡要決定下載哪個 Bucket。
        const targetBucket = fileType === "pdf" 
            ? process.env.S3_PDF_BUCKET // 確保你的 .env 裡面有這個
            : process.env.S3_IFC_BUCKET;
        
            // 防呆機制：如果 .env 忘記設定 Bucket，提早噴錯
        if (!targetBucket) {
            console.error(`Bucket configuration missing for type: ${fileType}`);
            return new NextResponse("Server Storage Configuration Error", { status: 500 });
        }
        
        // 你可以根據邏輯判斷是 IFC (S3_UPLOAD_BUCKET) 還是 PDF。
        const command = new GetObjectCommand({
            Bucket: targetBucket, // 存放原始 IFC 的 Bucket
            Key: fileId, // 原始檔案 ID
            ResponseContentDisposition: `attachment; filename="${encodeURIComponent(fileName)}"`,
        });

        // 產生一個 1 小時效期的預簽署網址
        const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

        return NextResponse.json({ url: signedUrl });
    } catch (error) {
        return new NextResponse("Error generating download link", { status: 500 });
    }
}