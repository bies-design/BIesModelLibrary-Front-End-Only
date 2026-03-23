import React from 'react';
import { useSession } from 'next-auth/react';
import { Input, Button, Avatar, User } from "@heroui/react"; // 如果你是舊版 NextUI，請改為 @nextui-org/react
import { Copy, Upload, PenLine, RotateCw } from 'lucide-react'; 

const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

type Props = {}

const Settings = (props: Props) => {
    const {data:session} = useSession();
    
    const userData = {
        name: session?.user?.name || "",
        email: session?.user?.email || "",
        role: "Free User",
        userId: session?.user.id,
        image: session?.user?.image, 
    };

    return (
        <div className='w-full h-full font-inter flex flex-col gap-6'>
            <div className=''>
                <h1 className='text-3xl leading-9 font-bold'>Settings</h1>
                <p className='text-sm text-[#A1A1AA]'>Customize settings, email preferences, and web appearance.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8'>
                {/* --- Row 1 Left: Profile --- */}
                <div className="flex flex-col">
                    <label className="text-sm text-foreground-700">Profile</label>
                    <div className="flex items-center gap-4 p-1">
                        <Avatar 
                            src={userData.image || ''} 
                            name={userData.name || ""}
                            className="w-10 h-10 text-large" 
                            showFallback
                        />
                        <div className="flex flex-col">
                            <span className="font-medium text-lg">{userData.name}</span>
                            <span className="text-sm text-default-500">{userData.role}</span>
                        </div>
                        <Button 
                            variant="flat" 
                            className="ml-auto hover-lift bg-[#3F3F46] hover:bg-default-200 text-default-600 shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_3px_2px_#FFFFFF33]"
                            startContent={<Upload size={16} />}
                        >
                            Upload a new icon
                        </Button>
                    </div>
                    <p className="text-xs text-default-400">This displays your public profile on the site.</p>
                </div>

                {/* --- Row 1 Right: User ID --- */}
                <div className="flex flex-col gap-2">
                    <div className='flex items-end gap-2'>
                        <Input
                            label="User ID"
                            labelPlacement="outside"
                            defaultValue={userData.userId}
                            variant="bordered"
                            isReadOnly
                            classNames={{
                                inputWrapper: "bg-default-50/50 hover:bg-default-100/50 transition-colors pr-1",
                            }}
                        />
                        <Button 
                            isIconOnly
                            className="bg-[#3F3F46] hover:bg-default-200 text-default-600 border border-default-200/50 hover-lift shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_3px_2px_#FFFFFF33]"
                            variant="flat"
                        >
                            <Copy size={16} />
                        </Button>
                    </div>
                    <p className="text-xs text-default-400">Copy the ID to join a team</p>
                </div>

                {/* --- Row 2 Left: Name --- */}
                <div>
                    <Input
                        label="Name"
                        labelPlacement="outside"
                        placeholder="Enter your name"
                        defaultValue={userData.name}
                        variant="bordered"
                        classNames={{
                            inputWrapper: "bg-default-50/50",
                        }}
                    />
                </div>

                {/* --- Row 2 Right: Role --- */}
                <div>
                    <Input
                        label="Role"
                        labelPlacement="outside"
                        defaultValue={userData.role}
                        variant="bordered"
                        isReadOnly
                        classNames={{
                            inputWrapper: "bg-default-50/50 text-default-500",
                        }}
                    />
                </div>

                {/* --- Row 3 Left: Email --- */}
                <div>
                    <Input
                        label="Email"
                        labelPlacement="outside"
                        defaultValue={userData.email}
                        variant="bordered"
                        classNames={{
                            inputWrapper: "bg-default-50/50",
                        }}
                    />
                </div>

                {/* --- Row 3 Right: Email Actions --- */}
                <div className="flex items-end gap-3">
                    <Button 
                        className="bg-[#3F3F46] hover:bg-default-200 text-default-600 border border-default-200/50 hover-lift shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_3px_2px_#FFFFFF33]"
                        variant="flat"
                        startContent={<PenLine size={16} />}
                    >
                        Request email change
                    </Button>
                    <Button 
                        className="bg-[#18181b] hover:bg-[#27272a] border border-default-200/20 hover-lift shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_3px_2px_#FFFFFF33]"
                        variant="flat"
                        startContent={<GoogleIcon />}
                    >
                        Connect with Google
                    </Button>
                </div>

                {/* --- Row 4 Left: Password --- */}
                <div>
                    <Input
                        label="Password"
                        labelPlacement="outside"
                        type="password"
                        defaultValue="********"
                        variant="bordered"
                        classNames={{
                            inputWrapper: "bg-default-50/50",
                        }}
                    />
                </div>

                {/* --- Row 4 Right: Password Actions --- */}
                <div className="flex items-end">
                    <Button 
                        className="bg-[#3F3F46] hover:bg-default-200 text-default-600 border border-default-200/50 justify-start px-4 hover-lift shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_3px_2px_#FFFFFF33]"
                        variant="flat"
                        startContent={<PenLine size={16} />}
                    >
                        Request password change
                    </Button>
                </div>
            </div>
            
        </div>
    );
}

export default Settings;