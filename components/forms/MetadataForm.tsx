"use client";

import React, { useState, useCallback, useRef,useEffect } from 'react';
import { useDisclosure, Chip, Input, Select, SelectItem, Textarea, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Slider } from "@heroui/react";
import { Info, HelpCircle, FileUp, Inbox, X, Trash2, Plus } from 'lucide-react';
import Cropper from 'react-easy-crop'
import getCroppedImg from '@/utils/cropImage';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import RelatedPostsModal from '../modals/RelatedPostModal';
import { SelectedPost } from '../modals/RelatedPostModal';
import { getTeamProjects, getProjectDetails } from '@/lib/actions/project.action';
export interface ImageFile {
  file?: File;      // 原始檔案 (上傳用)
  key?: string;     // 舊圖片才會有 S3 Key
  preview: string; // Blob URL (預覽顯示用) 
}

export interface ProjectAssociation {
  projectId: string;
  phaseId: string | null;
}

export interface Metadata {
  title: string;
  category: string;
  keywords: string[];
  description: string;
  permission: string;
  team: string;
  associations: ProjectAssociation[];
  relatedPosts: SelectedPost[];
}

interface MetadataFormProps {
  coverImage: string | null;
  onCoverChange: (image: string | null) => void;
  additionalImages: ImageFile[];
  onAdditionalImagesChange: (images: ImageFile[]) => void;
  metadata: Metadata;
  onMetadataChange: (data: Metadata) => void;
  currentPostShortId?: string;
}

