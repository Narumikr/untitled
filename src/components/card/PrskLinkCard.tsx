import React from 'react'

import { NamePlate } from '@/components/text/NamePlate'

import { useOptionalSekai } from '@/internal/useOptionalSekai'

import globalStyles from '@/styles/global.module.scss'

import { Card } from './Card'
import { OutlineText } from '../text/OutlineText'

import styles from './PrskLinkCard.module.scss'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'

export interface PrskLinkCardProps {
  className?: string
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  height?: number
  width?: number
  onClick?: () => void
  title: string
  subText: string
  icon: string | React.ReactNode
}

export const PrskLinkCard = ({
  className = '',
  sekai,
  themeMode,
  height = 72,
  width = 160,
  onClick,
  title,
  subText,
  icon
}: PrskLinkCardProps) => {
  const { sekaiColor, modeTheme } = useOptionalSekai({ sekai, mode: themeMode })

  const optionStyle = {
    '--sekai-color': sekaiColor
  }

  const cardSizeStyle = {
    height: `${height}px`,
    width: `${width}px`
  }

  return (
    <Card className={className} sekai={sekai} themeMode={themeMode}>
      <button
        className={[
          styles['sekai-prsk-link-card-button'],
          globalStyles[`sekai-color-${modeTheme}`]
        ].join(' ')}
        style={(optionStyle as React.CSSProperties, cardSizeStyle)}
        onClick={onClick}>
        <NamePlate
          className={[
            styles['sekai-prsk-link-card-title'],
            styles[`sekai-title-effect-${modeTheme}`]
          ].join(' ')}
          sekai={sekai}
          themeMode={themeMode}
          text={title}
        />
        <OutlineText
          className={styles['sekai-prsk-link-card-subtext']}
          sekai={sekai}
          themeMode={themeMode}
          text={subText}
        />
        <div className={styles['sekai-prsk-link-card-icon']}>{getImgComponent(icon)}</div>
      </button>
    </Card>
  )
}

const getImgComponent = (icon: string | React.ReactNode) => {
  if (typeof icon === 'string') {
    return <img src={icon} alt="" />
  } else {
    return icon
  }
}
