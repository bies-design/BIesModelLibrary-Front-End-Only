import {PackageOpen,Building,Boxes,Box,FileBox, Users ,File,Settings, FolderClock} from "lucide-react"

export const itemsQuery =[
    {id:'ALL',label:"ALL",icon:PackageOpen},
    {id:'Buildings',label:"Buildings",icon:Building},
    {id:'Products',label:"Products",icon:Boxes},
    {id:'Elements',label:"Elements",icon:Box},
    {id:'2D Drawings',label:"2D Drawings",icon:FileBox},
];

export const itemsQueryForALL =[
    {id:'ALL',label:"ALL",icon:PackageOpen},
    {id:'Buildings',label:"Buildings",icon:Building},
    {id:'Products',label:"Products",icon:Boxes},
    {id:'Elements',label:"Elements",icon:Box},
    {id:'2D Drawings',label:"2D Drawings",icon:FileBox},
    // {id:'Team',label:"Team",icon:Users},
];

export interface cardProps {
    id:string;
    title:string;
    is3D:boolean;
    image:string;
    category:string;
    thumbsUp:number;
    views:number;
    createdAt:Date;
}
export const card : cardProps[] = [
    {id:"1",title:"model 1",is3D:true,image:"/projecttest.png",category:"Buildings",thumbsUp:20,views:300,createdAt:new Date("2025-12-01")},
    {id:"2",title:"model 2",is3D:true,image:"/projectTest2.png",category:"Buildings",thumbsUp:5,views:500,createdAt:new Date("2025-12-02")},
    {id:"3",title:"model 3",is3D:true,image:"/projectTest3.png",category:"Buildings",thumbsUp:10,views:300,createdAt:new Date("2025-12-05")},
    {id:"4",title:"model 4",is3D:false,image:"/projectTest4.png",category:"2D Drawings",thumbsUp:15,views:450,createdAt:new Date("2025-12-04")},
    {id:"5",title:"model 5",is3D:true,image:"/projectTest5.png",category:"Elements",thumbsUp:60,views:630,createdAt:new Date("2025-12-03")},
    {id:"6",title:"model 6",is3D:false,image:"/projectTest4.png",category:"2D Drawings",thumbsUp:70,views:500,createdAt:new Date("2025-12-06")},
    {id:"7",title:"model 7",is3D:false,image:"/projectTest4.png",category:"2D Drawings",thumbsUp:100,views:100,createdAt:new Date("2025-12-07")},
    {id:"8",title:"model 8",is3D:false,image:"/projectTest4.png",category:"2D Drawings",thumbsUp:50,views:70,createdAt:new Date("2025-12-08")},
    {id:"9",title:"model 9",is3D:false,image:"/projectTest4.png",category:"2D Drawings",thumbsUp:90,views:60,createdAt:new Date("2025-12-09")},
];

export const DashboardButtons = [
    {id:"Settings",label:"Settings",icon:Settings},
    {id:"Teams",label:"Teams",icon:Users},
    {id:"Models",label:"Models",icon:FileBox},
    {id:"Records",label:"Records",icon:FolderClock},
]