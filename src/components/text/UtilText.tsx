import React from 'react'

import clsx from 'clsx'

import { ORIENTATION, useOrientation } from '@/hooks/useWindowSize'
import { useOptionalSekai } from '@/internal/useOptionalSekai'

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
