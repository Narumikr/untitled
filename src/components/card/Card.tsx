import React from 'react'

import { useOptionalSekai } from '@/internal/useOptionalSekai'
import { convertHexToRgba } from '@/utils/converter'

import globalStyles from '@/styles/global.module.scss'

import styles from './Card.module.scss'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'

export interface CardProps {
  className?: string
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  children: React.ReactNode
}

export const Card = ({ className = '', sekai, themeMode, children }: CardProps) => {
  const { sekaiColor, modeTheme } = useOptionalSekai({ sekai, mode: themeMode })

  const sekaiColoShadow = convertHexToRgba(sekaiColor, 0.25)

  const optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-shadow': sekaiColoShadow
  }

  return (
    <div
      className={[
        styles['sekai-card'],
        globalStyles[`sekai-color-${modeTheme}`],
        className
      ].join(' ')}
      style={optionStyle as React.CSSProperties}>
      {children}
    </div>
  )
}

export interface CardContentProps {
  className?: string
  themeMode?: PaletteMode
  children: React.ReactNode
}

export const CardContent = ({ className = '', themeMode, children }: CardContentProps) => {
  const { modeTheme } = useOptionalSekai({ mode: themeMode })

  return (
    <div
      className={[
        styles['sekai-card-content'],
        globalStyles[`sekai-color-${modeTheme}`],
        className
      ].join(' ')}>
      {children}
    </div>
  )
}

export interface CardTitleProps {
  className?: string
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  title: string
  underline?: true
}

export const CardTitle = ({
  className = '',
  sekai,
  themeMode,
  title,
  underline
}: CardTitleProps) => {
  const { sekaiColor, modeTheme } = useOptionalSekai({ sekai, mode: themeMode })

  const optionStyle = {
    '--sekai-color': sekaiColor
  }

  return (
    <h3
      className={[
        styles['sekai-card-title'],
        globalStyles[`sekai-color-${modeTheme}`],
        underline && styles['sekai-underline'],
        className
      ].join(' ')}
      style={optionStyle as React.CSSProperties}>
      {title}
    </h3>
  )
}
