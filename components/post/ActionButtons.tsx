// components/post/ActionButtons.tsx
"use client";
import React from 'react';
import { Download, Share2, FileCode, FileText, Loader2 } from 'lucide-react';
import { 
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    Button, 
    useDisclosure,
    addToast 
} from "@heroui/react";

export default function ActionButtons({ post }: { post: any }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isGenerating, setIsGenerating] = React.useState<string | null>(null);

    // 處理 Presigned URL 下載邏輯
    const handleGetDownloadUrl = async (fileId: string, fileName: string) => {
        try {
            setIsGenerating(fileId); // 顯示該檔案正在準備中
            
            const finalFileName = fileName.toLowerCase().endsWith('.ifc') 
            ? fileName 
            : `${fileName}.ifc`;

            // 呼叫我們剛剛寫的 API
            const res = await fetch(`/api/download/${fileId}?filename=${encodeURIComponent(finalFileName)}`);

            // 檢查是否為Unauthorized
            if (res.status === 401) {
                addToast({
                    description: "請先登入後再進行下載",
                    color: "warning" 
                });
                return; // 中斷後續邏輯
            }

            if (!res.ok) throw new Error("Failed to get URL");

            const data = await res.json();
            
            if (data.url) {
                // 建立隱藏 <a> 標籤觸發下載
                const a = document.createElement('a');
                a.href = data.url;
                a.download = fileName; // 嘗試指定下載檔名
                document.body.appendChild(a);
                a.click();
                a.remove();
                
                addToast({
                    description: `Starting download: ${fileName}`,
                    color: "success"
                });
            }
        } catch (error) {
            addToast({
                description: "下載失敗，請稍後再試。",
                color: "danger"
            });
            console.error("Download Error:", error);
        } finally {
            setIsGenerating(null);
        }
    };
    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        addToast({
            description:"Link copied to clipboard!",
            color:"success",
            timeout:3000,
            shouldShowTimeoutProgress:true,
        })
    };

    return (
        <div className="flex flex-col gap-3">
            <button 
                onClick={onOpen} 
                className="hover-lift w-full flex items-center justify-center gap-2 bg-[#D70036] hover:bg-[#b0002c] text-white py-3.5 rounded-xl font-medium shadow-[0px_0px_1px_0px_#000000B2,inset_0px_-4px_4px_0px_#00000040,inset_0px_4px_2px_0px_#FFFFFF33]"
            >
                <Download size={18} /> Download
            </button>
            <button onClick={handleShare} className="glass-panel hover-lift w-full flex items-center justify-center gap-2 backdrop-blur-lg hover:bg-[#3F3F4616] text-black/80 dark:text-white py-3.5 rounded-xl font-medium transition">
                <Share2 size={18} /> Share Link
            </button>

            {/* 下載清單 Modal */}
            <Modal 
                isOpen={isOpen} 
                onOpenChange={onOpenChange} 
                backdrop="blur"
                placement="center"
                className="dark text-white"
            >
                <ModalContent className="bg-[#1C1C1F] border border-[#3F3F46] max-w-[400px]">
                    <ModalHeader className="border-b border-[#3F3F46] py-4">
                        Download Resources
                    </ModalHeader>
                    <ModalBody className="py-6 flex flex-col gap-4">
                        {/* 3D 模型區域 */}
                        {post.models?.length > 0 && (
                            <div className="flex flex-col gap-2">
                                <p className="text-xs text-[#A1A1AA] uppercase tracking-wider font-bold">3D Models (IFC/FRAG)</p>
                                {post.models.map((model: any) => (
                                    <div key={model.id} className="flex items-center justify-between p-3 rounded-lg bg-[#27272A] border border-[#3F3F46]">
                                        <div className="flex items-center gap-3 overflow-hidden">
                                            <FileCode size={20} className="text-[#D70036] shrink-0" />
                                            <div className="overflow-hidden">
                                                <p className="text-sm truncate">{model.name}</p>
                                                <p className="text-[10px] text-[#A1A1AA]">{model.size || "Unknown Size"}</p>
                                            </div>
                                        </div>
                                        <Button 
                                            isIconOnly 
                                            size="sm" 
                                            variant="light" 
                                            isDisabled={isGenerating === model.fileId}
                                            onPress={() => handleGetDownloadUrl(model.fileId, model.name)}
                                        >
                                            {isGenerating === model.fileId ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* PDF 區域 */}
                        {post.pdfIds?.length > 0 && (
                            <div className="flex flex-col gap-2">
                                <p className="text-xs text-[#A1A1AA] uppercase tracking-wider font-bold">Drawings (PDF)</p>
                                {post.pdfIds.map((pdf: any) => (
                                    <div key={pdf.id} className="flex items-center justify-between p-3 rounded-lg bg-[#27272A] border border-[#3F3F46]">
                                        <div className="flex items-center gap-3">
                                            <FileText size={20} className="text-blue-400 shrink-0" />
                                            <p className="text-sm truncate">{pdf.name}</p>
                                        </div>
                                        <Button 
                                            isIconOnly 
                                            size="sm" 
                                            variant="light"
                                            onPress={() => handleGetDownloadUrl(pdf.fileId, pdf.name)}
                                        >
                                            <Download size={16} />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
} 