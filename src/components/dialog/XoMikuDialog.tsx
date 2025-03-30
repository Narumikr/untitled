import React, { useEffect, useMemo } from 'react'

import clsx from 'clsx'
import { createPortal } from 'react-dom'

import { DialogButtons, DialogTitleHeader, type DialogSize } from '@/components/dialog/Dialog'

import { LIGHT_MODE, type PaletteMode } from '@/hooks/useThemeMode'
import { XoMikuSvg } from '@/img/xomiku'
import { DialogOverlay } from '@/internal/commonComponents'
import { useOptionalSekai } from '@/internal/useOptionalSekai'
import { fireOnEscapeKey } from '@/utils/operation'

import globalStyles from '@/styles/global.module.scss'

import styles from './XoMikuDialog.module.scss'

import type { DialogButton } from '@/components/dialog/Dialog'

export interface XoMikuDialogProps {
  open: boolean
  id?: string
  className?: string
  style?: React.CSSProperties
  themeMode?: PaletteMode
  children: React.ReactNode
  size?: DialogSize
  containerComponent?: HTMLElement
  onClose: () => void
  title?: string
  buttons?: DialogButton[]
}

export const XoMikuDialog = ({
  open,
  themeMode,
  children,
  size = 'medium',
  containerComponent,
  onClose,
  title,
  buttons,
  ...rest
}: XoMikuDialogProps) => {
  const portalContainer = containerComponent || document.body
  const { modeTheme } = useOptionalSekai({ mode: themeMode })

  useEffect(() => {
    if (!open) return
    const handleKeyDownEsc = fireOnEscapeKey(onClose)

    document.addEventListener('keydown', handleKeyDownEsc)

    return () => document.removeEventListener('keydown', handleKeyDownEsc)
  }, [open])

  const headerProps = { size, onClose, title }
  const xoButtonProps = useMemo(
    () =>
      buttons?.map((button) => {
        const type = button.type ? button.type : 'normal'
        return {
          ...button,
          buttonStyle: [styles[`sekai-xomiku-${type}-button`]].join(' ')
        }
      }),
    [buttons, modeTheme]
  )

  const overlayProps = { open, themeMode, children, containerComponent }
  const buttonsProps = { themeMode: LIGHT_MODE as PaletteMode, buttons: xoButtonProps }

  return createPortal(
    <DialogOverlay {...overlayProps}>
      <div
        {...rest}
        role="dialog"
        className={clsx(
          globalStyles['sekai-absolute-center'],
          styles[`sekai-container-${size}`],
          rest.className
        )}
        aria-label={title || 'Dialog'}>
        <XoMikuSvg className={styles[`sekai-xomiku-svg-1-${size}`]} />
        <XoMikuSvg className={styles[`sekai-xomiku-svg-2-${size}`]} />
        <XoMikuSvg className={styles[`sekai-xomiku-svg-3-${size}`]} type={'type2'} />
        <XoMikuSvg className={styles[`sekai-xomiku-svg-4-${size}`]} type={'type2'} />
        <XoMikuSvg className={styles[`sekai-xomiku-svg-5-${size}`]} type={'type2'} />
        <div className={styles['sekai-content-wrap']}>
          <DialogTitleHeader id="xo-miku-dialog-header" {...headerProps} />
          {children}
          <DialogButtons
            id="xo-miku-dialog-buttons"
            className={styles['sekai-xomiku-button']}
            {...buttonsProps}
          />
        </div>
      </div>
    </DialogOverlay>,
    portalContainer
  )
}
