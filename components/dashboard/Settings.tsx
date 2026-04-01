import React, {useRef, useState} from 'react';
import { useSession } from 'next-auth/react';
import { updateUserName, getAvatarUploadUrl, updateUserImage, updateUserPassword } from '@/lib/actions/user.action';
import { Input, Button, Avatar, User, Modal, ModalContent, ModalHeader ,ModalBody, ModalFooter, useDisclosure, addToast } from "@heroui/react"; // 如果你是舊版 NextUI，請改為 @nextui-org/react
import { Check, Copy, Upload, PenLine, RotateCw, Currency } from 'lucide-react'; 
import { UpdatePasswordSchema } from '@/lib/validations';

const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

type Props = {}
export interface passwordsType {
    currentPassword: string,
    newPassword: string,
    confirmPassword: string,
};

const Settings = (props: Props) => {
    const {data:session, update} = useSession();
    const [isCopied, setIsCopied] = useState<boolean>(false);
    // Name State
    const [name, setName] = useState<string>(session?.user.name || "");
    const [isSavingName, setIsSavingName] = useState<boolean>(false);
    // Avatar State & Ref
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isUploadingAvatar, setIsUploadingAvatar] = useState<boolean>(false);
    // password
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const initialPasswords: passwordsType = { currentPassword: "", newPassword: "", confirmPassword: "" };
    const [passwords, setPasswords] = useState<passwordsType>(initialPasswords);

    // 存放每個欄位的專屬錯誤 (對應底部的紅字)
    const [pwdErrors, setPwdErrors] = useState<Record<string, string>>({});
    // 存放送出後伺服器回傳的錯誤 (例如：舊密碼輸入錯誤)
    const [serverError, setServerError] = useState<string | null>(null);

    const [isUpdatingPwdUI, setIsUpdatingPwdUI] = useState<boolean>(false);
    const isUpdatingPwdLock = useRef(false);

    const handlePwdInputChange = (field: keyof typeof passwords, value: string) => {
        const newValues = { ...passwords, [field]: value };
        setPasswords(newValues);
        setServerError(null); // 開始打字就清空伺服器錯誤

        // 用 Zod 跑一次全表單驗證
        const result = UpdatePasswordSchema.safeParse(newValues);
        const allErrors: Record<string, string> = {};
        
        if (!result.success) {
            result.error.issues.forEach(issue => {
                const path = issue.path[0] as string;
                if (!allErrors[path]) allErrors[path] = issue.message;
            });
        }

        // 只更新「目前正在輸入」的欄位錯誤，或是連帶更新 confirmPassword
        setPwdErrors(prev => {
            const next = { ...prev };
            
            if (allErrors[field]) {
                next[field] = allErrors[field];
            } else {
                delete next[field];
            }

            // 連動防呆：如果正在改 newPassword，要順便檢查 confirmPassword 匹配狀態
            if (field === 'newPassword' || field === 'confirmPassword') {
                if (allErrors.confirmPassword) {
                    next.confirmPassword = allErrors.confirmPassword;
                } else {
                    delete next.confirmPassword;
                }
            }
            return next;
        });
    };

    // 當 Modal 關閉時，清空所有輸入框和錯誤訊息
    const handleModalClose = () => {
        setPasswords({ currentPassword: "", newPassword: "", confirmPassword: "" });
        setPwdErrors({});
        setServerError(null);
        onClose();
    };

    const isButtonDisabled = 
        Object.keys(pwdErrors).length > 0 || 
        !passwords.currentPassword || 
        !passwords.newPassword || 
        !passwords.confirmPassword;

    const handlePasswordSubmit = async () => {
        if (isUpdatingPwdLock.current) return;

        // 送出前做最後一次全面驗證
        const result = UpdatePasswordSchema.safeParse(passwords);
        if (!result.success) {
            const finalErrors: Record<string, string> = {};
            result.error.issues.forEach(issue => {
                const path = issue.path[0] as string;
                if (!finalErrors[path]) finalErrors[path] = issue.message;
            });
            setPwdErrors(finalErrors);
            return; // 有錯就擋下，不發送 API
        }

        isUpdatingPwdLock.current = true;
        setIsUpdatingPwdUI(true);

        try {
            const apiResult = await updateUserPassword({
                currentPassword: passwords.currentPassword,
                newPassword: passwords.newPassword,
                confirmPassword: passwords.confirmPassword
            });

            if (apiResult.success) {
                addToast({ description: "Password updated successfully!", color: "success" });
                handleModalClose();
            } else {
                // 如果是 current password 錯誤，就把它塞給 pwdErrors
                if (apiResult.type === "current password" && apiResult.error) {
                    setPwdErrors(prev => ({ 
                        ...prev, 
                        currentPassword: apiResult.error 
                    }));
                } else {
                    // 如果是其他錯誤 (例如伺服器壞掉、無權限)，就顯示在最上方的通用錯誤區
                    setServerError(apiResult.error || "unknown error");
                }
            }
        } catch (error) {
            console.error(error);
            setServerError("Failed to update password. Please try again.");
        } finally {
            isUpdatingPwdLock.current = false;
            setIsUpdatingPwdUI(false);
        }
    };
    const handleCopy = async () => {
        try {
            if(userData && userData.userId) await navigator.clipboard.writeText(userData.userId);
            setIsCopied(true);
            addToast({ description: "已複製 ID！", color: "success" });
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            addToast({ description: "複製失敗，請手動複製", color: "danger" });
        }
    };
    const handleAvatarUpload = async (e:React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(!file) return;

        // avatar image can't exceed 5mb
        if(file.size > 5 * 1024 * 1024){
            alert("File size must be less than 5MB");
            return;
        }

        setIsUploadingAvatar(true);
        try{
            // get upload url and public image url
            const urlResult = await getAvatarUploadUrl(file.name, file.type);
            if(!urlResult.success || ! urlResult.signedUrl || !urlResult.imageKey){
                throw new Error(urlResult.error);
            }
            // PUT image to minio
            const uploadRes = await fetch(urlResult.signedUrl, {
                method: "PUT",
                body: file,
                headers:{"Content-Type": file.type}
            });

            if(!uploadRes.ok) throw new Error("Failed to upload image to S3");
            // upadate db
            const dbResult = await updateUserImage(urlResult.imageKey);
            if(!dbResult.success) throw new Error(dbResult.error);

            // update session
            await update({image: urlResult.imageKey});
            addToast({ description: "Profile icon updated!", color: "success" });
        }catch(error){
            console.error("錯誤在這",error);
            alert("Failed to update profile icon.");
        } finally {
            setIsUploadingAvatar(false);
            // 清空 input，確保使用者選同一張照片也能觸發 onChange
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    }
    
    const handleSaveName = async() => {
        // 如果名字沒改或是空的 擋掉
        if(name === session?.user.name || !name.trim()) return;

        setIsSavingName(true);
        const result = await updateUserName(name);

        if(result.success) {
            // 更新session裡面的名稱
            await update({name:name});
            addToast({description:"Update Name successful!", color:"success"});
        }else{
            alert(result.error || "Failed to update name");
            setName(session?.user.name || "");
        }
        setIsSavingName(false);
    }
    const getImageUrl = (imageVal: string | null | undefined) => {
        if(!imageVal) return "";
        if(imageVal.startsWith("http")) return imageVal;
        return `${process.env.NEXT_PUBLIC_S3_ENDPOINT_SERVER}/${process.env.NEXT_PUBLIC_S3_IMAGES_BUCKET}/${imageVal}`;
    };

    const userData = {
        name: session?.user?.name || "",
        email: session?.user?.email || "",
        role: "Free User",
        userId: session?.user.id,
        image: getImageUrl(session?.user.image), 
    };
    

    return (
        <div className='w-full text-white h-full font-inter flex flex-col gap-6'>
            <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleAvatarUpload} 
                accept="image/png, image/jpeg, image/webp" 
                className="hidden" 
            />
            <div className=''>
                <h1 className='text-3xl leading-9 font-bold'>Settings</h1>
                <p className='text-sm text-[#A1A1AA]'>Customize settings, email preferences, and web appearance.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8'>
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
                            isLoading={isUploadingAvatar}
                            onPress={() => fileInputRef.current?.click()}
                            className="ml-auto hover-lift bg-[#3F3F46] hover:bg-default-200 text-default-600 shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_3px_2px_#FFFFFF33]"
                            startContent={
                                !isUploadingAvatar && (
                                    <span className='hidden md:block'>
                                        <Upload size={16} />
                                    </span>
                                )
                            }
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
                            variant="flat"
                            isReadOnly
                            classNames={{
                                label:"!text-white",
                                inputWrapper: "bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] hover:bg-default-100/50 transition-colors pr-1",
                            }}
                        />
                        <Button 
                            title='Copy User ID'
                            isIconOnly
                            onClick={handleCopy}
                            className="bg-[#3F3F46] hover:bg-default-200 text-default-600 border border-default-200/50 hover-lift shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_3px_2px_#FFFFFF33]"
                            variant="flat"
                        >
                            {isCopied ? <Check className="w-4 h-4 text-[#10b981]" /> : <Copy className="w-4 h-4" />}
                        </Button>
                    </div>
                    <p className="text-xs text-default-400">Copy the ID to join a team</p>
                </div>

                {/* --- Row 2 Left: Name --- */}
                <div className='flex gap-2 items-end'>
                    <Input
                        label="Name"
                        labelPlacement="outside"
                        placeholder="Enter your name"
                        value={name}
                        onValueChange={setName}
                        onBlur={()=>{
                            // 🌟 關鍵防禦機制：如果正在儲存中，絕對不要還原！
                            setTimeout(() => {
                                // 為了拿到最新鮮的 isSavingName 狀態，我們可以使用 callback 寫法
                                setIsSavingName((currentlySaving) => {
                                    if (!currentlySaving) {
                                        // 只有在「沒有按儲存」的情況下點擊外面，才還原名字
                                        setName(session?.user.name || "");
                                    }
                                    return currentlySaving;
                                });
                            }, 150);
                        }}
                        variant="flat"
                        classNames={{
                            label:"!text-white",
                            inputWrapper: "bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D]",
                        }}
                    />
                    {name !== session?.user?.name && (
                        <Button 
                            color="primary" 
                            isLoading={isSavingName}
                            onPress={handleSaveName}
                            className='hover-lift shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_3px_2px_#FFFFFF33]'
                        >
                            Save
                        </Button>
                    )}
                </div>

                {/* --- Row 2 Right: Role --- */}
                <div>
                    <Input
                        label="Role"
                        labelPlacement="outside"
                        defaultValue={userData.role}
                        variant="flat"
                        isReadOnly
                        classNames={{
                            label:"!text-white",
                            inputWrapper: "bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] text-default-500",
                        }}
                    />
                </div>

                {/* --- Row 3 Left: Email --- */}
                <div>
                    <Input
                        label="Email"
                        labelPlacement="outside"
                        defaultValue={userData.email}
                        variant="flat"
                        classNames={{
                            label:"!text-white",
                            inputWrapper: "bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D]",
                        }}
                    />
                </div>

                {/* --- Row 3 Right: Email Actions --- */}
                <div className="flex flex-col items-stretch md:flex-row md:items-end gap-3">
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
                        variant="flat"
                        isReadOnly
                        classNames={{
                            label:"!text-white",
                            inputWrapper: "bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D]",
                        }}
                    />
                </div>

                {/* --- Row 4 Right: Password Actions --- */}
                <div className="flex md:items-end">
                    <Button 
                        onPress={onOpen}
                        className="bg-[#3F3F46] w-full md:w-max hover:bg-default-200 text-default-600 border border-default-200/50 px-4 hover-lift shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_3px_2px_#FFFFFF33]"
                        variant="flat"
                        startContent={<PenLine size={16} />}
                    >
                        Request password change
                    </Button>
                </div>
            </div>
            
            {/* 🌟 密碼修改 Modal */}
            <Modal 
                isOpen={isOpen} 
                onOpenChange={(open) => {
                    if(!open) handleModalClose();
                }} 
                classNames={{
                    wrapper:"z-999",
                    backdrop:"z-998"
                }}
                placement="center"
            >
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Change Password</ModalHeader>
                            <ModalBody>
                                {serverError && (
                                    <div className="p-3 rounded-md bg-danger-50 text-danger text-sm border border-danger-200">
                                        {serverError}
                                    </div>
                                )}
                                <Input
                                    label="Current Password"
                                    placeholder="Enter your current password"
                                    type="password"
                                    variant="flat"
                                    value={passwords.currentPassword}
                                    onValueChange={(val) => handlePwdInputChange('currentPassword', val)}
                                    isInvalid={!!pwdErrors.currentPassword}
                                    errorMessage={pwdErrors.currentPassword}
                                    classNames={{
                                        inputWrapper:"bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] text-black dark:text-white "
                                    }}
                                />
                                <Input
                                    label="New Password"
                                    placeholder="Enter your new password"
                                    type="password"
                                    variant="flat"
                                    value={passwords.newPassword}
                                    onValueChange={(val) => handlePwdInputChange('newPassword', val)}
                                    isInvalid={!!pwdErrors.newPassword}
                                    errorMessage={pwdErrors.newPassword}
                                    classNames={{
                                        inputWrapper:"bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] text-black dark:text-white "
                                    }}
                                />
                                <Input
                                    label="Confirm New Password"
                                    placeholder="Confirm your new password"
                                    type="password"
                                    variant="flat"
                                    value={passwords.confirmPassword}
                                    onValueChange={(val) => handlePwdInputChange('confirmPassword', val)}
                                    isInvalid={!!pwdErrors.confirmPassword}
                                    errorMessage={pwdErrors.confirmPassword}
                                    classNames={{
                                        inputWrapper:"bg-[#18181B] shadow-[inset_0_3px_5px_1px_#000000A3,inset_0_-1px_2px_#00000099,0_3px_1.8px_#FFFFFF29,0_-2px_1.9px_#00000040,0_0_4px_#FBFBFB3D] text-black dark:text-white "
                                    }}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button 
                                    color="danger" 
                                    variant="flat" 
                                    onPress={handleModalClose}
                                    className='text-white hover-lift shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_3px_2px_#FFFFFF33]'
                                >
                                    Cancel
                                </Button>
                                <Button 
                                    color="primary" 
                                    isDisabled={isButtonDisabled} 
                                    onPress={handlePasswordSubmit} 
                                    isLoading={isUpdatingPwdUI}
                                    className='hover-lift shadow-[0_0_2px_#000000B2,inset_0_-4px_4px_#00000040,inset_0_3px_2px_#FFFFFF33]'
                                >
                                    Update Password
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </div>
    );
}

export default Settings;