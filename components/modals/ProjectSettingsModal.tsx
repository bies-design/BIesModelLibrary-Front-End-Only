"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Button,
    Input,
    Textarea
} from "@heroui/react";
import { addToast } from "@heroui/toast";
import { Camera, Loader2, Image as ImageIcon } from 'lucide-react';
import { getAvatarUploadUrl } from '@/lib/actions/user.action';

interface ProjectSettingsModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    // 將 id 設為可選，因為 create 時沒有 id
    projectData?: { id?: string; name: string; description: string | null; client: string | null; location: string | null; coverImage: string | null; };
    teamId: string;
    mode?: 'edit' | 'create';
    // 🌟 將 API 呼叫交給父元件處理，讓這個 Modal 變得純粹且可重用
    onSubmit: (data: any) => Promise<void>; 
}

export default function ProjectSettingsModal({ isOpen, onOpenChange, projectData, teamId, mode = 'create', onSubmit }: ProjectSettingsModalProps) {
    // 定義乾淨的初始狀態
    const defaultData = { id: '', name: '', description: '', client: '', location: '', coverImage: '' };
    
    const getSafeFormData = () => {
        if (!projectData) return defaultData;
        return {
            id: projectData.id || '',
            name: projectData.name || '',
            description: projectData.description || '',
            client: projectData.client || '',
            location: projectData.location || '',
            coverImage: projectData.coverImage || ''
        };
    };

    const [formData, setFormData] = useState(getSafeFormData);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isUploadingImage, setIsUploadingImage] = useState<boolean>(false);

    // 1. 新增兩個 State，用來記錄「準備要上傳的檔案」跟「本地預覽網址」
    const [pendingFile, setPendingFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    

    // 核心邏輯：當 Modal 打開或資料改變時，同步狀態
    useEffect(() => {
        if (isOpen) {
            setFormData(getSafeFormData());
        }
        if (!isOpen) {
            setPendingFile(null);
            if (previewUrl) URL.revokeObjectURL(previewUrl); // 釋放記憶體
            setPreviewUrl(null);
        }
    }, [isOpen, projectData]);

    const getImageUrl = (imageVal: string | null | undefined) => {
        if(!imageVal) return "";
        if(imageVal.startsWith("http")) return imageVal;
        return `${process.env.NEXT_PUBLIC_S3_ENDPOINT_SERVER}/${process.env.NEXT_PUBLIC_S3_IMAGES_BUCKET}/${imageVal}`;
    };

    const displayAvatarUrl = previewUrl || getImageUrl(formData.coverImage);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(!file) return;

        if(file.size > 5 * 1024 * 1024){
            addToast({ title: "錯誤", description: "檔案大小必須小於 5MB", color: "danger" });
            return;
        }

        setPendingFile(file);
        setPreviewUrl(URL.createObjectURL(file));

        // 清空 input 確保重複選同一張也能觸發
        if (fileInputRef.current) fileInputRef.current.value = "";
    }

    const handleSubmit = async (onClose: () => void) => {
        if (!formData.name.trim()) {
            addToast({ title: "錯誤", description: "專案名稱為必填", color: "danger" });
            return;
        }

        setIsLoading(true);

        let finalCoverImageKey = formData.coverImage;

        try {
            if (pendingFile) {
                // 獲取上傳 URL
                const urlResult = await getAvatarUploadUrl(pendingFile.name, pendingFile.type);
                if (!urlResult.success || !urlResult.signedUrl || !urlResult.imageKey) {
                    throw new Error(urlResult.error);
                }
                
                // PUT 檔案至 MinIO
                const uploadRes = await fetch(urlResult.signedUrl, {
                    method: "PUT",
                    body: pendingFile,
                    headers: { "Content-Type": pendingFile.type }
                });

                if (!uploadRes.ok) throw new Error(" Failed to upload cover image to S3");
                
                // 更新要送出的 Key
                finalCoverImageKey = urlResult.imageKey;
                addToast({ description: "Project coverImage uploaded!", color: "success" });
            }
            const payload = JSON.parse(JSON.stringify({
                ...formData,
                coverImage: finalCoverImageKey,
                teamId: teamId
            }));
            // 🌟 將資料與 teamId 往上傳，交給父元件的 onSubmit 處理
            await onSubmit(payload);

            onClose(); // 成功後關閉
        } catch (error) {
            console.error("儲存專案發生錯誤", error);
            addToast({ title: "錯誤", description: "儲存失敗，請重試", color: "danger" });
        } finally {
            setIsLoading(false);
        }
    };

    // 動態標題與按鈕文字
    const titleText = mode === 'create' ? "Create New Project" : "Edit Project";
    const buttonText = mode === 'create' ? "Create" : "Save Changes";

    return (
        <Modal 
            isOpen={isOpen} 
            onOpenChange={onOpenChange} 
            placement="center" 
            classNames={{closeButton:"p-3 text-2xl"}} 
            className="dark text-white bg-[#18181B] shadow-[inset_0px_2px_4px_rgba(255,255,255,0.4),inset_0px_-1px_2px_rgba(0,0,0,0.8),3px_3px_4px_rgba(0,0,0,0.4)]"
        >
            <ModalContent>
                {(onClose) => (
                <>
                    <ModalHeader className="flex flex-col gap-1">
                        {titleText}
                    </ModalHeader>
                    <ModalBody>
                        {/* 隱藏的檔案輸入框 */}
                        <input 
                            type="file" 
                            ref={fileInputRef} 
                            onChange={handleImageUpload} 
                            accept="image/png, image/jpeg, image/webp" 
                            className="hidden" 
                        />
                        
                        {/* 🌟 封面圖片 UI 區塊 */}
                        <div className="flex flex-col gap-2 mb-2">
                            <label className="text-sm text-white/80">Cover Image</label>
                            <div 
                                className=" relative group cursor-pointer w-full h-40 ] rounded-xl overflow-hidden flex items-center justify-center transition-colors hover:border-gray-500 bg-[#18181B] shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D]"
                                onClick={() => !isUploadingImage && fileInputRef.current?.click()}
                            >
                                {displayAvatarUrl ? (
                                    <img 
                                        src={displayAvatarUrl} 
                                        alt="Project Cover" 
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center text-gray-500">
                                        <ImageIcon size={32} className="mb-2 opacity-50" />
                                        <span className="text-sm">Click to upload cover</span>
                                    </div>
                                )}

                                {/* Hover 遮罩層 */}
                                {isUploadingImage ? (
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                        <Loader2 className="w-6 h-6 animate-spin text-white" />
                                    </div>
                                ) : (
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                        <Camera size={24} className="text-white" />
                                    </div>
                                )}
                            </div>
                        </div>

                        <Input
                            autoFocus
                            label="Project Name"
                            placeholder="輸入專案名稱 (必填)"
                            variant="flat"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            classNames={{
                                inputWrapper: [
                                    "bg-[#18181B]",
                                    "data-[hover=true]:bg-[#27272a]", 
                                    "data-[focus=true]:bg-[#27272a]",
                                    "shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D]"
                                ].join(" "),
                                input: "text-white placeholder:text-gray-500"
                            }}
                        />
                        <Input
                            label="Client (業主)"
                            placeholder="例如: 建設公司名稱"
                            variant="flat"
                            name="client"
                            value={formData.client}
                            onChange={handleChange}
                            classNames={{
                                inputWrapper: [
                                    "bg-[#18181B]",
                                    "data-[hover=true]:bg-[#27272a]", 
                                    "data-[focus=true]:bg-[#27272a]",
                                    "shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D]"
                                ].join(" "),
                                input: "text-white placeholder:text-gray-500"
                            }}                        />
                        <Input
                            label="Location (地點)"
                            placeholder="例如: 台北市信義區"
                            variant="flat"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            classNames={{
                                inputWrapper: [
                                    "bg-[#18181B]",
                                    "data-[hover=true]:bg-[#27272a]", 
                                    "data-[focus=true]:bg-[#27272a]",
                                    "shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D]"
                                ].join(" "),
                                input: "text-white placeholder:text-gray-500"
                            }}
                        />
                        <Textarea
                            label="Description"
                            placeholder="專案簡介..."
                            variant="flat"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            classNames={{
                                inputWrapper: [
                                    "bg-[#18181B]",
                                    "data-[hover=true]:bg-[#27272a]", 
                                    "data-[focus=true]:bg-[#27272a]",
                                    "shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D]"
                                ].join(" "),
                                input: "text-white placeholder:text-gray-500"
                            }}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="default" className="hover-lift shadow-[inset_0px_2px_4px_rgba(255,255,255,0.4),inset_0px_-1px_2px_rgba(0,0,0,0.8)]" variant="flat" onPress={onClose} isDisabled={isLoading}>
                            Cancel
                        </Button>
                        <Button color="primary" className="hover-lift shadow-[inset_0px_2px_4px_rgba(255,255,255,0.5),inset_0px_-1px_2px_rgba(0,0,0,0.8)]"   onPress={() => handleSubmit(onClose)} isLoading={isLoading}>
                            {buttonText}
                        </Button>
                    </ModalFooter>
                </>
                )}
            </ModalContent>
        </Modal>
    );
}