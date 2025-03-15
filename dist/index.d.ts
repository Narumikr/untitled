import React from 'react';

declare const LIGHT_MODE = "light";
declare const DARK_MODE = "dark";
type PaletteMode = typeof LIGHT_MODE | typeof DARK_MODE;
declare const useThemeMode: () => PaletteMode;

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

interface AccordionProps {
    className?: string;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    summary: string;
    summaryStyles?: string;
    defaultOpen?: boolean;
    details: string | string[] | React.ReactNode;
}
declare const Accordion: ({ className, sekai, themeMode, summary, summaryStyles, defaultOpen, details }: AccordionProps) => React.JSX.Element;

type BasicButtonProps = {
    className?: string;
    sekai?: ColorsSekaiKey;
    withText?: boolean;
    themeMode?: PaletteMode;
    children?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
declare const BasicButton: ({ className, sekai, withText, themeMode, children, disabled, ...buttonProps }: BasicButtonProps) => React.JSX.Element;

type StrongButtonProps = {
    className?: string;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    children?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
declare const StrongButton: ({ className, sekai, themeMode, children, disabled, ...buttonProps }: StrongButtonProps) => React.JSX.Element;

interface CardProps {
    className?: string;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
}
declare const Card: ({ className, sekai, themeMode }: CardProps) => React.JSX.Element;

type DialogSize = 'narrow' | 'medium' | 'wide';
type DialogButtonType = 'normal' | 'strong';
interface DialogButton {
    text: string;
    onClick: () => void;
    type?: DialogButtonType;
    disabled?: boolean;
    ariaLabel?: string;
    buttonStyle?: string;
}
interface DialogProps {
    sekai?: ColorsSekaiKey;
    open: boolean;
    themeMode?: PaletteMode;
    children: React.ReactNode;
    containerComponent?: HTMLElement;
    size?: DialogSize;
    onClose: () => void;
    title?: string;
    showCloseIcon?: boolean;
    buttons?: DialogButton[];
    dialogButtons?: React.ReactNode;
}
declare const Dialog: ({ sekai, open, themeMode, children, containerComponent, size, onClose, title, showCloseIcon, buttons, dialogButtons }: DialogProps) => React.ReactPortal;
type DialogTitleHeaderProps = Pick<DialogProps, 'sekai' | 'themeMode' | 'size' | 'onClose' | 'title' | 'showCloseIcon'> & {
    className?: string;
};
declare const DialogTitleHeader: ({ className, sekai, themeMode, size, onClose, title, showCloseIcon }: DialogTitleHeaderProps) => React.JSX.Element | null;
type DialogButtonsProps = Pick<DialogProps, 'sekai' | 'themeMode' | 'buttons'> & {
    className?: string;
};
declare const DialogButtons: ({ className, sekai, themeMode, buttons }: DialogButtonsProps) => React.JSX.Element | null;

interface XoMikuDialogProps {
    open: boolean;
    themeMode?: PaletteMode;
    children: React.ReactNode;
    size?: DialogSize;
    containerComponent?: HTMLElement;
    onClose: () => void;
    title?: string;
    buttons?: DialogButton[];
}
declare const XoMikuDialog: ({ open, themeMode, children, size, containerComponent, onClose, title, buttons }: XoMikuDialogProps) => React.ReactPortal;

interface XxMikuDialogProps {
    open: boolean;
    themeMode?: PaletteMode;
    children: React.ReactNode;
    size?: DialogSize;
    containerComponent?: HTMLElement;
    onClose: () => void;
    title?: string;
    buttons?: DialogButton[];
}
declare const XxMikuDialog: ({ open, themeMode, children, size, containerComponent, onClose, title, buttons }: XxMikuDialogProps) => React.ReactPortal;

interface TextLinkProps {
    className?: string;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    text: string;
    href: string;
    isExternal?: boolean;
    disabled?: boolean;
    ariaLabel?: string;
}
declare const TextLink: ({ className, sekai, themeMode, text, href, isExternal, disabled, ariaLabel }: TextLinkProps) => React.JSX.Element;

declare const ListContext: React.Context<boolean>;
interface ListProps {
    className?: string;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    children: React.ReactNode;
    as?: 'ul' | 'ol';
    noBullet?: boolean;
}
declare const List: ({ className, sekai, themeMode, children, as, noBullet }: ListProps) => React.JSX.Element;

interface ListItemButtonProps {
    className?: string;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    children: React.ReactNode;
    icon?: 'string' | React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
}
declare const ListItemButton: ({ className, sekai, themeMode, children, icon, disabled, onClick }: ListItemButtonProps) => React.JSX.Element;

interface ListItemTextProps {
    className?: string;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    children: React.ReactNode;
    as?: 'p' | 'span';
    icon?: 'string' | React.ReactNode;
}
declare const ListItemText: ({ className, sekai, themeMode, children, as, icon }: ListItemTextProps) => React.JSX.Element;

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
declare const YourSekaiContext: React.Context<YourSekaiContextProps | null>;
interface YourSekaiProviderProps {
    children: React.ReactNode;
    sekaiTheme: SekaiTheme;
}
declare const YourSekaiProvider: ({ children, sekaiTheme }: YourSekaiProviderProps) => React.JSX.Element;

interface NamePlateProps {
    className?: string;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    text: string;
    colorCount?: number;
}
declare const NamePlate: ({ className, sekai, themeMode, text, colorCount }: NamePlateProps) => React.JSX.Element;

interface OutlineTextProps {
    className?: string;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    text: string;
}
declare const OutlineText: ({ className, sekai, themeMode, text }: OutlineTextProps) => React.JSX.Element;

declare const useCreateSekai: () => YourSekaiContextProps;

declare const convertHexToRgb: (hex: string) => string;
declare const convertHexToRgba: (hex: string, alpha: number) => string;

declare const fireOnEnterKey: (eventHandler: (e: React.KeyboardEvent<HTMLDivElement>) => void) => (e: React.KeyboardEvent<HTMLDivElement>) => void;
declare const fireOnEscapeKey: (eventHandler: (e: KeyboardEvent) => void) => (e: KeyboardEvent) => void;

export { Accordion, type AccordionProps, BasicButton, type BasicButtonProps, COLORS_SEKAI_KEYS, Card, type CardProps, type ColorsSekai, type ColorsSekaiKey, DARK_MODE, Dialog, type DialogButton, type DialogButtonType, DialogButtons, type DialogButtonsProps, type DialogProps, type DialogSize, DialogTitleHeader, type DialogTitleHeaderProps, LIGHT_MODE, List, ListContext, ListItemButton, type ListItemButtonProps, ListItemText, type ListItemTextProps, type ListProps, NamePlate, type NamePlateProps, OutlineText, type OutlineTextProps, type PaletteMode, type SekaiTheme, StrongButton, type StrongButtonProps, TextLink, type TextLinkProps, XoMikuDialog, type XoMikuDialogProps, XxMikuDialog, type XxMikuDialogProps, YourSekaiContext, type YourSekaiContextProps, YourSekaiProvider, type YourSekaiProviderProps, colorsSekai, convertHexToRgb, convertHexToRgba, createSekai, fireOnEnterKey, fireOnEscapeKey, useCreateSekai, useThemeMode };
