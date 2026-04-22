import * as OBC from "@thatopen/components"
import * as OBCF from "@thatopen/components-front";
import { RGBELoader } from "three/examples/jsm/Addons.js";
import { EquirectangularReflectionMapping } from "three";
import * as THREE from "three";

export const setupFragmentsManager = (components: OBC.Components,world:OBC.SimpleWorld<OBC.SimpleScene,OBC.OrthoPerspectiveCamera,OBC.SimpleRenderer>)=>{
    const fragments = components.get(OBC.FragmentsManager)
    //The worker is set from the node_module for simplicity purpose.
    //To build the app, the worker file should be set inside the public folder
    //at the root of the project and be referenced as "worker.mjs"
    fragments.init("/worker.mjs");
    fragments.core.models.materials.list.onItemSet.add(({ value: material }) => {
        const isLod = "isLodMaterial" in material && material.isLodMaterial;

        if (isLod) {
            // 處理 LOD 材質的後處理特效
            (world.renderer as OBCF.PostproductionRenderer).postproduction.basePass.isolatedMaterials.push(material);
        } 
        else {
            // 移除一般材質的 Z-fighting (破圖現象)
            material.polygonOffset = true;
            material.polygonOffsetUnits = 1;
            material.polygonOffsetFactor = Math.random();
        }
    });
    
    //lighting and reflections
    const hdriLoader = new RGBELoader();
    hdriLoader.load(
        "/cyclorama_hard_light_2k.hdr",
        (texture) => {
            try {
                texture.mapping = EquirectangularReflectionMapping;
                if (world.scene && world.scene.three) {
                    (world.scene.three as THREE.Scene).environment = texture;
                }
            } catch (error) {
                console.warn("HDR 載入完成，但場景可能已被銷毀 (React Strict Mode):", error);
            }
        },
    );
    
    //tell the compiler where to render the model
    fragments.list.onItemSet.add(async ({key:modelId, value:model})=>{
        //Clear he ItemsFinder cache, so the next time a query is run
        //it does the search again to include the results from the new model
        const finder = components.get(OBC.ItemsFinder)
        for(const [,query] of finder.list){
            query.clearCache();
        }
        //useCamera is used to tell the model loaded the camera it must use in order
        //to update its culling and LOD state.
        //Culling is the process of not rendering what the camera doesn't see.
        //LOD stands from Level of Detail in 3D graphics (not BIM) and is used
        //to decrease the geomtry detail as the camera goes further from the element.
            model.useCamera(world.camera.three);

        //The model is added to the world scene.
            world.scene.three.add(model.object);

        //This is extremely important, as it instructs the Fragments Manager
        //the modal must be updated becuz the configuration changed.
            fragments.core.update(true);
        
    })

    world.camera.controls.addEventListener("rest",async()=>{
        await fragments.core.update(true);
    })
}