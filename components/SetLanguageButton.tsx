import {
    NavbarItem,
    Dropdown,
    DropdownTrigger,
    Button,
    DropdownMenu,
    DropdownItem
    } from '@heroui/react';
import React from 'react'

const SetLanguageButton = () => {
    const [locale, setLocale] = React.useState<"en-US" | "zh-CN">("en-US");
    return (
    <NavbarItem className='hidden sm:flex'>
        <Dropdown>
        <DropdownTrigger>
            <Button
            size="sm"
            variant="bordered"
            aria-label="Select language"
            className='invert dark:invert-0 font-inter'
            >
            {locale === "en-US" ? "English" : "中文"}
            </Button>
        </DropdownTrigger>

        <DropdownMenu
            aria-label="Select language"
            selectionMode="single"
            selectedKeys={[locale]}
            onSelectionChange={(keys) => {
            const key = Array.from(keys)[0] as "en-US" | "zh-CN";
            setLocale(key);
            }}
        >
            <DropdownItem key="en-US">English</DropdownItem>
            <DropdownItem key="zh-CN">中文</DropdownItem>
        </DropdownMenu>
        </Dropdown>
    </NavbarItem>
    )
}

export default SetLanguageButton