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

interface BackdropProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    open: boolean;
    children: React.ReactNode;
    containerComponent?: HTMLElement;
    centered?: boolean;
}
declare const Backdrop: ({ sekai, themeMode, open, children, containerComponent, centered, ...rest }: BackdropProps) => React.ReactPortal;

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

type ScrollTopPos = 'bottom-right' | 'bottom-left';
interface ScrollTopButtonProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    pos?: ScrollTopPos;
}
declare const ScrollTopButton: ({ sekai, themeMode, pos, ...rest }: ScrollTopButtonProps) => React.ReactPortal | null;

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

interface StylishButtonProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    children?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    arrowIcon?: boolean;
}
declare const StylishButton: ({ sekai, themeMode, children, disabled, arrowIcon, ...rest }: StylishButtonProps) => React.JSX.Element;

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

interface WindowDialogProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    open: boolean;
    children: React.ReactNode;
    containerComponent?: HTMLElement;
    size?: DialogSize;
    onClose: () => void;
}
declare const WindowDialog: ({ sekai, themeMode, open, children, containerComponent, size, onClose, ...rest }: WindowDialogProps) => React.ReactPortal;

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

interface DropdownOption {
    label: string;
    value: string;
}
interface DropdownProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    options: DropdownOption[];
    defaultValue?: string;
    onSelect: (value: string) => void;
    placeholder?: string;
}
declare const Dropdown: (props: DropdownProps) => React.JSX.Element;
declare const DropdownContent: ({ sekai, themeMode, options, onSelect, placeholder, ...rest }: DropdownProps) => React.JSX.Element;

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

type SekaiThemeProps = {
    palette: {
        sekai: ColorsSekaiKey;
        mode?: PaletteMode;
    };
    typography?: {
        fontFamily?: string;
    };
};
type SekaiTheme = {
    palette: {
        sekai: ColorsSekaiKey;
        mode: PaletteMode;
    };
    typography: {
        fontFamily: string;
    };
};
declare const createSekai: (option: SekaiThemeProps) => SekaiTheme;

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

interface TypewriterTextOptions {
    speed?: number;
    loop?: boolean;
    cursor?: boolean;
}
interface TypewriterTextProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    text: string;
    options?: TypewriterTextOptions;
}
declare const TypewriterText: ({ sekai, themeMode, text, options, ...rest }: TypewriterTextProps) => React.JSX.Element;

interface BodyTextProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    themeMode?: PaletteMode;
    children?: React.ReactNode;
}
declare const BodyText: ({ themeMode, children, ...rest }: BodyTextProps) => React.JSX.Element;
interface SekaiBodyTextProps extends BodyTextProps {
    sekai?: ColorsSekaiKey;
}
declare const SekaiBodyText: ({ sekai, children, ...rest }: SekaiBodyTextProps) => React.JSX.Element;
interface DetailTextProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    themeMode?: PaletteMode;
    children?: React.ReactNode;
}
declare const DetailText: ({ themeMode, children, ...rest }: DetailTextProps) => React.JSX.Element;
interface SekaiDetailTextProps extends DetailTextProps {
    sekai?: ColorsSekaiKey;
}
declare const SekaiDetailText: ({ sekai, children, ...rest }: SekaiDetailTextProps) => React.JSX.Element;
interface AnnotationTextProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    themeMode?: PaletteMode;
    children?: React.ReactNode;
}
declare const AnnotationText: ({ themeMode, children, ...rest }: AnnotationTextProps) => React.JSX.Element;
interface SekaiAnnotationTextProps extends AnnotationTextProps {
    sekai?: ColorsSekaiKey;
}
declare const SekaiAnnotationText: ({ sekai, children, ...rest }: SekaiAnnotationTextProps) => React.JSX.Element;

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    placeholder?: string;
    clearButton?: boolean;
    onChangeInput?: (value: string) => void;
    isError?: boolean;
    errorMessage?: string;
    maxLength?: number;
}
declare const TextField: ({ id, className, style, sekai, themeMode, clearButton, onChangeInput, isError, errorMessage, ...inputProps }: TextFieldProps) => React.JSX.Element;

type ToastPosition = 'top' | 'bottom';
interface ToastProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    open: boolean;
    onClose: () => void;
    pos?: ToastPosition;
    message: string[] | string;
    isError?: boolean;
    duration?: number;
    containerComponent?: HTMLElement;
}
declare const Toast: ({ sekai, themeMode, open, onClose, pos, message, isError, duration, containerComponent, ...rest }: ToastProps) => React.ReactPortal;

type TooltipPosition = 'top' | 'bottom';
interface TooltipProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    sekai?: ColorsSekaiKey;
    themeMode?: PaletteMode;
    children: React.ReactNode;
    text: string;
    pos?: TooltipPosition;
}
declare const Tooltip: ({ sekai, themeMode, children, text, pos, ...rest }: TooltipProps) => React.JSX.Element;

declare const useCreateSekai: () => YourSekaiContextProps;

declare const useCurrentTime: () => Date;

declare const ORIENTATION: {
    readonly PORTRAIT: "PORTRAIT";
    readonly LANDSCAPE: "LANDSCAPE";
};
type Orientation = (typeof ORIENTATION)[keyof typeof ORIENTATION];
declare const useInnerSize: () => number;
/**
 * @description This hook is used to get the current window size and orientation.
 * Return Portrait if the window size is 768px or less, otherwise return Landscape.
 */
