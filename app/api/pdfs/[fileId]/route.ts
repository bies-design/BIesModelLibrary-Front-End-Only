// app/api/pdfs/[fileId]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "@/lib/s3"; // 請替換成你實際的 s3Client 路徑

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ fileId: string }> }
) {
    const { fileId } = await params;

    try {
        const command = new GetObjectCommand({
            Bucket: process.env.S3_PDF_BUCKET, // 這裡請換成你實際放 PDF 的 Bucket 名稱
            Key: fileId,
        });

        const response = await s3Client.send(command);
        
        // 將 S3 回傳的 stream 轉成 Uint8Array
        const byteArray = await response.Body?.transformToByteArray();

        if (!byteArray) {
            throw new Error("File is empty");
        }
        const buffer = Buffer.from(byteArray);
        return new NextResponse(buffer, {
            headers: {
                "Content-Type": "application/pdf",
                // 設定 inline 可以讓前端正常讀取
                "Content-Disposition": `inline; filename="${fileId}.pdf"`,
            },
        });
    } catch (error) {
        console.error("Fetch PDF Error:", error);
        return NextResponse.json({ error: "File not found" }, { status: 404 });
    }
}