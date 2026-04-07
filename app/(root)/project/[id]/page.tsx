// app/project/[id]/page.tsx
import { notFound } from 'next/navigation';
// 這裡替換成你實際抓取 Project 的 API 或 Server Action
// import { getProjectWithNodes } from '@/lib/actions/project.action'; 
import ProjectEditor from './ProjectEditor';

export default async function ProjectManagePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params; // Next.js 15 的標準寫法，params 是一個 Promise

    // 1. 從資料庫抓取專案與其節點結構
    // const project = await getProjectWithNodes(id);
    
    // 假資料示意
    const project = {
        id: id,
        name: "台北 101 大樓新建工程",
        nodes: [] // 這裡會是 Prisma 撈出來的節點陣列
    };

    if (!project) {
        notFound(); // 找不到專案直接噴 404 頁面
    }

    return (
        <div className="min-h-screen bg-[#18181B] text-white p-4 flex flex-col">
            {/* 頂部標題列 */}
            <header className="mb-4 pb-4 border-b border-[#3F3F46] flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold font-inter">{project.name}</h1>
                    <p className="text-[#A1A1AA] text-sm">Project WBS & Model Management</p>
                </div>
            </header>

            {/* 主要互動區域交給 Client Component */}
            <ProjectEditor initialProject={project} />
        </div>
    );
}