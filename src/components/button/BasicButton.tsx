import React from 'react'

import globalStyles from '@/styles/global.module.scss'

import { useSekaiTheme } from '@/hooks/useSekaiTheme'
import { LIGHT_MODE, type PaletteMode } from '@/hooks/useThemeMode'
import { convertHexToRgba } from '@/utils/converter'
import { colorsSekai, type ColorsSekaiKey } from '@/utils/sekai-colors'

import styles from './BasicButton.module.scss'

export type BasicButtonProps = {
  className?: string
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  children?: React.ReactNode
  disabled?: boolean
  onClick: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const BasicButton = ({
  className = '',
  sekai,
  themeMode = LIGHT_MODE,
  children,
  disabled = false,
  onClick,
  ...buttonProps
}: BasicButtonProps) => {
  const theme = useSekaiTheme()
  const sekaiColor = colorsSekai[sekai || theme.sekaiTheme.palette.sekai]
  const isLight = LIGHT_MODE === themeMode
  const sekaiColorHover = convertHexToRgba(sekaiColor, isLight ? 0.1 : 0.3)

  return (
    <button
      className={`${styles[`sekai-basic-button--${themeMode}`]} ${globalStyles[`sekai-color-${themeMode}`]} ${className}`}
      style={
        {
          '--sekai-color': sekaiColor,
          '--sekai-color-hover': sekaiColorHover
        } as React.CSSProperties
      }
      disabled={disabled}
      onClick={onClick}
      {...buttonProps}>
      {children}
    </button>
  )
}
