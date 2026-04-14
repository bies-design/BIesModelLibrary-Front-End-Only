"use client";

import React, { useEffect, useRef, useImperativeHandle, forwardRef, useState } from 'react';
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import * as Frags from "@thatopen/fragments";
import { setupComponents } from '../bim-components';
import { FileItem } from '@/app/(uploadAndDashboard)/upload/page';
import * as THREE from 'three';
import * as WEBIFC from 'web-ifc';

export interface Viewer3DRef {
    getComponents: () => OBC.Components | null;
    loadModel:(buffer:ArrayBuffer, modelName:string) => void;
    focusAllModel: () => void;
    focusModel: (modelId:string) => void;
    takeScreenshot: () => Promise<string | null>;
    exportModelFrag: (modelId: string) => Promise<ArrayBuffer | null>;
    deleteModel: (modelId: string) => void;
}
// 材質萃取器
export const extractMaterialsFromIFC = (webIfc: WEBIFC.IfcAPI, modelID: number): Record<string, string> => {
    const elementMaterialMap: Record<string, string> = {};

    try {
        // 1. 取得所有「材質關聯」的 ID (IfcRelAssociatesMaterial)
        const relMaterialIDs = webIfc.GetLineIDsWithType(modelID, WEBIFC.IFCRELASSOCIATESMATERIAL);

        // 遍歷所有的關聯紀錄
        for (let i = 0; i < relMaterialIDs.size(); i++) {
            const relID = relMaterialIDs.get(i);
            const relData = webIfc.GetLine(modelID, relID);
            
            // 確保有關聯的材質與對象
            if (!relData.RelatingMaterial || !relData.RelatedObjects) continue;

            // 2. 取得材質節點
            const materialNodeID = relData.RelatingMaterial.value;
            console.log("expressID: ",materialNodeID);
            const materialNode = webIfc.GetLine(modelID, materialNodeID);
            
            let materialNames: string[] = [];

            // 3. 判斷材質節點類型並提取名稱 (處理你用 Python 發現的巢狀結構)
            if (materialNode.type === WEBIFC.IFCMATERIAL) {
                // [情況 A] 單一材質
                materialNames.push(materialNode.Name?.value || "Unnamed Material");
            } else if (materialNode.type === WEBIFC.IFCMATERIALLAYERSET) {
                // [情況 B] 材質層集 (IfcMaterialLayerSet)
                const layers = materialNode.MaterialLayers;
                if (layers && Array.isArray(layers)) {
                for (const layerRef of layers) {
                    const layerNode = webIfc.GetLine(modelID, layerRef.value);
                    if (layerNode.Material) {
                    const actualMat = webIfc.GetLine(modelID, layerNode.Material.value);
                    materialNames.push(actualMat.Name?.value || "Unnamed Layer");
                    }
                }
                }
            } else if (materialNode.type === WEBIFC.IFCMATERIALLAYERSETUSAGE) {
                // [情況 C] 材質層集使用 (IfcMaterialLayerSetUsage) -> 先找 Set 再找 Layer
                const layerSetNode = webIfc.GetLine(modelID, materialNode.ForLayerSet.value);
                const layers = layerSetNode.MaterialLayers;
                if (layers && Array.isArray(layers)) {
                for (const layerRef of layers) {
                    const layerNode = webIfc.GetLine(modelID, layerRef.value);
                    if (layerNode.Material) {
                    const actualMat = webIfc.GetLine(modelID, layerNode.Material.value);
                    materialNames.push(actualMat.Name?.value || "Unnamed Layer");
                    }
                }
                }
            } else if (materialNode.type === WEBIFC.IFCMATERIALLIST) {
                // [情況 D] 材質列表 (IfcMaterialList)
                const materials = materialNode.Materials;
                if (materials && Array.isArray(materials)) {
                    for (const matRef of materials) {
                    const mat = webIfc.GetLine(modelID, matRef.value);
                    materialNames.push(mat.Name?.value || "Unnamed List Material");
                    }
                }
            }

            // 將陣列組合成一個字串 (例如: "油漆, 混凝土, 隔熱層")
            const finalMaterialName = materialNames.length > 0 ? materialNames.join(", ") : "Unnamed Material";

            // 4. 將抓到的材質名稱，綁定給所有關聯的 3D 物件 (利用 GlobalId)
            const relatedObjects = relData.RelatedObjects;
            for (let j = 0; j < relatedObjects.length; j++) {
                const objID = relatedObjects[j].value;
                const objData = webIfc.GetLine(modelID, objID);
                
                // 確保該物件擁有 GlobalId (IfcRoot 的子類別才會有)
                if (objData.GlobalId) {
                elementMaterialMap[objData.GlobalId.value] = finalMaterialName;
                }
            }
        }
        
        return elementMaterialMap;

    } catch (error) {
        console.error("萃取材質失敗:", error);
        return {};
    }
};

