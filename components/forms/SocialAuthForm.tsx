'use client'
import React from 'react'
import Image from 'next/image';
import {signIn} from "next-auth/react"
import { addToast } from '@heroui/react';
const SocialAuthForm = () => {
    const handleSignIn = async (provider :"google") => {
        try{
            await signIn(provider,{
                callbackUrl: "/",
            })
        } catch (e){
            console.log(e);

            const message = e instanceof Error ? e.message : "An error occurred";

            addToast({
                title: message,
                description:"Please try again later.",
                color:"danger",
                timeout:3000,
                shouldShowTimeoutProgress:true,
            })
        }
    }
    return (
        <button
            onClick={()=> handleSignIn("google")}
            aria-label="Continue with Google"
            className='bg-white/60 dark:bg-[#18181B] hover-lift w-full rounded-lg flex items-center justify-center gap-2 h-[40px] shadow-[0px_0px_2px_0px_#000000B2,inset_0px_-4px_4px_0px_#00000040,inset_0px_4px_2px_0px_#FFFFFF33]'>
            <Image
            src="/icons/googleIcon.svg" 
            height={20} 
            width={20}
            alt='Google icon'
            />
            <p className='font-inter font-light text-[14px] text-black dark:text-[#E4E4E7]'>Continue with Google</p>
        </button>
    );
}

export default SocialAuthForm