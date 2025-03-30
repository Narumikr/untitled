import React from 'react'

import globalStyles from '@/styles/global.module.scss'

import { useOptionalSekai } from './useOptionalSekai'

import styles from './CommonComponents.module.scss'

import type { PaletteMode } from '@/hooks/useThemeMode'

export interface DialogOverlayProps {
  open: boolean
  themeMode?: PaletteMode
  children: React.ReactNode
  containerComponent?: HTMLElement
}

export const DialogOverlay = ({
  open,
  themeMode,
  children,
  containerComponent
}: DialogOverlayProps) => {
  const displayDialog = open ? 'sekai-dialog-visible' : 'sekai-dialog-hidden'
  const { modeTheme } = useOptionalSekai({ mode: themeMode })
  const optionStyle = {
    ...(containerComponent && { position: 'absolute' })
  }

  return (
    <div className={styles[displayDialog]}>
      <div
        className={globalStyles[`sekai-overlay-${modeTheme}`]}
        style={optionStyle as React.CSSProperties}>
        {children}
      </div>
    </div>
  )
}
