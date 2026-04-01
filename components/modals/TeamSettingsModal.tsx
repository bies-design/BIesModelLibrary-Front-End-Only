// components/modals/TeamSettingsModal.tsx
import React, { useState, useEffect, useRef } from 'react';
import { addToast, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Textarea, Avatar } from "@heroui/react";
import { Camera, Loader2 } from 'lucide-react';
import { getAvatarUploadUrl } from '@/lib/actions/user.action';

interface Props {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    teamData: { id: string; name: string; description: string; color: string; avatar: string };
    onUpdate: (data: any) => Promise<void>;
}

const TeamSettingsModal = ({ isOpen, onOpenChange, teamData, onUpdate }: Props) => {
    const [formData, setFormData] = useState({ ...teamData });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isUploadingAvatar, setIsUploadingAvatar] = useState<boolean>(false);

    // 當 teamData 改變時同步更新內部 state
    useEffect(() => {
        setFormData({ ...teamData });
    }, [teamData, isOpen]);

    const getImageUrl = (imageVal: string | null | undefined) => {
        if(!imageVal) return "";
        if(imageVal.startsWith("http")) return imageVal;
        return `${process.env.NEXT_PUBLIC_S3_ENDPOINT_SERVER}/${process.env.NEXT_PUBLIC_S3_IMAGES_BUCKET}/${imageVal}`;
    };

    const handleAvatarUpload = async (e:React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(!file) return;

        // avatar image can't exceed 5mb
        if(file.size > 5 * 1024 * 1024){
            alert("File size must be less than 5MB");
            return;
        }

        setIsUploadingAvatar(true);
        try{
            // get upload url and public image url
            const urlResult = await getAvatarUploadUrl(file.name, file.type);
            if(!urlResult.success || ! urlResult.signedUrl || !urlResult.imageKey){
                throw new Error(urlResult.error);
            }
            // PUT image to minio
            const uploadRes = await fetch(urlResult.signedUrl, {
                method: "PUT",
                body: file,
                headers:{"Content-Type": file.type}
            });

            if(!uploadRes.ok) throw new Error("Failed to upload image to S3");

            // 成功後，更新 Modal 內的 formData 狀態 (先存 imageKey，等按下 Save 才存入 DB)
            setFormData(prev => ({...prev, avatar:urlResult.imageKey}));
            addToast({ description: "Team icon updated!", color: "success" });
        }catch(error){
            console.error("錯誤在這",error);
            alert("Failed to update profile icon.");
        } finally {
            setIsUploadingAvatar(false);
            // 清空 input，確保使用者選同一張照片也能觸發 onChange
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    }

    const handleSave = async () => {
        setIsSubmitting(true);
        await onUpdate(formData);
        setIsSubmitting(false);
        onOpenChange(false);
    };

    return (
        <Modal 
            isOpen={isOpen} 
            onOpenChange={onOpenChange} 
            placement='center'
            classNames={{ 
                base: "bg-[#18181B] text-white", 
                closeButton:"text-2xl"
            }}
        >
            <ModalContent>
                <ModalHeader>Team Settings</ModalHeader>
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
                                src={getImageUrl(formData.avatar)} 
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
                        classNames={{ inputWrapper: "text-white rounded-xl bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] focus:border-gray-500 text-sm outline-none transition-colors" }}
                    />

                    <Textarea 
                        label="Description" 
                        value={formData.description} 
                        onValueChange={(v) => setFormData({...formData, description: v})}
                        variant="flat"
                        classNames={{ inputWrapper: "text-white rounded-xl bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] focus:border-gray-500 text-sm outline-none transition-colors" }}
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
                        onPress={handleSave}
                    >
                        Save Changes
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default TeamSettingsModal;