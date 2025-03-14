import React, { useEffect } from 'react'

import { createPortal } from 'react-dom'

import { ClearSvg } from '@/img/clear'
import { useOptionalSekai } from '@/internal/useOptionalSekai'
import { convertHexToRgba } from '@/utils/converter'
import { fireOnEscapeKey } from '@/utils/operation'

import globalStyles from '@/styles/global.module.scss'

import styles from './Dialog.module.scss'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'

export type DialogSize = 'narrow' | 'medium' | 'wide'

export type DialogButtonType = 'normal' | 'strong'
export interface DialogButton {
  text: string
  onClick: () => void
  type?: DialogButtonType
  disabled?: boolean
  ariaLabel?: string
  buttonStyle?: string
}

export interface DialogProps {
  sekai?: ColorsSekaiKey
  open: boolean
  themeMode?: PaletteMode
  children: React.ReactNode
  containerComponent?: HTMLElement
  size?: DialogSize
  onClose: () => void
  title?: string
  showCloseIcon?: boolean
  buttons?: DialogButton[]
  dialogButtons?: React.ReactNode
}

export const Dialog = ({
  sekai,
  open,
  themeMode,
  children,
  containerComponent,
  size = 'medium',
  onClose,
  title,
  showCloseIcon = false,
  buttons,
  dialogButtons
}: DialogProps) => {
  const displayDialog = open ? 'sekai-dialog-visible' : 'sekai-dialog-hidden'
  const portalContainer = containerComponent || document.body
  const { sekaiColor, modeTheme, isLight } = useOptionalSekai({ sekai, mode: themeMode })

  const sekaiColorHover = convertHexToRgba(sekaiColor, isLight ? 0.1 : 0.3)
  const optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-hover': sekaiColorHover
  }

  useEffect(() => {
    if (!open) return
    const handleKeyDownEsc = fireOnEscapeKey(onClose)

    document.addEventListener('keydown', handleKeyDownEsc)

    return () => document.removeEventListener('keydown', handleKeyDownEsc)
  }, [open])

  const headerProps = { sekai, themeMode, size, onClose, title, showCloseIcon }
  const buttonsProps = { sekai, themeMode, buttons }

  return createPortal(
    <div className={styles[displayDialog]}>
      <div className={globalStyles[`sekai-overlay-${modeTheme}`]}>
        <div
          role="dialog"
          className={[
            globalStyles[`sekai-color-${modeTheme}`],
            globalStyles['sekai-absolute-center'],
            styles[`sekai-container-${size}`]
          ].join(' ')}
          style={optionStyle as React.CSSProperties}
          aria-label={title || 'Dialog'}>
          <div className={styles['sekai-content-wrap']}>
            <DialogTitleHeader {...headerProps} />
            {children}
          </div>
          {dialogButtons || <DialogButtons {...buttonsProps} />}
        </div>
      </div>
    </div>,
    portalContainer
  )
}

export type DialogTitleHeaderProps = Pick<
  DialogProps,
  'sekai' | 'themeMode' | 'size' | 'onClose' | 'title' | 'showCloseIcon'
> & { className?: string }

export const DialogTitleHeader = ({
  className = '',
  sekai,
  themeMode,
  size,
  onClose,
  title,
  showCloseIcon
}: DialogTitleHeaderProps) => {
  if (!title && !showCloseIcon) return null

  return (
    <div className={[styles[`sekai-title-header-${size}`], className].join(' ')}>
      <h2>{title}</h2>
      {showCloseIcon ? (
        <button type="button" className={styles['sekai-close-icon']} onClick={onClose}>
          <ClearSvg sekai={sekai} themeMode={themeMode} />
        </button>
      ) : null}
    </div>
  )
}

export type DialogButtonsProps = Pick<DialogProps, 'sekai' | 'themeMode' | 'buttons'> & {
  className?: string
}

export const DialogButtons = ({
  className = '',
  sekai,
  themeMode,
  buttons
}: DialogButtonsProps) => {
  if (!buttons || !buttons.length) return null

  const buttonLength = buttons.length
  const { sekaiColor, modeTheme, isLight } = useOptionalSekai({ sekai, mode: themeMode })

  const sekaiColorHover = convertHexToRgba(sekaiColor, isLight ? 0.1 : 0.3)
  const sekaiColorStrongHover = convertHexToRgba(sekaiColor, 0.8)
  const sekaiColorStrongDisabled = convertHexToRgba(sekaiColor, 0.5)
  const optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-hover': sekaiColorHover,
    '--sekai-color-strong-hover': sekaiColorStrongHover,
    '--sekai-color-disabled': sekaiColorStrongDisabled
  }

  return (
    <div className={[styles['sekai-buttons-area'], className].join(' ')}>
      {[...buttons.slice(0, 2)].map((el, index) => (
        <button
          key={el.text}
          type="button"
          onClick={el.onClick}
          disabled={Boolean(el.disabled)}
          aria-label={el.ariaLabel || el.text}
          className={[
            globalStyles[`sekai-color-${modeTheme}`],
            styles[`sekai-dialog-${el.type || 'normal'}-button-${buttonLength}-${index}`],
            styles[`sekai-${modeTheme}`],
            el.buttonStyle || ''
          ].join(' ')}
          style={optionStyle as React.CSSProperties}>
          {el.text}
        </button>
      ))}
    </div>
  )
}
