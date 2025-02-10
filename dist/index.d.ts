import React from 'react';

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
    readonly Virtualsinger: "#ffffff";
    readonly Leoneed: "#4455dd";
    readonly Moremorejump: "#88dd44";
    readonly Vividbadsquad: "#ee1166";
    readonly Wonderlandsshowtime: "#ff9900";
    readonly Nightcode: "#884499";
};

interface ButtonProps {
    /** Is this the principal call to action on the page? */
    primary?: boolean;
    /** What background color to use */
    backgroundColor?: string;
    /** How large should the button be? */
    size?: 'small' | 'medium' | 'large';
    /** Button contents */
    label: string;
    /** Optional click handler */
    onClick?: () => void;
}
/** Primary UI component for user interaction */
declare const Button: ({ primary, size, backgroundColor, label, ...props }: ButtonProps) => React.JSX.Element;

export { Button, type ButtonProps, colorsSekai };
