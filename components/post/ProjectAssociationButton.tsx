"use client";

import React from 'react';
import { LayoutDashboard, Milestone, ChevronRight, ExternalLink, FolderKanban } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { 
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    useDisclosure, 
    Button 
} from '@heroui/react';

interface AssociationProps {
    team: { id: string; name: string; color?: string | null } | null;
    associations: any[];
}

export default function ProjectAssociationButton({ team, associations }: AssociationProps) {
    const router = useRouter();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    if (!associations || associations.length === 0) return null;

    return (
        <div className="flex flex-col gap-2 mt-2">
            <p className="bg-linear-to-b from-white to-[#A1A1AA] bg-clip-text text-transparent mb-2">Project Origins</p>
        
            {/* 單一入口按鈕：顯示關聯數量，點擊展開 Modal */}
            <Button 
                onPress={onOpen}
                className="hover-lift w-full flex justify-between items-center bg-[#27272A] hover:bg-[#27272A] text-white h-auto px-4 py-3.5 rounded-xl shadow-[0px_0px_1px_0px_#000000B2,inset_0px_-4px_4px_0px_#00000040,inset_0px_4px_2px_0px_#FFFFFF33]"
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#3F3F46] rounded-lg shadow-[inset_0px_-1px_4px_rgba(255,255,255,0.2),inset_0px_2px_5px_rgba(0,0,0,0.9)]">
                        <FolderKanban size={18} className="text-[#8DB2E8]" />
                    </div>
                    <span className="font-medium text-base tracking-wide">View Associated Projects</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                    <span className="bg-[#18181B] px-2.5 py-1 shadow-[inset_0px_-1px_4px_rgba(255,255,255,0.2),inset_0px_2px_5px_rgba(0,0,0,1)] rounded-md text-xs font-bold border border-white/5">
                        {associations.length}
                    </span>
                    <ChevronRight size={18} />
                </div>
            </Button>

            {/* 彈出的專案卡片 Modal (維持剛剛設計的質感) */}
            <Modal 
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                placement="center"
                backdrop="blur"
                classNames={{
                    base: "dark bg-[#18181B] text-white shadow-[inset_0px_2px_4px_rgba(255,255,255,0.4),inset_0px_-1px_2px_rgba(0,0,0,0.8),3px_3px_4px_rgba(0,0,0,0.4)]",
                    closeButton:"p-3 text-2xl"
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 pt-6 px-6">
                                <h2 className="text-xl font-bold bg-linear-to-b from-white to-[#d1d1da] bg-clip-text text-transparent">
                                    Associated Projects
                                </h2>
                                <p className="text-sm text-zinc-400 font-normal">
                                    View the project cards where this model is utilized.
                                </p>
                            </ModalHeader>
                            
                            <ModalBody className="pb-6 px-6 max-h-[60vh] overflow-y-auto hide-scrollbar">
                                <div className="flex flex-col gap-4">
                                    {associations.map((asset, idx) => (
                                        <div 
                                            key={idx} 
                                            className="bg-[#27272A] rounded-xl p-5 shadow-[inset_0px_2px_4px_rgba(255,255,255,0.4),inset_0px_-1px_2px_rgba(0,0,0,0.8),3px_3px_4px_rgba(0,0,0,0.4)] relative overflow-hidden"
                                        >
                                            {/* 卡片標題區 */}
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="p-3 bg-[#3F3F46] shadow-[inset_0px_-1px_4px_rgba(255,255,255,0.2),inset_0px_2px_5px_rgba(0,0,0,1)] rounded-xl">
                                                    <FolderKanban size={24} className="text-[#8DB2E8]" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <h3 className="font-bold text-lg text-white leading-tight">
                                                        {asset.project.name}
                                                    </h3>
                                                    <div className="flex items-center gap-1.5 mt-1 text-md text-zinc-400">
                                                        <div 
                                                            className="w-2 h-2 rounded-full" 
                                                            style={{ backgroundColor: team?.color || '#52525B' }} 
                                                        />
                                                        <span>Team: {team?.name || 'Personal'}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* 階段標籤 */}
                                            <div className="flex items-center gap-3 bg-[#18181B]/50 p-3 rounded-lg shadow-[inset_0px_-2px_4px_rgba(255,255,255,0.25),inset_0px_3px_5px_rgba(0,0,0,0.8)] mb-5">
                                                <Milestone size={18} className="text-orange-400" />
                                                <span className="text-sm text-zinc-400">Current Phase</span>
                                                <span className="text-sm text-white font-medium ml-auto">
                                                    {asset.phase?.name || 'Unclassified'}
                                                </span>
                                            </div>

                                            {/* 前往專案的按鈕 */}
                                            <Button 
                                                className="w-full hover-lift bg-[#3F3F46] text-white hover:bg-[#8DB2E8] shadow-[0px_0px_1px_0px_#000000B2,inset_0px_-4px_4px_0px_#00000040,inset_0px_4px_2px_0px_#FFFFFF33] hover:text-black transition-colors font-medium"
                                                endContent={<ExternalLink size={16} />}
                                                onPress={() => {
                                                    onClose();
                                                    router.push(`/project/${asset.project.id}`);
                                                }}
                                            >
                                                Go to Project Board
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}