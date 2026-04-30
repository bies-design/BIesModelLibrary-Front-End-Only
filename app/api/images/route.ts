import { NextRequest, NextResponse } from "next/server";
import { s3Client } from "@/lib/s3"; // 你之前設定好的 s3 client
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { nanoid } from "nanoid";
import { auth } from "@/auth";

const ALLOWED_IMAGE_TYPES = new Set([
    "image/png",
    "image/jpeg",
    "image/webp",
]);

const ALLOWED_IMAGE_EXTENSIONS = new Set([
    "png",
    "jpg",
    "jpeg",
    "webp",
]);

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB

export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        if (file.size > MAX_IMAGE_SIZE) {
            return NextResponse.json(
                { error: "File size must be less than 5MB" },
                { status: 413 }
            );
        }
        if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
            return NextResponse.json(
                { error: "Only PNG, JPG, JPEG, and WEBP images are allowed" },
                { status: 415 }
            );
        }

        const fileExtension = file.name.split(".").pop()?.toLowerCase();

        if (!fileExtension || !ALLOWED_IMAGE_EXTENSIONS.has(fileExtension)) {
            return NextResponse.json(
                { error: "Invalid image file extension" },
                { status: 415 }
            );
        }

        // 1. 轉換為 Buffer
        const buffer = Buffer.from(await file.arrayBuffer());
        
        // 2. 生成唯一檔名 (Key)
        const fileKey = `${nanoid()}.${fileExtension}`;

        // 3. 上傳到 MinIO (Images Bucket)
        const command = new PutObjectCommand({
            Bucket: process.env.S3_IMAGES_BUCKET , // 請確保 .env 有設定這個 bucket
            Key: fileKey,
            Body: buffer,
            ContentType: file.type,
        });

        await s3Client.send(command);

        // 4. 回傳 Key 給前端
        return NextResponse.json({ success: true, key: fileKey });

    } catch (error) {
        console.error("Image upload failed:", error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}