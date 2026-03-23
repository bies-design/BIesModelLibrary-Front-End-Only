import { GetObjectCommand} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client } from "../s3";

export const getPresignedImageUrl = async (
    bucketName: string, 
    objectKey: string, 
    expiresIn: number = 3600
) => {
    try {
        // 1. 建立一個「取得物件」的指令
        const command = new GetObjectCommand({
            Bucket: bucketName,
            Key: objectKey,
        });

        // 2. 使用 getSignedUrl 產生帶有簽名的網址
        const url = await getSignedUrl(s3Client, command, { expiresIn });
        return url;
    } catch (error) {
        console.error("產生 Presigned URL 失敗:", error);
        throw new Error("Could not generate presigned URL");
    }
};