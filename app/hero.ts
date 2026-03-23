// app/hero.ts (或放在根目錄)
import { heroui } from "@heroui/react";

export default heroui({
    themes: {
        light: {
        colors: {
            // 這裡修改你想要的 primary 顏色
            default: {
                DEFAULT: "#000000",    // 主色 (例如：亮橘色)
                foreground: "#FFFFFF", // 主色按鈕上的文字顏色
            },
            // 你也可以修改 secondary, success, warning, danger 等
        },
        },
        dark: {
        colors: {
            default: {
                DEFAULT: "#000000",    // 暗黑模式下的主色 (例如：亮黃色)
                foreground: "#FFFFFF",
            },
        },
        },
    },
});