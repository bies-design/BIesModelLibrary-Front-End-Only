This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

# 3D/2D Model Library Frontend

本專案為 Model Library 的前端應用，使用 Next.js (App Router) 開發，並整合了 NextAuth (Auth.js v5) 進行身分驗證，以及 Three.js / PDF.js 進行模型與圖紙的渲染。

## ⚙️ 環境變數 (Environment Variables)

在本地開發或部署至正式環境前，請確保設定以下核心環境變數：

```env
# --- 系統基礎 ---
NODE_ENV="production" # 或是 development

# --- 登入驗證 (NextAuth v5) ---
# 部署至非 Vercel 環境 (如 Coolify) 時，必須強制設定為 true 以信任 Host
AUTH_TRUST_HOST="true"
# 必須精準對應當前環境的完整網址 (不包含路徑結尾的斜線)，例如 [http://model-library.100.103.58.19.sslip.io](http://model-library.100.103.58.19.sslip.io)
NEXTAUTH_URL="你的網站完整網址" 
AUTH_SECRET="你的隨機加密金鑰"

# --- 資料庫 (Prisma) ---
DATABASE_URL_REMOTE="postgresql://user:password@host:port/dbname"

# --- S3 / MinIO 儲存 ---
S3_ENDPOINT_SERVER="你的儲存體伺服器網址"

底下是給next client需要以NEXT_PUBLIC開頭才可被use client元件讀取
NEXT_PUBLIC_S3_ENDPOINT_SERVER="你的儲存體伺服器網址"
NEXT_PUBLIC_S3_IMAGES_BUCKET="你的圖片Bucket名稱"

```

#本專案目前使用 Coolify 進行容器化部署，請注意以下伺服器與建置設定：

1.Nixpacks 版本控制 (nixpacks.toml)
專案根目錄已配置 nixpacks.toml，強制鎖定 Node.js 版本（例如 Node 22 或 24），以避免 Coolify 預設環境與專案依賴產生衝突。請勿隨意刪除此檔案。

#開發與維護避坑指南 (Gotchas)
在接手或維護本專案時，請特別注意以下在不同作業系統與環境轉換時的常見問題：
1. 檔案命名與 Linux 大小寫敏感
資料夾/檔案名稱：Windows/Mac 對大小寫不敏感，但 Linux 伺服器非常嚴格。引入元件時請確保路徑大小寫完全一致（例如 Navbar 與 navbar 的差異會導致 Build 失敗）。

靜態資源 (Images/SVGs)：放在 public/ 內的圖片檔名嚴禁使用空白或特殊符號（如逗號）。請一律使用小寫中線命名（Kebab-case，例如 connect-more.svg），否則在正式環境會發生 404 找不到圖片的錯誤。

2. PDF.js Web Worker 版本衝突
本專案依賴 @react-pdf-viewer，其底層 API 版本必須與 Web Worker 版本完全一致。

在 package.json 中，pdfjs-dist 的版本號已被鎖死（移除 ^ 符號）。請勿隨意更新此套件，以免引發 The API version does not match the Worker version 錯誤導致白畫面。

3. 剪貼簿 API 與 HTTPS 安全限制
「複製分享連結」功能使用了 navigator.clipboard.writeText API，該 API 僅在 HTTPS 或 localhost 環境下生效。

目前已實作降級備案（Fallback to document.execCommand）以支援 HTTP 開發環境。若正式上線，建議配置 SSL 憑證 (HTTPS)。

4. 測試環境連線 (Tailscale)
開發與測試網址若使用內部 IP（如 100.x.x.x），請確認當前設備（含手機端測試）皆已連入公司的 Tailscale VPN，否則會出現 ERR_CONNECTION_TIMED_OUT。