import React from 'react'

import type { ColorsSekaiKey } from '@/styles/sekai-colors'

import { useOptionalSekai } from '@/hooks/internal/useOptionalSekai'

import styles from './OutlineText.module.scss'

import type { PaletteMode } from '@/hooks/useThemeMode'

export interface OutlineTextProps {
  className?: string
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  text: string
}

export const OutlineText = ({ className = '', sekai, themeMode, text }: OutlineTextProps) => {
  const { sekaiColor, modeTheme } = useOptionalSekai({ sekai, mode: themeMode })

  const optionStyle = {
    '--sekai-color': sekaiColor
  }

  return (
    <span
      className={[styles[`sekai-outline-text-${modeTheme}`], className].join(' ')}
      style={optionStyle as React.CSSProperties}
      data-text={text}
      aria-label={text}>
      {text}
    </span>
  )
}
