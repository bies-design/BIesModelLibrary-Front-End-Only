'use client'
import React, { useState, useRef, useCallback, useEffect } from 'react';
import SidebarUpload from '@/components/sidebar/SidebarUpload';
import SidebarBlobs from '@/components/blobs/SidebarBlobs';
import Viewer3D, { Viewer3DRef } from '@/components/viewer/Viewer3D';

import ModelUploadSidebar from '@/components/sidebar/ModelUploadSidebar';
import MetadataForm, { Metadata, ImageFile } from '@/components/forms/MetadataForm';
import { useRouter } from 'next/navigation';
import { Box, ChevronLeft, ChevronRight, FileText, Loader2, Menu, X, Image as ImageIcon } from 'lucide-react';
import { createPost } from '@/lib/actions/post.action';
import { addToast } from '@heroui/react';
import ImageViewer from '@/components/viewer/ImageViewer';
import { useSession } from 'next-auth/react';
import PDFViewerWasm,{PDFViewerWasmRef} from '@/components/viewer/PDFViewerWasm';
// 定義檔案項目介面
export interface FileItem {
    dbId: string;
    file: File;
    type: '3d' | 'pdf' |'other';
    name: string;
    fileId?:string;
}

const Upload = () => {
    const {data: session, status} = useSession();
    const router = useRouter();
    useEffect(()=>{
        // 若未登入，踢回登陸頁
        if(status === "unauthenticated"){
            addToast({ title: "請先登入!", color: "warning" });
            router.push("/sign-in");
        }
    },[status, router])

    const coverInputRef = useRef<HTMLInputElement>(null);
    const [isMobileStepNavOpen, setIsMobileStepNavOpen] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [step, setStep] = useState<number>(1);
    const [uploadedFiles, setUploadedFiles] = useState<FileItem[]>([]);
    const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
    const [loadedFiles, setLoadedFiles] = useState<FileItem[]>([]);
    const [coverImage, setCoverImage] = useState<string | null>(null);
    const [forceManualCover, setForceManualCover] = useState<boolean>(false);
    // 在 Upload 組件內新增這個狀態
    const [currentWorkspaceId, setCurrentWorkspaceId] = useState<string>("personal");
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
        associations: [],
        relatedPosts: []
    });
    // 要被送進資料庫的
    const [selectedPublishIds, setSelectedPublishIds] = useState<string[]>([]);

    const viewerRef = useRef<Viewer3DRef>(null);
    const pdfRef = useRef<PDFViewerWasmRef>(null);
    
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
        const handleCaptureScreenshot = async () => {
        try {
            let imgData: string | null = null;
            if (selectedFile?.type === '3d' && viewerRef.current) {
                imgData = await viewerRef.current.takeScreenshot();
            } else if (selectedFile?.type === 'pdf' && pdfRef.current) {
                // 假設 PDFViewer 有實作 takeScreenshot，若無可包一層 try-catch 防呆
                if ('takeScreenshot' in pdfRef.current) {
                    imgData = await (pdfRef.current as any).takeScreenshot();
                } else {
                    addToast({ title: "PDF 截圖暫未支援", description: "請手動上傳", color: "warning" });
                    setForceManualCover(true);
                    return;
                }
            }

            if (imgData) {
                setCoverImage(imgData);
                addToast({ title: "封面擷取成功！", color: "success" });
            } else {
                throw new Error("無法產生圖片資料");
            }
        } catch (error) {
            console.error("截圖失敗:", error);
            addToast({ title: "截圖失敗", description: "請嘗試手動上傳封面", color: "danger" });
            setForceManualCover(true);
        }
    };

    useEffect(() => {
        // 當 Upload 元件被銷毀時，清空最後殘留的封面圖 Blob URL
        return () => {
            if (coverImage && coverImage.startsWith('blob:')) {
                URL.revokeObjectURL(coverImage);
            }
        };
    }, [coverImage]);
    // 處理下一步按鈕
    const handleNextButton = async () => {
        if( step === 2 && (isSupported3D || isSupportedPdf) && !forceManualCover){
            await handleCaptureScreenshot();
        }
        if (step === 3) {
            // 最後一步點擊 Create
            handleCreate();
            return;
        }
        setStep((next) => Math.min(next + 1, 3));
    };

    //  建立貼文
    const handleCreate = async () => {
        // 防呆：如果都沒打勾就擋下來
        if (selectedPublishIds.length === 0) {
            addToast({ title: "錯誤", description: "請至少勾選一個要發布的檔案!", color: "danger" });
            return;
        }
        // if(!coverImage){
        //     addToast({ title: "錯誤", description: "請上傳一張封面圖!", color: "danger" });
        //     return;
        // }
        if(metadata.title === "" || metadata.title === null){
            addToast({ title: "錯誤", description: "標題(Title)不可為空!", color: "danger" });
            return;
        }
        if(metadata.category === "" || metadata.category === null){
            addToast({ title: "錯誤", description: "種類(Category)不可為空!", color: "danger" });
            return;
        }

        setIsSubmitting(true);

        try {
            console.log("開始上傳封面與展示圖片...");
            let coverKey: string | null = null;
            if (coverImage) {
                coverKey = await uploadImageToMinIO(coverImage, "cover.png");
            }

            const imageKeys: string[] = [];
            if (additionalImages.length > 0) {
                const uploadPromises = additionalImages.map(async (img) => {
                    if (img.file) return await uploadFileDirectly(img.file);
                    else if (img.key) return img.key;
                    return null;
                });
                const results = await Promise.all(uploadPromises);
                results.forEach(key => {
                    if (key) imageKeys.push(key);
                });
            }

            console.log("所有資料就緒，寫入資料庫 Post...");
            const result = await createPost({
                metadata: metadata,
                coverImageKey: coverKey,
                imageKeys: imageKeys,
                // 霸氣！直接把打勾的陣列丟給後端，其他分類邏輯全部刪掉！
                fileIds: selectedPublishIds, 
                teamId: currentWorkspaceId === 'personal' ? null : currentWorkspaceId
            });

            if (result.success) {
                console.log("✅ 發布成功！");
                router.push('/?status=success');
            } else {
                throw new Error(result.error);
            }

        } catch (error) {
            console.error("建立失敗:", error);
            addToast({ title: "發布失敗", description: error instanceof Error ? error.message : "請稍後再試", color: "danger" });
        } finally {
            setIsSubmitting(false); 
        }
    };

    // 處理封面圖上傳的邏輯
    const handleCoverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // 如果原本有暫存的預覽圖，先釋放記憶體
            if (coverImage && coverImage.startsWith('blob:')) {
                URL.revokeObjectURL(coverImage);
            }
            // 產生新的預覽網址
            const url = URL.createObjectURL(file);
            setCoverImage(url);
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
        setStep((prev) => Math.max(prev - 1, 1));
    };

    useEffect(() => {
        console.log(`選擇file:${selectedFile?.name}`);
        // console.log(uploadedFiles.map((a)=>(a.name)));   
    },[selectedFile,uploadedFiles])

    // 條件判斷 (絕對安全版)
    const ext = selectedFile?.name.split('.').pop()?.toLowerCase() || '';
    const isSupported3D = ['ifc', 'frag'].includes(ext);
    const isSupportedPdf = (ext === 'pdf' && selectedFile?.type === 'pdf');
    const isSupportedImage = ['jpg', 'jpeg', 'png', 'webp'].includes(ext);
    const isUnsupported = selectedFile && !isSupported3D && !isSupportedPdf && !isSupportedImage;

    if(status === "loading" || !session){
        return <div className="min-h-screen flex items-center justify-center">載入中...</div>;
    }
    
    return (
        <div className='min-h-screen bg-[#27272A] relative'>
            {isSubmitting && (
                <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/70 backdrop-blur-md text-white pointer-events-auto">
                    <Loader2 className="w-16 h-16 animate-spin text-[#D70036] mb-6" />
                    <h2 className="text-xl font-bold tracking-widest mb-2">正在上傳貼文中...</h2>
                    <p className="text-sm text-[#A1A1AA]">請勿關閉或重新整理網頁，這可能需要一點時間</p>
                </div>
            )}
                
            <div className='flex w-full h-screen gap-4 p-2 relative overflow-hidden'>
                {/* 左側步驟導覽列 */}
                <div className={`
                    z-60 rounded-lg transition-transform duration-300 bg-[#27272A] shadow-2xl
                    /* 📱 手機版設定：絕對定位、根據狀態滑出或隱藏 */
                    absolute top-0 left-0 h-[100%] w-[250px]
                    ${isMobileStepNavOpen ? "translate-x-0" : "-translate-x-full"}
                    /* 💻 電腦版設定 (md 以上)：恢復相對定位，取消隱藏，乖乖待在左邊 */
                    md:relative md:top-[3px] md:left-auto md:h-[99.5%] md:max-w-[300px] md:min-w-[250px] md:w-[20vw] md:translate-x-0 overflow-visible
                `}>
                    <button 
                        onClick={() => setIsMobileStepNavOpen(!isMobileStepNavOpen)}
                        className="md:hidden py-2 absolute top-1/2 -translate-y-1/2 rounded-r-lg text-white bg-[#3F3F46] transition-all duration-300 shadow-[0px_0px_2px_0px_#000000B2,inset_0px_-4px_4px_0px_#00000040,inset_0px_4px_2px_0px_#FFFFFF33]
                        active:scale-95 left-[104%] -ml-[5px] z-10"
                    >
                        {isMobileStepNavOpen ? <ChevronLeft size={24}/> : <ChevronRight size={24} />}
                    </button>
                    <SidebarBlobs/>
                    {/* 建立一個絕對定位的層，專門放陰影，並確保它在背景之上 */}
                    <div className='absolute inset-1.25 rounded pointer-events-none shadow-[inset_0px_0px_27.1px_0px_#000000] z-10'/>
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
                        <div className={`${step === 2 ? "border-4 border-red-500" : ""} rounded-lg w-full h-full overflow-hidden relative`}>
                            <div className={`absolute inset-0 ${step === 3 ? "hidden":"block"}`} >
                                {/* 1. 如果完全沒有選擇檔案，顯示空狀態 (蓋在最上面) */}
                                {!selectedFile && (
                                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full text-[#A1A1AA] bg-[#18181B]">
                                        <Box size={48} className="opacity-20 mb-4" />
                                        <p className="text-sm">請從左側列表選擇一個檔案來預覽</p>
                                    </div>
                                )}
                                {/* 2. 🚀 永遠保留的 Viewer3D！只在選擇的是 3D 模型時顯示 */}
                                <div className={`absolute inset-0 ${isSupported3D ? 'z-10 opacity-100 pointer-events-auto' : '-z-10 opacity-0 pointer-events-none'}`}>
                                    <Viewer3D
                                        ref={viewerRef} 
                                        allFiles={uploadedFiles} 
                                        // 這裡很關鍵：就算被隱藏，我們還是傳入 file，讓 useEffect 去處理載入
                                        file={selectedFile?.type === '3d' ? selectedFile.file : null} 
                                        onIFCProcessingChange={handleIFCProcessingChange} 
                                    />
                                </div>
                                {/* 3. PDF Viewer：只有選擇 PDF 時才渲染 (PDF Viewer 比較輕量，可以重新渲染沒關係) */}
                                {isSupportedPdf && (
                                    <div className="absolute inset-0 z-10 bg-[#18181B]">
                                        <div className='w-full h-full relative'>
                                            <PDFViewerWasm 
                                                ref={pdfRef}
                                                key={selectedFile.dbId} 
                                                file={selectedFile.file} 
                                            />
                                        </div>
                                    </div>
                                )}
                                {/* 4. 圖片預覽：只有選擇圖片時才渲染 */}
                                {(isSupportedImage && selectedFile) && (
                                    <div className="absolute inset-0 z-10 bg-[#18181B]">
                                        <ImageViewer key={selectedFile.dbId} file={selectedFile.file}/>
                                    </div>
                                )}
                                {/* 5. 🚀 Fallback 畫面：有選擇檔案，但不是 3D、PDF 或圖片時顯示 */}
                                {isUnsupported && (
                                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center w-full h-full text-[#A1A1AA] bg-[#18181B]">
                                        <FileText size={48} className="opacity-20 mb-4" />
                                        <p className="text-sm">目前不支援預覽此格式檔案 ({selectedFile.name})</p>
                                    </div>
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
                                    onDeleteModel={(modelId) => viewerRef.current?.deleteModel(modelId)}
                                    selectedPublishIds={selectedPublishIds}
                                    onTogglePublish={(id) => setSelectedPublishIds(prev => 
                                        prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
                                    )}
                                    onWorkspaceChange={setCurrentWorkspaceId}
                                    mode='upload'
                                />
                            </div>
                            {step === 2 && (isSupported3D || isSupportedPdf) &&
                                <button 
                                    onClick={() => setForceManualCover(prev => !prev)}
                                    className="absolute bg-primary px-2 py-1 top-2 right-2 rounded-lg z-50 shadow-[0px_0px_1px_0px_#000000B2,inset_0px_-4px_4px_0px_#00000040,inset_0px_4px_2px_0px_#FFFFFF33] text-white hover:text-white transition-colors"
                                >
                                    {forceManualCover ? "場景截圖" : "自行上傳"}
                                </button>
                            }         
                            {step === 2 && (!(isSupported3D || isSupportedPdf) || ((isSupported3D || isSupportedPdf) && forceManualCover) ) &&
                                <div className='absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#18181B] p-6'>
                                    <div className="max-w-lg w-full flex flex-col items-center">
                                        <h2 className="text-2xl font-bold text-white mb-2">Cover Image</h2>
                                        <p className="text-[#A1A1AA] text-sm mb-8 text-center">
                                            上傳你的封面圖 <br/>
                                            若無上傳封面圖，將會顯示預設佔位圖
                                        </p>
                                        
                                        <div 
                                            className="w-full aspect-video border-2 border-dashed border-[#3F3F46] hover:border-[#D70036] rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all bg-[#27272A] relative overflow-hidden group"
                                            onClick={() => coverInputRef.current?.click()}
                                        >
                                            {coverImage ? (
                                                <>
                                                    {/* 使用 img 標籤做純客戶端預覽最穩 */}
                                                    <img src={coverImage} alt="Cover Preview" className="w-full h-full object-cover" />
                                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                                        <span className="text-white font-medium tracking-wider">Click to change</span>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="flex flex-col items-center text-[#A1A1AA] group-hover:text-white transition-colors">
                                                    <ImageIcon size={48} className="mb-4 opacity-50 group-hover:opacity-100" />
                                                    <p className="font-medium">Click or drag to upload</p>
                                                    <p className="text-xs mt-2 opacity-60">Supported formats: JPG, PNG, WEBP</p>
                                                </div>
                                            )}
                                            {/* 隱藏的 Input */}
                                            <input 
                                                type="file" 
                                                ref={coverInputRef} 
                                                className="hidden" 
                                                accept="image/png, image/jpeg, image/jpg, image/webp" 
                                                onChange={handleCoverUpload} 
                                            />
                                        </div>

                                        {coverImage && (
                                            <button 
                                                onClick={() => setCoverImage(null)} 
                                                className="mt-6 text-danger hover:text-red-400 text-sm font-medium transition-colors"
                                            >
                                                Remove Cover Image
                                            </button>
                                        )}
                                    </div>
                                </div>
                            }
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
