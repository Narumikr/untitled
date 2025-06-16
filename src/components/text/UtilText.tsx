import React from 'react'

import clsx from 'clsx'

import { ORIENTATION, useOrientation } from '@/hooks/useWindowSize'
import { useOptionalSekai } from '@/internal/useOptionalSekai'
import { convertHexToRgbMixWithBlackOrWhite } from '@/utils/converter'

import globalStyles from '@/styles/global.module.scss'

import styles from './UtilText.module.scss'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'

export interface BodyTextProps {
  id?: string
  className?: string
  style?: React.CSSProperties
  themeMode?: PaletteMode
  children?: React.ReactNode
}

export const BodyText = ({ themeMode, children, ...rest }: BodyTextProps) => {
  const { modeTheme } = useOptionalSekai({ mode: themeMode })
  const orientation = useOrientation()
  const isPortrait = ORIENTATION.PORTRAIT === orientation

  return (
    <p
      {...rest}
      className={clsx(
        styles[`sekai-body-text-${modeTheme}`],
        isPortrait ? globalStyles['text-sm'] : globalStyles['text-base'],
        rest.className
      )}>
      {children}
    </p>
  )
}

export interface SekaiBodyTextProps extends BodyTextProps {
  sekai?: ColorsSekaiKey
}

export const SekaiBodyText = ({ sekai, children, ...rest }: SekaiBodyTextProps) => {
  const { sekaiColor } = useOptionalSekai({ sekai })

  const colorStyle = {
    color: sekaiColor
  }

  return (
    <BodyText {...rest} style={{ ...(colorStyle as React.CSSProperties), ...rest.style }}>
      {children}
    </BodyText>
  )
}

export interface DetailTextProps {
  id?: string
  className?: string
  style?: React.CSSProperties
  themeMode?: PaletteMode
  children?: React.ReactNode
}

export const DetailText = ({ themeMode, children, ...rest }: DetailTextProps) => {
  const { modeTheme } = useOptionalSekai({ mode: themeMode })

  return (
    <p
      {...rest}
      className={clsx(
        styles[`sekai-detail-text-${modeTheme}`],
        globalStyles['text-xs'],
        rest.className
      )}>
      {children}
    </p>
  )
}

export interface SekaiDetailTextProps extends DetailTextProps {
  sekai?: ColorsSekaiKey
}

export const SekaiDetailText = ({ sekai, children, ...rest }: SekaiDetailTextProps) => {
  const { sekaiColor } = useOptionalSekai({ sekai })

  const colorStyle = {
    color: sekaiColor
  }

  return (
    <DetailText {...rest} style={{ ...(colorStyle as React.CSSProperties), ...rest.style }}>
      {children}
    </DetailText>
  )
}

export interface AnnotationTextProps {
  id?: string
  className?: string
  style?: React.CSSProperties
  themeMode?: PaletteMode
  children?: React.ReactNode
}

export const AnnotationText = ({ themeMode, children, ...rest }: AnnotationTextProps) => {
  const { modeTheme } = useOptionalSekai({ mode: themeMode })

  return (
    <DetailText
      {...rest}
      className={clsx(styles[`sekai-annotation-text-${modeTheme}`], rest.className)}>
      {children}
    </DetailText>
  )
}

export interface SekaiAnnotationTextProps extends AnnotationTextProps {
  sekai?: ColorsSekaiKey
}

export const SekaiAnnotationText = ({ sekai, children, ...rest }: SekaiAnnotationTextProps) => {
  const { sekaiColor, isLight } = useOptionalSekai({ sekai })
  const annotationColor = convertHexToRgbMixWithBlackOrWhite(sekaiColor, 0.7, isLight)

  const colorStyle = {
    color: annotationColor
  }

  return (
    <DetailText {...rest} style={{ ...(colorStyle as React.CSSProperties), ...rest.style }}>
      {children}
    </DetailText>
  )
}