declare const useOrientation: () => Orientation;
/**
 * @description This hook is used to get the current window size and check if it is in tablet size.
 * Return true if the window size is between 768px and 1280px, otherwise return false.
 */
declare const useTabletSize: () => boolean;

/**
 * @description Get localized character name by ColorsSekaiKey
 * @param {string} name - ColorsSekaiKey
 * @param {string} locale - Locale code (default: 'ja')
 * @returns {string} - Localized character name
 */
declare const getSekaiCharacterName: (name: ColorsSekaiKey, locale?: string) => string;

declare const convertHexToRgb: (hex: string) => string;
declare const convertHexToRgba: (hex: string, alpha: number) => string;
declare const convertHexToRgbaMixWithBlackOrWhite: (hex: string, mixRatio: number, mixWhite: boolean, alpha?: number) => string;

/**
 * Returns a keyboard event handler that triggers the provided event handler only when the Enter key is pressed.
 *
 * @param eventHandler - The function to be called when the Enter key is pressed.
 * @returns A new event handler that calls the provided handler on Enter key press and prevents the default action.
 */
declare const fireOnEnterKey: (eventHandler: (e: React.KeyboardEvent<HTMLDivElement>) => void) => (e: React.KeyboardEvent<HTMLDivElement>) => void;
/**
 * Returns a keyboard event handler that triggers the provided `eventHandler`
 * only when the Escape key is pressed. The returned handler also calls
 * `preventDefault()` on the event before checking the key.
 *
 * @param eventHandler - The function to be called when the Escape key is pressed.
 * @returns A keyboard event handler function.
 */
declare const fireOnEscapeKey: (eventHandler: (e: KeyboardEvent) => void) => (e: KeyboardEvent) => void;
/**
 * Returns a new array with the elements of the input array shuffled in random order.
 *
 * Uses the Fisher-Yates (Knuth) shuffle algorithm to ensure an unbiased shuffle.
 *
 * @typeParam T - The type of elements in the array.
 * @param array - The array to shuffle.
 * @returns A new array containing the shuffled elements.
 */
declare const shuffleArray: <T>(array: T[]) => T[];

/**
 * Returns the current time as a Date object.
 * @returns {Date} The current Date object.
 */
declare const getCurrentTime: () => Date;
/**
 * Returns the current time as a string in the specified format.
 * @param {Date} now - The current Date object.
 * @param {string} format - Format type ('datetime', 'date', 'time', 'timestamp', 'iso')
 * @param {string} locale - Locale (default: 'ja-JP')
 * @returns {string} Formatted time string
 */
declare const getFormattedTime: (now: Date, format?: string, locale?: string) => string;
/**
 * Returns the current time in a custom format.
 * @param {Date} now - The current Date object.
 * @param {string} pattern - Format pattern (e.g., 'YYYY-MM-DD HH:mm:ss')
 * @returns {string} Formatted time string
 */
declare const getCustomCurrentTime: (now: Date, pattern?: string) => string;

export { Accordion, AnnotationText, Backdrop, BasicButton, BodyText, COLORS_SEKAI_KEYS, Card, CardContent, CardTitle, DARK_MODE, DetailText, Dialog, DialogButtons, DialogTitleHeader, DoReMeetEffect, Drawer, Dropdown, DropdownContent, HamburgerButton, IntoTheSekai, LIGHT_MODE, List, ListContext, ListItemButton, ListItemText, Loading, NamePlate, ORIENTATION, OutlineText, Pagination, PrskLinkCard, ScrollTopButton, SekaiAnnotationText, SekaiBodyText, SekaiDetailText, StickyNote, StrongButton, StylishButton, TextField, TextLink, Toast, Tooltip, TypewriterText, WindowDialog, XoMikuDialog, XxMikuDialog, YourSekaiContext, YourSekaiProvider, colorsSekai, convertHexToRgb, convertHexToRgba, convertHexToRgbaMixWithBlackOrWhite, createSekai, fireOnEnterKey, fireOnEscapeKey, getCurrentTime, getCustomCurrentTime, getFormattedTime, getSekaiCharacterName, shuffleArray, useCreateSekai, useCurrentTime, useInnerSize, useOrientation, useTabletSize, useThemeMode };
export type { AccordionProps, AnnotationTextProps, BackdropProps, BasicButtonProps, BodyTextProps, CardContentProps, CardProps, CardTitleProps, ColorsSekai, ColorsSekaiKey, DetailTextProps, DialogButton, DialogButtonType, DialogButtonsProps, DialogProps, DialogSize, DialogTitleHeaderProps, DoReMeetEffectProps, DrawerPosition, DrawerProps, DropdownOption, DropdownProps, HamburgerButtonProps, IntoTheSekaiProps, ListItemButtonProps, ListItemTextProps, ListProps, LoadingProps, NamePlateProps, Orientation, OutlineTextProps, PaginationProps, PaginationSize, PaletteMode, PrskLinkCardProps, ScrollTopButtonProps, ScrollTopPos, SekaiAnnotationTextProps, SekaiBodyTextProps, SekaiDetailTextProps, SekaiTheme, SekaiThemeProps, StickyNoteProps, StrongButtonProps, StylishButtonProps, TextFieldProps, TextLinkProps, ToastPosition, ToastProps, TooltipPosition, TooltipProps, TypewriterTextOptions, TypewriterTextProps, WindowDialogProps, XoMikuDialogProps, XxMikuDialogProps, YourSekaiContextProps, YourSekaiProviderProps };
