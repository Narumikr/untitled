import React, { useEffect } from 'react'

import { createPortal } from 'react-dom'

import globalStyles from '@/styles/global.module.scss'
import { type ColorsSekaiKey } from '@/styles/sekai-colors'

import { useOptionalSekai } from '@/hooks/internal/useOptionalSekai'
import { type PaletteMode } from '@/hooks/useThemeMode'
import { ClearSvg } from '@/img/clear'
import { convertHexToRgba } from '@/utils/converter'
import { fireOnEscapeKey } from '@/utils/operation'

import styles from './Dialog.module.scss'

export type DialogSize = 'narrow' | 'medium' | 'wide'

export interface DialogProps {
  /** What SEKAI color to use */
  sekai?: ColorsSekaiKey
  /** Dialog open */
  open: boolean
  /** Light or Dark mode */
  themeMode?: PaletteMode
  /** Button contents */
  children: React.ReactNode
  /** */
  containerComponent?: HTMLElement
  /** Dialog size */
  size?: DialogSize
  /** Dialog close method */
  onClose: () => void
  /** Dialog header title */
  title?: string
  /** Whether to display close icon */
  showCloseIcon?: boolean
}

// todo escape key fire onclose

export const Dialog = ({
  sekai,
  open,
  themeMode,
  children,
  containerComponent,
  size = 'medium',
  onClose,
  title,
  showCloseIcon = false
}: DialogProps) => {
  const displayDialog = open ? 'sekai-dialog-visible' : 'sekai-dialog-hidden'
  const portalContainer = containerComponent || document.body
  const { sekaiColor, modeTheme, isLight } = useOptionalSekai({
    sekai: sekai,
    mode: themeMode
  })
  const sekaiColorHover = convertHexToRgba(sekaiColor, isLight ? 0.1 : 0.3)

  const optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-hover': sekaiColorHover
  }

  useEffect(() => {
    if (!open) return
    const handleKeyDownEsc = () => fireOnEscapeKey(onClose)

    document.addEventListener('keydown', handleKeyDownEsc)

    return () => document.removeEventListener('keydown', handleKeyDownEsc)
  }, [open])

  const headerProps = { sekai, themeMode, size, onClose, title, showCloseIcon }

  return createPortal(
    <div className={styles[displayDialog]}>
      <div className={globalStyles[`sekai-overlay-${modeTheme}`]}>
        <div
          role="dialog"
          style={optionStyle as React.CSSProperties}
          className={[
            globalStyles[`sekai-color-${modeTheme}`],
            globalStyles['sekai-absolute-center'],
            styles[`sekai-container-${size}`],
            styles[`sekai-${modeTheme}`]
          ].join(' ')}>
          <DialogTitleHeader {...headerProps} />
          {children}
        </div>
      </div>
    </div>,
    portalContainer
  )
}

type DialogTitleHeaderProps = Pick<
  DialogProps,
  'sekai' | 'themeMode' | 'size' | 'onClose' | 'title' | 'showCloseIcon'
>

const DialogTitleHeader = ({
  sekai,
  themeMode,
  size,
  onClose,
  title,
  showCloseIcon
}: DialogTitleHeaderProps) => {
  if (!title && !showCloseIcon) return null

  return (
    <div className={styles[`sekai-title-header-${size}`]}>
      <span>{title}</span>
      {showCloseIcon ? (
        <button type="button" className={styles['sekai-close-icon']} onClick={onClose}>
          <ClearSvg sekai={sekai} themeMode={themeMode} />
        </button>
      ) : null}
    </div>
  )
}
