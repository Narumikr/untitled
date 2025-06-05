import React, { useEffect, useRef, useState } from 'react'

import clsx from 'clsx'

import { useOptionalSekai } from '@/internal/useOptionalSekai'
import { convertHexToRgba } from '@/utils/converter'

import styles from './Tooltip.module.scss'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'

export type TooltipPosition = 'top' | 'bottom'

export interface TooltipProps {
  id?: string
  className?: string
  style?: React.CSSProperties
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  children: React.ReactNode
  text: string
  pos?: TooltipPosition
}

export const Tooltip = ({
  sekai,
  themeMode,
  children,
  text,
  pos = 'top',
  ...rest
}: TooltipProps) => {
  const { sekaiColor, modeTheme } = useOptionalSekai({ sekai, mode: themeMode })

  const sekaiColorBg = convertHexToRgba(sekaiColor, 0.2)
  const optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-bg': sekaiColorBg
  }

  const [visible, setVisible] = useState(false)

  return (
    <div
      className={clsx(
        styles[`sekai-tooltip-${modeTheme}`],
        styles[`sekai-tooltip-${pos}`],
        rest.className
      )}
      style={{ ...optionStyle, ...rest.style }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}>
      {children}
      {visible ? <SpeechBubble text={text} pos={pos} themeMode={modeTheme} /> : null}
    </div>
  )
}

interface SpeechBubbleProps {
  text: string
  pos: TooltipPosition
  themeMode: PaletteMode
}

const SpeechBubble = ({ text, pos, themeMode }: SpeechBubbleProps) => {
  const speechBubbleRef = useRef<HTMLDivElement>(null)
  const [overflowRight, setOverflowRight] = useState(false)
  const [overflowLeft, setOverflowLeft] = useState(false)
  const [calcPosition, setCalcPosition] = useState<TooltipPosition>(pos)

  useEffect(() => {
    const bubble = speechBubbleRef.current
    if (!bubble) return

    const bubbleRect = bubble.getBoundingClientRect()
    const viewInnerWidth = window.innerWidth
    const viewInnerHeight = window.innerHeight

    if (bubbleRect.right > viewInnerWidth) {
      setOverflowRight(true)
      setOverflowLeft(false)
    } else if (bubbleRect.left < 0) {
      setOverflowLeft(true)
      setOverflowRight(false)
    } else {
      setOverflowRight(false)
      setOverflowLeft(false)
    }

    if (bubbleRect.top < 0) {
      setCalcPosition('bottom')
    } else if (bubbleRect.bottom > viewInnerHeight) {
      setCalcPosition('top')
    } else {
      setCalcPosition(pos)
    }
  }, [])

  return (
    <div
      ref={speechBubbleRef}
      className={clsx(styles[`sekai-tooltip-speech-bubble-${calcPosition}`], {
        [styles['sekai-tooltip-speech-bubble-left-over']]: overflowLeft,
        [styles['sekai-tooltip-speech-bubble-right-over']]: overflowRight
      })}>
      <span className={styles[`sekai-tooltip-speech-bubble-text-${themeMode}`]}>{text}</span>
    </div>
  )
}
