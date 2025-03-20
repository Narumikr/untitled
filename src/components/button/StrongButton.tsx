import React from 'react'

import clsx from 'clsx'

import { useOptionalSekai } from '@/internal/useOptionalSekai'
import { convertHexToRgba } from '@/utils/converter'

import styles from './StrongButton.module.scss'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'

export type StrongButtonProps = {
  id?: string
  className?: string
  style?: React.CSSProperties
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  children?: React.ReactNode
  disabled?: boolean
  onClick?: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const StrongButton = ({
  id,
  className,
  style,
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
      id={id}
      type="button"
      className={clsx(styles[`sekai-strong-button-${modeTheme}`], className)}
      style={{ ...(optionStyle as React.CSSProperties), ...style }}
      disabled={disabled}
      {...buttonProps}>
      {children}
    </button>
  )
}
