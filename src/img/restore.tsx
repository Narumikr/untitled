import React from 'react';

import { useOptionalSekai } from '@/internal/useOptionalSekai';

import type { PaletteMode } from '@/hooks/useThemeMode';
import type { ColorsSekaiKey } from '@/styles/sekai-colors';

export interface RestoreSvgIconProps {
  className?: string;
  sekai?: ColorsSekaiKey;
  themeMode?: PaletteMode;
}

export const RestoreSvg = ({ className = '', sekai, themeMode }: RestoreSvgIconProps) => {
  const { sekaiColor, isLight } = useOptionalSekai({ sekai: sekai, mode: themeMode });
  const color = isLight ? '#212121' : '#e0e0e0';

  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg">
      {sekai ? (
        <>
          <line
            x1="11"
            y1="27"
            x2="77"
            y2="27"
            stroke={sekaiColor}
            strokeWidth="17"
            opacity="0.7"
          />
          <line
            x1="76"
            y1="26"
            x2="76"
            y2="87"
            stroke={sekaiColor}
            strokeWidth="17"
            opacity="0.7"
          />
          <line
            x1="77"
            y1="86"
            x2="11"
            y2="86"
            stroke={sekaiColor}
            strokeWidth="17"
            opacity="0.7"
          />
          <line
            x1="12"
            y1="87"
            x2="12"
            y2="26"
            stroke={sekaiColor}
            strokeWidth="17"
            opacity="0.7"
          />
          <line
            x1="26"
            y1="10"
            x2="91"
            y2="10"
            stroke={sekaiColor}
            strokeWidth="17"
            opacity="0.7"
          />
          <line
            x1="92"
            y1="10"
            x2="92"
            y2="72"
            stroke={sekaiColor}
            strokeWidth="17"
            opacity="0.7"
          />
        </>
      ) : null}
      <line x1="11" y1="27" x2="77" y2="27" stroke={color} strokeWidth="8" />
      <line x1="76" y1="26" x2="76" y2="87" stroke={color} strokeWidth="8" />
      <line x1="77" y1="86" x2="11" y2="86" stroke={color} strokeWidth="8" />
      <line x1="12" y1="87" x2="12" y2="26" stroke={color} strokeWidth="8" />
      <line x1="26" y1="10" x2="91" y2="10" stroke={color} strokeWidth="8" />
      <line x1="92" y1="10" x2="92" y2="72" stroke={color} strokeWidth="8" />
    </svg>
  );
};
