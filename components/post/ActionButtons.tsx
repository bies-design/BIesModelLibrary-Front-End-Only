// components/post/ActionButtons.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { Download, Share2, FileCode, FileText, Loader2,Trash2, Edit2, ImageIcon, FileBox } from 'lucide-react';
import { 
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Button, 
    useDisclosure,
    addToast 
} from "@heroui/react";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { deletePost } from '@/lib/actions/post.action';
import { getFileDownloadUrl } from '@/lib/actions/file.action';

export default function ActionButtons({ post }: { post: any }) {
    const {data: session} = useSession();
    const router = useRouter();
    // 管理兩個不同的 Modal 狀態
    const { isOpen: isDownloadOpen, onOpen: onDownloadOpen, onOpenChange: onDownloadChange } = useDisclosure();
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onOpenChange: onDeleteChange } = useDisclosure();

    const [isGenerating, setIsGenerating] = useState<string | null>(null);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    const isOwner = session?.user.id === post.uploaderId;
    
    const isTeamEditor = post.team?.members?.some(
        (member:any) => {
            return member.userId === session?.user.id && 
            ['OWNER', 'ADMIN', 'EDITOR'].includes(member.role);
        }
    ) || false;

    const canEditPost = isOwner || isTeamEditor;

    // 取得副檔名的 Helper
    const getExt = (name: string) => name.split('.').pop()?.toLowerCase() || '';

    // 處理 Presigned URL 下載邏輯
    const handleGetDownloadUrl = async (fileId: string, fileName: string) => {
        if (!session?.user) {
            addToast({ description: "請先登入後再進行下載", color: "warning" });
            return;
        }

        try {
            setIsGenerating(fileId); // 顯示該檔案正在準備中
            
            // 呼叫統一的 Server Action
            const urlResult = await getFileDownloadUrl(fileId, fileName);

            if (!urlResult.success || !urlResult.url) {
                addToast({ description: urlResult.error || "權限不足或檔案遺失，無法下載", color: "warning" });
                return;
            }

            // 建立隱藏 <a> 標籤觸發下載
            const a = document.createElement('a');
            a.href = urlResult.url;
            a.download = fileName; 
            // 避免因為 inline disposition 而無法強制下載，加上 target blank
            a.target = "_blank"; 
            document.body.appendChild(a);
            a.click();
            a.remove();
            
            addToast({
                description: `開始下載: ${fileName}`,
                color: "success"
            });
            
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
        // 直接在函式內部抓取當前的網址，避開 React Event 參數衝突
        const textToCopy = window.location.href; 

        // 成功時的提示框抽出，讓程式碼更乾淨
        const showSuccessToast = () => {
            addToast({
                description: "Link copied to clipboard!",
                color: "success",
                timeout: 3000,
                shouldShowTimeoutProgress: true,
            });
        };

        // 檢查是否支援安全剪貼簿 API (需為 HTTPS 或 localhost)
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(textToCopy)
                .then(() => showSuccessToast())
                .catch(err => console.error('複製失敗:', err));
        } else {
            // HTTP 環境的降級備案 (傳統做法)
            const textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            // 把輸入框藏起來
            textArea.style.position = "absolute";
            textArea.style.left = "-999999px";
            document.body.prepend(textArea);
            textArea.select();
            try {
                // 執行複製指令
                document.execCommand('copy');
                showSuccessToast();
            } catch (error) {
                console.error('複製失敗:', error);
                addToast({
                    description: "Failed to copy link",
                    color: "danger",
                });
            } finally {
                textArea.remove(); // 複製完記得刪除暫存的 DOM 元素
            }
        }
    };
    const handleDeletePost = async() => {
        
        try{
            setIsDeleting(true);
            const result = await deletePost(post.id);   

            if(result.success){
                addToast({
                    description:"貼文已成功刪除!",
                    color:"success"
                });
                onDeleteChange();
                router.push('/');
            }else{
                throw new Error("刪除失敗");
            }
        }catch(e){
            addToast({
                description:"刪除貼文失敗，請稍後再試!",
                color:"danger"
            });
            console.error(e);
        }finally{
            setIsDeleting(false);
        } 
    }

    // 分類檔案資料 (利用 Memo 或直接過濾)
    const files = post.files || [];
    const models3D = files.filter((f: any) => ['ifc', 'frag', 'obj', 'gltf', '3dm'].includes(getExt(f.name)));
    const docs = files.filter((f: any) => ['pdf', 'docx', 'xlsx'].includes(getExt(f.name)));
    const images = files.filter((f: any) => ['png', 'jpg', 'jpeg', 'webp', 'dwg'].includes(getExt(f.name)));
    const others = files.filter((f: any) => !models3D.includes(f) && !docs.includes(f) && !images.includes(f));

    return (
        <div className="flex flex-col gap-3">
            <button 
                onClick={onDownloadOpen} 
                className="hover-lift w-full flex items-center justify-center gap-2 bg-[#D70036] hover:bg-[#b0002c] text-white py-3.5 rounded-xl font-medium shadow-[0px_0px_1px_0px_#000000B2,inset_0px_-4px_4px_0px_#00000040,inset_0px_4px_2px_0px_#FFFFFF33]"
            >
                <Download size={18} /> Download
            </button>
            <button onClick={handleShare} className="glass-panel hover-lift w-full flex items-center justify-center gap-2 backdrop-blur-lg hover:bg-[#3F3F4616] text-black/80 dark:text-white py-3.5 rounded-xl font-medium transition">
                <Share2 size={18} /> Share Link
            </button>
            {canEditPost && (
                <button 
                    onClick={() => router.push(`/edit/${post.shortId}`)} 
                    className="glass-panel hover-lift w-full flex items-center justify-center gap-2 backdrop-blur-lg hover:bg-blue-500/10 text-blue-500 py-3.5 rounded-xl font-medium transition"
                >
                    <Edit2 size={18} />Edit Post
                </button>
            )}
            {canEditPost && (
                <button 
                    onClick={onDeleteOpen} 
                    className="glass-panel hover-lift w-full flex items-center justify-center gap-2 backdrop-blur-lg hover:bg-red-500/10 text-red-500 py-3.5 rounded-xl font-medium transition"
                >
                    <Trash2 size={18} /> Delete Post
                </button>
            )}

            {/* 🚀 下載清單 Modal (全新分類渲染) */}
            <Modal 
                isOpen={isDownloadOpen} 
                onOpenChange={onDownloadChange} 
                backdrop="blur"
                placement="center"
                className="dark text-white"
            >
                <ModalContent className="bg-[#1C1C1F] border border-[#3F3F46] max-w-[400px]">
                    <ModalHeader className="border-b border-[#3F3F46] py-4">
                        Download Resources
                    </ModalHeader>
                    <ModalBody className="py-6 flex flex-col gap-4 max-h-[60vh] overflow-y-auto">
                        
                        {/* 如果這篇貼文完全沒有檔案 */}
                        {files.length === 0 && (
                            <p className="text-sm text-[#A1A1AA] text-center">There are no files available for download.</p>
                        )}

                        {/* 3D 區域 */}
                        {models3D.length > 0 && (
                            <div className="flex flex-col gap-2">
                                <p className="text-xs text-[#A1A1AA] uppercase tracking-wider font-bold">3D Models</p>
                                {models3D.map((model: any) => (
                                    <div key={model.id} className="flex items-center justify-between p-3 rounded-lg bg-[#27272A] border border-[#3F3F46]">
                                        <div className="flex items-center gap-3 overflow-hidden">
                                            <FileCode size={20} className="text-[#D70036] shrink-0" />
                                            <div className="overflow-hidden">
                                                <p className="text-sm truncate" title={model.name}>{model.name}</p>
                                            </div>
                                        </div>
                                        <Button 
                                            isIconOnly size="sm" variant="light" 
                                            isDisabled={isGenerating === model.fileId}
                                            onPress={() => handleGetDownloadUrl(model.fileId, model.name)}
                                        >
                                            {isGenerating === model.fileId ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* 文件 / PDF 區域 */}
                        {docs.length > 0 && (
                            <div className="flex flex-col gap-2">
                                <p className="text-xs text-[#A1A1AA] uppercase tracking-wider font-bold">Documents (PDF/Word)</p>
                                {docs.map((doc: any) => (
                                    <div key={doc.id} className="flex items-center justify-between p-3 rounded-lg bg-[#27272A] border border-[#3F3F46]">
                                        <div className="flex items-center gap-3 overflow-hidden">
                                            <FileText size={20} className="text-orange-400 shrink-0" />
                                            <p className="text-sm truncate" title={doc.name}>{doc.name}</p>
                                        </div>
                                        <Button 
                                            isIconOnly size="sm" variant="light" 
                                            isDisabled={isGenerating === doc.fileId}
                                            onPress={() => handleGetDownloadUrl(doc.fileId, doc.name)}
                                        >
                                            {isGenerating === doc.fileId ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* 圖片 / 圖紙區域 */}
                        {images.length > 0 && (
                            <div className="flex flex-col gap-2">
                                <p className="text-xs text-[#A1A1AA] uppercase tracking-wider font-bold">Images & Drawings</p>
                                {images.map((img: any) => (
                                    <div key={img.id} className="flex items-center justify-between p-3 rounded-lg bg-[#27272A] border border-[#3F3F46]">
                                        <div className="flex items-center gap-3 overflow-hidden">
                                            <ImageIcon size={20} className="text-pink-400 shrink-0" />
                                            <p className="text-sm truncate" title={img.name}>{img.name}</p>
                                        </div>
                                        <Button 
                                            isIconOnly size="sm" variant="light" 
                                            isDisabled={isGenerating === img.fileId}
                                            onPress={() => handleGetDownloadUrl(img.fileId, img.name)}
                                        >
                                            {isGenerating === img.fileId ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* 其他雜項檔案 */}
                        {others.length > 0 && (
                            <div className="flex flex-col gap-2">
                                <p className="text-xs text-[#A1A1AA] uppercase tracking-wider font-bold">Other Files</p>
                                {others.map((file: any) => (
                                    <div key={file.id} className="flex items-center justify-between p-3 rounded-lg bg-[#27272A] border border-[#3F3F46]">
                                        <div className="flex items-center gap-3 overflow-hidden">
                                            <FileBox size={20} className="text-gray-400 shrink-0" />
                                            <p className="text-sm truncate" title={file.name}>{file.name}</p>
                                        </div>
                                        <Button 
                                            isIconOnly size="sm" variant="light" 
                                            isDisabled={isGenerating === file.fileId}
                                            onPress={() => handleGetDownloadUrl(file.fileId, file.name)}
                                        >
                                            {isGenerating === file.fileId ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
            {/* 二次確認刪除 Modal */}
            <Modal 
                isOpen={isDeleteOpen} 
                onOpenChange={onDeleteChange}
                backdrop="blur"
                className="dark text-white bg-[#18181B] border border-[#27272A]"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-danger">Warning</ModalHeader>
                            <ModalBody>
                                <p className="text-gray-300">
                                    Are you sure you want to delete this post? <br/>
                                    This action cannot be undone. All associated files and data will be removed from this post.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="default" variant="light" onPress={onClose} isDisabled={isDeleting}>
                                    Cancel
                                </Button>
                                <Button color="danger" onPress={handleDeletePost} isLoading={isDeleting}>
                                    {isDeleting ? "Deleting..." : "Delete Post"}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
} 