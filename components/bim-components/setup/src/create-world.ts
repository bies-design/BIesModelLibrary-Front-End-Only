import * as OBC from "@thatopen/components";
import * as OBCF from "@thatopen/components-front";
import * as THREE from "three";
import * as BUI from "@thatopen/ui";

export const createWorld = (components: OBC.Components) => {
    const worlds = components.get(OBC.Worlds);

    const world = worlds.create<
        OBC.SimpleScene,
        OBC.OrthoPerspectiveCamera,
        OBC.SimpleRenderer
    >();

    world.scene = new OBC.SimpleScene(components);
    world.scene.setup();
    world.scene.three.background = null;// just to have transparent background

    const viewport = document.createElement("div");
    viewport.className = "w-full h-full"; // 保持 Tailwind class
    viewport.style.display = "block";
    viewport.style.width = "100%";
    viewport.style.height = "100%";
    viewport.style.position = "relative"; // 確保內部 Canvas 定位正確
    viewport.style.outline = "none";      // 避免點擊時出現框線

    const renderer = new OBCF.PostproductionRenderer(components, viewport);
    world.renderer = renderer;

    const camera = new OBC.OrthoPerspectiveCamera(components);
    camera.threePersp.near = 0.01;
    camera.threePersp.updateProjectionMatrix();
    camera.projection.set("Perspective");

    world.camera = camera;

    const postproductionRenderer = world.renderer as OBCF.PostproductionRenderer;
    postproductionRenderer.postproduction.enabled = true;
    postproductionRenderer.postproduction.style = OBCF.PostproductionAspect.COLOR_SHADOWS;
    // postproductionRenderer.postproduction.smaaEnabled = true;

    const resizeWorld = () => {
        try{
            world.renderer?.resize();
            world.camera.updateAspect();
        }catch(error){
            console.warn("Resizing the world was not possible")
        }
    };
    //設定resize監聽 每次viewport componenet有resize event
    // 因為原生 div 沒有 "resize" 事件，改用 ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
        resizeWorld();
    });
    resizeObserver.observe(viewport);
    //for selecting thing 
    components.get(OBC.Raycasters).get(world);

    // components.get(OBC.Grids).create(world);
    
    return {world,viewport,resizeObserver};
}