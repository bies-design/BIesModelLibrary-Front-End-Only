// components/modals/TeamSettingsModal.tsx
import React, { useState, useEffect, useRef } from 'react';
import { addToast, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Textarea, Avatar } from "@heroui/react";
import { Camera, Loader2 } from 'lucide-react';
import { getAvatarUploadUrl } from '@/lib/actions/user.action';

interface Props {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    teamData?: { id: string; name: string; description: string; color: string; avatar: string };
    onSubmit: (data: any) => Promise<void>; 
    mode?: 'edit' | 'create';
}

const TeamSettingsModal = ({ isOpen, onOpenChange, teamData, onSubmit, mode = 'edit' }: Props) => {
    // create 模式，給予一個預設的乾淨狀態
    const defaultData = { id: "", name: "", description: "", color: "", avatar: "" };
    
    const [formData, setFormData] = useState(teamData || defaultData);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isUploadingAvatar, setIsUploadingAvatar] = useState<boolean>(false);

    // 1. 新增兩個 State，用來記錄「準備要上傳的檔案」跟「本地預覽網址」
    const [pendingFile, setPendingFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    // 當 teamData 改變時同步更新內部 state
    useEffect(() => {
        if (isOpen) {
            // 每次打開時，如果是編輯模式就帶入資料，如果是建立模式就給乾淨的預設值
            setFormData(teamData || defaultData);
        }
        if (!isOpen) {
            setPendingFile(null);
            if (previewUrl) URL.revokeObjectURL(previewUrl); // 釋放記憶體
            setPreviewUrl(null);
        }
    }, [teamData, isOpen]);

    const getImageUrl = (imageVal: string | null | undefined) => {
        if(!imageVal) return "";
        if(imageVal.startsWith("http")) return imageVal;
        return `${process.env.NEXT_PUBLIC_S3_ENDPOINT_SERVER}/${process.env.NEXT_PUBLIC_S3_IMAGES_BUCKET}/${imageVal}`;
    };

    // 2. 獲取圖片 URL 的邏輯稍微調整：優先顯示本地預覽圖
    const displayAvatarUrl = previewUrl || getImageUrl(formData.avatar);
    // 3. 處理選擇圖片 (不再打 API，只產生預覽)
    const handleAvatarUpload = async (e:React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(!file) return;

        // avatar image can't exceed 5mb
        if(file.size > 5 * 1024 * 1024){
            alert("File size must be less than 5MB");
            return;
        }

        // 記錄檔案，並產生本地預覽網址
        setPendingFile(file);
        setPreviewUrl(URL.createObjectURL(file));

        // 清空 input 確保重複選同一張也能觸發
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleSave = async () => {
        
        if (!formData.name.trim()) {
            addToast({ description: "Team name is required.", color: "warning" });
            return;
        }

        setIsSubmitting(true);
        let finalAvatarKey = formData.avatar;

        try {
            // 如果有新選的圖片，就在這裡執行上傳
            if (pendingFile) {
                const urlResult = await getAvatarUploadUrl(pendingFile.name, pendingFile.type, pendingFile.size);
                if (!urlResult.success || !urlResult.signedUrl || !urlResult.imageKey) {
                    throw new Error(urlResult.error);
                }
                
                const uploadRes = await fetch(urlResult.signedUrl, {
                    method: "PUT",
                    body: pendingFile,
                    headers: { "Content-Type": pendingFile.type }
                });

                if (!uploadRes.ok) throw new Error("Failed to upload image to S3");
                
                finalAvatarKey = urlResult.imageKey; // 更新為新的 S3 Key
                addToast({ description: "Team icon uploaded!", color: "success" });
            }

            // 把最終的 avatar key 塞進資料裡往上送
            await onSubmit({ ...formData, avatar: finalAvatarKey });
            
            onOpenChange(false);
        } catch (error) {
            console.error("Save error", error);
            addToast({ description: "Failed to save changes.", color: "danger" });
        } finally {
            setIsSubmitting(false);
        }
    };

    const titleText = mode === 'create' ? "Create New Team" : "Team Settings";
    const buttonText = mode === 'create' ? "Create Team" : "Save Changes";

    return (
        <Modal 
            isOpen={isOpen} 
            onOpenChange={onOpenChange} 
            placement='center'
            classNames={{ 
                wrapper: "z-999",
                backdrop:"z-998",
                closeButton:"p-3 text-2xl"
            }}
            className="dark text-white bg-[#18181B] shadow-[inset_0px_2px_4px_rgba(255,255,255,0.4),inset_0px_-1px_2px_rgba(0,0,0,0.8),3px_3px_4px_rgba(0,0,0,0.4)]"
        >
            <ModalContent>
                <ModalHeader>{titleText}</ModalHeader>
                <ModalBody className="space-y-4">
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleAvatarUpload} 
                        accept="image/png, image/jpeg, image/webp" 
                        className="hidden" 
                    />
                    <div className="flex flex-col items-center gap-2 mb-4">
                        <div 
                            className="relative group cursor-pointer"
                            onClick={() => !isUploadingAvatar && fileInputRef.current?.click()}
                        >
                            <Avatar 
                                src={displayAvatarUrl} 
                                name={formData.name}
                                className="w-24 h-24 text-large" 
                                showFallback 
                            />
                            {isUploadingAvatar ? (
                                <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center">
                                    <Loader2 className="w-6 h-6 animate-spin text-white" />
                                </div>
                            ) : (
                                <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                    <Camera size={20} />
                                </div>
                            )}
                        </div>
                        <p className="text-xs text-gray-500">Click to change avatar</p>
                    </div>

                    <Input 
                        label="Team Name" 
                        value={formData.name} 
                        onValueChange={(v) => setFormData({...formData, name: v})}
                        variant="flat"
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
                        value={formData.description} 
                        onValueChange={(v) => setFormData({...formData, description: v})}
                        variant="flat"
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

                    <div className="space-y-2">
                        <label className="text-sm pl-1">Team Color</label>
                        <div className="flex gap-3 px-1">
                            {['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'].map(c => (
                                <button 
                                    key={c}
                                    onClick={() => setFormData({...formData, color: c})}
                                    className={`w-8 h-8 rounded-full border-2 ${formData.color === c ? 'border-white' : 'border-transparent'}`}
                                    style={{ backgroundColor: c }}
                                />
                            ))}

                            {/* 2. 🚀 新增：自訂調色盤按鈕 */}
                            <div 
                                className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border-2 transition-transform hover:scale-110 cursor-pointer"
                                style={{
                                    // 用彩虹漸層背景暗示這裡可以選更多顏色
                                    background: 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)',
                                    // 如果當前顏色不在預設陣列裡，代表是用戶自訂的，給它一個白框標示
                                    borderColor: !['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'].includes(formData.color) ? 'white' : 'transparent'
                                }}
                            >
                                {/* 隱藏原生 input 的醜外觀，但保留點擊功能 */}
                                <input 
                                    type="color" 
                                    value={formData.color}
                                    onChange={(e) => setFormData({...formData, color: e.target.value})}
                                    className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                                    title="選擇自訂顏色"
                                />
                            </div>

                            {/* (可選) 顯示當前選中的色碼，讓使用者知道自己選了什麼 */}
                            <span className="text-xs text-slate-400 font-mono ml-2 uppercase">
                                {formData.color}
                            </span>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button 
                        className='hover-lift text-white shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_4px_2px_#FFFFFF33]'
                        onPress={() => onOpenChange(false)}
                    >
                        Cancel
                    </Button>
                    <Button 
                        className="hover-lift px-4 py-2 bg-[#e11d48] text-white rounded-xl shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_4px_2px_#FFFFFF33] hover:bg-[#be123c] text-sm font-medium transition-colors" 
                        isLoading={isSubmitting} 
                        isDisabled={formData.name.trim() === ""}
                        onPress={handleSave}
                    >
                        {buttonText}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default TeamSettingsModal;
