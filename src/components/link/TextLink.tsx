import React from 'react'

import clsx from 'clsx'

import { useOptionalSekai } from '@/internal/useOptionalSekai'
import { convertHexToRgba } from '@/utils/converter'

import styles from './TextLink.module.scss'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'

export interface TextLinkProps {
  id?: string
  className?: string
  style?: React.CSSProperties
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  text: string
  href: string
  isExternal?: boolean
  disabled?: boolean
  ariaLabel?: string
}

export const TextLink = ({
  id,
  className,
  style,
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
      id={id}
      className={clsx(
        styles[`sekai-text-link-${modeTheme}`],
        disabled && styles['sekai-disabled'],
        className
      )}
      style={{ ...(optionStyle as React.CSSProperties), ...style }}
      href={href}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      target={isExternal ? '_blank' : '_self'}
      rel="noopener noreferrer">
      {text}
    </a>
  )
}
