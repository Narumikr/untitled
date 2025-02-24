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
  buttons?: [DialogButton] | [DialogButton, DialogButton]
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
  buttons
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
    const handleKeyDownEsc = fireOnEscapeKey(onClose)

    document.addEventListener('keydown', handleKeyDownEsc)

    return () => document.removeEventListener('keydown', handleKeyDownEsc)
  }, [open])

  const headerProps = { sekai, themeMode, size, onClose, title, showCloseIcon }
  const buttonsProps = { sekai, themeMode, size, buttons }

  return createPortal(
    <div className={styles[displayDialog]}>
      <div className={globalStyles[`sekai-overlay-${modeTheme}`]}>
        <div
          role="dialog"
          className={[
            globalStyles[`sekai-color-${modeTheme}`],
            globalStyles['sekai-absolute-center'],
            styles[`sekai-container-${size}`],
            styles[`sekai-${modeTheme}`]
          ].join(' ')}
          style={optionStyle as React.CSSProperties}
          aria-label={title || 'Dialog'}>
          <div className={styles['sekai-content-wrap']}>
            <DialogTitleHeader {...headerProps} />
            {children}
          </div>
          <DialogButtons {...buttonsProps} />
        </div>
      </div>
    </div>,
    portalContainer
  )
}

type DialogTitleHeaderProps = Pick<
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

type DialogButtonsProps = Pick<DialogProps, 'sekai' | 'themeMode' | 'buttons'> & {
  className?: string
}

export const DialogButtons = ({
  className = '',
  sekai,
  themeMode,
  buttons
}: DialogButtonsProps) => {
  if (!buttons) return null
  const buttonLength = buttons.length

  const { sekaiColor, modeTheme, isLight } = useOptionalSekai({
    sekai: sekai,
    mode: themeMode
  })

  const sekaiColorHover = convertHexToRgba(sekaiColor, isLight ? 0.1 : 0.3)
  const optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-hover': sekaiColorHover
  }

  const getButtonArgs = (index: number) => {
    return {
      'onClick': buttons[index].onClick,
      'disabled': Boolean(buttons[index].disabled),
      'aria-label': buttons[index].ariaLabel ? buttons[index].ariaLabel : buttons[index].text
    }
  }

  return (
    <div className={[styles['sekai-buttons-area'], className].join(' ')}>
      {buttons.map((el, index) => (
        <button
          key={el.text}
          type="button"
          {...getButtonArgs(index)}
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
