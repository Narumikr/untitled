import React, { useMemo } from 'react'

import clsx from 'clsx'

import { useOptionalSekai } from '@/internal/useOptionalSekai'

import { colorsSekai } from '@/styles/sekai-colors'

import styles from './Divider.module.scss'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'

const LIGHTHEIGHT = '2px'

export interface DividerProps {
  id?: string
  className?: string
  style?: React.CSSProperties
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  children?: React.ReactNode
  pairColor?: ColorsSekaiKey
  lineheight?: number
  variant?: 'fullWidth' | 'inset' | 'middle'
  textAlign?: 'left' | 'center' | 'right'
  shadow?: boolean
}

export const Divider = ({
  sekai,
  themeMode,
  children,
  pairColor,
  lineheight,
  variant = 'fullWidth',
  textAlign = 'center',
  shadow,
  ...rest
}: DividerProps) => {
  const { sekaiColor, modeTheme } = useOptionalSekai({ sekai, mode: themeMode })
  const gradientColor = pairColor ? colorsSekai[pairColor] : 'transparent'
  const shadowStyle = Boolean(shadow) ? styles[`sekai-divider-shadow-${modeTheme}`] : ''

  const optionStyle = useMemo(
    () => ({
      '--sekai-color': sekaiColor,
      '--sekai-pair-color': gradientColor,
      '--divider-line-height': lineheight ? `${lineheight}px` : LIGHTHEIGHT
    }),
    [sekaiColor, gradientColor, lineheight]
  )

  return (
    <div
      {...rest}
      className={clsx(styles[`sekai-divider-${variant}`], rest.className)}
      style={{ ...(optionStyle as React.CSSProperties), ...rest.style }}>
      {children ? (
        <div className={clsx(styles[`sekai-divider-with-item-${textAlign}`], shadowStyle)}>
          {children}
        </div>
      ) : (
        <hr className={clsx(styles['sekai-divider-line'], shadowStyle)} />
      )}
    </div>
  )
}