interface Viewer3DProps {
    allFiles?: FileItem[];
    file?: File | null;
    onIFCProcessingChange?: (isProcessing: boolean, fileName: string | null, progress?:number) => void;
}

const Viewer3D = forwardRef<Viewer3DRef, Viewer3DProps>(({ allFiles, file, onIFCProcessingChange }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const componentsRef = useRef<OBC.Components | null>(null);
    const fragmentsRef = useRef<OBC.FragmentsManager | null>(null);
    const [loadedModelsCount, setLoadingModelsCount] = useState<number>(0);
    const [isViewerReady, setIsViewerReady] = useState<boolean>(false);

    const focusModelInternal = async (modelId: string) => {
        if (!componentsRef.current) return;
        const fragments = componentsRef.current.get(OBC.FragmentsManager);
        const highlighter = componentsRef.current.get(OBF.Highlighter);
        const model = fragments.list.get(modelId); 
        
        if (model) {
            console.log(model.box);
            const worlds = componentsRef.current.get(OBC.Worlds);
            const world = worlds.list.values().next().value;
            
            if (world && world.camera instanceof OBC.SimpleCamera){
                try{
                    await world.camera.controls.fitToBox(model.box, true);

                    // const localIds = await model.getLocalIds();

                    // const selectionMap = {
                    //     [modelId]: new Set(localIds)
                    // };

                    // highlighter.clear('select');
                    // highlighter.highlightByID('select', selectionMap, true, false);
                    console.log(`聚焦模型: ${modelId}`);
                } catch (err) {
                    console.warn(`聚焦模型 ${modelId} 時發生錯誤:`, err);
                }
            }
        } else {
            console.warn(`找不到模型 ${modelId} 無法聚焦`);
        }
    };

    useImperativeHandle(ref, () => ({
        getComponents: () => componentsRef.current,
        loadModel: async(buffer,modelName) => {
            if(!componentsRef.current) return;
            const fragments = componentsRef.current.get(OBC.FragmentsManager);
            fragmentsRef.current = fragments;
            const modelId = modelName;
             // Dispose existing model if it has the same ID
            if (fragments.list.has(modelId)) {
                console.error(`Viewer3D already have ${modelId} model in Scene`);
                return;
            }
            const fragModel = await fragments.core.load(buffer, { modelId });
            console.warn(fragments.list);
            // fragments.list.set(modelId, fragModel);
            setLoadingModelsCount(fragments.list.size);
        },
        focusAllModel: async() => {
            if (!componentsRef.current) return;
            const worlds = componentsRef.current.get(OBC.Worlds);
            //get the first world in the list for we just created only one
            const world = worlds.list.values().next().value;
            //make sure this camera is a obc.simplecamera so ts will allow you 
            //to use simplecamera's method fitToItems;
            if(!(world?.camera instanceof OBC.SimpleCamera)) return;

            
            const highlighter = componentsRef.current.get(OBF.Highlighter);
            const selection = highlighter.selection.select;
            //if there's anything highlighted focus the thing
            //else focus the whole
            console.log("選中:",selection);
            await world?.camera.fitToItems(
                    OBC.ModelIdMapUtils.isEmpty(selection)? undefined : selection,
                );
        },
        focusModel: focusModelInternal,
        //screen shot the model
        takeScreenshot: async() => {
            if (!componentsRef.current) return null;
            const worlds = componentsRef.current.get(OBC.Worlds);
            const world = worlds.list.values().next().value;
            if (world && world.renderer) {
                // 強制渲染一幀以確保截圖不是黑屏
                const renderer = world.renderer as OBC.SimpleRenderer;
                const canvas = renderer.three.domElement;

                renderer.three.render(world.scene.three, world.camera.three);
                
                return new Promise<string | null>((resolve) => {
                    canvas.toBlob((blob) => {
                        if (blob) {
                            // 🔥 這裡直接建立 Blob URL
                            // 這只是一個指向記憶體的短字串，效能極佳
                            const url = URL.createObjectURL(blob);
                            resolve(url);
                        } else {
                            resolve(null);
                        }
                    }, 'image/png');
                });
            }
            return null;
        },
        //export the model as .frag file
        exportModelFrag: async(modelId: string) => {
            if(!componentsRef.current) return null;

            const fragments = componentsRef.current.get(OBC.FragmentsManager);
            //find the corresponding group thru modelId
            const model = fragments.list.get(modelId);

            if (model) {
                try {
                    // ✅ 正確用法：使用 getBuffer()
                    // 參數 true 代表包含幾何與屬性資料
                    const fragsBuffer = await model.getBuffer(false);
                    return fragsBuffer;

                } catch (error) {
                    console.error("匯出模型時發生錯誤:", error);
                    return null;
                }
            }
            console.log(`找不到 ID 為 ${modelId} 的模型`);
            return null;
        },
        //delete the model
        deleteModel:(modelId: string)=> {
            if (!componentsRef.current) return;

            const fragments = componentsRef.current.get(OBC.FragmentsManager);
            
            const model = fragments.list.get(modelId);

            if(model){
                //release the memory and remove from the scene and list
                model.dispose();
                console.log(`模型${modelId} 已從場景與記憶體中完全移除`);
            }
        },
    }));

    // Initialize BIM Engine (only on client side)
    useEffect(() => {
        let isMounted = true;
        let currentResizeObserver: ResizeObserver | null = null;

        const initViewer = async () => {
            if (!containerRef.current) return;

            // 呼叫 .ts 模組中的標準 setup
            const { components, viewport, resizeObserver } = await setupComponents();
            
            if(!isMounted){
                components.dispose();
                resizeObserver?.disconnect();
                return;
            }
            
            componentsRef.current = components;
            currentResizeObserver = resizeObserver;
            // 將 BUI Viewport (Web Component) 掛載到 React 容器
            containerRef.current.appendChild(viewport);
            setIsViewerReady(true);
        };

        initViewer();

        return () => {
            isMounted = false;

            if (currentResizeObserver) {
                currentResizeObserver.disconnect();
                console.log("ResizeObserver disconnected");
            }

            if (componentsRef.current) {
                const worlds = componentsRef.current.get(OBC.Worlds);
                for (const world of worlds.list.values()) {
                    if (world.renderer instanceof OBC.SimpleRenderer) {
                        // 🌟 官方認證的 DOM 存取：renderer.three.domElement
                        const canvas = world.renderer.three.domElement;
                        
                        // 移除畫布的父元素 (即我們創建的原生 div viewport)
                        if (canvas.parentElement) {
                            canvas.parentElement.remove();
                        }
                    }
                }
                componentsRef.current.dispose();
                componentsRef.current = null;
                console.warn("Viewer Component unmounted")
            }
        };
    }, []);

    // 處理檔案載入邏輯
    // 🚀 狀態驅動載入邏輯：當外部傳入的 file 改變時，自動載入場景
    useEffect(() => {
        const loadSelectedModel = async () => {
            // 防呆：如果沒有檔案、或是 Viewer 還沒準備好，就跳過
            if (!file || !isViewerReady || !componentsRef.current) {
                console.log("[Viewer3D] 缺少檔案或 Viewer 未就緒，跳過載入");
                return;
            }

            const fragments = componentsRef.current.get(OBC.FragmentsManager);
            
            // 1. 取得模型 ID (去除副檔名)
            const modelId = file.name.replace(/\.(ifc|frag)$/i, "");

            // 2. 判斷是否已經在場景中，如果已經在場景中，就不重複載入
            if (fragments.list.has(modelId)) {
                console.log(`[Viewer3D] 模型 ${modelId} 已存在場景中，直接 Focus`);
                
                return;
            }

            try {
                onIFCProcessingChange?.(true, file.name);
                console.log(`[Viewer3D] 開始自動載入新模型: ${file.name}`);

                // 3. 取得實體資料
                const buffer = await file.arrayBuffer();
                const extension = file.name.split('.').pop()?.toLowerCase();

                // 4. 根據副檔名進行載入
                if (extension === 'frag' || file.type === 'application/octet-stream') {
                    // 如果 Sidebar 下載回來的是轉好的 frag (雖然副檔名可能是 .ifc 但內容其實是轉好的)
                    await fragments.core.load(buffer, { modelId });
                    setLoadingModelsCount(fragments.list.size);
                    console.log(`[Viewer3D] 成功載入: ${modelId}`);
                    
                } 
                else if (extension === 'ifc') {
                    // ⚠️ 注意：如果你未來允許使用者直接把本地的 .ifc 拖曳進來並在本地轉檔，才需要這段
                    // 目前依據你的流程，這段應該會被跳過，因為你交給後端轉檔了
                    console.log(`[Viewer3D] 收到原始 IFC 檔案 ${file.name}，目前設定為後端轉檔不渲染。`);
                }
            } catch (error) {
                console.error(`[Viewer3D] 載入 ${file.name} 失敗:`, error);
            } finally {
                onIFCProcessingChange?.(false, null, 0);
            }
        };

        loadSelectedModel();

    }, [file, isViewerReady]); // 👈 監聽傳入的 file，而不是 allFiles

    return (
        <div className="flex flex-col w-full h-full relative">
            <div 
                ref={containerRef} 
                className='w-full h-full rounded-lg overflow-hidden'
            />
            { loadedModelsCount === 0 && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    <p className="text-gray-500 bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                        請上傳並載入IFC模型
                    </p>
                </div>
            )}
        </div>
    );
});

Viewer3D.displayName = "Viewer3D";

export default Viewer3D;