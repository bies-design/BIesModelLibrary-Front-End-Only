// ifcToFragsConvertWorker/processor.ts
import { parentPort, workerData } from 'worker_threads';
import * as FRAGS from "@thatopen/fragments";
import * as Minio from 'minio';
import path from 'path';
import { fileURLToPath } from 'url';
import { PrismaClient } from '../prisma/generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import os from 'os';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
    let tempFilePath = '';
    try {
        // 從主程式接收傳遞過來的資料
        const { fileKey, fileName, dbId } = workerData;

        // 初始化設定
        const adapter = new PrismaPg({ connectionString: process.env.POSTGRESDB_URI });
        const prisma = new PrismaClient({ adapter });
        const minioClient = new Minio.Client({
            endPoint: 'localhost',
            port: 9000,
            useSSL: false,
            accessKey: process.env.S3_ACCESS_KEY!,
            secretKey: process.env.S3_SECRET_KEY!
        });

        const serializer = new FRAGS.IfcImporter();
        serializer.wasm.path = "/";

        console.log(`🚀 [Thread] 子執行緒開始處理: ${fileName}`);

        // 🌟 1. 下載優化：下載到硬碟暫存區，而不是 RAM
        tempFilePath = path.join(os.tmpdir(), `${fileKey}.ifc`);
        await minioClient.fGetObject(process.env.S3_IFC_BUCKET!, fileKey, tempFilePath);

        // 🌟 2. 讀取為 Uint8Array (只在需要時加載)
        const fileBuffer = fs.readFileSync(tempFilePath);

        // 🌟 3. 轉檔
        const modelData = await serializer.process({
            bytes: new Uint8Array(fileBuffer),
            progressCallback: (progress) => {
                const totalProgress = Math.round(40 + (progress * 50));
                parentPort?.postMessage({ type: 'progress', value: totalProgress });
            }
        });

        // 4. 上傳 .frag (直接傳遞 modelData)
        const fragKey = fileKey + '.frag';
        await minioClient.putObject(process.env.S3_FRAGS_BUCKET!, fragKey, Buffer.from(modelData));

        // 4. 更新資料庫
        if (dbId) {
            await prisma.model.update({
                where: { id: dbId },
                data: { status: 'completed', size: fileBuffer.length.toString() }
            });
        }
        parentPort?.postMessage({ type: 'completed', result: { totalSize: fileBuffer.length } });

    } catch (error: any) {
        parentPort?.postMessage({ type: 'error', error: error.message || String(error) });
    } finally {
        // 🌟 6. 清理：刪除暫存檔並斷開資料庫連線
        if (tempFilePath && fs.existsSync(tempFilePath)) {
            fs.unlinkSync(tempFilePath);
        }
        // 建議在這裡關閉 Prisma 連線以防洩漏
        // await prisma.$disconnect(); 
    }
}

// 執行任務
run();