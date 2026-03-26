// server.js
import path from 'path';
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
console.log("DEBUG: S3_IFC_BUCKET =", process.env.S3_IFC_BUCKET); // 👈 檢查這行有沒有印出東西

import express from 'express';
import cors from 'cors';
import { Server, EVENTS } from '@tus/server';
import { S3Store } from '@tus/s3-store';
import axios from 'axios';
import http from 'http';
import { Server as SocketServer } from 'socket.io';
import { QueueEvents } from 'bullmq'; 
import IORedis from 'ioredis';
import {nanoid} from 'nanoid';
import { PrismaClient } from '../prisma/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
// 初始化prisma
const adapter = new PrismaPg({connectionString:process.env.POSTGRESDB_URI});
const prisma = new PrismaClient({adapter});


const app = express();
// 建立 HTTP Server (為了綁定 WebSocket)
const server = http.createServer(app);

// 設定 CORS (關鍵！否則前端會被擋)
// 這裡我們允許來自 localhost:3000 的請求
const corsOptions = {
    origin: '*', 
    methods: ['GET', 'POST', 'PATCH', 'HEAD', 'OPTIONS', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Location', 'Tus-Resumable', 'Upload-Length', 'Upload-Metadata', 'Upload-Offset', 'Upload-Protocol', 'X-HTTP-Method-Override', 'Authorization'],
    exposedHeaders: ['Tus-Resumable', 'Upload-Length', 'Upload-Metadata', 'Upload-Offset', 'Upload-Protocol', 'Location', 'Upload-Expires'],
};

app.use(cors(corsOptions));

// 讓 Express 支援 JSON 解析 (為了接收 Worker 的通知)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 初始化 Socket.io
const io = new SocketServer(server, {
    cors: {
        origin: "*", // 允許前端連線
        methods: ["GET", "POST"]
    }
});

// 監聽 Socket 連線 (Debug 用)
io.on('connection', (socket:any) => {
    console.log(`🔌 [Socket] 前端已連線: ${socket.id}`);
});

const PORT = 3003; // 我們讓這個服務跑在 3003 port
const HOST = '0.0.0.0';
const WORKER_WEBHOOK_URL = 'http://localhost:3005/webhook/convert';

// 設定 Tus 儲存方式 (存到 MinIO)
// 新版的 @tus/s3-store 中，你通常不需要手動 new S3Client() 再傳進去，
// 而是直接在 s3ClientConfig 物件中傳入 AWS 的設定參數，S3Store 內部會幫你建立 Client
const store = new S3Store({
    partSize: 5 * 1024 * 1024, // 設定每個分片 5MB (保護上傳記憶體穩定)
    s3ClientConfig:{
        bucket: process.env.S3_IFC_BUCKET!,
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT_SERVER ,
        credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY!,
            secretAccessKey: process.env.S3_SECRET_KEY!,
        },
        forcePathStyle: true, // MinIO 必須設為 true
    } 
});

