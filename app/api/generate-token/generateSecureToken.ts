/**
 * 生成安全令牌的 API 路由
 * 這個路由會接收當前的 Post ID，並生成一個包含過期時間、Post ID 和特徵字段的加密令牌。
 * 前端可以使用這個令牌來保護鏈接，確保只有在令牌有效期內且對應正確 Post ID 的情況下才能訪問內容。
 * 令牌結構：IV (16 bytes) + Encrypted Data (expiry|postID|feature)
 * 加密算法：AES-256-CBC (可通過環境變數配置)
 * 特徵字段：從環境變數讀取，用於驗證令牌的合法性
 * 錯誤處理：如果生成過程中出現任何錯誤，會返回一個失敗的響應，並記錄錯誤信息以供調試。
 * 
 * author: Mark Hsieh
 * date: 2024-06-20
 * version: 1.0.0
 */
"use server";
import crypto from 'node:crypto';

/**
 * 生成安全令牌
 * @param currentPostID 
 * @returns 
 */
export async function generateSecureToken(currentPostID: String) {
  try{
    // 1. 取得當前時間 + 允許時間 (UTC+0)
    const expiryTime = Date.now() + (parseInt(process.env.LINK_EXPIRATION_HOURS || '24') * 60 * 60 * 1000); 
    
    // 2. 取全部長度 (just like http://localhost/post/NatUpILxAz take NatUpILxAz) 
    const urlSuffix = currentPostID;
    
    // 3. 特徵字段 (從環境變數讀取，確保安全)
    const secretFeature = process.env.LINK_EXPIRATION_FEATURE || "APP_VER_1";
    const secretKey = process.env.LINK_EXPIRATION_TOKEN_SECRET;

    // 執行加密邏輯 (例如使用 AES-256-CBC)
    const algorithm = process.env.LINK_EXPIRATION_ALGORITHM || "aes-256-cbc";
    const iv = crypto.randomBytes(16);    // 16 bytes = 32 hex chars
    const key = Buffer.from(secretKey!, "hex"); // 會展成 32 bytes

    // 檢查：key.length 現在應該剛好是 32
    if (key.length !== 32) {
      throw new Error(`Key length is ${key.length}, but 32 is required.`);
    }
    const cipher = crypto.createCipheriv(algorithm, key, iv);

    // 資料內容: `${expiryTime}|${urlSuffix}|${secretFeature}`
    const rawData = `${expiryTime}|${urlSuffix}|${secretFeature}`;
    let encrypted = cipher.update(rawData, "utf8", "hex");
    encrypted += cipher.final("hex");
    
    // 將 IV 與加密結果合併後轉成 Hex (以便解密時讀取 IV)
    return { success: true, token: iv.toString("hex") + encrypted, error: null };
  } catch (error) {
    console.error("Error generating token:", error);
    return { success: false, token: null, error: "Failed to generate token" };
  }
}