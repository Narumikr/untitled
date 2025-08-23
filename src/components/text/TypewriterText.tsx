import React, { useEffect, useMemo, useState } from 'react'

import clsx from 'clsx'

import styles from './TypewriterText.module.scss'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'

import { useOptionalSekai } from '@/internal/useOptionalSekai'

export interface TypewriterTextOptions {
  speed?: number
  loop?: boolean
  cursor?: boolean
}
const defaultOptions: TypewriterTextOptions = {
  speed: 100,
  loop: false,
  cursor: true
}

export interface TypewriterTextProps {
  id?: string
  className?: string
  style?: React.CSSProperties
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  text: string
  options?: TypewriterTextOptions
}

export const TypewriterText = ({
  sekai,
  themeMode,
  text,
  options = defaultOptions,
  ...rest
}: TypewriterTextProps) => {
  const { sekaiColor } = useOptionalSekai({ sekai, mode: themeMode })
  const [displayText, setDisplayText] = useState('')
  const viewCursor = useMemo(() => {
    return options.cursor && displayText.length < text.length
  }, [displayText, text, options.cursor])

  useEffect(() => {
    let currentIndex = 0

    const typewriteInterval = setInterval(() => {
      setDisplayText((prev) => {
        const upd8Text = prev + text[currentIndex]
        currentIndex++

        if (currentIndex > text.length && options.loop) {
          currentIndex = 0
          return ''
        }
        if (currentIndex >= text.length && !options.loop) {
          clearInterval(typewriteInterval)
        }
        return upd8Text
      })
    }, options.speed)

    return () => clearInterval(typewriteInterval)
  }, [])

  const optionStyle = {
    '--sekai-color': sekaiColor
  }

  return (
    <div
      {...rest}
      className={clsx(
        styles['sekai-typewrite-text'],
        {
          [styles['sekai-cursor']]: viewCursor
        },
        rest.className
      )}
      style={{ ...(optionStyle as React.CSSProperties), ...rest.style }}>
      {displayText}
    </div>
  )
}
