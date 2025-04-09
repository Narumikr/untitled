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
declare const Accordion: ({ sekai, themeMode, summary, summaryStyles, defaultOpen, details, ...rest }: AccordionProps) => React.JSX.Element;

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
declare const BasicButton: ({ sekai, withText, themeMode, children, disabled, ...rest }: BasicButtonProps) => React.JSX.Element;

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
declare const StrongButton: ({ sekai, themeMode, children, disabled, ...rest }: StrongButtonProps) => React.JSX.Element;

interface CardProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    children: React.ReactNode;
}
declare const Card: ({ sekai, themeMode, children, ...rest }: CardProps) => React.JSX.Element;
interface CardContentProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    themeMode?: PaletteMode;
    children: React.ReactNode;
}
declare const CardContent: ({ themeMode, children, ...rest }: CardContentProps) => React.JSX.Element;
interface CardTitleProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    title: string;
    underline?: true;
}
declare const CardTitle: ({ sekai, themeMode, title, underline, ...rest }: CardTitleProps) => React.JSX.Element;

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
declare const PrskLinkCard: ({ sekai, themeMode, height, width, onClick, title, subText, icon, ...rest }: PrskLinkCardProps) => React.JSX.Element;

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
declare const Dialog: ({ sekai, open, themeMode, children, containerComponent, size, onClose, title, showCloseIcon, buttons, dialogButtons, ...rest }: DialogProps) => React.ReactPortal;
type DialogTitleHeaderProps = Pick<DialogProps, 'sekai' | 'themeMode' | 'size' | 'onClose' | 'title' | 'showCloseIcon'> & {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
};
declare const DialogTitleHeader: ({ sekai, themeMode, size, onClose, title, showCloseIcon, ...rest }: DialogTitleHeaderProps) => React.JSX.Element | null;
type DialogButtonsProps = Pick<DialogProps, 'sekai' | 'themeMode' | 'buttons'> & {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
};
declare const DialogButtons: ({ sekai, themeMode, buttons, ...rest }: DialogButtonsProps) => React.JSX.Element | null;

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
declare const XoMikuDialog: ({ open, themeMode, children, size, containerComponent, onClose, title, buttons, ...rest }: XoMikuDialogProps) => React.ReactPortal;

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
declare const XxMikuDialog: ({ open, themeMode, children, size, containerComponent, onClose, title, buttons, ...rest }: XxMikuDialogProps) => React.ReactPortal;

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

interface DoReMeetEffectProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekaiKeys: ColorsSekaiKey[];
    themeMode?: PaletteMode;
    text: string;
    duration?: number;
}
declare const DoReMeetEffect: ({ sekaiKeys, themeMode, text, duration, ...rest }: DoReMeetEffectProps) => React.JSX.Element;

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
declare const TextLink: ({ sekai, themeMode, text, href, isExternal, disabled, ariaLabel, ...rest }: TextLinkProps) => React.JSX.Element;

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
declare const List: ({ sekai, themeMode, children, as, noBullet, ...rest }: ListProps) => React.JSX.Element;

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
declare const ListItemText: ({ sekai, themeMode, children, as, icon, ...rest }: ListItemTextProps) => React.JSX.Element;

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

<<<<<<< Updated upstream
=======
interface LoadingProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
}
declare const Loading: ({ id, className, style, sekai }: LoadingProps) => React.JSX.Element;

type PaginationSize = 'small' | 'medium' | 'large';
interface PaginationProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    count: number;
    page?: number;
    onChangePage?: (page: number) => void;
    siblingCount?: number;
    size?: PaginationSize;
}
declare const Pagination: ({ sekai, themeMode, count, page, onChangePage, siblingCount, size, ...rest }: PaginationProps) => React.JSX.Element;

>>>>>>> Stashed changes
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
declare const NamePlate: ({ sekai, themeMode, text, colorCount, ...rest }: NamePlateProps) => React.JSX.Element;

