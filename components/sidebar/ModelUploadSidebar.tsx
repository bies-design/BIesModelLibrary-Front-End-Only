"use client";

import React, { useState, useRef, useEffect } from 'react';
import { 
  Button,
  Tooltip,
  Spinner, 
  Dropdown,
  DropdownTrigger, 
  DropdownMenu, 
  DropdownItem,
  DropdownSection,
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  useDisclosure, 
  Checkbox
} from "@heroui/react";
import { 
  PanelLeftClose, 
  PanelLeftOpen,
  FileText, 
  Box, 
  FileUp,
  Focus,
  Trash2,
  CloudDownload,
  RefreshCw,
  Loader2,
  ChevronRight,
  BrushCleaning,
  ChevronDown,
  Image as ImageIcon,
  FileBox,
  PenTool
} from 'lucide-react';
import * as OBC from "@thatopen/components";
import { useUpload } from "@/context/UploadContext";
// 🚀 替換為我們新寫的 File API
import { getUserFiles, deleteFileRecord, getFileDownloadUrl } from '@/lib/actions/file.action'; 
import { getUserTeams } from '@/lib/actions/team.action';
import * as THREE from 'three';
import { FileItem } from '@/app/(uploadAndDashboard)/upload/page';
import { FileCategory } from '@/prisma/generated/prisma';

// 擴展 UIModel 型別以包含 category
export interface UIFileRecord {
  id: string;
  fileId: string;
  viewerFileId?: string | null;
  name: string;
  size: string;
  status: "uploading" | "processing" | "completed" | "error";
  category: FileCategory;
}

interface ModelUploadSidebarProps {
  getComponents?: () => OBC.Components | null;
  onFilesChange: (files: FileItem[]) => void;
  onSelectFile: (file: FileItem | null) => void;
  selectedFileId: string | null;
  loadedFiles: FileItem[];
  setLoadedFiles: React.Dispatch<React.SetStateAction<FileItem[]>>;
  onLoadModel: (buffer: ArrayBuffer, modelName: string) => void;
  onFocusAllModel: () => void;
  onFocusModel: (modelId: string) => void;
  onDeleteModel: (modelId: string) => void;  
  preLoadedModels?: FileItem[];
  selectedPublishIds: string[];
  onTogglePublish: (id: string) => void;
  onWorkspaceChange?: (workspaceId: string) => void;
}

