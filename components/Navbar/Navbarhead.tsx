'use client'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  PopoverProps,
  Avatar,
  Button,
  addToast
} from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname,useRouter } from "next/navigation";
import { ThemeSwitcher } from "./ThemeSwitcher";
import SearchBar from "../searchBar/SearchBar";
import SetLanguageButton from "../SetLanguageButton";
import { useTheme } from "next-themes";
import React from "react";
import { useEffect, useState } from 'react';
import MegaMenu from "../MegaMenu";
import { useSession } from "next-auth/react";
import { signOut } from 'next-auth/react';
import { LogIn, LogOut, Upload, UserRoundPen } from "lucide-react";

const getLogoSrc = (isDark: boolean) => {
  return isDark ? "/icons/logowhite.svg" : "/icons/Logo.svg";
};

export default function Navbarhead() {

  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [mounted, setMounted] = useState(false);
  const pathName = usePathname();
  const router = useRouter();
  const { data:session } = useSession();
  // 控制Megamenu是否顯示
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null; // Avoid SSR issues

  return (
    <nav className="sticky top-4 z-50 w-full flex justify-center px-4 mt-4">

      {/* 這是新的外層容器，負責畫邊框 */}
      <div className={`
      w-[80vw] 
      bg-white dark:bg-black 
      rounded-2xl 
      transition-all duration-300
      flex flex-col
      overflow-hidden 2xl:px-10
      shadow-[inset_0px_-2px_4px_0px_#00000040,inset_0px_2px_1px_1px_#FFFFFF26,0px_2px_30px_0px_#00000038,0px_0px_15px_0px_#0000000F]
      `}>

        <Navbar
        maxWidth="full"
        isBordered={false}
        isBlurred={false}
        className="bg-transparent"
        classNames={{ 
          wrapper:"px-10 2xl:px-5"
        }}
      >
          <NavbarContent justify="start" className="hidden sm:flex">
            <NavbarBrand className="hidden sm:flex mr-4">
              <Link href="/">
                <Image src={getLogoSrc(isDark)} width={120}height={120}alt="GoMore Logo"></Image>
              </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-3">
              <NavbarItem>
                <Button as={Link} href="/" radius="none" disableRipple className={`hover-lift font-inter text-[16px] w-[80px] ${isDark ? "text-white bg-black" : "text-black bg-white"} ${(pathName === "/")?"border-b-2 border-b-red-600":"" }`}>Home</Button>
              </NavbarItem>
              <NavbarItem >
                <Button
                  onPress={() => {
                    if(session){
                      router.push("/upload");
                    }else{
                      addToast({
                        title:"Unauthenticated",
                        description:"Please sign in first!",
                        color:"warning",
                      }) 
                      router.push("/sign-in");
                    }
                  }}
                  radius="none" 
                  disableRipple
                  className={`hover-lift font-inter text-[16px] w-[80px] ${isDark ? "text-white bg-black" : "text-black bg-white"} ${(pathName === "/upload")?"border-b-2 border-b-red-600":"" }`}
                >
                  Upload
                </Button>
              </NavbarItem>
            </NavbarContent>
          </NavbarContent>

          <NavbarContent justify="center" className="grow">
            {/* Search box 區塊 */}
            <SearchBar isMenuOpen={isMegaMenuOpen} onToggle={()=>setIsMegaMenuOpen(!isMegaMenuOpen)}/>
              
          </NavbarContent>
          <NavbarContent as="div" className="items-center" justify="end">
            <SetLanguageButton/>
            <ThemeSwitcher/>
            {session ? 
            (<Dropdown placement="bottom-end" className="font-abeezee">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform cursor-pointer active-press"
                  color="secondary"
                  name={session.user?.name || ""}
                  size="sm"
                  src={session.user?.image || ""}
                  showFallback
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat" 
                      itemClasses={{
                        base:"text-black dark:text-white",

                      }}>
                <DropdownItem key="Dashboard" href={`/dashboard/${session.user?.id}`}  endContent={<UserRoundPen size={16}/>} >
                    Dashboard
                  </DropdownItem>
                <DropdownItem key="upload" href="/upload" endContent={<Upload size={16}/>}>Upload</DropdownItem>
                <DropdownItem key="logout" color="danger" endContent={<LogOut size={16}/>} onPress={()=>signOut({redirectTo:"/sign-in"})}>
                  Log out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>):
            (<Button 
              as={Link}
              href="/sign-in"
              variant="solid" 
              color="primary"
              size="md"
              radius="md"
              className="shadow-[0px_0px_2px_0px_#000000B2,inset_0px_-4px_4px_0px_#00000040,inset_0px_4px_2px_0px_#FFFFFF33]"
            ><LogIn size={20}/>Login</Button>)}
            {/*  */}
          </NavbarContent>
        </Navbar>
        {/* MegaMenu 區塊，直接放在 Navbar 下方 */}
        {/* 使用 CSS class 控制顯示/隱藏，而不是條件渲染 */}
        <div className={`
            w-full 
            transition-all duration-300 ease-in-out justify-items-center
            ${isMegaMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
            `}>
            {/* 分隔線 */}
            <div className="mt-4 h-[1px] bg-gray-700/50 w-[95%]" />
          
            {/* MegaMenu 內容 */}
            <MegaMenu />
        </div>
      </div>
    </nav>
  );
}
