import React from 'react'

import globalStyles from '@/styles/global.module.scss'
import { type ColorsSekaiKey } from '@/styles/sekai-colors'

import { useOptionalSekai } from '@/hooks/internal/useOptionalSekai'
import { type PaletteMode } from '@/hooks/useThemeMode'
import { convertHexToRgba } from '@/utils/converter'

import styles from './BasicButton.module.scss'

export type BasicButtonProps = {
  /** Button styles */
  className?: string
  /** What SEKAI color to use */
  sekai?: ColorsSekaiKey
  /** Apply SEKAI color to text */
  withText?: boolean
  /** Light or Dark mode */
  themeMode?: PaletteMode
  /** Button contents */
  children?: React.ReactNode
  /** Button disabled */
  disabled?: boolean
  /** Click handler */
  onClick?: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const BasicButton = ({
  className = '',
  sekai,
  withText = false,
  themeMode,
  children,
  disabled = false,
  ...buttonProps
}: BasicButtonProps) => {
  const { sekaiColor, modeTheme, isLight } = useOptionalSekai({ sekai: sekai, mode: themeMode })
  const sekaiColorHover = convertHexToRgba(sekaiColor, isLight ? 0.1 : 0.3)

  const optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-hover': sekaiColorHover,
    ...(withText && { color: sekaiColor })
  }

  return (
    <button
      type="button"
      className={[
        styles[`sekai-basic-button-${modeTheme}`],
        globalStyles[`sekai-color-${modeTheme}`],
        className
      ].join(' ')}
      style={optionStyle}
      disabled={disabled}
      {...buttonProps}>
      {children}
    </button>
  )
}
