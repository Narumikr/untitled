import React from 'react'

import { useOptionalSekai } from '@/internal/useOptionalSekai'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'

export type ChevronVector = 'up' | 'down'

export interface ChevronSvgIconProps {
  className?: string
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  vector?: ChevronVector
}

export const ChevronSvg = ({
  className = '',
  sekai,
  themeMode,
  vector = 'up'
}: ChevronSvgIconProps) => {
  const { sekaiColor, isLight } = useOptionalSekai({ sekai: sekai, mode: themeMode })
  const color = isLight ? '#212121' : '#e0e0e0'

  const getCoordinate = (y: number) => {
    return 'up' === vector ? Math.abs(0 - y) : Math.abs(100 - y)
  }

  return (
    <svg
      // style={vectorStyles}
      className={className}
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg">
      {sekai ? (
        <>
          <line
            x1="48"
            y1={getCoordinate(30.5)}
            x2="85"
            y2={getCoordinate(67.5)}
            stroke={sekaiColor}
            strokeWidth="15"
            opacity="0.7"
          />
          <line
            x1="52"
            y1={getCoordinate(30.5)}
            x2="15"
            y2={getCoordinate(67.5)}
            stroke={sekaiColor}
            strokeWidth="15"
            opacity="0.7"
          />
        </>
      ) : null}
      <line
        x1="48"
        y1={getCoordinate(30.5)}
        x2="85"
        y2={getCoordinate(67.5)}
        stroke={color}
        strokeWidth="8"
      />
      <line
        x1="52"
        y1={getCoordinate(30.5)}
        x2="15"
        y2={getCoordinate(67.5)}
        stroke={color}
        strokeWidth="8"
      />
    </svg>
  )
}
