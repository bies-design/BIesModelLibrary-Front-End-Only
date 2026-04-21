'use client'
import React, { useState, useRef, useCallback, useEffect } from 'react';
import SidebarBlobs from '@/components/blobs/SidebarBlobs';
import Viewer3D, { Viewer3DRef } from '@/components/viewer/Viewer3D';
import PDFViewer from '@/components/viewer/PDFViewer';
import { PDFViewerRef } from '@/components/viewer/PDFViewerInternal';
import ModelUploadSidebar from '@/components/sidebar/ModelUploadSidebar';
import MetadataForm, { Metadata, ImageFile } from '@/components/forms/MetadataForm';
import { useParams, useRouter } from 'next/navigation';
import { addToast } from '@heroui/react';
import { ChevronLeft, ChevronRight, Loader2, Box, FileText, Image as ImageIcon } from 'lucide-react';
import { updatePost, getEditPostDetail } from '@/lib/actions/post.action';
import SidebarEdit from '@/components/sidebar/SidebarEdit';
import { FileItem } from '../../upload/page';

export default function Edit() {
    const params = useParams();
    const postShortId = params.shortId as string;

    const coverInputRef = useRef<HTMLInputElement>(null);

    const [isInitializing, setIsInitializing] = useState<boolean>(true);

    const [isMobileStepNavOpen, setIsMobileStepNavOpen] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [step, setStep] = useState<number>(1);
    
    const [uploadedFiles, setUploadedFiles] = useState<FileItem[]>([]);
    const [preLoadedModels, setPreLoadedModels] = useState<FileItem[]>([]);
    const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
    const [loadedFiles, setLoadedFiles] = useState<FileItem[]>([]);
    const [coverImage, setCoverImage] = useState<string | null>(null);
    
    const [IFCProcessingStatus, setIFCProcessingStatus] = useState<{
        isIFCProcessing: boolean;
        fileName: string | null;
        progress?: number;
    }>({ isIFCProcessing: false, fileName: null, progress: undefined });
    
    const [additionalImages, setAdditionalImages] = useState<ImageFile[]>([]);
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
    
    // 🚀 統一收集要發布/保留的檔案 ID
    const [selectedPublishIds, setSelectedPublishIds] = useState<string[]>([]);

    const viewerRef = useRef<Viewer3DRef>(null);
    const pdfRef = useRef<PDFViewerRef>(null);
    const router = useRouter();

    const getImageUrl = useCallback((imageVal: string | null | undefined) => {
        if(!imageVal) return "";
        if(imageVal.startsWith("http")) return imageVal;
        return `${process.env.NEXT_PUBLIC_S3_ENDPOINT_SERVER}/${process.env.NEXT_PUBLIC_S3_IMAGES_BUCKET}/${imageVal}`;
    }, []);

    const handleIFCProcessingChange = useCallback((isIFCProcessing:boolean, fileName: string | null, progress?:number) => {
        setIFCProcessingStatus({isIFCProcessing, fileName, progress});
    }, []);

    const uploadImageToMinIO = async (blobUrl: string, filename: string = "image.png") => {
        try {
            const response = await fetch(blobUrl);
            const blob = await response.blob();
            const file = new File([blob], filename, { type: blob.type });
            const formData = new FormData();
            formData.append("file", file);

            const uploadRes = await fetch("/api/images", { method: "POST", body: formData });
            if (!uploadRes.ok) throw new Error("Image upload failed");
            
            const data = await uploadRes.json();
            return data.key as string;
        } catch (error) {
            console.error("Upload helper error:", error);
            return null;
        }
    };

    const handleNextButton = async () => {
        if (step === 3) {
            handleUpdate();
            return;
        }
        setStep((next) => Math.min(next + 1, 3));
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

    // 處理最終建立邏輯
    const handleUpdate = async () => {
        if (selectedPublishIds.length === 0) {
            addToast({ title: "錯誤", description: "請至少保留一個發布的檔案", color: "danger" });
            return;
        }
        // if(!coverImage){
        //     addToast({ title: "錯誤", description: "請上傳一張封面圖!", color: "danger" });
        //     return;
        // }
        if(metadata.title === "" || metadata.title === null){
            addToast({ title: "錯誤", description: "標題不可為空!", color: "danger" });
            return;
        }
        setIsSubmitting(true);

        try {
            console.log("1. 開始處理圖片...");
            let coverKey: string | null = null;
            // 判斷 coverImage 是否為 Blob URL (代表重新截圖過)
            if (coverImage && coverImage.startsWith("blob:")) {
                coverKey = await uploadImageToMinIO(coverImage, "cover.png");
            } else if (coverImage) {
                // 如果是舊的網址，把 Key 抽出來
                coverKey = coverImage.split('/').pop() || coverImage;
            }

            const imageKeys: string[] = [];
            if (additionalImages.length > 0) {
                const uploadPromises = additionalImages.map(async (img) => {
                    if (img.file) return await uploadFileDirectly(img.file);
                    else if (img.key) return img.key;
                    return null;
                });
                const results = await Promise.all(uploadPromises);
                results.forEach(key => { if (key) imageKeys.push(key); });
            }

            // 🚀 2. 計算需要刪除的檔案 (原本有，但現在沒有被打勾)
            const originalFileIds = preLoadedModels.map(m => m.dbId);
            const filesToDelete = originalFileIds.filter(id => !selectedPublishIds.includes(id));

            console.log("2. 準備更新資料庫 Post...");
            const result = await updatePost({
                shortId: postShortId,
                metadata: metadata,
                coverImageKey: coverKey,
                imageKeys: imageKeys,
                fileIds: selectedPublishIds, // 要保留的新舊檔案
                filesToDelete: filesToDelete // 要請 Server 刪除的檔案
            });

            if (result.success) {
                console.log("✅ 更新貼文成功!");
                addToast({ title: "成功", description: "貼文已更新！", color: "success" });
                router.push(`/post/${postShortId}`);
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            console.error("更新失敗:", error);
            alert(error instanceof Error ? error.message : "更新失敗，請稍後再試");
        } finally {
            setIsSubmitting(false);
        }
    };

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

    const handleBackButton = () => {
        setStep((prev) => Math.max(prev - 1, 1));
    };

    // 🚀 初次載入時抓取並填入舊資料
    useEffect(() => {
        const fetchInitialData = async () => {
            if (!postShortId) return;
            
            try {
                const result = await getEditPostDetail(postShortId);
                
                if (!result.success || !result.data) {
                    alert("找不到這篇貼文，將返回首頁");
                    router.push('/');
                    return;
                }

                const post = result.data;

                // 🚀 修正 1：確保 associations 有被正確賦值，才能還原專案關聯
                setMetadata({
                    title: post.title || "",
                    category: post.category || "",
                    keywords: post.keywords || [],
                    description: post.description || "",
                    permission: post.permission || "standard",
                    team: post.team?.id || "none",
                    associations: post.associations || [], 
                    relatedPosts: post.relatedPosts || [] 
                });

                if (post.coverImage) setCoverImage(post.coverImage);

                if (post.images && post.images.length > 0) {
                    const formattedImages: ImageFile[] = post.images.map((imgUrl: string) => {
                        const originalKey = imgUrl.split('/').pop() || imgUrl;
                        return { key: originalKey, preview: imgUrl };
                    });
                    setAdditionalImages(formattedImages);
                }

                // 🚀 統一處理所有 Files
                if (post.files && post.files.length > 0) {
                    const existingFiles: FileItem[] = post.files.map((file: any) => {
                        const lowerName = file.name.toLowerCase();
                        const isPdf = lowerName.endsWith('.pdf');
                        const is3D = ['ifc', 'frag', 'obj', 'gltf', '3dm'].some(ext => lowerName.endsWith(ext));
                        
                        return {
                            dbId: file.id,
                            fileId: file.fileId, 
                            name: file.name,
                            type: isPdf ? 'pdf' : (is3D ? '3d' : 'other'),
                            file: new File([], file.name) // 假殼，等使用者點擊時再去拿真實 Buffer
                        };
                    });
                    
                    setPreLoadedModels(existingFiles); 
                    
                    // 把這些既有檔案的 dbId 設為「已勾選發布」
                    setSelectedPublishIds(existingFiles.map(f => f.dbId));
                    
                    // 預設預覽第一個檔案
                    if (existingFiles.length > 0) {
                        setSelectedFile(existingFiles[0]);
                    }
                }

            } catch (error) {
                console.error("載入貼文失敗:", error);
            } finally {
                setIsInitializing(false); 
            }
        };

        fetchInitialData();
    }, [postShortId, router, getImageUrl]);
    
    // 🚀 動態決定要渲染哪一個 Viewer
    const renderViewer = () => {
        // 如果還沒選擇檔案，給一個預設的空狀態畫面
        if (!selectedFile) {
            return (
                <div className="flex flex-col items-center justify-center w-full h-full text-[#A1A1AA] bg-[#18181B]">
                    <Box size={48} className="opacity-20 mb-4" />
                    <p className="text-sm">請從左側列表選擇一個檔案來預覽</p>
                </div>
            );
        }

        const lowerName = selectedFile.name.toLowerCase();

        // 1. 判斷 3D 模型 (.ifc, .obj, .gltf 等等)
        if (lowerName.endsWith('.ifc') || lowerName.endsWith('.obj') || selectedFile.type === '3d') {
            return (
                <Viewer3D 
                    ref={viewerRef} 
                    allFiles={uploadedFiles} 
                    file={selectedFile.file} 
                    onIFCProcessingChange={handleIFCProcessingChange} 
                />
            );
        }

        // 2. 判斷 PDF
        if (lowerName.endsWith('.pdf') || selectedFile.type === 'pdf') {
            return (
                <PDFViewer 
                    ref={pdfRef} 
                    file={selectedFile.file} 
                />
            );
        }

        // 3. 💡 未來擴充範例：圖片預覽
        if (lowerName.endsWith('.png') || lowerName.endsWith('.jpg') || lowerName.endsWith('.jpeg')) {
            // 你甚至可以直接用一個簡單的 img 標籤來預覽圖片
            return (
                <div className="flex items-center justify-center w-full h-full bg-[#18181B] p-4">
                    {/* 注意：如果是真的要做，記得處理 Blob URL 的釋放 */}
                    <img src={URL.createObjectURL(selectedFile.file)} alt="preview" className="max-w-full max-h-full object-contain rounded-lg" />
                </div>
            );
        }

        // 4. 都不支援的 Fallback 畫面
        return (
            <div className="flex flex-col items-center justify-center w-full h-full text-[#A1A1AA] bg-[#18181B]">
                <FileText size={48} className="opacity-20 mb-4" />
                <p className="text-sm">目前不支援預覽此格式檔案 ({selectedFile.name})</p>
            </div>
        );
    };

    if (isInitializing) {
        return (
            <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#27272A] text-white">
                <Loader2 className="w-12 h-12 animate-spin text-[#D70036] mb-4" />
                <p>Loading post data...</p>
            </div>
        );
    }

    return (
        <div className='min-h-screen bg-[#27272A] relative'>
            {isSubmitting && (
                <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/70 backdrop-blur-md text-white pointer-events-auto">
                    <Loader2 className="w-16 h-16 animate-spin text-[#D70036] mb-6" />
                    <h2 className="text-xl font-bold tracking-widest mb-2">正在儲存貼文中...</h2>
                    <p className="text-sm text-[#A1A1AA]">請勿關閉或重新整理網頁，這可能需要一點時間</p>
                </div>
            )}
                
            <div className='flex w-full h-screen gap-4 p-2 relative overflow-hidden'>
                {/* 左側導覽列 */}
                <div className={`
                    z-60 rounded-lg border-[5px] border-[rgba(40,48,62,0.6)] transition-transform duration-300 bg-[#27272A] shadow-2xl
                    absolute top-0 left-0 h-[100%] w-[250px]
                    ${isMobileStepNavOpen ? "translate-x-0" : "-translate-x-full"}
                    md:relative md:top-auto md:left-auto md:h-auto md:max-w-[300px] md:min-w-[250px] md:w-[20vw] md:translate-x-0 overflow-visible
                `}>
                    <button 
                        onClick={() => setIsMobileStepNavOpen(!isMobileStepNavOpen)}
                        className="md:hidden py-2 absolute top-1/2 -translate-y-1/2 rounded-r-lg text-white bg-[#3F3F46] transition-all duration-300 shadow-[0px_0px_2px_0px_#000000B2,inset_0px_-4px_4px_0px_#00000040,inset_0px_4px_2px_0px_#FFFFFF33] active:scale-95 left-[104%] -ml-[5px] z-10"
                    >
                        {isMobileStepNavOpen ? <ChevronLeft size={24}/> : <ChevronRight size={24} />}
                    </button>
                    <SidebarBlobs/>
                    <div className='absolute inset-0 pointer-events-none shadow-[inset_0px_0px_27.1px_0px_#000000] z-10'/>
                    <SidebarEdit 
                        currentStep={step}
                        onNext={isSubmitting ? ()=>Promise.resolve() : handleNextButton}
                        onBack={handleBackButton}
                    />
                </div>
                
                {/* 右側 Viewer 區域 */}
                <div className='flex grow rounded-lg overflow-hidden p-1'>
                    <div className='relative rounded-lg bg-[#18181B] grow shadow-[0px_3px_1.8px_0px_#FFFFFF29,0px_-2px_1.9px_0px_#00000040,0px_0px_4px_0px_#FBFBFB3D]'>
                        <div className='absolute inset-0 z-50 rounded-lg pointer-events-none shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_0px_#00000099]'/>
                        <div className='rounded-lg w-full h-full overflow-hidden relative'>
                            
                            <div className={`absolute inset-0 ${step === 3 ? "hidden":"block"}`} >
                                <div className='w-full h-full relative'>
                                    {renderViewer()}
                                </div> 
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
                                    preLoadedModels={preLoadedModels}
                                />
                            </div>

                            {step === 2 && (
                                <div className='absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#18181B] p-6'>
                                    <div className="max-w-lg w-full flex flex-col items-center">
                                        <h2 className="text-2xl font-bold text-white mb-2">Cover Image</h2>
                                        <p className="text-[#A1A1AA] text-sm mb-8 text-center">
                                            上傳你的封面圖 <br/>
                                            若無上傳封面圖，將會顯示站位圖
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