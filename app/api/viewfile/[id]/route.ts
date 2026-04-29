// src/app/api/viewfile/[id]/route.ts
import { s3Client } from "@/lib/s3";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";

//get model's binary!!!! data
export async function GET(req: NextRequest,{params}:{params:Promise<{id:string}>}) {
    let fragDownloadId = "";

    try {
        fragDownloadId = decodeURIComponent((await params).id);
        const fileRecord = await prisma.fileRecord.findFirst({
            where: {
                viewerFileId: fragDownloadId,
            },
            select: {
                id: true,
                uploaderId: true,
                teamId: true,
                post: {
                    select: {
                        id: true,
                        uploaderId: true,
                        teamId: true,
                        permission: true,
                    }
                }
            }
        });

        if (!fileRecord) {
            return new NextResponse("File not found", { status: 404 });
        }
        // 公開 post 可看，未發布/私有才檢查登入
        const isPublicPost = fileRecord.post?.permission === "standard";
        if (!isPublicPost) {
            const session = await auth();

            if (!session?.user?.id) {
                return new NextResponse("Unauthorized", { status: 401 });
            }

            const isUploader = fileRecord.uploaderId === session.user.id;
            const isPostOwner = fileRecord.post?.uploaderId === session.user.id;

            const teamId = fileRecord.post?.teamId ?? fileRecord.teamId;

            let isTeamMember = false;
            if (teamId) {
                const member = await prisma.teamMember.findFirst({
                    where: {
                        teamId,
                        userId: session.user.id,
                    },
                    select: { id: true }
                });

                isTeamMember = Boolean(member);
            }

            if (!isUploader && !isPostOwner && !isTeamMember) {
                return new NextResponse("Forbidden", { status: 403 });
            }
        }

        // 3. 從 S3 取得資料流
        const command = new GetObjectCommand({
            Bucket: process.env.S3_VIEWER_ASSETS_BUCKET,
            Key: `${fragDownloadId}`, // 你的 S3 Key 規則
        });

        const s3Response = await s3Client.send(command);

        if (!s3Response.Body) {
            return new NextResponse("File empty", { status: 404 });
        }

        // 4. 關鍵：直接回傳 Stream (瀏覽器原生的 ReadableStream)
        // 這裡我們要把 Node.js 的 Stream 轉換成 Web Stream
        // (大多數現代 Next.js 環境可以直接傳 s3Response.Body as any)
        
        // 設定標頭告訴瀏覽器這是二進制檔
        const headers = new Headers();
        headers.set("Content-Type", "application/octet-stream");
        
        return new NextResponse(s3Response.Body as BodyInit, {
        status: 200,
        headers,
        });

    } catch (error) {
        console.error("Download error:", {
            key: fragDownloadId,
            bucket: process.env.S3_VIEWER_ASSETS_BUCKET,
            error,
        });
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
