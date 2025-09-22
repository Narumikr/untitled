import React from 'react'

import clsx from 'clsx'

import { CompactDiscIcon } from '@/img/compactDisc'
import { EqualizerIcon } from '@/img/equalizer'
import { useOptionalSekai } from '@/internal/useOptionalSekai'

import styles from './MusicBannerCard.module.scss'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'

export interface MusicBannerCardProps {
  id?: string
  className?: string
  style?: React.CSSProperties
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  selected: boolean
}

export const MusicBannerCard = ({
  sekai,
  themeMode,
  selected,
  ...rest
}: MusicBannerCardProps) => {
  const { sekaiColor, modeTheme, isLight } = useOptionalSekai({ sekai, mode: themeMode })

  const optionStyle = {
    '--sekai-color': sekaiColor
  }

  return (
    <div
      {...rest}
      className={clsx(styles['sekai-music-banner-card'], rest.className)}
      style={{ ...(optionStyle as React.CSSProperties), ...rest.style }}>
      <CardIcon selected={selected} sekai={sekai} themeMode={themeMode} />
    </div>
  )
}

interface CardIconProps {
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  selected: boolean
}
const CardIcon = ({ selected, ...rest }: CardIconProps) => {
  return selected ? (
    <EqualizerIcon sekai={rest.sekai} themeMode={rest.themeMode} />
  ) : (
    <CompactDiscIcon sekai={rest.sekai} themeMode={rest.themeMode} />
  )
}
