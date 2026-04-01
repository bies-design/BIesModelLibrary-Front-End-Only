"use client";

import React, { useState, useCallback, useRef,useEffect } from 'react';
import { useDisclosure, Chip, Input, Select, SelectItem, Textarea, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Slider } from "@heroui/react";
import { Info, HelpCircle, FileUp, Inbox, X } from 'lucide-react';
import Cropper from 'react-easy-crop'
import getCroppedImg from '@/utils/cropImage';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import RelatedPostsModal from '../modals/RelatedPostModal';
import { SelectedPost } from '../modals/RelatedPostModal';
import { getUserTeams } from '@/lib/actions/team.action';

export interface ImageFile {
  file?: File;      // 原始檔案 (上傳用)
  key?: string;     // 舊圖片才會有 S3 Key
  preview: string; // Blob URL (預覽顯示用) 
}

export interface Metadata {
  title: string;
  category: string;
  keywords: string[];
  description: string;
  permission: string;
  team: string;
  relatedPosts: SelectedPost[];
}

interface MetadataFormProps {
  coverImage: string | null;
  onCoverChange: (image: string | null) => void;
  additionalImages: ImageFile[];
  onAdditionalImagesChange: (images: ImageFile[]) => void;
  metadata: Metadata;
  onMetadataChange: (data: Metadata) => void;
}

const MetadataForm = ({ 
  coverImage, 
  onCoverChange, 
  additionalImages = [], 
  onAdditionalImagesChange,
  metadata, 
  onMetadataChange 
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

  // 使用者在 Modal 點擊確認時，更新表單狀態
  const handleRelatedPostsConfirm = (selectedPosts: {id:string, title:string}[]) => {
    onMetadataChange({
      ...metadata,
      relatedPosts:selectedPosts
    });
    console.log("準備存入資料庫的關聯 ID:", selectedPosts);
  };

  useEffect(() => {
    const fetchUploadableTeams = async () => {
      if (session?.user?.id) {
        const result = await getUserTeams(session.user.id);
        
        if (result.success && result.data) {
          // 🚀 過濾權限：只保留 role 是 OWNER, ADMIN, 或 EDITOR 的團隊 (排除 VIEWER)
          // ⚠️ 注意：這裡假設 getUserTeams 回傳的資料結構中包含該使用者在該團隊的 role 屬性
          // 如果你的回傳結構不同，請根據實際的欄位名稱調整 (例如: team.role 或 team.TeamMember.role)
          const validTeams = result.data.filter((team: any) => 
            team.role !== "VIEWER" 
          );
          
          setUploadableTeams(validTeams);
        }
      }
    };

    fetchUploadableTeams();
  }, [session?.user?.id]);

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
    onMetadataChange({ ...metadata, [key]: value || "" });
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
            className="text-white "
            classNames={{
              inputWrapper: "bg-[#18181B] shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D]"
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
              trigger: "bg-[#18181B] shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D]",
              value: "text-white",
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
            inputWrapper: "bg-[#18181B] shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D]"
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
            inputWrapper: "bg-[#18181B] shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D]"
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
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Permission Setting */}
        <div className="space-y-2">
          <label className="text-white text-sm block">Permission Setting</label>
          <Select
            selectedKeys={metadata.permission ? [metadata.permission] : ["standard"]}
            onSelectionChange={(k) => handleSelectionChange('permission', k)}
            aria-label='Permission Setting Select'
            classNames={{
              trigger: "bg-[#18181B] shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D]"
            }}
          >
            <SelectItem key="standard">Standard License</SelectItem>
            <SelectItem key="private">Private</SelectItem>
          </Select>
        </div>

        {/* Belonging Team */}
        <div className="space-y-2">
          <label className="text-white text-sm block">Belonging Team</label>
          <Select
            selectedKeys={metadata.team ? [metadata.team] : []}
            onSelectionChange={(k) => handleSelectionChange('team', k)}
            aria-label='Belonging Team Select'
            placeholder="None"
            classNames={{
              trigger: "bg-[#18181B] shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D]"
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
        </div>
      </div>
    </div>
  );
};

export default MetadataForm;