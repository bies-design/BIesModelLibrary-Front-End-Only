'use client'
import React from 'react';
import { Button } from "@heroui/react";
// import StepItem from "./StepItem"; // 如果分開寫的話
import StepItem from '../StepItem';
import { useRouter } from 'next/navigation';
import { MoveRight,MoveLeft } from 'lucide-react';
import { useParams } from 'next/navigation';
interface SidebarUploadProps {
    currentStep: number;
    onNext:()=>void;
    onBack:()=>void;
}

const SidebarEdit = ({ currentStep,onNext,onBack }: SidebarUploadProps) => {
    const params = useParams();
    const postShortId = params.shortId as string;

    const router = useRouter();
    const handleCancel = () => {
        router.push(`/post/${postShortId}`);
    };
    return (
        <aside style={{backdropFilter:'blur(100px)',backgroundColor: '#A1A1AA40',}} className="w-full h-full px-5 py-8 flex flex-col shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] justify-between">
            <div className='w-full'>
                <h2 className="text-2xl font-bold text-white">Model Card Creator</h2>
                <p className="text-gray-400 text-sm mt-2">Follow the steps to create your own model card</p>
                
                <div className="mt-12 pl-2">
                    <StepItem 
                        number={1} 
                        title="Model Upload" 
                        description="Upload your files here"
                        active={currentStep === 1} 
                        completed={currentStep > 1} 
                    />
                    <StepItem 
                        number={2} 
                        title="Cover Selection" 
                        description="Select a view for your card"
                        active={currentStep === 2} 
                        completed={currentStep > 2} 
                    />
                    <StepItem 
                        number={3} 
                        title="Metadata" 
                        description="Fill in the model metadata"
                        active={currentStep === 3} 
                        completed={false}
                        isLast={true}
                    />
                </div>
            </div>
            
            {/* 底部按鈕 */}
            <div className="@container flex gap-4 mb-0 mt-5 px-4">
                <Button 
                    onPress={currentStep === 1 ? handleCancel : onBack}
                    className="font-inter text-white flex-1 bg-[#18181B] shadow-[0px_0px_2px_0px_#000000B2,inset_0px_-4px_4px_0px_#00000040,inset_0px_4px_2px_0px_#FFFFFF33]" 
                    >
                    {currentStep !== 1 && <MoveLeft size={15} className="mr-2 @max-[200px]:hidden"/>}
                    {currentStep === 1 ? "Cancel" :"Back"}
                    
                </Button>

                {/* 右側按鈕：Step 3 時執行 onCreate，其他時候執行 onNext */}
                <Button 
                    onPress={ onNext}
                    className="font-inter text-white flex-1 bg-[#D70036] shadow-[0px_0px_2px_0px_#000000B2,inset_0px_-4px_4px_0px_#00000040,inset_0px_4px_2px_0px_#FFFFFF33]"
                    >
                    {currentStep === 3 ? "Update" : "Next"}
                    {currentStep !== 3 && <MoveRight size={15} className="ml-2 @max-[200px]:hidden"/>}
                </Button>
            </div>
        </aside>

    );
    }

export default SidebarEdit;
