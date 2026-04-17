// src/lib/utils/errorClassifier.ts
/**
 * 🚀 IFC / Fragment 轉檔錯誤分類器 v2.0
 * 統一管理 web-ifc / @thatopen/fragments 的所有可能錯誤訊息
 * 
 * 設計原則：
 * 1. 白名單優先（recoverable 先判斷，避免 OOM 被誤殺）
 * 2. 黑名單嚴格（fatal 涵蓋 STEP/Geometry/WASM/Fragment 四大類）
 * 3. 易維護（陣列管理，新錯誤詞直接加入即可）
 */

export type ErrorCategory = 'fatal' | 'recoverable' | 'unknown';

export interface ErrorInfo {
    category: ErrorCategory;
    title: string;       // 給使用者看的標題
    description: string; // 給使用者看的說明
    canRetry: boolean;   // 是否顯示重試按鈕
    actionText: string;  // CTA 按鈕文字
}

// ✅ 白名單：可重試的錯誤（系統資源、網路問題）
const RECOVERABLE_KEYWORDS = [
    "memory access out of bounds",
    "out of memory",
    "memory limit exceeded",
    "allocation failed",
    "econnreset", "etimedout",
    "fetch failed", "network error",
    "timeout", "timed out",
    "rate limit",
    "503", "504", "502",
];

// 🚫 黑名單：不可恢復的致命錯誤
const FATAL_KEYWORDS = [
    // 1. STEP / IFC 語法解析錯誤
    "parse error", "parsing failed",
    "invalid ifc", "invalid step",
    "corrupt", "magic number",
    "unexpected token", "unexpected end of",
    "expected:", "got:",
    "missing required property",
    "unknown type",
    "ifc schema not supported",
    "schema mismatch", "schema not found",

    // 2. 幾何處理失敗 (web-ifc Geometry)
    "failed to create geometry",
    "unsupported representation",
    "no indices provided",
    "invalid geometry",
    "boolean operation failed",
    "degenerate geometry",
    "non-manifold",
    "self-intersect",

    // 3. WASM 底層致命錯誤
    "unreachable",
    "wasm-function",
    "null function or function signature mismatch",
    "table index is out of bounds",
    "indirect call signature mismatch",
    "abort(","aborted",

    // 4. Fragment 轉換專屬
    "invalid fragment data",
    "fragment version mismatch",
    "no geometry in model",

    // 5. 檔案類型錯誤
    "not a valid ifc file",
    "unsupported file type",
    "wrong file extension",
];

/**
 * 判斷是否為「不可恢復」的檔案格式錯誤
 */
export const isFileFormatError = (errMsg: string | undefined | null): boolean => {
    if (!errMsg) return false;
    const msg = errMsg.toLowerCase();

    // 白名單優先：可重試的不算 fatal
    if (RECOVERABLE_KEYWORDS.some(k => msg.includes(k))) {
        return false;
    }

    return FATAL_KEYWORDS.some(keyword => msg.includes(keyword));
};

/**
 * 判斷是否為「可重試」的暫時性錯誤
 */
export const isRecoverableError = (errMsg: string | undefined | null): boolean => {
    if (!errMsg) return false;
    const msg = errMsg.toLowerCase();
    return RECOVERABLE_KEYWORDS.some(k => msg.includes(k));
};

/**
 * 取得完整錯誤分類資訊（給 UI 用）
 */
export const classifyError = (errMsg: string | undefined | null): ErrorInfo => {
    if (!errMsg) {
        return {
            category: 'unknown',
            title: '未知錯誤',
            description: '系統發生未預期的問題，請稍後再試',
            canRetry: true,
            actionText: '重試',
        };
    }

    if (isFileFormatError(errMsg)) {
        return {
            category: 'fatal',
            title: '檔案格式異常',
            description: 'IFC 模型結構或幾何資料有瑕疵，無法解析。請回到原始軟體（Revit / ArchiCAD）重新匯出檔案',
            canRetry: false,
            actionText: '請刪除重傳',
        };
    }

    if (isRecoverableError(errMsg)) {
        const msg = errMsg.toLowerCase();
        if (msg.includes("memory") || msg.includes("allocation")) {
            return {
                category: 'recoverable',
                title: '記憶體不足',
                description: '伺服器目前繁忙，請於離峰時段重試',
                canRetry: true,
                actionText: '稍後重試',
            };
        }
        return {
            category: 'recoverable',
            title: '網路連線異常',
            description: '網路不穩或伺服器暫時無回應',
            canRetry: true,
            actionText: '重新連線',
        };
    }

    return {
        category: 'unknown',
        title: '系統異常',
        description: '發生未分類的錯誤，重試或許可解決',
        canRetry: true,
        actionText: '重試轉檔',
    };
};
