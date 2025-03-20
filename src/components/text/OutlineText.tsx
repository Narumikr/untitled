import React from 'react'

import clsx from 'clsx'

import { useOptionalSekai } from '@/internal/useOptionalSekai'

import styles from './OutlineText.module.scss'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'

export interface OutlineTextProps {
  id?: string
  className?: string
  style?: React.CSSProperties
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  text: string
}

export const OutlineText = ({
  id,
  className,
  style,
  sekai,
  themeMode,
  text
}: OutlineTextProps) => {
  const { sekaiColor, modeTheme } = useOptionalSekai({ sekai, mode: themeMode })

  const optionStyle = {
    '--sekai-color': sekaiColor
  }

  return (
    <span
      id={id}
      className={clsx(styles[`sekai-outline-text-${modeTheme}`], className)}
      style={{ ...(optionStyle as React.CSSProperties), ...style }}
      data-text={text}
      aria-label={text}>
      {text}
    </span>
  )
}
