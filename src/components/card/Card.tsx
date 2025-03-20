import React from 'react'

import clsx from 'clsx'

import { useOptionalSekai } from '@/internal/useOptionalSekai'
import { convertHexToRgba } from '@/utils/converter'

import globalStyles from '@/styles/global.module.scss'

import styles from './Card.module.scss'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'

export interface CardProps {
  id?: string
  className?: string
  style?: React.CSSProperties
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  children: React.ReactNode
}

export const Card = ({ id, className, style, sekai, themeMode, children }: CardProps) => {
  const { sekaiColor, modeTheme } = useOptionalSekai({ sekai, mode: themeMode })

  const sekaiColoShadow = convertHexToRgba(sekaiColor, 0.25)

  const optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-shadow': sekaiColoShadow
  }

  return (
    <div
      id={id}
      className={clsx(
        styles['sekai-card'],
        globalStyles[`sekai-color-${modeTheme}`],
        className
      )}
      style={{ ...(optionStyle as React.CSSProperties), ...style }}>
      {children}
    </div>
  )
}

export interface CardContentProps {
  id?: string
  className?: string
  style?: React.CSSProperties
  themeMode?: PaletteMode
  children: React.ReactNode
}

export const CardContent = ({
  id,
  className,
  style,
  themeMode,
  children
}: CardContentProps) => {
  const { modeTheme } = useOptionalSekai({ mode: themeMode })

  return (
    <div
      id={id}
      className={clsx(
        styles['sekai-card-content'],
        globalStyles[`sekai-color-${modeTheme}`],
        className
      )}
      style={style}>
      {children}
    </div>
  )
}

export interface CardTitleProps {
  id?: string
  className?: string
  style?: React.CSSProperties
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  title: string
  underline?: true
}

export const CardTitle = ({
  id,
  className = '',
  style,
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
      id={id}
      className={[
        styles['sekai-card-title'],
        globalStyles[`sekai-color-${modeTheme}`],
        underline && styles['sekai-underline'],
        className
      ].join(' ')}
      style={{ ...(optionStyle as React.CSSProperties), ...style }}>
      {title}
    </h3>
  )
}
