"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth"; // 你的 auth 設定
import { Metadata } from "@/components/forms/MetadataForm";
import { redirect } from "next/navigation";
import { nanoid } from "nanoid";
import { connect } from "http2";
import { FileItem } from "@/app/(uploadAndDashboard)/upload/page";

interface CreatePostParams {
    postType: '2D' | '3D';
    metadata: Metadata;
    coverImageKey: string | null;
    imageKeys: string[];
    modelIds?: string[];
    pdfIds?: string[];
}
// This is for both 3d and 2d post
export async function createPost(params: CreatePostParams) {
    const shortId = nanoid(10);
    const session = await auth();
    if (!session?.user?.id) {
        return { success: false, error: "Unauthorized" };
    }
    const { 
        postType,
        metadata, 
        coverImageKey, 
        imageKeys, 
        modelIds = [], 
        pdfIds = [] 
    } = params;
    try {
        // 寫入 PostgreSQL
        const newPost = await prisma.post.create({
        data: {
            shortId: shortId,
            title: params.metadata.title,
            category: params.metadata.category,
            description: params.metadata.description,
            type:postType,
            keywords: params.metadata.keywords,            
            coverImage: params.coverImageKey!,
            images: params.imageKeys,
            
            models:{
                connect: modelIds.map(id => ({ id }))
            },
            pdfIds:{
                connect: pdfIds.map(id => ({id}))
            },
            uploaderId: session.user.id,
            
            permission: params.metadata.permission,
            team: params.metadata.team === "none" ? null : params.metadata.team,
        },
        });

        return { success: true, postId: newPost.id };

    } catch (error) {
        console.error("Create post failed:", error);
        return { success: false, error: "Database error" };
    }
}
