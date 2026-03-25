"use server"

import { prisma } from "../prisma";
import { auth } from "@/auth";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { UpdateNameSchema, UpdatePasswordSchema } from "../validations";
import { PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../s3";
import { nanoid } from "nanoid";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import z, { success } from "zod";

export async function updateUserName(newName: string) {
    try{
        const session = await auth();

        if(!session?.user.id){
            return {success:false, error:"Unauthorized"};
        }

        const validatedFields = UpdateNameSchema.safeParse({username: newName});

        if(!validatedFields.success){
            return{
                success: false,
                error: validatedFields.error.issues[0].message
            };
        }

        await prisma.user.update({
            where:{id : session.user.id},
            data:{ userName: validatedFields.data.username}
        });

        revalidatePath(`/dashboard/${session.user.id}`);

        return { success: true };
    }catch (error) {
        console.error("Failed to update user name:", error);
        return { success: false, error: "Database error" };
    }
}

// 產生上傳用的簽名網址 (PUT) 前端直接透過這個url上傳檔案 檔案不經手next.js伺服器
export async function getAvatarUploadUrl(fileName: string, contentType: string) {
    const session = await auth();
    if(!session?.user.id) return { success:false, error:"Unauthorized"};
    
    const fileExtension = fileName.split('.').pop();
    const fileKey = `${nanoid()}.${fileExtension}`;
    const minioEndpoint = process.env.S3_ENDPOINT;
    try{
        const command = new PutObjectCommand({
            Bucket: process.env.S3_IMAGES_BUCKET,
            Key: fileKey,
            ContentType: contentType,
        });

        const signedUrl = await getSignedUrl(s3Client, command, {expiresIn: 120});
        const imageKey = `${fileKey}`;
        return { success: true, signedUrl, imageKey };
    }catch (err){
        console.error("Failed to generate upload URL", err);
        return { success: false, error: "Failed to generate upload URL" };
    }
}

export async function updateUserImage(newImageKey: string) {
    const session = await auth();
    if(!session?.user.id) return {sucess:false, error: "Unauthorized"};

    try{
        const currentUser = await prisma.user.findUnique({
            where: {id: session.user.id},
            select: { image: true}
        });
        
        const oldImageKey = currentUser?.image;

        await prisma.user.update({
            where: { id: session.user.id},
            data: { image: newImageKey}
        });
        // prevent deleting user image based on google provided image
        if(oldImageKey && !oldImageKey.startsWith('http')){
            try{
                const deleteCommand = new DeleteObjectCommand({
                    Bucket:process.env.S3_IMAGES_BUCKET,
                    Key:oldImageKey,
                });
                await s3Client.send(deleteCommand);
                console.log(`Successfully deleted old avatar: ${oldImageKey}`);
            }catch(deleteError){
                console.error("Failed to delete old avatar from MinIO:", deleteError);
            }
        }
        
        revalidatePath(`/dashboard/${session.user.id}`);
        return { success: true };
    }catch(err){
        console.error("Database update failed:", err);
        return { success: false, error: "Database error" };
    }
}

export async function updateUserPassword(data: z.infer<typeof UpdatePasswordSchema>) {
    try{
        const session = await auth();
        if(!session?.user.id) return {success:false, error: "Unauthorized"};

        const validatedFields = UpdatePasswordSchema.safeParse(data);
        if(!validatedFields.success) {
            return { success: false, error: validatedFields.error.issues[0].message };
        }

        const { currentPassword, newPassword } = validatedFields.data;

        const account = await prisma.account.findFirst({
            where: {
                userId: session.user.id,
                provider: "credentials"
            }
        });

        if(!account || !account.password){
            return { success: false, error:"您是使用第三方帳號登入(如 Google)登入，無須設定密碼。"};
        } 

        const passwordMatch = await bcrypt.compare(currentPassword, account.password);
        if(!passwordMatch) {
            return { success:false, error:"目前的密碼不正確", type:"current password"};
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 12);
        await prisma.account.update({
            where: { id: account.id },
            data: { password:hashedNewPassword }
        });

        return { success: true };
    }catch(error){
        console.error("Failed to update password:", error);
        return { success: false, error: "伺服器發生錯誤，請稍後再試" };
    }
}