const ModelUploadSidebar = ({ 
  getComponents,
  onFilesChange, 
  onSelectFile,
  selectedFileId,
  loadedFiles,
  setLoadedFiles,
  onLoadModel,
  onFocusAllModel,
  onFocusModel, 
  onDeleteModel,
  preLoadedModels,
  selectedPublishIds,
  onTogglePublish,
  onWorkspaceChange
}: ModelUploadSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [files, setFiles] = useState<FileItem[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [isLoading, setIsLoading] = useState(true);
  const [completedFiles, setCompletedFiles] = useState<UIFileRecord[]>([]);
  const [loadingModelId, setLoadingModelId] = useState<string | null>(null);
  
  const { uppy } = useUpload();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
  const [modelToDelete, setModelToDelete] = useState<string | null>(null);
  const [modelIdToDelete, setModelIdToDelete] = useState<string | null>(null);

  // 使用者選擇的上傳目標分類
  const [uploadTargetCategory, setUploadTargetCategory] = useState<FileCategory>(FileCategory.MODEL_3D);

  const [teams, setTeams] = useState<{id: string, name: string, role:string}[]>([]);
  const [currentWorkspace, setCurrentWorkspace] = useState<string>("personal");

  // 展開狀態管理 (為每種分類準備一個)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    MODEL_3D: true,
    DOCUMENT: true,
    DRAWING: true,
    IMAGE: true,
    OTHER: true,
    LOADED: true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };
  // 初始 取得該使用者團隊清單
  useEffect(() => {
    const fetchTeams = async () => {
      const res = await getUserTeams();
      if (res.success && res.data) setTeams(res.data);
    };
    fetchTeams();
  }, []);
  // 🚀 撈取所有 FileRecord 資料
  const fetchUserFilesData = async () => {
    setIsLoading(true);
    try {
      // 🚀 將當前工作區傳給 API
      const result = await getUserFiles(currentWorkspace); 
      if (result.success && result.data) {
        setCompletedFiles(result.data);
      }
    } catch (error) { console.error(error); } 
    finally { setIsLoading(false); }
  };
  useEffect(() => {
    fetchUserFilesData();
    console.log(currentWorkspace);
  }, [currentWorkspace]);
  // useEffect(() => {
  //   fetchUserFilesData();
  // }, []);
  // 當工作區改變時，不僅自己要重新拉取檔案，也要通知父層
  useEffect(() => {
      fetchUserFilesData();
      if (onWorkspaceChange) {
          onWorkspaceChange(currentWorkspace);
      }
  }, [currentWorkspace]);

  const getTechnicalType = (fileName: string): '3d' | 'pdf' | 'other' => {
      const ext = fileName.split('.').pop()?.toLowerCase();
      if (['ifc', 'obj', 'gltf', '3dm', 'frag'].includes(ext || '')) return '3d';
      if (ext === 'pdf') return 'pdf';
      return 'other';
  };

  // 處理檔案上傳邏輯
  const handleFiles = (uploadedFiles: FileList | null) => {
    if (!uploadedFiles) return;

    const newFiles: FileItem[] = Array.from(uploadedFiles).map(file => {
      const techType = getTechnicalType(file.name);
      // 把使用者選的分類塞進 Uppy Metadata
      try {
        uppy.addFile({
          name: file.name,
          type: file.type,
          data: file,
          source: 'Local',
          meta: {
            category: uploadTargetCategory, // 傳遞給 Tus Server
            teamId: currentWorkspace === 'personal' ? null : currentWorkspace 
          }
        });
        console.log(`[Uppy] 檔案已加入佇列，分類為: ${uploadTargetCategory}`);
      } catch (err) {
        console.warn(`[Uppy] 無法加入檔案 (可能已存在):`, err);
      }

      const newItem: FileItem = {
          dbId: Math.random().toString(36).substr(2, 9),
          fileId: "",
          file,
          type: techType, // 🚀 使用精準判定的類別
          name: file.name
      };

      return newItem;
    });

    const updatedFiles = [...files, ...newFiles];
    setFiles(updatedFiles);
    onFilesChange(updatedFiles);

    if (fileInputRef.current) fileInputRef.current.value = ""; 
    setTimeout(()=>fetchUserFilesData(),500)
  };

  // 刪除確認邏輯
  const openDeleteModal = (name: string, id: string) => {
    setModelToDelete(name);
    setModelIdToDelete(id);
    onOpen();
  };

  const handleConfirmDelete = async () => {
        if (!modelToDelete || !modelIdToDelete) return;
        onOpenChange();
        // 這裡的邏輯是從雲端刪除，我們找到對應的載入項也一起拔掉
        const loadedItem = loadedFiles.find(f => f.name === modelToDelete);
        if (loadedItem) removeFileFromScene(loadedItem);
        
        await deleteFileRecord(modelIdToDelete);
        fetchUserFilesData();
    };

  // 下載並載入 ifc 模型
  const downloadAndLoadFrag = async(dbId: string, fileId: string, viewerFileId: string | null | undefined, modelName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if(loadingModelId) return;

    try {
      setLoadingModelId(modelName);
      if(!viewerFileId) throw new Error("該檔案目前不支援預覽!");
      const response = await fetch(`/api/viewfile/${viewerFileId}`);
      if (!response.ok) throw new Error("下載失敗");

      const buffer = await response.arrayBuffer();

      const real3dFile = new File([buffer], modelName, { type: 'application/octet-stream' });

      const newLoadedItem: FileItem = {
        dbId: dbId,
        file: real3dFile,
        type: '3d',
        name: modelName,
        fileId: fileId,
      };

      setLoadedFiles(prev => [...prev, newLoadedItem]);
      onSelectFile(newLoadedItem);
      
    } catch (error) {
      console.error("載入失敗:", error);
    } finally {
      setLoadingModelId(null);
    }
  };

  // 下載並預覽 PDF
  const downloadAndLoadPdf = async (dbId: string, fileId: string, fileName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if(loadingModelId) return;

    try {
      setLoadingModelId(fileName); // 讓這筆檔案顯示 Spinner
      
      const urlResult = await getFileDownloadUrl(fileId, fileName); 
      if (!urlResult.success || !urlResult.url) {
          throw new Error(urlResult.error || "無法取得檔案下載權限");
      }

      const response = await fetch(urlResult.url);
      if (!response.ok) throw new Error("PDF 下載失敗");

      // 1. 將回傳資料轉成 Blob
      const blob = await response.blob();
      
      // 2. 將 Blob 包裝成真正的 File 物件
      const realPdfFile = new File([blob], fileName, { type: 'application/pdf' });

      const newLoadedItem: FileItem = {
        dbId: dbId,
        file: realPdfFile, 
        type: 'pdf',
        name: fileName,
        fileId: fileId,
      };
      
      setLoadedFiles(prev => [...prev, newLoadedItem]);
      onSelectFile(newLoadedItem);

    } catch (error) {
      console.error("載入 PDF 失敗:", error);
      alert("載入 PDF 失敗，請稍後再試");
    } finally {
      setLoadingModelId(null);
    }
  };

  // 下載並預覽圖片
  const downloadAndLoadImage = async (dbId: string, fileId: string, fileName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if(loadingModelId) return;

    try {
      setLoadingModelId(fileName); // 讓這筆檔案顯示 Spinner
      
      const urlResult = await getFileDownloadUrl(fileId, fileName); 
      if (!urlResult.success || !urlResult.url) {
          throw new Error(urlResult.error || "無法取得檔案下載權限");
      }

      const response = await fetch(urlResult.url);
      if (!response.ok) throw new Error("圖片下載失敗");

      // 1. 將回傳資料轉成 Blob
      const blob = await response.blob();
      
      // 判斷精確的 MimeType (選填，但為了嚴謹建議加上)
      const ext = fileName.split('.').pop()?.toLowerCase();
      let mimeType = 'image/jpeg';
      if (ext === 'png') mimeType = 'image/png';
      if (ext === 'webp') mimeType = 'image/webp';
      
      // 2. 將 Blob 包裝成真正的 File 物件
      const realImageFile = new File([blob], fileName, { type: mimeType });

      const newLoadedItem: FileItem = {
        dbId: dbId,
        file: realImageFile, 
        type: 'other', // 根據你定義的型別，圖片先暫定為 'other'，父層會用副檔名判斷
        name: fileName,
        fileId: fileId,
      };
      
      setLoadedFiles(prev => [...prev, newLoadedItem]);
      onSelectFile(newLoadedItem);

    } catch (error) {
      console.error("載入圖片失敗:", error);
      alert("載入圖片失敗，請稍後再試");
    } finally {
      setLoadingModelId(null);
    }
  };

  const focusModel = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if(getComponents){
      const components = getComponents();
      if(components){
        const fragments = components.get(OBC.FragmentsManager);
        const model = fragments.list.get(id);
        if(model){
          const worlds = components.get(OBC.Worlds);
          const world = worlds.list.values().next().value;
          if(world && world.camera.controls){
            model.object.updateMatrixWorld(true);
            const box = new THREE.Box3().setFromObject(model.object);
            if (!box.isEmpty()) {
              world.camera.controls?.fitToBox(model.object, true);       
            }
          }
        }
      }
    }
  };

  const removeFileFromScene = (item: FileItem) => {
      // 1. 如果是 3D 模型，通知父層從 IFC 引擎移除
      if (item.name.toLowerCase().endsWith('.ifc')) {
          onDeleteModel(item.name.replace(/\.(ifc|frag)$/i, ""));
      }
      
      // 2. 從 Loaded 清單移除
      setLoadedFiles(prev => prev.filter(f => f.dbId !== item.dbId));
      console.log(item);

      // 3. 核心：如果目前正在預覽的就是這檔案，立刻清空預覽
      if (selectedFileId === item.dbId) {
          onSelectFile(null);
      }
  };

  const removeModelFromScene = (modelName: string) => {
    onDeleteModel(modelName);
    setLoadedFiles(prev => prev.filter(f => f.name !== modelName));
  };

  // 拖放處理
  const onDragOver = (e: React.DragEvent) => e.preventDefault();
  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  // 🚀 分類檔案資料 (過濾掉已經在場景中的)
  const getFilteredFiles = (category: FileCategory) => {
    return completedFiles.filter(f => 
      f.category === category && !loadedFiles.some(lf => lf.name === f.name)
    );
  };

  // 🚀 共用的渲染清單組件
  const renderFileSection = (title: string, category: FileCategory, icon: React.ReactNode) => {
    const sectionFiles = getFilteredFiles(category);
    const isExpanded = expandedSections[category];

    if (sectionFiles.length === 0 && !isLoading) return null; // 沒資料就隱藏該分類

    return (
      <div className='flex flex-col mb-2'>
        <div 
          className="flex items-center justify-between cursor-pointer px-2 mb-2 group"
          onClick={() => toggleSection(category)}
        >
          <div className="flex items-center gap-2">
              {icon}
            <p className="font-inter text-[#A1A1AA] text-xs uppercase group-hover:text-white transition-colors">
              {title} ({sectionFiles.length})
            </p>
          </div>
          <ChevronDown size={14} className={`text-[#A1A1AA] transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"}`} />
        </div>

        <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden flex flex-col gap-2 px-1">
            {isLoading ? (
              <div className="flex justify-center p-2"><Spinner size="sm" /></div>
            ) : (
              sectionFiles.map((item) => {
                const lowerName = item.name.toLowerCase();
                const isIfc = lowerName.endsWith('.ifc');
                const isPdf = lowerName.endsWith('.pdf');
                const isImage = lowerName.endsWith('.jpg') || lowerName.endsWith('.jpeg') || lowerName.endsWith('.png') || lowerName.endsWith('.webp');
                const isViewable = isIfc || isPdf || isImage;
                return(
                  <div 
                    key={item.id}
                    className="group flex items-center gap-3 p-3 rounded-xl bg-[#27272A] text-gray-300 border border-transparent hover:border-white/10 transition-all"
                  >
                    {/* 發布用的打勾框 */}
                    <Checkbox 
                      color="danger" // 紅色比較符合你的 UI 風格
                      isSelected={selectedPublishIds.includes(item.id)}
                      onValueChange={() => onTogglePublish(item.id)}
                    />
                    <Tooltip content={`${item.name}`} placement='bottom' className='bg-black text-white'>
                      <span className="text-sm truncate flex-grow">{item.name}</span>
                    </Tooltip>
                    
                    {item.name === loadingModelId ? (<Loader2 size={16} className="animate-spin"/>) : ( 
                      <>
                        {/* 只有 3D 模型顯示載入按鈕 */}
                        {isViewable && (
                          <Tooltip content="Load to Viewer" placement='bottom' className='bg-black text-white'>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                if (isIfc) {
                                  // 載入 ifc 模型
                                  downloadAndLoadFrag(item.id, item.fileId, item.viewerFileId, item.name, e);
                                } else if (isPdf) {
                                  // 載入 PDF 
                                  downloadAndLoadPdf(item.id, item.fileId, item.name, e);
                                } else if (isImage) {
                                  // 載入 圖片
                                  downloadAndLoadImage(item.id, item.fileId, item.name, e);
                                }
                              }}
                              className="text-gray-400 hover:text-[#10B981] transition-colors"
                            >
                              <CloudDownload size={16}/>
                            </button>
                          </Tooltip>
                        )}
                        
                        {/* 刪除選單 */}
                        <Dropdown placement='right-start' classNames={{ content:"bg-black" }}>
                          <DropdownTrigger>
                              <button><ChevronRight size={16} className="shrink-0" /></button>
                          </DropdownTrigger>  
                          <DropdownMenu aria-label='more options' variant='flat' itemClasses={{ base:"text-white" }}>
                            <DropdownItem 
                              key="Delete" 
                              onPress={() => openDeleteModal(item.name, item.fileId)} 
                              endContent={<Trash2 size={20} className='text-danger'/>}
                              className="text-danger"
                            >
                              Delete From Storage
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  };


  if (isCollapsed) {
    return (
      <div className="relative z-50 flex justify-center items-center w-10 h-10 rounded-xl transition-all duration-300">
        <Button
          isIconOnly
          variant="light"
          onPress={() => setIsCollapsed(false)}
          className="text-white rounded-xl bg-[#3F3F46] transition-all duration-300 shadow-[0px_0px_2px_0px_#000000B2,inset_0px_-4px_4px_0px_#00000040,inset_0px_4px_2px_0px_#FFFFFF33]"
        >
          <PanelLeftOpen size={20} />
        </Button>
      </div>
    );
  }

  return (
    <div className="relative z-30 shadow-[inset_0px_1px_5px_rgba(255,255,255,0.8),inset_0px_-1px_3px_rgba(0,0,0,0.8)] dark:shadow-[inset_0px_2px_1px_rgba(255,255,245,0.2),inset_0px_-2px_8px_rgba(0,0,0,0.4),0px_25px_50px_-12px_#00000040] rounded-[14px] h-full w-72 bg-[#18181B] flex flex-col transition-all duration-300 overflow-hidden">
      
      {/* 標題欄 */}
      <div className="p-4 flex justify-between items-center border-b border-[#FFFFFF1A]">
          <Dropdown placement="bottom-start" classNames={{ content: "bg-[#27272A] min-w-[200px]" }}>
              <DropdownTrigger>
                  {/* 這裡改成 button 讓它具備點擊互動效果 */}
                  <button className="font-inter text-[#A1A1AA] flex items-center gap-2 hover:opacity-80 transition-opacity outline-none">
                      <FileBox size={18} className="shrink-0" />
                      <span className="font-bold text-white flex items-center gap-1 text-left line-clamp-1">
                          {currentWorkspace === "personal" 
                              ? "Personal Assets" 
                              : `${teams.find(t => t.id === currentWorkspace)?.name} Assets`}
                          <ChevronDown size={14} className="text-[#A1A1AA] shrink-0"/>
                      </span>
                  </button>
              </DropdownTrigger>
              
              <DropdownMenu 
                  aria-label="Select Workspace"
                  onAction={(key) => setCurrentWorkspace(key.toString())}
                  itemClasses={{ base: "text-white" }}
              >
                {/* 第一區：靜態的個人空間 (showDivider 會在底部加一條分隔線) */}
                <DropdownSection showDivider>
                    <DropdownItem key="personal" description="私人資產空間">
                        👤 Personal
                    </DropdownItem>
                </DropdownSection>
                  {/* 第二區：動態的團隊列表 
                把陣列傳給 DropdownSection 的 items 屬性，
                然後在裡面寫一個 function 來 return DropdownItem 
                */}
                <DropdownSection items={teams} title="所屬團隊">
                    {(team) => (
                        <DropdownItem key={team.id} description="團隊共用資源">
                            👥 {team.name}
                        </DropdownItem>
                    )}
                </DropdownSection>
              </DropdownMenu>
          </Dropdown>
          <div className="flex items-center gap-2 shrink-0">
              <Tooltip content="Refresh Files" placement='bottom' className='bg-black text-white'>
                <button onClick={() => fetchUserFilesData()} className="text-[#A1A1AA] hover:text-white">
                  <RefreshCw size={16} />
                </button>
              </Tooltip>
              <Button
                isIconOnly
                variant="light"
                onPress={() => setIsCollapsed(true)}
                className="text-white rounded-xl bg-[#3F3F46] shadow-[0px_0px_2px_0px_#000000B2,inset_0px_-4px_4px_0px_#00000040,inset_0px_4px_2px_0px_#FFFFFF33] ml-2"
              >
                <PanelLeftClose size={20} />
              </Button>
          </div>
      </div>

      {/* 🚀 上傳區域 (含分類選擇器) */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-[#A1A1AA] font-inter text-xs uppercase">Target Category</p>
          <Dropdown placement="bottom-end" classNames={{ content: "bg-[#27272A] min-w-[150px]" }}>
            <DropdownTrigger>
              <Button size="sm" variant="flat" className="text-white bg-[#3F3F46]">
                {uploadTargetCategory.replace('MODEL_', '')} <ChevronDown size={14} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu 
              aria-label="Select Category"
              onAction={(key) => setUploadTargetCategory(key as FileCategory)}
              itemClasses={{ base: "text-white" }}
            >
              <DropdownItem key={FileCategory.MODEL_3D} description=".ifc / .3dm / .gltf / .obj">3D Model</DropdownItem>
              <DropdownItem key={FileCategory.DOCUMENT} description=".pdf / .docx / .xlsx">Document</DropdownItem>
              <DropdownItem key={FileCategory.DRAWING} description=".dwg / .pdf / .png">Drawing</DropdownItem>
              <DropdownItem key={FileCategory.IMAGE} description="..jpg / .png / .webp">Image</DropdownItem>
              <DropdownItem key={FileCategory.OTHER} description="">Other</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

        <div 
          onDragOver={onDragOver}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
          className="shadow-[inset_0px_3px_5px_1px_#000000A3,inset_0px_-1px_2px_#00000099,0px_3px_1.8px_#FFFFFF29,0px_-2px_1.9px_#00000040,0px_0px_4px_#FBFBFB3D] rounded-xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#D70036] transition-colors bg-[#27272A]"
        >
          <div><FileUp size={32} className="text-white" /></div>
          <p className="text-white text-xs text-center leading-relaxed">
            Drop your files here <br/>
            <span className="text-[#A1A1AA]">Current: {uploadTargetCategory.replace('MODEL_', '')}</span>
          </p>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            multiple // 🚀 拔掉 accept 限制，支援所有格式
            onChange={(e) => handleFiles(e.target.files)}
          />
        </div>
      </div>

      {/* 🚀 列表區域 (分類渲染) */}
      <div className="flex-grow overflow-y-auto p-4 border-t border-[#FFFFFF1A]">
        
        {/* 1. 已載入場景的 3D 模型 */}
        {loadedFiles.length > 0 && (
          <div className="flex flex-col mb-4">
            <div className="flex items-center justify-between cursor-pointer px-2 mb-2 group" onClick={() => toggleSection('LOADED')}>
              <div className="flex items-center gap-2">
                <Box size={14} className="text-[#10B981]" />
                <p className="font-inter text-[#10B981] font-bold text-xs uppercase group-hover:text-green-400">
                  Loaded Files ({loadedFiles.length})
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={(e) => { e.stopPropagation(); onFocusAllModel(); }} className="text-[#10B981] hover:text-green-400"><Focus size={14} /></button>
                <ChevronDown size={14} className={`text-[#10B981] transition-transform ${expandedSections['LOADED'] ? "rotate-180" : "rotate-0"}`} />
              </div>
            </div>
            
            <div className={`grid transition-all duration-300 ${expandedSections['LOADED'] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden flex flex-col gap-2 px-1">
                {loadedFiles.map((item)=>(
                  <div 
                    key={item.dbId} 
                    // 點擊整列時，將其設為當前預覽檔案
                    onClick={() => onSelectFile(item)} 
                    className={`group flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all border ${
                      // 🚀 如果是當前選中的檔案，給予高亮樣式
                      selectedFileId === item.dbId 
                        ? 'bg-white/10 border-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.2)]' 
                        : 'bg-[#27272A] border-[#10B981]/30 hover:bg-[#3F3F46]'
                    }`}
                  >
                    {/* 阻擋冒泡：點擊 Checkbox 時不要觸發整列的選取 */}
                    <div onClick={(e) => e.stopPropagation()}>
                      <Checkbox 
                          color="danger"
                          isSelected={selectedPublishIds.includes(item.dbId)}
                          onValueChange={() => onTogglePublish(item.dbId)}
                      />
                    </div>
                    
                    {/* 🚀 加上小圖示區分 3D 還是 PDF */}
                    {item.type === '3d' ? <Box size={14} className="text-blue-400 shrink-0"/> : <FileText size={14} className="text-orange-400 shrink-0"/>}

                    <Tooltip content={`${item.name}`} placement='bottom' className='bg-black text-white'>
                      <span className={`text-sm truncate flex-grow ${selectedPublishIds.includes(item.dbId) ? 'text-white font-bold' : 'text-gray-200'}`}>
                          {item.name}
                      </span>
                    </Tooltip>
                    
                    {/* 阻擋冒泡：點擊按鈕時不要觸發整列的選取 */}
                    <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                      {/* 🚀 只有 3D 模型才顯示 Focus 按鈕 */}
                      {item.type === '3d' && (
                        <button onClick={(e) => {console.log(item.name.replace(/\.(ifc|frag)$/i, "")); onFocusModel(item.name.replace(/\.(ifc|frag)$/i, ""));}} className="text-gray-400 hover:text-white"><Focus size={16}/></button>
                      )}
                      <button onClick={(e) => { removeFileFromScene(item); }} className="text-gray-400 hover:text-danger"><BrushCleaning size={16}/></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. 雲端庫存 (分類顯示) */}
        <p className="text-[#A1A1AA] font-inter text-xs uppercase mb-3 px-2 mt-2">Cloud Storage</p>
        
        {renderFileSection("3D Models", FileCategory.MODEL_3D, <Box size={14} className="text-blue-400"/>)}
        {renderFileSection("Documents", FileCategory.DOCUMENT, <FileText size={14} className="text-orange-400"/>)}
        {renderFileSection("Drawings", FileCategory.DRAWING, <PenTool size={14} className="text-purple-400"/>)}
        {renderFileSection("Images", FileCategory.IMAGE, <ImageIcon size={14} className="text-pink-400"/>)}
        {renderFileSection("Others", FileCategory.OTHER, <FileBox size={14} className="text-gray-400"/>)}
        
      </div>

      {/* 刪除確認 Modal 保持不變 */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='center' classNames={{closeButton:"p-3 text-2xl"}} className="dark text-white bg-[#18181B] shadow-[inset_0px_2px_4px_rgba(255,255,255,0.4),inset_0px_-1px_2px_rgba(0,0,0,0.8),3px_3px_4px_rgba(0,0,0,0.4)]">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Confirm Deletion</ModalHeader>
              <ModalBody>
                <p className="text-gray-400 whitespace-pre-line">Are you sure you want to delete this file?</p>
                <p className="text-red-500 font-bold">This action cannot be undone.</p>              
              </ModalBody>
              <ModalFooter>
                <Button color='default' variant="flat" onPress={onClose} className='text-white hover-lift shadow-[inset_0px_2px_4px_rgba(255,255,255,0.4),inset_0px_-1px_2px_rgba(0,0,0,0.8)]'>Cancel</Button>
                <Button color="primary" onPress={handleConfirmDelete} className='hover-lift shadow-[inset_0px_2px_4px_rgba(255,255,255,0.5),inset_0px_-1px_2px_rgba(0,0,0,0.8)] text-white'>Delete</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

    </div>
  );
};

export default ModelUploadSidebar;