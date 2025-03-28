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
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    summary: string;
    summaryStyles?: string;
    defaultOpen?: boolean;
    details: string | string[] | React.ReactNode;
}
declare const Accordion: ({ id, className, style, sekai, themeMode, summary, summaryStyles, defaultOpen, details }: AccordionProps) => React.JSX.Element;

type BasicButtonProps = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    withText?: boolean;
    themeMode?: PaletteMode;
    children?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
declare const BasicButton: ({ id, className, style, sekai, withText, themeMode, children, disabled, ...buttonProps }: BasicButtonProps) => React.JSX.Element;

interface HamburgerButtonProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    open: boolean;
    onClick?: () => void;
}
declare const HamburgerButton: ({ sekai, themeMode, open, ...rest }: HamburgerButtonProps) => React.JSX.Element;

type StrongButtonProps = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    children?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
declare const StrongButton: ({ id, className, style, sekai, themeMode, children, disabled, ...buttonProps }: StrongButtonProps) => React.JSX.Element;

interface CardProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    children: React.ReactNode;
}
declare const Card: ({ id, className, style, sekai, themeMode, children }: CardProps) => React.JSX.Element;
interface CardContentProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    themeMode?: PaletteMode;
    children: React.ReactNode;
}
declare const CardContent: ({ id, className, style, themeMode, children }: CardContentProps) => React.JSX.Element;
interface CardTitleProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    title: string;
    underline?: true;
}
declare const CardTitle: ({ id, className, style, sekai, themeMode, title, underline }: CardTitleProps) => React.JSX.Element;

interface PrskLinkCardProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    height?: number;
    width?: number;
    onClick?: () => void;
    title: string;
    subText: string;
    icon: string | React.ReactNode;
}
declare const PrskLinkCard: ({ id, className, style, sekai, themeMode, height, width, onClick, title, subText, icon }: PrskLinkCardProps) => React.JSX.Element;

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
    id?: string;
    className?: string;
    style?: React.CSSProperties;
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
declare const Dialog: ({ id, className, style, sekai, open, themeMode, children, containerComponent, size, onClose, title, showCloseIcon, buttons, dialogButtons }: DialogProps) => React.ReactPortal;
type DialogTitleHeaderProps = Pick<DialogProps, 'sekai' | 'themeMode' | 'size' | 'onClose' | 'title' | 'showCloseIcon'> & {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
};
declare const DialogTitleHeader: ({ id, className, style, sekai, themeMode, size, onClose, title, showCloseIcon }: DialogTitleHeaderProps) => React.JSX.Element | null;
type DialogButtonsProps = Pick<DialogProps, 'sekai' | 'themeMode' | 'buttons'> & {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
};
declare const DialogButtons: ({ id, className, style, sekai, themeMode, buttons }: DialogButtonsProps) => React.JSX.Element | null;

interface XoMikuDialogProps {
    open: boolean;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    themeMode?: PaletteMode;
    children: React.ReactNode;
    size?: DialogSize;
    containerComponent?: HTMLElement;
    onClose: () => void;
    title?: string;
    buttons?: DialogButton[];
}
declare const XoMikuDialog: ({ open, id, className, style, themeMode, children, size, containerComponent, onClose, title, buttons }: XoMikuDialogProps) => React.ReactPortal;

interface XxMikuDialogProps {
    open: boolean;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    themeMode?: PaletteMode;
    children: React.ReactNode;
    size?: DialogSize;
    containerComponent?: HTMLElement;
    onClose: () => void;
    title?: string;
    buttons?: DialogButton[];
}
declare const XxMikuDialog: ({ open, id, className, style, themeMode, children, size, containerComponent, onClose, title, buttons }: XxMikuDialogProps) => React.ReactPortal;

type DrawerPosition = 'top' | 'right' | 'bottom' | 'left';
interface DrawerProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    containerComponent?: HTMLElement;
    pos?: DrawerPosition;
}
declare const Drawer: ({ sekai, themeMode, open, onClose, children, containerComponent, pos, ...rest }: DrawerProps) => React.ReactPortal;

interface IntoTheSekaiProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    execEvent?: () => void;
    containerComponent?: HTMLElement;
}
declare const IntoTheSekai: ({ execEvent, containerComponent, ...rest }: IntoTheSekaiProps) => React.ReactPortal;

