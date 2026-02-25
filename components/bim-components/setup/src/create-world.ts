import * as OBC from "@thatopen/components"
import * as BUI from "@thatopen/ui"

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

    //every time we call the renderer it needs a viewport to make it seenable
    // const viewport = BUI.Component.create<BUI.Viewport>(
    //     ()=>{
    //         //set the display block or flex for it to inherit w and h from parent
    //         return (BUI.html`<bim-viewport class="w-full h-full" style="display: block; width: 100%; height: 100%;);"></bim-viewport>`);
    //     },
    // );
    const viewport = document.createElement("div");
    viewport.className = "w-full h-full"; // 保持 Tailwind class
    viewport.style.display = "block";
    viewport.style.width = "100%";
    viewport.style.height = "100%";
    viewport.style.position = "relative"; // 確保內部 Canvas 定位正確
    viewport.style.outline = "none";      // 避免點擊時出現框線

    world.renderer = new OBC.SimpleRenderer(components, viewport);

    world.camera = new OBC.OrthoPerspectiveCamera(components);
    
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

    components.get(OBC.Grids).create(world);
    
    return {world,viewport,resizeObserver};
}