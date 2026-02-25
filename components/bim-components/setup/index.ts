//hold the core setup
import * as OBC from "@thatopen/components";
import { createWorld, setupFragmentsManager, setupHighlighter, setupIfcLoader, setupItemsFinder } from "./src";
export const setupComponents = async()=>{
    const components = new OBC.Components();
    
    const {world,viewport,resizeObserver} = createWorld(components);

    setupIfcLoader(components);
    setupFragmentsManager(components,world);
    setupHighlighter(components,world);
    setupItemsFinder(components);

    components.init();
    return {components,viewport,resizeObserver};
}