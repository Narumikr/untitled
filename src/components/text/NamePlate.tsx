import React from 'react'

import { useOptionalSekai } from '@/internal/useOptionalSekai'

import styles from './NamePlate.module.scss'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'
import type { CSSProperties } from 'react'

export interface NamePlateProps {
  className?: string
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  text: string
  colorCount?: number
}

export const NamePlate = ({
  className = '',
  sekai,
  themeMode,
  text,
  colorCount = 1
}: NamePlateProps) => {
  const { sekaiColor, modeTheme } = useOptionalSekai({ sekai, mode: themeMode })

  const optionStyle = {
    '--sekai-color': sekaiColor
  }

  const colorText = text.slice(0, colorCount)
  const normalText = text.slice(colorCount)

  return (
    <div
      className={[styles[`sekai-name-plate-${modeTheme}`], className].join(' ')}
      style={optionStyle as CSSProperties}>
      <span className={styles['sekai-name-plate-color']}>{colorText}</span>
      <span>{normalText}</span>
    </div>
  )
}
