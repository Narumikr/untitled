import React from 'react'

import clsx from 'clsx'

import { COLOR_DARK_MODE, COLOR_LIGHT_MODE } from '@/internal/color.constant'
import { useOptionalSekai } from '@/internal/useOptionalSekai'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'

export type ArrowVector = 'left' | 'right'

export interface ArrowSvgIconProps {
  className?: string
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  vector?: ArrowVector
}

export const ArrowSvg = ({
  className,
  sekai,
  themeMode,
  vector = 'right',
}: ArrowSvgIconProps) => {
  const { sekaiColor, isLight } = useOptionalSekai({ sekai: sekai, mode: themeMode })
  const color = isLight ? COLOR_LIGHT_MODE : COLOR_DARK_MODE

  const getCoordinate = (x: number) => {
    return 'left' === vector ? Math.abs(0 - x) : Math.abs(100 - x)
  }

  return (
    <svg
      className={clsx(className)}
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg">
      {sekai ? (
        <>
          <line
            x1={getCoordinate(27.5)}
            y1="55.25"
            x2={getCoordinate(67.5)}
            y2="15"
            stroke={sekaiColor}
            strokeWidth="15"
          />
          <line
            x1={getCoordinate(27.5)}
            y1="45"
            x2={getCoordinate(67.5)}
            y2="85"
            stroke={sekaiColor}
            strokeWidth="15"
          />
        </>
      ) : null}
      <line
        x1={getCoordinate(30.5)}
        y1="52.75"
        x2={getCoordinate(67.5)}
        y2="15"
        stroke={color}
        strokeWidth="8"
      />
      <line
        x1={getCoordinate(30.5)}
        y1="47.25"
        x2={getCoordinate(67.5)}
        y2="85"
        stroke={color}
        strokeWidth="8"
      />
    </svg>
  )
}
