"use client";

import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Eye, Focus, Ghost, EyeOff, Pipette, Scissors, Ruler, Square, BoxSelect, Info, QrCode, Boxes } from "lucide-react";
import { Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";
import * as OBC from "@thatopen/components";
import * as OBCF from "@thatopen/components-front";

interface ActionButtonsProps {
    components: OBC.Components | null;
    onToggleVisibility: () => void;
    onIsolate: () => void;
    onFocus: () => void;
    onShow: () => void;
    onGhost: () => void;
    isGhost: boolean;
    onToggleShadowScene: () => void;
    isShadowed: boolean;
    onToggleColorShadows: () => void; // New prop
    isColorShadowsEnabled: boolean; // New prop
    activeTool: "clipper" | "length" | "area" | "colorize" | "collision" | "search" | "multi-select" | null;
    onSelectTool: (tool: "clipper" | "length" | "area" | "colorize" | "collision" | "search" | "multi-select" | null) => void;
    lengthMode: "free" | "edge";
    setLengthMode: (mode: "free" | "edge") => void;
    areaMode: "free" | "square";
    setAreaMode: (mode: "free" | "square") => void;
    onColorize?: (color: string) => void;
    onClearColor?: () => void;
    // onToggleInfo: () => void;
    // isInfoOpen: boolean;
    onToggleMultiSelect: () => void;
    isMultiSelectActive: boolean;
}

export default function ActionButtons({
    onToggleVisibility,
    onIsolate,
    onFocus,
    onShow,
    onGhost,
    isGhost,
    onToggleShadowScene,
    isShadowed,
    activeTool,
    onSelectTool,
    lengthMode,
    setLengthMode,
    areaMode,
    setAreaMode,
    onColorize,
    onClearColor,
    // onToggleInfo,
    // isInfoOpen,
    onToggleMultiSelect,
    isMultiSelectActive,
    onToggleColorShadows, // Destructure new prop
    isColorShadowsEnabled, // Destructure new prop
    components,
}: ActionButtonsProps) {
    const { t } = useTranslation();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleMouseEnter = () => {
        if (!components) return;
        if (activeTool === "length") {
        const measurer = components.get(OBCF.LengthMeasurement);
        if (measurer.enabled) {
            measurer.delete();
        }
        } else if (activeTool === "area") {
        const areaMeasurer = components.get(OBCF.AreaMeasurement);
        if (areaMeasurer.enabled) {
            areaMeasurer.delete();
        }
        }
    };

    const handleToolSelect = (tool: "clipper" | "length" | "area" | "colorize" | "multi-select") => {
        if (activeTool === tool) {
        onSelectTool(null);
        } else {
        onSelectTool(tool);
        }
    };

    const buttonClass = (tool: string | null) =>
        `p-2 rounded-xl ${activeTool === tool && tool !== null ? "bg-blue-600" : ""}`;

    const renderOptionsPanel = (tool: "length" | "area" | "colorize") => {
        if (activeTool !== tool) return null;

        const panelBaseClasses = `absolute bottom-full mb-2 w-max p-2 rounded-xl shadow-lg flex flex-col items-center gap-2 bg-gray-900 text-white`;

        switch (tool) {
        case "length":
            return (
            <div onMouseEnter={handleMouseEnter} className={`${panelBaseClasses} left-1/2 -translate-x-1/2`}>
                <span className="text-sm font-semibold">{t("length_mode")}</span>
                <div className="flex gap-2">
                <button onClick={() => setLengthMode("free")} className={`px-2 py-1 text-xs rounded ${lengthMode === 'free' ? 'bg-blue-500' : 'bg-gray-600'}`}>{t("free")}</button>
                <button onClick={() => setLengthMode("edge")} className={`px-2 py-1 text-xs rounded ${lengthMode === 'edge' ? 'bg-blue-500' : 'bg-gray-600'}`}>{t("edge")}</button>
                </div>
            </div>
            );
        case "area":
            return (
            <div onMouseEnter={handleMouseEnter} className={`${panelBaseClasses} left-1/2 -translate-x-1/2`}>
                <span className="text-sm font-semibold">{t("area_mode")}</span>
                <div className="flex gap-2">
                <button onClick={() => setAreaMode("free")} className={`px-2 py-1 text-xs rounded ${areaMode === 'free' ? 'bg-blue-500' : 'bg-gray-600'}`}>{t("free")}</button>
                <button onClick={() => setAreaMode("square")} className={`px-2 py-1 text-xs rounded ${areaMode === 'square' ? 'bg-blue-500' : 'bg-gray-600'}`}>{t("square")}</button>
                </div>
            </div>
            );
        case "colorize":
            return (
            <div onMouseEnter={handleMouseEnter} className={`${panelBaseClasses} left-1/2 -translate-x-1/2`}>
                <span className="text-sm font-semibold">{t("pick_color")}</span>
                <input
                type="color"
                defaultValue="#ffa500"
                onChange={(e) => onColorize?.(e.target.value)}
                className="w-8 h-8"
                />
                <button onClick={onClearColor} className="mt-2 px-2 py-1 text-xs bg-red-500 rounded">{t("clear_colors")}</button>
            </div>
            );
        default:
            return null;
        }
    };

    return (
        <div
        onMouseEnter={handleMouseEnter}
        onPointerDown={(e) => e.stopPropagation()}
        className={`glass-panel rounded-xl
            w-full h-full flex flex-wrap items-end gap-4 px-4 py-2
            bg-transparent text-white`}
        >
        <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
            <Tooltip content={isClient ? t("focus") : "Focus"}>
                <button onClick={onFocus} className={buttonClass(null)}>
                <Focus size={18} />
                </button>
            </Tooltip>
            <Tooltip content={isClient ? t("hide") : "Hide"}>
                <button onClick={onToggleVisibility} className={buttonClass(null)}>
                <EyeOff size={18} />
                </button>
            </Tooltip>
            <Tooltip content={isClient ? t("isolate") : "Isolate"}>
                <button onClick={onIsolate} className={buttonClass(null)}>
                <BoxSelect size={18} />
                </button>
            </Tooltip>
            <Tooltip content={isClient ? t("show_all") : "Show All"}>
                <button onClick={onShow} className={buttonClass(null)}>
                <Eye size={18} />
                </button>
            </Tooltip>
            </div>
            <span className="text-xs mt-1">{isClient ? t("visibility") : "Visibility"}</span>
        </div>

        <div className="h-6 border-l border-gray-500 self-center"></div>

        <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
            <Tooltip content={isClient ? t("toggle_ghost") : "Toggle Ghost"}>
                <button onClick={onGhost} className={`${buttonClass(null)} ${isGhost ?  "bg-purple-900" : ""}`}>
                <Ghost size={18} />
                </button>
            </Tooltip>
            <Tooltip content={isClient ? t("toggle_shadow_scene") : "Toggle Shadow Scene"}>
                <button onClick={onToggleColorShadows} className={`${buttonClass(null)} ${isColorShadowsEnabled ?  "bg-purple-900" : ""}`}>
                <Icon icon="radix-icons:shadow" width="18" height="18" />
                </button>
            </Tooltip>
            {/* <Tooltip content={isClient ? t("toggle_color_shadows") : "Toggle Color Shadows"}>
                <button onClick={onToggleColorShadows} className={`${buttonClass(null)} ${isColorShadowsEnabled ? (darkMode ? "bg-purple-900" : "bg-purple-700") : ""}`}>
                <Icon icon="mdi:palette-outline" width="18" height="18" />
                </button>
            </Tooltip> */}
            <Tooltip content={isClient ? t("multi_select_mode") : "Multi-select Mode"}>
                <button onClick={onToggleMultiSelect} className={`${buttonClass(null)} ${isMultiSelectActive ? "bg-blue-600" : ""}`}>
                <Boxes size={18} />
                </button>
            </Tooltip>
            </div>
            <span className="text-xs mt-1">{isClient ? t("mode") : "Mode"}</span>
        </div>

        <div className="h-6 border-l border-gray-500 self-center"></div>

        <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
            <div className="relative">
                <Tooltip content={isClient ? t("clipper") : "Clipper"}>
                <button onClick={() => handleToolSelect("clipper")} className={buttonClass("clipper")}>
                    <Scissors size={18} />
                </button>
                </Tooltip>
            </div>
            <div className="relative">
                <Tooltip content={isClient ? t("length_measurement") : "Length Measurement"}>
                <button onClick={() => handleToolSelect("length")} className={buttonClass("length")}>
                    <Ruler size={18} />
                </button>
                </Tooltip>
                {renderOptionsPanel("length")}
            </div>
            <div className="relative">
                <Tooltip content={isClient ? t("area_measurement") : "Area Measurement"}>
                <button onClick={() => handleToolSelect("area")} className={buttonClass("area")}>
                    <Square size={18} />
                </button>
                </Tooltip>
                {renderOptionsPanel("area")}
            </div>
            {/* <Tooltip content={isClient ? t("info") : "Info"}>
                <button onClick={onToggleInfo} className={`${buttonClass(null)} ${isInfoOpen ? (darkMode ? "bg-blue-600" : "bg-blue-400") : ""}`}>
                <Info size={18} />
                </button>
            </Tooltip> */}
            {/* <div className="relative">
                <Tooltip content={isClient ? t("colorize") : "Colorize"}>
                <button onClick={() => handleToolSelect("colorize")} className={buttonClass("colorize")}>
                    <Pipette size={18} />
                </button>
                </Tooltip>
                {renderOptionsPanel("colorize")}
            </div> */}
            </div>
            <span className="text-xs mt-1">{isClient ? t("tools") : "Tools"}</span>
        </div>

        {/* <div className="h-6 border-l border-gray-500 self-center"></div>

        <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
            <Tooltip content={isClient ? t("info") : "Info"}>
                <button onClick={onToggleInfo} className={`${buttonClass(null)} ${isInfoOpen ? (darkMode ? "bg-blue-600" : "bg-blue-400") : ""}`}>
                <Info size={18} />
                </button>
            </Tooltip>
            </div>
            <span className="text-xs mt-1">{isClient ? t("info") : "Info"}</span>
        </div> */}
        </div>
    );
}
