import React from 'react'

import type { ColorsSekaiKey } from '@/styles/sekai-colors'

import styles from './StrongButton.module.scss'

import type { PaletteMode } from '@/hooks/useThemeMode'

import { useOptionalSekai } from '@/hooks/internal/useOptionalSekai'
import { convertHexToRgba } from '@/utils/converter'

export type StrongButtonProps = {
  className?: string
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  children?: React.ReactNode
  disabled?: boolean
  onClick?: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const StrongButton = ({
  className = '',
  sekai,
  themeMode,
  children,
  disabled = false,
  ...buttonProps
}: StrongButtonProps) => {
  const { sekaiColor, modeTheme } = useOptionalSekai({ sekai, mode: themeMode })

  const sekaiColorBg = convertHexToRgba(sekaiColor, 0.8)

  const optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-bg': sekaiColorBg
  }

  return (
    <button
      type="button"
      className={[styles[`sekai-strong-button-${modeTheme}`], className].join(' ')}
      style={optionStyle as React.CSSProperties}
      disabled={disabled}
      {...buttonProps}>
      {children}
    </button>
  )
}
