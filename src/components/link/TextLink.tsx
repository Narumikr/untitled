import React from 'react'

import type { ColorsSekaiKey } from '@/styles/sekai-colors'

import styles from './TextLink.module.scss'

import type { PaletteMode } from '@/hooks/useThemeMode'

import { useOptionalSekai } from '@/hooks/internal/useOptionalSekai'

export interface TextLinkProps {
  className?: string
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  text: string
  href: string
  ariaLabel?: string
}

export const TextLink = ({
  className = '',
  sekai,
  themeMode,
  text,
  href,
  ariaLabel
}: TextLinkProps) => {
  const { sekaiColor, modeTheme } = useOptionalSekai({ sekai, mode: themeMode })

  const optionStyle = {
    '--sekai-color': sekaiColor
  }

  return (
    <a
      className={[styles[`sekai-text-link-${modeTheme}`], className].join(' ')}
      style={optionStyle as React.CSSProperties}
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer">
      {text}
    </a>
  )
}
