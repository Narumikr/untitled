import React$1 from 'react';

declare const COLORS_SEKAI_KEYS: {
    readonly Miku: "Miku";
    readonly Rin: "Rin";
    readonly Len: "Len";
    readonly Luka: "Luka";
    readonly Meiko: "Meiko";
    readonly Kaito: "Kaito";
    readonly Ichika: "Ichika";
    readonly Saki: "Saki";
    readonly Honami: "Honami";
    readonly Shiho: "Shiho";
    readonly Minori: "Minori";
    readonly Haruka: "Haruka";
    readonly Airi: "Airi";
    readonly Shizuku: "Shizuku";
    readonly Kohane: "Kohane";
    readonly An: "An";
    readonly Akito: "Akito";
    readonly Toya: "Toya";
    readonly Tsukasa: "Tsukasa";
    readonly Emu: "Emu";
    readonly Nene: "Nene";
    readonly Rui: "Rui";
    readonly Kanade: "Kanade";
    readonly Mafuyu: "Mafuyu";
    readonly Ena: "Ena";
    readonly Mizuki: "Mizuki";
    readonly Virtualsinger: "Virtualsinger";
    readonly Leoneed: "Leoneed";
    readonly Moremorejump: "Moremorejump";
    readonly Vividbadsquad: "Vividbadsquad";
    readonly Wonderlandsshowtime: "Wonderlandsshowtime";
    readonly Nightcode: "Nightcode";
};
type ColorsSekaiKey = keyof typeof COLORS_SEKAI_KEYS;
declare const colorsSekai: {
    /** Character */
    readonly Miku: "#33ccba";
    readonly Rin: "#ffcc10";
    readonly Len: "#feee10";
    readonly Luka: "#ffbbcc";
    readonly Meiko: "#dd4544";
    readonly Kaito: "#3367cc";
    readonly Ichika: "#33aaee";
    readonly Saki: "#ffc800";
    readonly Honami: "#ee6666";
    readonly Shiho: "#bbdd22";
    readonly Minori: "#ffc096";
    readonly Haruka: "#99ccff";
    readonly Airi: "#ffaacc";
    readonly Shizuku: "#6be6cd";
    readonly Kohane: "#ff6699";
    readonly An: "#00bbdd";
    readonly Akito: "#ff7722";
    readonly Toya: "#0077dd";
    readonly Tsukasa: "#ffbb00";
    readonly Emu: "#ff66bb";
    readonly Nene: "#33dd99";
    readonly Rui: "#bb88ee";
    readonly Kanade: "#bb6688";
    readonly Mafuyu: "#8888cc";
    readonly Ena: "#ccaa88";
    readonly Mizuki: "#ddaacc";
    /** Unit */
    readonly Virtualsinger: "#f5f5f7";
    readonly Leoneed: "#4455dd";
    readonly Moremorejump: "#88dd44";
    readonly Vividbadsquad: "#ee1166";
    readonly Wonderlandsshowtime: "#ff9900";
    readonly Nightcode: "#884499";
};
type ColorsSekai = typeof colorsSekai;

declare const LIGHT_MODE = "light";
declare const DARK_MODE = "dark";
type PaletteMode = typeof LIGHT_MODE | typeof DARK_MODE;
declare const useThemeMode: () => PaletteMode;

type BasicButtonProps = {
    /** Button styles */
    className?: string;
    /** What SEKAI color to use */
    sekai?: ColorsSekaiKey;
    /** Apply SEKAI color to text */
    withText?: boolean;
    /** Light or Dark mode */
    themeMode?: PaletteMode;
    /** Button contents */
    children?: React$1.ReactNode;
    /** Button disabled */
    disabled?: boolean;
    /** Click handler */
    onClick?: () => void;
} & React$1.ButtonHTMLAttributes<HTMLButtonElement>;
declare const BasicButton: ({ className, sekai, withText, themeMode, children, disabled, ...buttonProps }: BasicButtonProps) => React$1.JSX.Element;

type DialogSize = 'narrow' | 'medium' | 'wide';
interface DialogProps {
    /** What SEKAI color to use */
    sekai?: ColorsSekaiKey;
    /** Dialog open */
    open: boolean;
    /** Light or Dark mode */
    themeMode?: PaletteMode;
    /** Button contents */
    children: React$1.ReactNode;
    /** */
    containerComponent?: HTMLElement;
    /** Dialog size */
    size?: DialogSize;
    /** Dialog close method */
    onClose: () => void;
    /** Dialog header title */
    title?: string;
    /** Whether to display close icon */
    showCloseIcon?: boolean;
}
declare const Dialog: ({ sekai, open, themeMode, children, containerComponent, size, onClose, title, showCloseIcon }: DialogProps) => React$1.ReactPortal;

type SekaiTheme = {
    palette: {
        sekai: ColorsSekaiKey;
        mode?: PaletteMode;
    };
    typography?: {
        fontFamily?: string;
    };
};
declare const createSekai: (option: SekaiTheme) => Required<SekaiTheme>;

interface YourSekaiContextProps {
    sekaiTheme: SekaiTheme;
    onSwitchSekaiColor: (sekai: ColorsSekaiKey) => void;
}
declare const YourSekaiContext: React$1.Context<YourSekaiContextProps | null>;
interface YourSekaiProviderProps {
    children: React$1.ReactNode;
    sekaiTheme: SekaiTheme;
}
declare const YourSekaiProvider: ({ children, sekaiTheme }: YourSekaiProviderProps) => React$1.JSX.Element;

declare const useCreateSekai: () => YourSekaiContextProps;

declare const convertHexToRgb: (hex: string) => string;
declare const convertHexToRgba: (hex: string, alpha: number) => string;

declare const fireOnEnterKey: (eventHandler: (e: React.KeyboardEvent) => void) => (e: React.KeyboardEvent) => void;
declare const fireOnEscapeKey: (eventHandler: (e: KeyboardEvent) => void) => (e: KeyboardEvent) => void;

export { BasicButton, type BasicButtonProps, COLORS_SEKAI_KEYS, type ColorsSekai, type ColorsSekaiKey, DARK_MODE, Dialog, type DialogProps, type DialogSize, LIGHT_MODE, type PaletteMode, type SekaiTheme, YourSekaiContext, type YourSekaiContextProps, YourSekaiProvider, type YourSekaiProviderProps, colorsSekai, convertHexToRgb, convertHexToRgba, createSekai, fireOnEnterKey, fireOnEscapeKey, useCreateSekai, useThemeMode };
