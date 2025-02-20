import React from 'react'

import type { ColorsSekaiKey } from '@/styles/sekai-colors'

import { useOptionalSekai } from '@/hooks/internal/useOptionalSekai'

import type { PaletteMode } from '@/hooks/useThemeMode'

export interface SvgIconProps {
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
}

export const ClearSvg = ({ sekai, themeMode }: SvgIconProps) => {
  const { sekaiColor, isLight } = useOptionalSekai({ sekai: sekai, mode: themeMode })
  const color = isLight ? '#212121' : '#e0e0e0'

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
      {sekai ? (
        <>
          <line
            x1="1"
            y1="1"
            x2="23"
            y2="23"
            stroke={sekaiColor}
            strokeWidth="4"
            opacity="0.7"
          />
          <line
            x1="23"
            y1="1"
            x2="1"
            y2="23"
            stroke={sekaiColor}
            strokeWidth="4"
            opacity="0.7"
          />
        </>
      ) : null}
      <line x1="1" y1="1" x2="23" y2="23" stroke={color} strokeWidth="2" />
      <line x1="23" y1="1" x2="1" y2="23" stroke={color} strokeWidth="2" />
    </svg>
  )
}
