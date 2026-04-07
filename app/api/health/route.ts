// src/app/api/health/route.ts
import { NextResponse } from 'next/server';

// 強制動態渲染，確保每次檢查都是即時的，不被快取
export const dynamic = 'force-dynamic'; 

export async function GET(request: Request) {
    return NextResponse.json({
        success: true,
        message: "OK",
        timestamp: new Date().toISOString(),
        // 如果想更進階，可以在此處加入 DB 連線檢查
    }, {
        status: 200,
    });
}