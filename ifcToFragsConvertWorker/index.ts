// ifcToFragsConvertWorker/index.ts
import dotenv from 'dotenv';
import { fileURLToPath, pathToFileURL } from 'url';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Queue, Worker as BullWorker } from 'bullmq'; // 改名為 BullWorker 避免衝突
import { Worker as NodeWorker } from 'worker_threads'; // 引入原生的 Node 執行緒
import IORedis from 'ioredis';

// --- 路徑與環境設定 ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔥 這裡安全地轉換為 file:/// URL，完美符合 Node.js ESM 要求
const processorUrl = pathToFileURL(path.join(__dirname, 'processor.ts'));

// 讀取上一層的 .env
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const redisConnection = new IORedis({
    host: 'localhost',
    port: 6379,
    maxRetriesPerRequest: null,
});

const conversionQueue = new Queue('ifc-conversion-queue', { connection: redisConnection });

// --- 2. 初始化 Worker (手動執行緒模式) ---
const worker = new BullWorker('ifc-conversion-queue', async (job) => {
    return new Promise((resolve, reject) => {
        
        // 開啟獨立的 Node.js 執行緒來處理重度運算
        const thread = new NodeWorker(processorUrl, {
            workerData: job.data, // 把 fileKey, fileName, dbId 傳給子執行緒
            resourceLimits: {
                maxOldSpaceSizeMb: 8192, 
            }as any
        });

        // 接收子執行緒的訊息
        thread.on('message', async (msg) => {
            if (msg.type === 'progress') {
                await job.updateProgress(msg.value); // 同步進度給 Redis
            } else if (msg.type === 'completed') {
                resolve(msg.result); // 任務成功完成！
            } else if (msg.type === 'error') {
                reject(new Error(msg.error)); // 任務失敗！
            }
        });

        // 捕捉崩潰錯誤
        thread.on('error', (err) => reject(err));
        thread.on('exit', (code) => {
            if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
        });
    });
}, {
    connection: redisConnection,
    concurrency: 1,
    lockDuration: 60000,
});

// --- 3. 監聽狀態並通知 Tus Server ---
// (這部分的程式碼與你原本的完全相同，保持不變)
worker.on('completed', async (job, result) => {
    const { fileKey, fileName } = job.data;
    console.log(`✅ [Worker] 任務 ${job.id} 轉檔完成，通知 Tus Server...`);
    try {
        await fetch('http://localhost:3003/notify/done', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fileKey, fileName, status: 'success', size: result?.totalSize?.toString() || "0" })
        });
    } catch (e: any) { console.error("❌ 通知失敗:", e.message); }
});

worker.on('failed', async (job, err) => {
    if (!job) return;
    const { fileKey, fileName } = job.data;
    console.error(`❌ [Worker] 任務 ${job.id} 失敗: ${err.message}`);
    try {
        await fetch('http://localhost:3003/notify/done', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fileKey, fileName, status: 'error', message: err.message })
        });
    } catch (e: any) { console.error("❌ 通知失敗:", e.message); }
});

// --- 4. Web Server (Webhook 入口) ---
// (這部分的程式碼與你原本的完全相同，保持不變)
const app = express();
const PORT = 3005;
app.use(cors());
app.use(bodyParser.json());

app.post('/webhook/convert', async (req, res) => {
    const { fileKey, fileName, dbId } = req.body;
    if (!fileKey || !fileName) return res.status(400).send({ error: 'Missing Data' });

    try {
        await conversionQueue.add('convert-job', { fileKey, fileName, dbId }, {
            jobId: fileKey,
            removeOnComplete: { age: 3600 },
            removeOnFail: { age: 86400 }
        });
        console.log(`📨 [Webhook] 已將 ${fileName} 加入佇列`);
        res.status(200).send({ status: 'Queued' });
    } catch (err) {
        res.status(500).send({ error: 'Queue Error' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 IFC Worker Manager (Native Threads) 啟動成功! Port: ${PORT}`);
});