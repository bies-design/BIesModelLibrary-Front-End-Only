// app/api/download/[fileId]/route.ts
import { s3Client } from "@/lib/s3";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: Promise<{ fileId: string }> }) {
    try {
        // 1. 驗證登入狀態
        const session = await auth();
        if (!session) return new NextResponse("Unauthorized", { status: 401 });

        const { fileId } = await params;

        const { searchParams } = new URL(req.url);
        let fileName = searchParams.get("filename") || "file.ifc";
        let fileType = searchParams.get("type") || "ifc";

        // 2. 權限檢查：從資料庫查詢此檔案所屬的 Post
        // 這裡需要根據你的 Schema 同時檢查 Model (3D) 或 PDF (2D)
        const post = await prisma.post.findFirst({
            where: {
                OR: [
                    { files: { some: { fileId: fileId}}}
                ]
            },
            include: {
                team: {
                    include: { members: true }
                }
            }
        });

        // 如果找不到該檔案對應的 Post，通常代表非法請求或檔案不存在
        if(!post) {
            return NextResponse.json({ error: "Resource not found" }, { status: 404 });
        }

        // 條件 A: 使用者是貼文的擁有者 (uploaderId)
        const isOwner = post.uploaderId === session.user.id;

        // 條件 B: 使用者是該團隊具備權限的成員
        let hasTeamPermission = false;
        if(post.teamId && post.teamId !== "none") {
            const userMember = post.team?.members.find(m => m.userId === session.user.id);

            const allowedRoles = ['OWNER', 'ADMIN', 'EDITOR'];
            if (userMember && allowedRoles.includes(userMember.role)) {
                hasTeamPermission = true;
            }
        }

        const canDownload = isOwner || hasTeamPermission;

        if(!canDownload) {
            return NextResponse.json({ 
                error: "Forbidden: You don't have permission to download this resource." 
            }, { status: 403 });
        }

        // 這裡要決定下載哪個 Bucket。
        // const targetBucket = fileType === "pdf" 
        //     ? process.env.S3_PDF_BUCKET // 確保你的 .env 裡面有這個
        //     : process.env.S3_IFC_BUCKET;

        const targetBucket = process.env.S3_UPLOADASSETS_BUCKET;
        
            // 防呆機制：如果 .env 忘記設定 Bucket，提早噴錯
        if (!targetBucket) {
            console.error(`Bucket configuration missing for type: ${fileType}`);
            return new NextResponse("Server Storage Configuration Error", { status: 500 });
        }
        
        // 你可以根據邏輯判斷是 IFC (S3_UPLOAD_BUCKET) 還是 PDF。
        const command = new GetObjectCommand({
            Bucket: targetBucket, 
            Key: fileId, 
            ResponseContentDisposition: `attachment; filename="${encodeURIComponent(fileName)}"`,
        });

        // 產生一個 1 小時效期的預簽署網址
        const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

        return NextResponse.json({ url: signedUrl });
    } catch (error) {
        return new NextResponse("Error generating download link", { status: 500 });
    }
}