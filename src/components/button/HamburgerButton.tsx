import React from 'react'

import clsx from 'clsx'

import styles from './HamburgerButton.module.scss'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'

import { useOptionalSekai } from '@/internal/useOptionalSekai'
import { convertHexToRgba } from '@/utils/converter'

export type HamburgerButtonPos = 'right-up' | 'left-up'

export interface HamburgerButtonProps {
  id?: string
  className?: string
  style?: React.CSSProperties
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  open: boolean
  onClick?: () => void
}

export const HamburgerButton = ({
  id,
  className,
  style,
  sekai,
  themeMode,
  open,
  onClick
}: HamburgerButtonProps) => {
  const { sekaiColor, modeTheme } = useOptionalSekai({ sekai, mode: themeMode })
  const sekaiColorBg = convertHexToRgba(sekaiColor, 0.8)

  const optionStyle = {
    '--sekai-color-bg': sekaiColorBg
  }

  const handleClick = () => {
    onClick?.()
  }

  return (
    <button
      id={id}
      type="button"
      className={clsx(styles[`sekai-hamburger-button`], className)}
      onClick={handleClick}
      style={{ ...(optionStyle as React.CSSProperties), ...style }}>
      <span
        className={clsx(
          styles[`sekai-hamburger-line-${modeTheme}`],
          open && styles['sekai-open']
        )}></span>
      <span
        className={clsx(
          styles[`sekai-hamburger-line-${modeTheme}`],
          open && styles['sekai-open']
        )}></span>
      <span
        className={clsx(
          styles[`sekai-hamburger-line-${modeTheme}`],
          open && styles['sekai-open']
        )}></span>
    </button>
  )
}
