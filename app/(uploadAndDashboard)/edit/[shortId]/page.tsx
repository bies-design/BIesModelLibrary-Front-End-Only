'use client'
import React, { useState, useRef, useCallback, useEffect } from 'react';
import SidebarBlobs from '@/components/blobs/SidebarBlobs';
import Viewer3D, { Viewer3DRef } from '@/components/viewer/Viewer3D';
import PDFViewer from '@/components/viewer/PDFViewer';
import { PDFViewerRef } from '@/components/viewer/PDFViewerInternal';
import ModelUploadSidebar from '@/components/sidebar/ModelUploadSidebar';
import MetadataForm, { Metadata, ImageFile } from '@/components/forms/MetadataForm';
import { redirect, useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { addToast } from '@heroui/react';
import { ChevronLeft, ChevronRight, Loader2,Menu,X } from 'lucide-react';
import { Model,UIModel } from '@/types/upload';
import { createPdfRecord } from '@/lib/actions/pdf.action';
import { createPost, updatePost } from '@/lib/actions/post.action';
import { SelectedPost } from '@/components/modals/RelatedPostModal';
import SidebarEdit from '@/components/sidebar/SidebarEdit';
import { getEditPostDetail } from '@/lib/actions/post.action';

// 定義檔案項目介面
export interface FileItem {
    dbId: string;
    file: File;
    type: '3d' | 'pdf';
    name: string;
    fileid?:string;
}

export default function Edit() {
    const params = useParams();
    const postShortId = params.shortId as string;

    const [isInitializing, setIsInitializing] = useState<boolean>(true);

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

    const getImageUrl = useCallback((imageVal: string | null | undefined) => {
        if(!imageVal) return "";
        if(imageVal.startsWith("http")) return imageVal;
        return `${process.env.NEXT_PUBLIC_S3_ENDPOINT_SERVER}/${process.env.NEXT_PUBLIC_S3_IMAGES_BUCKET}/${imageVal}`;
    }, []);

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
            handleUpdate();
            return;
        }
        setStep((next) => Math.min(next + 1, 3));
    };

    // 處理最終建立邏輯
    const handleUpdate = async () => {
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
                const uploadPromises = additionalImages.map(async (img) => {
                    // 1. 如果有實體檔案，代表是「新加的」，就去打 API 上傳拿新 Key
                    if (img.file) {
                        return await uploadFileDirectly(img.file);
                    } 
                    // 2. 如果沒有實體檔案但有 key，代表是「原本就有的舊圖」，直接沿用舊 Key
                    else if (img.key) {
                        return img.key; 
                    }
                    return null;
                });
                const results = await Promise.all(uploadPromises);
                results.forEach(key => {
                    if (key) imageKeys.push(key);
                });
            }

            // --- 3. 所有檔案都就緒，統一呼叫 Server Action 寫入 Post 資料庫 ---
            console.log("3. 所有檔案就緒，準備寫入資料庫 Post...");
            const result = await updatePost({
                shortId: postShortId,
                postType: postType,
                metadata: metadata,
                coverImageKey: coverKey,
                imageKeys: imageKeys,
                modelIds: dbModelIds, // 3D 的陣列 (2D 時為空)
                pdfIds: dbPdfIds,     // 2D 的陣列 (3D 時為空)
            });

            if (result.success) {
                console.log("✅ 更新貼文成功!");
                router.push(`/post/${postShortId}`);
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
        setStep((prev) => Math.max(prev - 1, 1));
    };

    // 初次載入時抓取並填入舊資料
    useEffect(() => {
        const fetchInitialData = async () => {
            if (!postShortId) return;
            
            try {
                const result = await getEditPostDetail(postShortId);
                
                if (!result.success || !result.data) {
                    console.error("找不到貼文：", result.error);
                    alert("找不到這篇貼文，將返回首頁");
                    router.push('/');
                    return;
                }

                const post = result.data;

                // 1. 填入 Post Type
                setPostType(post.type as '2D' | '3D');

                // 2. 填入 Metadata
                setMetadata({
                    title: post.title || "",
                    category: post.category || "",
                    keywords: post.keywords || [],
                    description: post.description || "",
                    permission: post.permission || "standard",
                    team: post.team?.id || "none", // 這裡假設你表單需要的是 teamId
                    relatedPosts: post.relatedPosts || [] // 如果有需要
                });

                // 3. 填入封面圖
                if (post.coverImage) {
                    setCoverImage(post.coverImage); // 注意：getPostDetail 已經幫你組裝好完整的 URL 了
                }

                // 4. 填入附加圖片 (需轉成 ImageFile 格式)
                if (post.images && post.images.length > 0) {
                    const formattedImages: ImageFile[] = post.images.map((imgUrl: string) => {
                        // 假設你傳回來的 imgUrl 是 "http://.../img_123.png"
                        // 我們可以把整個 URL 當作 key，或者你從網址中擷取檔案名稱
                        // 為了簡單，這裡我們先把完整的 URL 同時當作預覽和 key
                        const originalKey = imgUrl.split('/').pop() || imgUrl; // 試著抓出檔名當 key
                        return {
                            key: originalKey, 
                            preview: imgUrl
                        };
                    });
                    setAdditionalImages(formattedImages);
                }

                // 5. 處理檔案 (Models / PDFs) - 觸發雲端下載
                if (post.type === '3D' && post.models && post.models.length > 0) {
                    console.log("Model在這",post.models);
                    // 把遠端的 models 轉換成你 Sidebar 要的 FileItem 格式
                    const existingModels: FileItem[] = post.models.map((model: any) => ({
                        dbId: model.id, // 用作唯一識別
                        fileId: model.fileId, // 你自訂的屬性，用來抓取 MinIO
                        name: model.name,
                        type: '3d',
                        file: new File([], model.name) // 給一個假的 File 物件，因為我們主要是靠 API 去撈 buffer
                    }));
                    
                    setUploadedFiles(existingModels);
                    
                    // 🌟 重要：這裡我們不直接去 fetch Buffer (因為 Viewer3D 和 Sidebar 的連動機制)
                    // 而是設定好 uploadedFiles 後，你的 Sidebar 應該要有邏輯去發現
                    // 「咦？這些檔案有 fileId 卻沒有實體 Blob，那我要幫忙從網路載下來」
                    // (這部分我們可能需要稍微調整你的 Sidebar 或 Viewer 邏輯)
                    
                } else if (post.type === '2D' && post.pdfIds && post.pdfIds.length > 0) {
                    console.log("Model在這",post.pdfIds);
                    // 2D PDF 的處理邏輯
                    const existingPdfs: FileItem[] = post.pdfIds.map((pdf: any) => ({
                        dbId: pdf.id,
                        fileId: pdf.fileId,
                        name: pdf.name,
                        type: 'pdf',
                        file: new File([], pdf.name) 
                    }));
                    setUploadedFiles(existingPdfs);
                    
                    // 自動選擇第一個 PDF 以便預覽
                    if (existingPdfs.length > 0) {
                        setSelectedFile(existingPdfs[0]);
                    }
                }

            } catch (error) {
                console.error("載入貼文失敗:", error);
            } finally {
                setIsInitializing(false); // 解除載入狀態
            }
        };

        fetchInitialData();
    }, [postShortId, router, getImageUrl]);

    useEffect(() => {
        console.log(`選擇file:${selectedFile?.name}`);
        // console.log(uploadedFiles.map((a)=>(a.name)));   
    },[selectedFile,uploadedFiles]);

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
        {/* 全螢幕遮罩：當 isIFCProcessing 為 true 時顯示 */}
        {/* {IFCProcessingStatus.isIFCProcessing && ( */}
            
        <div className='flex w-full h-screen gap-4 p-2 relative overflow-hidden'>
            {/* 左側步驟導覽列 */}
            <div className={`
                z-60 rounded-lg border-[5px] border-[rgba(40,48,62,0.6)] transition-transform duration-300 bg-[#27272A] shadow-2xl
                /* 📱 手機版設定：絕對定位、根據狀態滑出或隱藏 */
                absolute top-0 left-0 h-[100%] w-[250px]
                ${isMobileStepNavOpen ? "translate-x-0" : "-translate-x-full"}
                /* 💻 電腦版設定 (md 以上)：恢復相對定位，取消隱藏，乖乖待在左邊 */
                md:relative md:top-auto md:left-auto md:h-auto md:max-w-[300px] md:min-w-[250px] md:w-[20vw] md:translate-x-0 overflow-visible
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
                <div className='absolute inset-0 pointer-events-none shadow-[inset_0px_0px_27.1px_0px_#000000] z-10'/>
                <SidebarEdit 
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