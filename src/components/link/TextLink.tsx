import React from 'react'

import type { ColorsSekaiKey } from '@/styles/sekai-colors'

import styles from './TextLink.module.scss'

import type { PaletteMode } from '@/hooks/useThemeMode'

import { useOptionalSekai } from '@/hooks/internal/useOptionalSekai'
import { convertHexToRgba } from '@/utils/converter'

export interface TextLinkProps {
  className?: string
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  text: string
  href: string
  isExternal?: boolean
  disabled?: boolean
  ariaLabel?: string
}

export const TextLink = ({
  className = '',
  sekai,
  themeMode,
  text,
  href,
  isExternal = true,
  disabled = false,
  ariaLabel
}: TextLinkProps) => {
  const { sekaiColor, modeTheme, isLight } = useOptionalSekai({ sekai, mode: themeMode })

  const sekaiColorHover = convertHexToRgba(sekaiColor, isLight ? 0.2 : 0.6)

  const optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-hover': sekaiColorHover
  }

  return (
    <a
      className={[
        styles[`sekai-text-link-${modeTheme}`],
        disabled && styles['sekai-disabled'],
        className
      ].join(' ')}
      style={optionStyle as React.CSSProperties}
      href={href}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      target={isExternal ? '_blank' : '_self'}
      rel="noopener noreferrer">
      {text}
    </a>
  )
}
