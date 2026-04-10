/**
 * 安全令牌驗證模組
 * 此模組負責驗證從 URL 中提取的安全令牌，確保其有效性和完整性。驗證過程包括：
 * 1. 解密令牌以提取有效載荷（過期時間、URL 後綴、特徵值）
 * 2. 驗證特徵值以確保令牌的合法性
 * 3. 驗證 URL 後綴是否與當前貼文 ID 匹配
 * 4. 驗證令牌是否過期
 * 
 * 如果驗證失敗，會返回具體的失敗原因和對應的錯誤訊息，以便前端進行適當的處理（例如顯示錯誤訊息或導向錯誤頁面）。
 * 
 * author: Mark Hsieh
 * date: 2024-06-20
 * version: 1.0.0
 */
import crypto from 'node:crypto';

/**
 * 驗證安全令牌
 * @param token - 要驗證的令牌
 * @param currentPostID - 當前的貼文 ID
 * @returns 驗證結果
 */
export async function verifyToken(token: string, currentPostID: string) {
  const algorithm = process.env.LINK_EXPIRATION_ALGORITHM || "aes-256-cbc";
  const key = Buffer.from(process.env.LINK_EXPIRATION_TOKEN_SECRET!, "hex");

  // 關鍵：IV 永遠佔據前 32 個 Hex 字元
  const ivHex = token.slice(0, 32);
  const encryptedText = token.slice(32);

  if (ivHex.length !== 32) throw new Error("Invalid IV length");

  const iv = Buffer.from(ivHex, "hex"); // 前 32 碼是 IV
  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");

  const [expiry, suffix, feature] = decrypted.split("|");

  // 0. 能解開嗎？有看到特徵嗎？
  if (feature !== process.env.LINK_EXPIRATION_FEATURE) return { valid: false, reason: "Invalid Token Feature", message: "The security signature does not match. Please contact the link provider for assistance." };

  // 1. 鏈結是相同正確的嗎？
  if (currentPostID !== suffix) return { valid: false, reason: "Invalid URL suffix", message: "Post ID mismatch. If this persists, please contact the link provider for assistance." };

  // 2. 壽命到期了嗎？
  if (Date.now() > parseInt(expiry)) return { valid: false, reason: "Token expired", message: "Link expired. Please use a new link within the valid period." };

  return { valid: true, reason: null, message: `${feature} set this link to expire at ${new Date(parseInt(expiry))}` }; // 通過驗證
}