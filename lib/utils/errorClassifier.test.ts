// src/lib/utils/errorClassifier.test.ts
import { describe, it, expect } from '@jest/globals';
import { isFileFormatError, isRecoverableError, classifyError } from './errorClassifier';

describe('Error Classifier Suite', () => {

    // --- 1. 測試 isFileFormatError (致命錯誤判定) ---
    describe('isFileFormatError', () => {
        it('應該正確判定 WASM 或幾何錯誤為 fatal', () => {
            expect(isFileFormatError('RuntimeError: unreachable at wasm-function')).toBe(true);
            expect(isFileFormatError('failed to create geometry for entity')).toBe(true);
            expect(isFileFormatError('invalid fragment data')).toBe(true);
        });

        it('大小寫應該要能容錯 (Case Insensitive)', () => {
            expect(isFileFormatError('MAGIC NUMBER MISMATCH')).toBe(true);
            expect(isFileFormatError('Invalid IFC file')).toBe(true);
        });

        it('白名單應優先於黑名單 (避免 OOM 被誤殺)', () => {
            // 這裡同時包含了 fatal 的 "invalid" 和 recoverable 的 "out of bounds"
            // 應該要判定為 false (非致命)，保留重試機會
            expect(isFileFormatError('memory access out of bounds, state is invalid')).toBe(false);
        });

        it('空值或未定義應回傳 false', () => {
            expect(isFileFormatError(null)).toBe(false);
            expect(isFileFormatError(undefined)).toBe(false);
            expect(isFileFormatError('')).toBe(false);
        });
    });

    // --- 2. 測試 isRecoverableError (可重試錯誤判定) ---
    describe('isRecoverableError', () => {
        it('應該正確判定 OOM 或超時為可重試', () => {
            expect(isRecoverableError('Allocation failed - process out of memory')).toBe(true);
            expect(isRecoverableError('fetch failed: etimedout')).toBe(true);
        });

        it('不應該將致命錯誤誤判為可重試', () => {
            expect(isRecoverableError('parse error on line 10')).toBe(false);
        });
    });

    // --- 3. 測試 classifyError (綜合 UI 資訊輸出) ---
    describe('classifyError', () => {
        it('應該正確輸出 致命錯誤 (Fatal) 的 UI 資訊', () => {
            const result = classifyError('schema mismatch detected');
            expect(result.category).toBe('fatal');
            expect(result.canRetry).toBe(false);
            expect(result.actionText).toBe('請刪除重傳');
        });

        it('應該正確輸出 記憶體不足 的 UI 資訊', () => {
            const result = classifyError('out of memory');
            expect(result.category).toBe('recoverable');
            expect(result.title).toBe('記憶體不足');
            expect(result.canRetry).toBe(true);
        });

        it('應該正確輸出 網路連線異常 的 UI 資訊', () => {
            const result = classifyError('network error 502');
            expect(result.category).toBe('recoverable');
            expect(result.title).toBe('網路連線異常');
            expect(result.canRetry).toBe(true);
        });

        it('對於未知錯誤應給予安全的預設值', () => {
            const result = classifyError('Something weird happened...');
            expect(result.category).toBe('unknown');
            expect(result.canRetry).toBe(true); // 未知錯誤預設允許重試一次看看
            expect(result.title).toBe('系統異常');
        });
    });
});