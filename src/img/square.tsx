import React from 'react'

import { useOptionalSekai } from '@/internal/useOptionalSekai'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'

export interface SquareSvgIconProps {
  className?: string
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
}

export const SquareSvg = ({ className = '', sekai, themeMode }: SquareSvgIconProps) => {
  const { sekaiColor, isLight } = useOptionalSekai({ sekai: sekai, mode: themeMode })
  const color = isLight ? '#212121' : '#e0e0e0'

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
            x1="15"
            y1="16"
            x2="85"
            y2="16"
            stroke={sekaiColor}
            strokeWidth="17"
            opacity="0.7"
          />
          <line
            x1="84"
            y1="15"
            x2="84"
            y2="85"
            stroke={sekaiColor}
            strokeWidth="17"
            opacity="0.7"
          />
          <line
            x1="85"
            y1="84"
            x2="15"
            y2="84"
            stroke={sekaiColor}
            strokeWidth="17"
            opacity="0.7"
          />
          <line
            x1="16"
            y1="85"
            x2="16"
            y2="15"
            stroke={sekaiColor}
            strokeWidth="17"
            opacity="0.7"
          />
        </>
      ) : null}
      <line x1="15" y1="16" x2="85" y2="16" stroke={color} strokeWidth="8" />
      <line x1="84" y1="15" x2="84" y2="85" stroke={color} strokeWidth="8" />
      <line x1="85" y1="84" x2="15" y2="84" stroke={color} strokeWidth="8" />
      <line x1="16" y1="85" x2="16" y2="15" stroke={color} strokeWidth="8" />
    </svg>
  )
}
