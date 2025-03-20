import React from 'react'

import clsx from 'clsx'

import { useOptionalSekai } from '@/internal/useOptionalSekai'
import { convertHexToRgba } from '@/utils/converter'

import globalStyles from '@/styles/global.module.scss'

import styles from './BasicButton.module.scss'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'

export type BasicButtonProps = {
  id?: string
  className?: string
  style?: React.CSSProperties
  sekai?: ColorsSekaiKey
  withText?: boolean
  themeMode?: PaletteMode
  children?: React.ReactNode
  disabled?: boolean
  onClick?: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const BasicButton = ({
  id,
  className,
  style,
  sekai,
  withText = false,
  themeMode,
  children,
  disabled = false,
  ...buttonProps
}: BasicButtonProps) => {
  const { sekaiColor, modeTheme, isLight } = useOptionalSekai({ sekai, mode: themeMode })

  const sekaiColorHover = convertHexToRgba(sekaiColor, isLight ? 0.1 : 0.3)

  const optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-hover': sekaiColorHover,
    ...(withText && { color: sekaiColor })
  }

  return (
    <button
      id={id}
      type="button"
      className={clsx(
        styles[`sekai-basic-button-${modeTheme}`],
        globalStyles[`sekai-color-${modeTheme}`],
        className
      )}
      style={{ ...(optionStyle as React.CSSProperties), ...style }}
      disabled={disabled}
      {...buttonProps}>
      {children}
    </button>
  )
}
