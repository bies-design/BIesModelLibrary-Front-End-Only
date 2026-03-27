'use client'
import React, { useState, useRef, useCallback, useEffect } from 'react';
import SidebarUpload from '@/components/sidebar/SidebarUpload';
import SidebarBlobs from '@/components/blobs/SidebarBlobs';
import Viewer3D, { Viewer3DRef } from '@/components/viewer/Viewer3D';
import PDFViewer from '@/components/viewer/PDFViewer';
import { PDFViewerRef } from '@/components/viewer/PDFViewerInternal';
import ModelUploadSidebar from '@/components/sidebar/ModelUploadSidebar';
import MetadataForm, { Metadata, ImageFile } from '@/components/forms/MetadataForm';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Loader2,Menu,X } from 'lucide-react';
import { Model,UIModel } from '@/types/upload';
import { createPdfRecord } from '@/lib/actions/pdf.action';
import { createPost } from '@/lib/actions/post.action';
import { SelectedPost } from '@/components/modals/RelatedPostModal';
// 定義檔案項目介面
export interface FileItem {
    dbId: string;
    file: File;
    type: '3d' | 'pdf';
    name: string;
    fileid?:string;
}

const Upload = () => {
    const [isMobileStepNavOpen, setIsMobileStepNavOpen] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [step, setStep] = useState<number>(1);
    const [postType, setPostType] = useState<'2D' | '3D'>('3D');
    const [uploadedFiles, setUploadedFiles] = useState<FileItem[]>([]);
    const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
    const [loadedFiles, setLoadedFiles] = useState<FileItem[]>([]);
    const [coverImage, setCoverImage] = useState<string | null>(null);
    const [IFCProcessingStatus, setIFCProcessingStatus] = useState<{
        isIFCProcessing: boolean;
        fileName: string | null;
        progress?:number;
    }>({ isIFCProcessing: false, fileName: null, progress: undefined });
    const [additionalImages, setAdditionalImages] = useState<ImageFile[]>([]);
    // MetadataForm的狀態由父層存取 方便提交跟狀態管理
    const [metadata, setMetadata] = useState<Metadata>({
        title: "",
        category: "",
        keywords: [],
        description: "",
        permission: "standard",
        team: "",
        relatedPosts: []
    });

    const viewerRef = useRef<Viewer3DRef>(null);
    const pdfRef = useRef<PDFViewerRef>(null);

    const router = useRouter();
    //for breaking infinite rendering in viewer3D syncModels
    const handleIFCProcessingChange = useCallback((isIFCProcessing:boolean,fileName: string | null, progress?:number) => {
        setIFCProcessingStatus({isIFCProcessing,fileName,progress});
    }, []);
    // 將 Blob URL 轉回 File 物件並上傳
    const uploadImageToMinIO = async (blobUrl: string, filename: string = "image.png") => {
        try {
            // 1. fetch Blob URL 拿到 blob 資料
            const response = await fetch(blobUrl);
            const blob = await response.blob();
            
            // 2. 建立 File 物件
            const file = new File([blob], filename, { type: blob.type });

            // 3. 透過 FormData 上傳到 API Route
            const formData = new FormData();
            formData.append("file", file);

            const uploadRes = await fetch("/api/images", {
                method: "POST",
                body: formData,
            });

            if (!uploadRes.ok) throw new Error("Image upload failed");
            
            const data = await uploadRes.json();
            return data.key as string; // 回傳 MinIO Key

        } catch (error) {
            console.error("Upload helper error:", error);
            return null;
        }
    };
    // 處理下一步按鈕
    const handleNextButton = async () => {
        if (step === 2) {
            let screenshotUrl: string | null = null;
            
            if (selectedFile?.type === 'pdf' && pdfRef.current) {
                // 如果 PDFViewer 也是回傳 Base64，建議之後也可以改成 Blob
                screenshotUrl = await pdfRef.current.takeScreenshot();
            } else if (viewerRef.current) {
                screenshotUrl = await viewerRef.current.takeScreenshot();
            }

            if (screenshotUrl) {
                // 這裡拿到的 screenshotUrl 現在是 "blob:http://localhost:3000/..."
                // 短小精幹，不會塞爆記憶體
                setCoverImage(screenshotUrl);
                console.log("封面擷取成功！(Blob URL)");
            }
        }
        if (step === 3) {
            // 最後一步點擊 Create
            handleCreate();
            return;
        }
        setStep((next) => Math.min(next + 1, 3));
    };

    // 處理最終建立邏輯
    const handleCreate = async () => {
        console.log("正在建立模型卡片...", {
            files: uploadedFiles,
            cover: coverImage,
            additionalImages: additionalImages,
            metadata: metadata 
        });

        // --- 0. 防呆驗證 ---
        if(postType === '3D' && loadedFiles.length === 0) {
            alert("請載入至少一個模型!");
            return;
        }
        if(postType === '2D' && uploadedFiles.length === 0) {
            alert("請至少載入一個PDF!");
            return;
        }

        setIsSubmitting(true);

        try {
            let dbPdfIds: string[] = [];
            let dbModelIds: string[] = [];

            // --- 1. 優先處理核心檔案 (PDF 或 Models) ---
            console.log("1. 處理核心檔案...");
            
            if (postType === '3D') {
                // 3D 模型已經在前面步驟上傳並建檔完畢，這裡只要整理 ID 即可
                dbModelIds = loadedFiles.map(file => file.dbId);
                
            } else if (postType === '2D') {
                // 2D 必須先確保 PDF 都能成功上傳，否則直接中斷，不浪費時間傳圖片
                for(const file of uploadedFiles){
                    try {
                        const formData = new FormData();
                        formData.append("file", file.file);

                        const uploadRes = await fetch("/api/pdfs", { method: "POST", body: formData });
                        if (!uploadRes.ok) throw new Error(`PDF ${file.name} 上傳 MinIO 失敗`);

                        const uploadData = await uploadRes.json();
                        const minioFileId = uploadData.key;
                        
                        const dbRecord = await createPdfRecord({
                            name: file.name,
                            fileId: minioFileId,
                        });

                        if (!dbRecord.success || !dbRecord.id) {
                            throw new Error(`PDF ${file.name} 寫入資料庫失敗: ${dbRecord.error}`);
                        }

                        dbPdfIds.push(dbRecord.id);
                        console.log(`✅ ${file.name} 上傳並建檔成功，DB_ID: ${dbRecord.id}`);
                    } catch (error) {
                        console.error(error);
                        throw new Error(`處理 PDF 檔案 ${file.name} 時發生錯誤，中止發布`);
                    }
                }

                if (dbPdfIds.length === 0) {
                    throw new Error("沒有成功上傳任何 PDF 檔案");
                }
            }

            // --- 2. 核心檔案安全過關後，才開始上傳圖片 ---
            console.log("2. 核心檔案過關，開始上傳圖片...");
            let coverKey: string | null = null;
            if (coverImage) {
                coverKey = await uploadImageToMinIO(coverImage, "cover.png");
            }

            const imageKeys: string[] = [];
            if (additionalImages.length > 0) {
                const uploadPromises = additionalImages.map(img => 
                    uploadFileDirectly(img.file) 
                );
                const results = await Promise.all(uploadPromises);
                results.forEach(key => {
                    if (key) imageKeys.push(key);
                });
            }

            // --- 3. 所有檔案都就緒，統一呼叫 Server Action 寫入 Post 資料庫 ---
            console.log("3. 所有檔案就緒，準備寫入資料庫 Post...");
            const result = await createPost({
                postType: postType,
                metadata: metadata,
                coverImageKey: coverKey,
                imageKeys: imageKeys,
                modelIds: dbModelIds, // 3D 的陣列 (2D 時為空)
                pdfIds: dbPdfIds,     // 2D 的陣列 (3D 時為空)
            });

            if (result.success) {
                console.log("✅ 建立成功！");
                router.push('/?status=success');
            } else {
                throw new Error(result.error);
            }

        } catch (error) {
            console.error("建立失敗:", error);
            // 讓使用者知道具體死在哪一步
            alert(error instanceof Error ? error.message : "建立失敗，請稍後再試");
        } finally {
            setIsSubmitting(false); // 記得加上 finally 來確保按鈕解鎖
        }
    };

    // 直接上傳 File 物件 (給 additionalImages 用)
    const uploadFileDirectly = async (file: File) => {
        const formData = new FormData();
        formData.append("file", file);
        try {
            const res = await fetch("/api/images", { method: "POST", body: formData });
            if (res.ok) {
                const data = await res.json();
                return data.key as string;
            }
        } catch (e) { console.error(e); }
        return null;
    };

    // 處理上一步按鈕
    const handleBackButton = () => {
        if(step === 1){

        }

        setStep((prev) => Math.max(prev - 1, 1));
    };
    useEffect(() => {
        console.log(`選擇file:${selectedFile?.name}`);
        // console.log(uploadedFiles.map((a)=>(a.name)));   
    },[selectedFile,uploadedFiles])
    
    return (
    <div className='min-h-screen bg-[#27272A] relative'>
        {/* 全螢幕遮罩：當 isIFCProcessing 為 true 時顯示 */}
        {/* {IFCProcessingStatus.isIFCProcessing && ( */}
            
        <div className='flex w-full h-screen gap-4 p-2 relative overflow-hidden'>

            <button 
                onClick={() => setIsMobileStepNavOpen(!isMobileStepNavOpen)}
                className="md:hidden absolute bottom-5 left-5 z-50 p-2 rounded-lg text-white bg-[#3F3F46] transition-all duration-300 shadow-[0px_0px_2px_0px_#000000B2,inset_0px_-4px_4px_0px_#00000040,inset_0px_4px_2px_0px_#FFFFFF33] transition-transform active:scale-95"
            >
                {isMobileStepNavOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {/* 左側步驟導覽列 */}
            <div className={`
                z-40 overflow-hidden rounded-lg border-[5px] border-[rgba(40,48,62,0.6)] transition-transform duration-300 bg-[#27272A] shadow-2xl
                /* 📱 手機版設定：絕對定位、根據狀態滑出或隱藏 */
                absolute top-[5%] left-2 h-[90%] w-[250px] 
                ${isMobileStepNavOpen ? "translate-x-0" : "-translate-x-[120%]"}
                /* 💻 電腦版設定 (md 以上)：恢復相對定位，取消隱藏，乖乖待在左邊 */
                md:relative md:top-auto md:left-auto md:h-auto md:max-w-[300px] md:min-w-[250px] md:w-[20vw] md:translate-x-0
            `}>
                <SidebarBlobs/>
                {/* 建立一個絕對定位的層，專門放陰影，並確保它在背景之上 */}
                <div className='absolute inset-0 pointer-events-none shadow-[inset_0px_0px_27.1px_0px_#000000] z-10'/>
                <SidebarUpload 
                    currentStep={step}
                    onNext={isSubmitting ? ()=>Promise<void> : handleNextButton}
                    onBack={handleBackButton}
                />
            </div>
            
                {/* 右側 Viewer 區域 */}
            
            <div className='flex grow rounded-lg overflow-hidden p-1'>{/*p-1 for showing the outer shadow*/}
                <div className='relative rounded-lg bg-[#18181B] grow shadow-[0px_3px_1.8px_0px_#FFFFFF29,0px_-2px_1.9px_0px_#00000040,0px_0px_4px_0px_#FBFBFB3D]'>
                    {/* 內凹陰影裝飾層 */}
                    <div className='absolute inset-0 z-50 rounded-lg pointer-events-none shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_0px_#00000099]'/>
                    {/* 根據步驟與檔案類型渲染內容 */}
                    <div className='rounded-lg w-full h-full overflow-hidden relative'>
                        <div className={`absolute inset-0 ${step === 3 ? "hidden":"block"}`} >
                            {(postType === '3D') ? (
                                <Viewer3D 
                                    ref={viewerRef} 
                                    allFiles={uploadedFiles} 
                                    file={selectedFile?.file} 
                                    onIFCProcessingChange={handleIFCProcessingChange} 
                                />
                            ) : (
                                <PDFViewer 
                                    ref={pdfRef} 
                                    file={selectedFile?.file || null} 
                                />
                            )}
                        </div>
                        <div className={`absolute left-2 top-2 h-[90%] ${(step === 2 || step === 3 )? "hidden":"block"}`}>
                            <ModelUploadSidebar 
                                getComponents={() => viewerRef.current?.getComponents() || null}
                                onFilesChange={setUploadedFiles}
                                onSelectFile={setSelectedFile}
                                selectedFileId={selectedFile?.dbId || null}
                                loadedFiles={loadedFiles}
                                setLoadedFiles={setLoadedFiles}
                                onLoadModel={(buffer,modelName)=>viewerRef.current?.loadModel(buffer,modelName)}
                                onFocusAllModel={()=>viewerRef.current?.focusAllModel()}
                                onFocusModel={(modelId) => viewerRef.current?.focusModel(modelId)}
                                onExportModelFrag={async (modelId) => {
                                    if (viewerRef.current) {
                                        return viewerRef.current.exportModelFrag(modelId);
                                    }
                                    return null;
                                }}
                                onDeleteModel={(modelId) => viewerRef.current?.deleteModel(modelId)}
                                postType={postType}
                                setPostType={setPostType}
                            />
                        </div>
                        {step === 2 && (
                            <div className='w-full h-full flex items-center justify-center text-white relative pointer-events-none'>
                                
                                {/* 封面擷取範圍框 (紅色方框) */}
                                <div className="absolute z-30 inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-full h-full rounded-lg aspect-video border-4 border-red-500 shadow-[0_0_0_9999px_rgba(0,0,0,0.5)]" />
                                </div>
                                <div className="absolute top-10 text-white bg-black/50 px-4 py-2 rounded-full">
                                    請調整視角，點擊 Next 將擷取紅框範圍作為封面
                                </div>
                            </div>
                        )}
                        {step === 3 && (
                            <div className='w-full h-full p-8 bg-[#27272A] overflow-y-auto'>
                                <div className='max-w-[90%] mx-auto w-full font-inter'>
                                    <h2 className="text-xl text-white">Metadata</h2>
                                    <p className='text-xs text-[#A1A1AA] mb-2'>Fill in the model metadata make people more understand your model</p>
                                    <MetadataForm
                                        coverImage={coverImage}
                                        onCoverChange={setCoverImage}
                                        additionalImages={additionalImages}
                                        onAdditionalImagesChange={setAdditionalImages}
                                        metadata={metadata}
                                        onMetadataChange={setMetadata}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div> 
    );
}

export default Upload;