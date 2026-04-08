"use client";

import React, { useState } from 'react';
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
import { createProject } from '@/lib/actions/project.action';
import { addToast } from "@heroui/toast";
import { useSession } from 'next-auth/react';

interface CreateProjectModalProps {
    isOpen: boolean;
    onOpenChange: () => void;
    onSuccess: () => void; // 建立成功後呼叫，用來重新整理列表
    teamId: string;
}

export default function CreateProjectModal({ isOpen, onOpenChange, onSuccess, teamId }: CreateProjectModalProps) {
    const { data: session } = useSession();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        client: '',
        location: ''
    });

    // ⚠️ 這裡假設你的使用者已經綁定了一個 Team，你需要從 session 或 API 取得他目前的 teamId
    // 為了測試，我們先假設你有一個預設的 teamId，或者如果你的架構是一個 User 只有一個 Team，
    // 你可以在 Server Action 裡面直接用 session.user.id 去找對應的 Team。
    // 這裡我先留一個測試用的 ID，你必須換成你系統中真實的 teamId

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (onClose: () => void) => {
        if (!formData.name.trim()) {
            addToast({ title: "錯誤", description: "專案名稱為必填", color: "danger" });
            return;
        }

        setIsLoading(true);
        try {
        const result = await createProject({
            ...formData,
            teamId: teamId
        });

        if (result.success) {
            addToast({ title: "成功", description: "專案建立成功！", color: "success" });
            onSuccess(); // 通知父元件重新抓取資料
            onClose();   // 關閉 Modal
            setFormData({ name: '', description: '', client: '', location: '' }); // 清空表單
        } else {
            addToast({ title: "錯誤", description: result.error, color: "danger" });
        }
        } catch (error) {
        addToast({ title: "錯誤", description: "發生未知的錯誤", color: "danger" });
        } finally {
        setIsLoading(false);
        }
    };

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" className="dark text-white bg-[#18181B] border border-[#27272A]">
        <ModalContent>
            {(onClose) => (
            <>
                <ModalHeader className="flex flex-col gap-1">Create New Project</ModalHeader>
                <ModalBody>
                <Input
                    autoFocus
                    label="Project Name"
                    placeholder="輸入專案名稱 (必填)"
                    variant="bordered"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    classNames={{ inputWrapper: "bg-[#27272A] border-[#3F3F46]" }}
                />
                <Input
                    label="Client (業主)"
                    placeholder="例如: 建設公司名稱"
                    variant="bordered"
                    name="client"
                    value={formData.client}
                    onChange={handleChange}
                    classNames={{ inputWrapper: "bg-[#27272A] border-[#3F3F46]" }}
                />
                <Input
                    label="Location (地點)"
                    placeholder="例如: 台北市信義區"
                    variant="bordered"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    classNames={{ inputWrapper: "bg-[#27272A] border-[#3F3F46]" }}
                />
                <Textarea
                    label="Description"
                    placeholder="專案簡介..."
                    variant="bordered"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    classNames={{ inputWrapper: "bg-[#27272A] border-[#3F3F46]" }}
                />
                </ModalBody>
                <ModalFooter>
                <Button color="default" variant="flat" onPress={onClose} isDisabled={isLoading}>
                    Cancel
                </Button>
                <Button color="primary" onPress={() => handleSubmit(onClose)} isLoading={isLoading}>
                    Create
                </Button>
                </ModalFooter>
            </>
            )}
        </ModalContent>
        </Modal>
    );
}