interface OutlineTextProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    text: string;
}
declare const OutlineText: ({ sekai, themeMode, text, ...rest }: OutlineTextProps) => React.JSX.Element;

declare const useCreateSekai: () => YourSekaiContextProps;

declare const convertHexToRgb: (hex: string) => string;
declare const convertHexToRgba: (hex: string, alpha: number) => string;
declare const convertHexToRgbMixWithWhite: (hex: string, alpha: number) => string;

declare const fireOnEnterKey: (eventHandler: (e: React.KeyboardEvent<HTMLDivElement>) => void) => (e: React.KeyboardEvent<HTMLDivElement>) => void;
declare const fireOnEscapeKey: (eventHandler: (e: KeyboardEvent) => void) => (e: KeyboardEvent) => void;

<<<<<<< Updated upstream
export { Accordion, type AccordionProps, BasicButton, type BasicButtonProps, COLORS_SEKAI_KEYS, Card, CardContent, type CardContentProps, type CardProps, CardTitle, type CardTitleProps, type ColorsSekai, type ColorsSekaiKey, DARK_MODE, Dialog, type DialogButton, type DialogButtonType, DialogButtons, type DialogButtonsProps, type DialogProps, type DialogSize, DialogTitleHeader, type DialogTitleHeaderProps, DoReMeetEffect, type DoReMeetEffectProps, Drawer, type DrawerPosition, type DrawerProps, HamburgerButton, type HamburgerButtonProps, IntoTheSekai, type IntoTheSekaiProps, LIGHT_MODE, List, ListContext, ListItemButton, type ListItemButtonProps, ListItemText, type ListItemTextProps, type ListProps, NamePlate, type NamePlateProps, OutlineText, type OutlineTextProps, type PaletteMode, PrskLinkCard, type PrskLinkCardProps, type SekaiTheme, StickyNote, type StickyNoteProps, StrongButton, type StrongButtonProps, TextLink, type TextLinkProps, XoMikuDialog, type XoMikuDialogProps, XxMikuDialog, type XxMikuDialogProps, YourSekaiContext, type YourSekaiContextProps, YourSekaiProvider, type YourSekaiProviderProps, colorsSekai, convertHexToRgb, convertHexToRgbMixWithWhite, convertHexToRgba, createSekai, fireOnEnterKey, fireOnEscapeKey, useCreateSekai, useThemeMode };
=======
export { Accordion, type AccordionProps, BasicButton, type BasicButtonProps, COLORS_SEKAI_KEYS, Card, CardContent, type CardContentProps, type CardProps, CardTitle, type CardTitleProps, type ColorsSekai, type ColorsSekaiKey, DARK_MODE, Dialog, type DialogButton, type DialogButtonType, DialogButtons, type DialogButtonsProps, type DialogProps, type DialogSize, DialogTitleHeader, type DialogTitleHeaderProps, DoReMeetEffect, type DoReMeetEffectProps, Drawer, type DrawerPosition, type DrawerProps, HamburgerButton, type HamburgerButtonProps, IntoTheSekai, type IntoTheSekaiProps, LIGHT_MODE, List, ListContext, ListItemButton, type ListItemButtonProps, ListItemText, type ListItemTextProps, type ListProps, Loading, type LoadingProps, NamePlate, type NamePlateProps, OutlineText, type OutlineTextProps, Pagination, type PaginationProps, type PaginationSize, type PaletteMode, PrskLinkCard, type PrskLinkCardProps, type SekaiTheme, StickyNote, type StickyNoteProps, StrongButton, type StrongButtonProps, TextLink, type TextLinkProps, XoMikuDialog, type XoMikuDialogProps, XxMikuDialog, type XxMikuDialogProps, YourSekaiContext, type YourSekaiContextProps, YourSekaiProvider, type YourSekaiProviderProps, colorsSekai, convertHexToRgb, convertHexToRgbMixWithWhite, convertHexToRgba, createSekai, fireOnEnterKey, fireOnEscapeKey, useCreateSekai, useThemeMode };
>>>>>>> Stashed changes
