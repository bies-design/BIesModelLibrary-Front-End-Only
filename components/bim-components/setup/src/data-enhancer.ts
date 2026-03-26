import * as OBC from "@thatopen/components"
import { DataEnhancer } from "../../DataEnhancer"
import { ItemData } from "@thatopen/fragments"

export const setupDataEnhancer = (components: OBC.Components) => {
    const enhancer = components.get(DataEnhancer);

    enhancer.sources.set("Techmical Documentation", {
        data: async()=>{
            const file = await fetch("/resources/technical_documentation.json")
            const json = await file.json();
            return json
        },
        matcher: (attrs:ItemData,data:any[])=>{
            const categoryData = attrs._category
            if(!(categoryData && "value" in categoryData)) return null
            const category = categoryData.value
            const dataSubset = data.filter(entry => entry.category === category)
            return dataSubset.length > 0 ? dataSubset : null
        }
    })
}