// 建立 Tus Server 實例
const tusServer = new Server({
    path: '/files',
    datastore: store,
    respectForwardedHeaders: true,
});
// Redis 連線 (給 QueueEvents 用)
const redisConnection = new IORedis({
    host: 'localhost',
    port: 6379,
    maxRetriesPerRequest: null,
});
// 初始化 QueueEvents 監聽器
// 自動連上 Redis，並監聽 'ifc-conversion-queue' 的所有動靜
const queueEvents = new QueueEvents('ifc-conversion-queue', { 
    connection: redisConnection 
});
// 監聽「進度更新」事件
queueEvents.on('progress', ({ jobId, data }:{jobId:string, data:any}) => {
    // jobId: 我們剛剛強制設成了 fileKey (e.g., 'e97210...')
    // data: 就是 worker 裡回報的數字 (e.g., 45)
    
    // console.log(`📊 [Redis] Job ${jobId} 進度: ${data}%`); // Debug 用

    // 透過 Socket 廣播給前端
    io.emit('conversion-progress', {
        fileId: jobId, // 這裡就是 fileKey
        progress: data
    });
});
// 先定義 API 路由 (給 Worker 用的)
// 這樣可以確保 Tus 的 handle 不會對這個請求造成任何干擾
app.post('/notify/done', (req:any, res:any)=> {
    // Debug 用：印出收到的東西，確認 body 是否存在
    console.log("📨 [Debug] /notify/done headers:", req.headers['content-type']);
    console.log("📨 [Debug] /notify/done body:", req.body);
    // 防呆：如果 body 還是 undefined (極端情況)，手動處理或報錯
    if (!req.body) {
        console.error("❌ [Error] req.body is undefined!");
        return res.status(400).json({ error: "No body received" });
    }
    const {  fileKey, fileName, status, message, size } = req.body;
    
    console.log(`📣 [Tus] 收到 Worker 完成通知: ${fileName} (${status})`);

    // 透過 WebSocket 通知前端
    io.emit('conversion-complete', {
        fileName:fileName,
        fileId: fileKey,
        status: status, // 'success' or 'error'
        message: message,
        fragUrl: `/frags/${fileKey}.frag`,// 假設你有對應的下載路由
        ifcUrl: `/ifcfiles/${fileKey}`,
        size: size
    });

    res.json({ received: true });
});

// 監聽「上傳完成」事件
tusServer.on(EVENTS.POST_FINISH, async(req:any, res:any, upload:any) => {
    const fileId = upload.id;
    // 取得檔名 (Uppy 預設會把檔名放在 metadata.filename)
    const fileName = upload.metadata?.filename;

    const userId = upload.metadata?.userid;
    console.log("DEBUG: metadata received:", upload.metadata);

    if (fileName) {
        console.log(`✅ [Tus] 上傳成功: ${fileName}(ID: ${fileId})`);
        
        // 只有 IFC 檔案才通知 Worker
        if (fileName.toLowerCase().endsWith('.ifc')) {
            console.log(`📞 [Tus] 正在通知 Worker 處理: ${fileName}...`);
            
            try{
                const newModel = await prisma.model.create({
                    data:{
                        shortId: nanoid(10),
                        name: fileName,
                        fileId: fileId,
                        status:'processing',
                        ...(userId && {// 連結到使用者 (如果 userId 存在)
                            uploader:{
                                connect:{ id:userId }
                            }
                        })
                    }
                });
                console.log(`📝 [DB] 模型已建立: ${newModel.name} (DB_ID: ${newModel.id})`);

                axios.post(WORKER_WEBHOOK_URL, {
                    fileKey:fileId,
                    fileName:fileName,
                    dbId: newModel.id
                });
                console.log(`📨 [Tus] 通知 Worker 成功！`);
            }catch(err: any){
                if(err) console.error(`❌ [Tus] DB 寫入或通知失敗:`, err.message);
                
            }
        }
    }
});

// 掛載上傳路由
// 注意：Tus 需要處理 HEAD, PATCH, POST 等請求，所以用 app.all
// 處理 "建立上傳" (POST /files)
// 處理 "後續操作" (PATCH/HEAD/DELETE /files/xxxx)
app.all(/\/files.*/, (req: any, res: any) => {
    tusServer.handle(req, res);
});

// 啟動伺服器
server.listen(PORT, HOST, () => {
    console.log(`--------------------------------------------------`);
    console.log(`📂 Connecting to MinIO at: ${process.env.S3_ENDPOINT_SERVER}`);
    console.log(`📦 Target Bucket: ${process.env.S3_IFC_BUCKET }`);
    console.log(`🔗 Worker Webhook Target: ${WORKER_WEBHOOK_URL}`);
    console.log(`🚀 Tus Server + Socket running on http://localhost:${PORT}`);
    console.log(`--------------------------------------------------`);
});