const MetadataForm = ({ 
  coverImage, 
  onCoverChange, 
  additionalImages = [], 
  onAdditionalImagesChange,
  metadata, 
  onMetadataChange,
  currentPostShortId
}: MetadataFormProps) => {

  const { data: session } = useSession();
  const [uploadableTeams, setUploadableTeams] = useState<any[]>([]);  
  // 控制 Keywords 輸入框的暫存文字
  const [keywordInput, setKeywordInput] = useState("");
  // --- 裁切相關 State ---
  const [isCropOpen, setIsCropOpen] = useState<boolean>(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  // --- 上傳相關 Ref 與 State ---
  const moreImagesInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [projectOptions, setProjectOptions] = useState<any[]>([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState<boolean>(false);
  // 建立一個快取字典，格式為 { "project-id": [ phase1, phase2 ] }
  const [phasesCache, setPhasesCache] = useState<Record<string, any[]>>({});
  const [loadingPhases, setLoadingPhases] = useState<Record<string, boolean>>({});
  // 用 useRef 記錄已經發出 API 請求的專案，避免無限迴圈或重複拉取
  const requestedPhasesRef = useRef<Set<string>>(new Set());
  // 使用者在 Modal 點擊確認時，更新表單狀態
  const handleRelatedPostsConfirm = (selectedPosts: {id:string, title:string}[]) => {
    onMetadataChange({
      ...metadata,
      relatedPosts:selectedPosts
    });
    console.log("準備存入資料庫的關聯 ID:", selectedPosts);
  };

  // useEffect(() => {
  //   const fetchUploadableTeams = async () => {
  //     if (session?.user?.id) {
  //       const result = await getUserTeams();
        
  //       if (result.success && result.data) {
  //         // 🚀 過濾權限：只保留 role 是 OWNER, ADMIN, 或 EDITOR 的團隊 (排除 VIEWER)
  //         // ⚠️ 注意：這裡假設 getUserTeams 回傳的資料結構中包含該使用者在該團隊的 role 屬性
  //         // 如果你的回傳結構不同，請根據實際的欄位名稱調整 (例如: team.role 或 team.TeamMember.role)
  //         const validTeams = result.data.filter((team: any) => 
  //           team.role !== "VIEWER" 
  //         );
          
  //         setUploadableTeams(validTeams);
  //       }
  //     }
  //   };

  //   fetchUploadableTeams();
  // }, [session?.user?.id]);

  // 1. 當 Team 改變時：撈取該團隊的專案
  useEffect(() => {
    if (!metadata.team || metadata.team === "none") {
      setProjectOptions([]);
      return;
    }
    const fetchProjects = async () => {
      setIsLoadingProjects(true);
      const res = await getTeamProjects(metadata.team);
      if (res.success && res.data) setProjectOptions(res.data);
      setIsLoadingProjects(false);
    };
    fetchProjects();
  }, [metadata.team]);

  // 2. 切換團隊時，清空所有的專案關聯 (因為專案是綁定團隊的)
  const handleTeamChange = (keys: any) => {
    const value = Array.from(keys)[0] as string;
    onMetadataChange({ ...metadata, team: value || "none", associations: [] });
  };

  // 🚀 3. 關鍵修復：自動偵測 associations，補齊缺少的 Phases 資料 (解決編輯時顯示空白的問題)
  useEffect(() => {
    metadata.associations.forEach(assoc => {
      if (assoc.projectId && !requestedPhasesRef.current.has(assoc.projectId)) {
        // 立刻標記為已請求，防止 React 渲染週期間的 Race Condition
        requestedPhasesRef.current.add(assoc.projectId);
        setLoadingPhases(prev => ({ ...prev, [assoc.projectId]: true }));
        
        getProjectDetails(assoc.projectId).then(res => {
          if (res.success && res.data) {
            setPhasesCache(prev => ({ ...prev, [assoc.projectId]: res.data.phases }));
          }
        }).catch(err => {
          console.error("Failed to fetch phases:", err);
        }).finally(() => {
          setLoadingPhases(prev => ({ ...prev, [assoc.projectId]: false }));
        });
      }
    });
  }, [metadata.associations]);

  // // 3. 根據 projectId 獲取對應的階段 (如果快取有就不用再打 API)
  // const loadPhasesForProject = async (projectId: string) => {
  //   if (!projectId || phasesCache[projectId]) return;

  //   setLoadingPhases(prev => ({ ...prev, [projectId]: true }));
  //   const res = await getProjectDetails(projectId);
  //   if (res.success && res.data) {
  //     setPhasesCache(prev => ({ ...prev, [projectId]: res.data.phases }));
  //   }
  //   setLoadingPhases(prev => ({ ...prev, [projectId]: false }));
  // };
  // 4. 動態關聯清單的操作函式
  const handleAssociationChange = (index: number, field: 'projectId' | 'phaseId', value: string | null) => {
    const newAssoc = [...metadata.associations];
    newAssoc[index] = { ...newAssoc[index], [field]: value };

    // 如果是切換了專案，預設把階段改回未分類，並載入新專案的階段
    if (field === 'projectId' && value) {
      newAssoc[index].phaseId = null;
      // loadPhasesForProject(value);
    }

    onMetadataChange({ ...metadata, associations: newAssoc });
  };
  const addAssociation = () => {
    onMetadataChange({
      ...metadata,
      associations: [...metadata.associations, { projectId: "", phaseId: null }]
    });
  };

  const removeAssociation = (index: number) => {
    const newAssoc = metadata.associations.filter((_, i) => i !== index);
    onMetadataChange({ ...metadata, associations: newAssoc });
  };
  // 當元件卸載或圖片被移除時，釋放記憶體
  useEffect(() => {
    // 這裡我們只在元件完全卸載時做一次性清理 (Cleanup all)
    // 如果要更細緻，可以在 handleRemoveImage 裡做單獨釋放
    return () => {
      additionalImages.forEach(img => URL.revokeObjectURL(img.preview));
    };
  }, []);

  // 處理 Keywords 的 Enter 事件
  const handleKeywordKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // 防止觸發 Form Submit
      
      const trimmedInput = keywordInput.trim();
      
      // 確保不為空，且不重複 (選用，看你是否允許重複)
      if (trimmedInput && !metadata.keywords.includes(trimmedInput)) {
        onMetadataChange({
          ...metadata,
          keywords: [...metadata.keywords, trimmedInput]
        });
        setKeywordInput(""); // 清空輸入框
      }
    }
  };
  // 移除 Keyword
  const handleRemoveKeyword = (keywordToRemove: string) => {
    const newKeywords = metadata.keywords.filter(k => k !== keywordToRemove);
    onMetadataChange({
      ...metadata,
      keywords: newKeywords
    });
  };
  // --- 裁切邏輯 ---
  const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleSaveCrop = async () => {
    if (coverImage && croppedAreaPixels) {
      try {
        const croppedImage = await getCroppedImg(coverImage, croppedAreaPixels);
        onCoverChange(croppedImage);
        setIsCropOpen(false);
        setZoom(1);
      } catch (e) {
        console.error(e);
      }
    }
  };

  // --- Metadata 變更邏輯 ---
  const handleTextChange = (key: keyof Metadata, value: string) => {
    onMetadataChange({ ...metadata, [key]: value });
  };

  const handleSelectionChange = (key: keyof Metadata, keys: any) => {
    const value = Array.from(keys)[0] as string;
    onMetadataChange({ ...metadata, [key]: value || null });
  };

  // --- 右側圖片上傳邏輯 ---
  const processFiles = (files: FileList) => {
    const validFiles = Array.from(files).filter(file => {
      const isValidType = file.type.startsWith('image/');
      const isValidSize = file.size <= 10 * 1024 * 1024;
      return isValidType && isValidSize;
    });

    if (validFiles.length !== files.length) {
      alert('部分檔案格式不符或超過 10MB，已略過。');
    }

    if (validFiles.length + additionalImages.length > 8) {
      alert('最多只能上傳 8 張額外圖片。');
      return;
    }
    const newImages: ImageFile[] = validFiles.map(file => ({
      file: file,
      preview: URL.createObjectURL(file) // 生成 Blob URL
    }));

    onAdditionalImagesChange([...additionalImages, ...newImages]);
  };

  const handleMoreImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files);
    }
    e.target.value = ''; 
  };


  const handleUploadClick = () => {
    moreImagesInputRef.current?.click();
  };
  // 移除時順便釋放該張圖的記憶體
  const handleRemoveImage = (indexToRemove: number, e: React.MouseEvent) => {
    e.stopPropagation();
    // 釋放記憶體
    const imageToRemove = additionalImages[indexToRemove];
    if (imageToRemove) {
        URL.revokeObjectURL(imageToRemove.preview);
    }

    const newImages = additionalImages.filter((_, index) => index !== indexToRemove);
    onAdditionalImagesChange(newImages);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files);
    }
  };

  return (
    <div className="w-full space-y-2 p-1">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Title */}
        <div className="space-y-2">
          <label className="text-white text-sm flex items-center gap-1">
            Title <span className="text-red-500">*</span>
          </label>
          <Input
            value={metadata.title}
            onValueChange={(v) => handleTextChange('title', v)}
            placeholder="Fill in the title that will show up in your cards"
            aria-label='Title Input'
            className="text-white focus:bg-black"
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
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label className="text-white text-sm flex items-center gap-1">
            Category <span className="text-red-500">*</span>
          </label>
          <Select
            selectedKeys={metadata.category ? [metadata.category] : []}
            onSelectionChange={(k) => handleSelectionChange('category', k)}
            aria-label='Category Select'
            placeholder="Select a category for your model"
            classNames={{
              trigger: [
                "bg-[#18181B]",
                "data-[hover=true]:bg-[#27272a]", 
                "data-[focus=true]:bg-[#27272a]",
                "shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D]"
              ].join(" "),
              popoverContent:[
                "bg-[#18181B]",
                "data-[hover=true]:bg-[#27272a]", 
                "data-[focus=true]:bg-[#27272a]",
              ].join(" "),
              value: "text-white",
            }}
            listboxProps={{
              itemClasses: {
                title: "text-white!",
              },
            }}
          >
            <SelectItem key="Buildings" className='font-inter'>Buildings</SelectItem>
            <SelectItem key="Products" className='font-inter'>Products</SelectItem>
            <SelectItem key="Elements" className='font-inter'>Elements</SelectItem>
            <SelectItem key="2D Drawings" className='font-inter'>2D Drawings</SelectItem>
          </Select>
        </div>
      </div>
      
      {/* Keywords */}
      <div className="space-y-2">
        <label className="text-white text-sm block">Keywords</label>
        
        {/* 輸入框 */}
        <Input
          value={keywordInput}
          onValueChange={setKeywordInput} // 這裡只更新暫存文字
          onKeyDown={handleKeywordKeyDown} // 偵測 Enter
          aria-label='Keywords Input'
          placeholder={metadata.keywords.length > 0 ? "Add more keywords..." : "Type and press Enter to add tags"}
          classNames={{
            inputWrapper: [
              "bg-[#18181B]",
              "data-[hover=true]:bg-[#27272a]", 
              "data-[focus=true]:bg-[#27272a]",
              "shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D]"
            ].join(" "),
            // 確保輸入框裡面的文字和 placeholder 顯示正常
            input: "text-white placeholder:text-gray-500"
          }}
          endContent={
            <span className="text-xs text-gray-500">Enter to add</span>
          }
        />

        {/* 顯示 Keywords Tags (Chips) */}
        <div className="flex flex-wrap gap-2 mt-2">
          {metadata.keywords.map((keyword, index) => (
            <Chip
              key={index}
              onClose={() => handleRemoveKeyword(keyword)}
              variant="flat"
              classNames={{
                base: "bg-[#27272A] border border-white/10 hover:bg-[#3F3F46] transition-colors",
                content: "text-white text-xs font-inter",
                closeButton: "text-gray-400 hover:text-white"
              }}
            >
              {keyword}
            </Chip>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label className="text-white text-sm flex items-center gap-2">
          Description <Info size={16} className="text-gray-400" />
        </label>
        <Textarea
          value={metadata.description}
          onValueChange={(v) => handleTextChange('description', v)}
          aria-label='Description Textarea'
          placeholder="Please add some description for your model. You can also click the button to get a template"
          minRows={4}
          classNames={{
              inputWrapper: [
                "bg-[#18181B]",
                "data-[hover=true]:bg-[#27272a]", 
                "data-[focus=true]:bg-[#27272a]",
                "shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D]"
              ].join(" "),
              // 確保輸入框裡面的文字和 placeholder 顯示正常
              input: "text-white placeholder:text-gray-500"
            }}
        />
      </div>

      {/* Images / Cover */}
      <div className="space-y-2 ">
        <label className="text-white text-sm flex items-center gap-2">
          Images <HelpCircle size={16} className="text-gray-400" />
        </label>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* 左側：Cover Image */}
          <div className="relative aspect-video rounded-xl group overflow-hidden shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D]"
              onClick={() => setIsCropOpen(true)}>
            {coverImage ? (
              <>
                <Image src={coverImage} alt='Cover' fill className='object-cover' unoptimized />
                <div className="absolute top-2 left-2 bg-[#D70036] text-white text-[10px] px-2 py-1 rounded z-10">COVER</div>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity z-20">
                  <span className="text-white font-medium">點擊裁切</span>
                </div>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
                No Cover Image
              </div>
            )}
          </div>

          <Modal isOpen={isCropOpen} onClose={() => setIsCropOpen(false)} size="2xl">
            <ModalContent className='bg-[#18181B] text-white'>
              <ModalHeader>裁切封面圖片</ModalHeader>
              <ModalBody>
                <div className="relative w-full h-[400px] bg-black rounded-lg overflow-hidden">
                  {coverImage && (
                    <Cropper
                      image={coverImage}
                      crop={crop}
                      zoom={zoom}
                      aspect={16/12}
                      onCropChange={setCrop}
                      onCropComplete={onCropComplete}
                      onZoomChange={setZoom}
                    />
                  )}
                </div>
                <div className="px-4 py-2">
                  <p className="text-small text-zinc-400 mb-2">縮放</p>
                  <Slider
                    aria-label="Zoom"
                    step={0.1}
                    minValue={1}
                    maxValue={3}
                    value={zoom}
                    onChange={(v) => setZoom(v as number)}
                    className="max-w-md"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" color="danger" onPress={() => setIsCropOpen(false)}>
                  取消
                </Button>
                <Button className="bg-[#D70036] text-white" onPress={handleSaveCrop}>
                  確認裁切
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          {/* 右側：上傳更多圖片 */}
          <div className="col-span-2 h-full rounded-xl bg-[#18181B] shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D] p-3 overflow-y-auto">
            
            <input 
              type="file" 
              ref={moreImagesInputRef} 
              onChange={handleMoreImagesChange} 
              accept="image/png, image/jpeg, image/jpg"
              multiple 
              className="hidden" 
            />

            <div className="grid grid-cols-4 gap-3 h-full">
              {additionalImages.map((img, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden group bg-black/40 border border-white/10">
                  <Image src={img.preview} alt={`Upload ${index}`} fill className="object-cover" unoptimized />
                  <button 
                    onClick={(e) => handleRemoveImage(index, e)}
                    className="absolute top-0 right-0 lg:top-1 lg:right-1 bg-red-500 lg:hover:bg-red-500 text-white p-2 lg:p-1 rounded-md lg:rounded-full transition-colors opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}

              {/* 如果沒有圖片，佔滿全部(col-span-4)；如果有圖片，變回方塊(aspect-square) */}
              {additionalImages.length < 8 && (
                <div 
                  onClick={handleUploadClick}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`
                    rounded-lg border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all
                    ${isDragging 
                      ? 'border-[#D70036] bg-[#27272A]' 
                      : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                    }
                    ${additionalImages.length === 0 
                      ? 'col-span-4 h-full w-full' // 沒照片時：填滿容器
                      : 'aspect-square'            // 有照片時：變成方塊
                    } 
                  `}
                >
                  <FileUp size={additionalImages.length === 0 ? 32 : 20} className={isDragging ? 'text-[#D70036]' : 'text-gray-400'} />
                  
                  {additionalImages.length === 0 ? (
                    <div className="text-center mt-2">
                      <p className="text-white text-xs">Drop images here or <span className="text-[#D70036]">browse</span></p>
                      <p className="text-gray-500 text-[10px] mt-1">Max 8 images</p>
                    </div>
                  ) : (
                    <span className="text-[10px] text-gray-400 mt-1">Add +</span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Belonging Team & 動態專案關聯 */}
      <div className='flex flex-col gap-6'>
        {/* 1. 選擇隸屬團隊 (全局)
        <div className="space-y-2">
          <label className="text-white text-sm block">Belonging Team</label>
          <Select
            selectedKeys={metadata.team ? [metadata.team] : []}
            onSelectionChange={handleTeamChange}
            aria-label='Belonging Team Select'
            placeholder="None"
            classNames={{
              trigger: "bg-[#18181B] data-[hover=true]:bg-[#27272a] data-[focus=true]:bg-[#27272a] shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D]",
              popoverContent: "bg-[#18181B]",
              value: "text-white",
            }}
          >
            {[
              { id: "none", name: "None" },
              ...uploadableTeams
            ].map((team) => (
              <SelectItem key={team.id} className="text-white">
                {team.name}
              </SelectItem>
            ))}
          </Select>
        </div> */}

        {/* 2. 動態專案與階段關聯清單 */}
        {metadata.team && metadata.team !== "none" && (
          <div className="space-y-3 bg-[#18181B]/50 p-4 rounded-xl border border-white/5">
            <label className="text-white text-sm block mb-2">Publish to Projects</label>

            {metadata.associations.map((assoc, index) => {
              // 🌟 核心防呆：過濾掉「已被其他列選中」的專案，確保不重複
              const availableProjects = projectOptions.filter(p => 
                p.id === assoc.projectId || !metadata.associations.some(a => a.projectId === p.id)
              );

              const currentPhaseOptions = phasesCache[assoc.projectId] || [];

              return (
                <div key={index} className="flex items-center gap-3 bg-[#18181B] p-2 rounded-lg shadow-sm border border-white/10">
                  {/* 專案選擇 */}
                  <Select
                    selectedKeys={assoc.projectId ? [assoc.projectId] : []}
                    onSelectionChange={(keys) => handleAssociationChange(index, 'projectId', Array.from(keys)[0] as string)}
                    isLoading={isLoadingProjects}
                    aria-label='Project Select'
                    placeholder="Select a project"
                    className="flex-1"
                    classNames={{
                      trigger: "bg-[#27272A] hover:bg-[#3F3F46]",
                      popoverContent: "bg-[#18181B]",
                      value: "text-white",
                    }}
                  >
                    {availableProjects.map((proj) => (
                      <SelectItem key={proj.id} className='font-inter text-white'>
                        {proj.name}
                      </SelectItem>
                    ))}
                  </Select>

                  {/* 階段選擇 */}
                  <Select
                    selectedKeys={assoc.phaseId === null ? ["unclassified"] : (assoc.phaseId ? [assoc.phaseId] : [])}
                    onSelectionChange={(keys) => {
                      const val = Array.from(keys)[0] as string;
                      handleAssociationChange(index, 'phaseId', val === "unclassified" ? null : val);
                    }}
                    isDisabled={!assoc.projectId}
                    isLoading={loadingPhases[assoc.projectId] || false}
                    aria-label='Phase Select'
                    placeholder="Select a phase"
                    className="flex-1"
                    classNames={{
                      trigger: "bg-[#27272A] hover:bg-[#3F3F46]",
                      popoverContent: "bg-[#18181B]",
                      value: "text-white",
                    }}
                  >
                    {[
                      { id: "unclassified", name: "[ 未分類 Unclassified ]" },
                      ...currentPhaseOptions
                    ].map((phase) => (
                      <SelectItem 
                        key={phase.id} 
                        className={`font-inter ${phase.id === "unclassified" ? 'text-gray-400' : 'text-white'}`}
                      >
                        {phase.name}
                      </SelectItem>
                    ))}
                  </Select>

                  {/* 刪除此列按鈕 */}
                  <Button 
                    isIconOnly 
                    variant="light" 
                    color="danger" 
                    onPress={() => removeAssociation(index)}
                    className="min-w-unit-10"
                  >
                    <Trash2 size={18} />
                  </Button>
                </div>
              );
            })}

            {/* 🌟 新增按鈕：如果關聯數量已達到可選專案數量，則停用按鈕 */}
            <Button 
              onPress={addAssociation}
              isDisabled={projectOptions.length === 0 || metadata.associations.length >= projectOptions.length}
              className="w-full mt-2 bg-transparent border-1 border-dashed border-white/20 text-gray-400 hover:border-white/50 hover:text-white"
            >
              <Plus size={18} /> Add to another project
            </Button>
          </div>
        )}
      </div>
        
      {/* Associated Model Set */}
      <div className="space-y-2">
        <label className="text-white text-sm flex items-center gap-2">
          Related model posts <HelpCircle size={16} className="text-gray-400" />
        </label>
        <div className="flex gap-2">
          <div className="flex-grow min-h-[40px] p-2 bg-[#18181B] rounded-xl shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D] flex flex-wrap gap-2 items-center">
            
            {metadata.relatedPosts.length === 0 ? (
                // 狀態 1：尚未選擇任何東西
                <span className="text-zinc-500 text-sm pl-2">None selected</span>
            ) : (
                // 狀態 2：顯示已選取的標籤
                metadata.relatedPosts.map((post) => (
                    <Chip 
                        key={post.id} 
                        variant="flat"
                        classNames={{
                            base: "bg-[#27272A] border-1 border-white/10",
                            content: "text-white text-xs",
                            closeButton: "text-zinc-400 hover:text-danger"
                        }}
                    >
                      {post.title} 
                    </Chip>
                ))
            )}
        </div>
          <Button onPress={onOpen} className="px-3 bg-[#3F3F46] shadow-[0px_0px_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_4px_2px_#FFFFFF33] text-white">
            Browse <Inbox size={25} className="w-[60%] h-[60%] ml-1" />
          </Button>
        </div>
        <RelatedPostsModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          currentSelectedPosts={metadata.relatedPosts}
          onConfirm={handleRelatedPostsConfirm}
          excludePostShortIds={currentPostShortId ? [currentPostShortId] : []}
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Permission Setting */}
        <div className="space-y-2">
          <label className="text-white text-sm block">Permission Setting</label>
          <Select
            selectedKeys={metadata.permission ? [metadata.permission] : ["standard"]}
            onSelectionChange={(k) => handleSelectionChange('permission', k)}
            aria-label='Permission Setting Select'
            classNames={{
              trigger: [
                "bg-[#18181B]",
                "data-[hover=true]:bg-[#27272a]", 
                "data-[focus=true]:bg-[#27272a]",
                "shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D]"
              ].join(" "),
              popoverContent:[
                "bg-[#18181B]",
                "data-[hover=true]:bg-[#27272a]", 
                "data-[focus=true]:bg-[#27272a]",
              ].join(" "),
              value: "text-white",
            }}
            listboxProps={{
              itemClasses: {
                title: "text-white!",
              },
            }}
          >
            <SelectItem key="standard">Standard License</SelectItem>
            <SelectItem key="private">Private</SelectItem>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default MetadataForm;