interface TextLinkProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    text: string;
    href: string;
    isExternal?: boolean;
    disabled?: boolean;
    ariaLabel?: string;
}
declare const TextLink: ({ id, className, style, sekai, themeMode, text, href, isExternal, disabled, ariaLabel }: TextLinkProps) => React.JSX.Element;

declare const ListContext: React.Context<boolean>;
interface ListProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    children: React.ReactNode;
    as?: 'ul' | 'ol';
    noBullet?: boolean;
}
declare const List: ({ id, className, style, sekai, themeMode, children, as, noBullet }: ListProps) => React.JSX.Element;

interface ListItemButtonProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    children: React.ReactNode;
    icon?: 'string' | React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
}
declare const ListItemButton: ({ id, className, style, sekai, themeMode, children, icon, disabled, onClick }: ListItemButtonProps) => React.JSX.Element;

interface ListItemTextProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    children: React.ReactNode;
    as?: 'p' | 'span';
    icon?: 'string' | React.ReactNode;
}
declare const ListItemText: ({ id, className, style, sekai, themeMode, children, as, icon }: ListItemTextProps) => React.JSX.Element;

interface StickyNoteProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    children: React.ReactNode;
    as?: 'button' | 'text';
    disabled?: boolean;
    onClick?: () => void;
}
declare const StickyNote: ({ sekai, children, as, ...rest }: StickyNoteProps) => React.JSX.Element;

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
    sekaiTheme: Required<SekaiTheme>;
}
declare const YourSekaiProvider: ({ children, sekaiTheme }: YourSekaiProviderProps) => React.JSX.Element;

interface NamePlateProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    text: string;
    colorCount?: number;
}
declare const NamePlate: ({ id, className, style, sekai, themeMode, text, colorCount }: NamePlateProps) => React.JSX.Element;

interface OutlineTextProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    text: string;
}
declare const OutlineText: ({ id, className, style, sekai, themeMode, text }: OutlineTextProps) => React.JSX.Element;

declare const useCreateSekai: () => YourSekaiContextProps;

declare const convertHexToRgb: (hex: string) => string;
declare const convertHexToRgba: (hex: string, alpha: number) => string;
declare const convertHexToRgbMixWithWhite: (hex: string, alpha: number) => string;

declare const fireOnEnterKey: (eventHandler: (e: React.KeyboardEvent<HTMLDivElement>) => void) => (e: React.KeyboardEvent<HTMLDivElement>) => void;
declare const fireOnEscapeKey: (eventHandler: (e: KeyboardEvent) => void) => (e: KeyboardEvent) => void;

export { Accordion, type AccordionProps, BasicButton, type BasicButtonProps, COLORS_SEKAI_KEYS, Card, CardContent, type CardContentProps, type CardProps, CardTitle, type CardTitleProps, type ColorsSekai, type ColorsSekaiKey, DARK_MODE, Dialog, type DialogButton, type DialogButtonType, DialogButtons, type DialogButtonsProps, type DialogProps, type DialogSize, DialogTitleHeader, type DialogTitleHeaderProps, Drawer, type DrawerPosition, type DrawerProps, HamburgerButton, type HamburgerButtonProps, IntoTheSekai, type IntoTheSekaiProps, LIGHT_MODE, List, ListContext, ListItemButton, type ListItemButtonProps, ListItemText, type ListItemTextProps, type ListProps, NamePlate, type NamePlateProps, OutlineText, type OutlineTextProps, type PaletteMode, PrskLinkCard, type PrskLinkCardProps, type SekaiTheme, StickyNote, type StickyNoteProps, StrongButton, type StrongButtonProps, TextLink, type TextLinkProps, XoMikuDialog, type XoMikuDialogProps, XxMikuDialog, type XxMikuDialogProps, YourSekaiContext, type YourSekaiContextProps, YourSekaiProvider, type YourSekaiProviderProps, colorsSekai, convertHexToRgb, convertHexToRgbMixWithWhite, convertHexToRgba, createSekai, fireOnEnterKey, fireOnEscapeKey, useCreateSekai, useThemeMode };
