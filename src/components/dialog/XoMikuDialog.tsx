import React, { useEffect, useMemo } from 'react'

import { createPortal } from 'react-dom'

import { DialogButtons, DialogTitleHeader, type DialogSize } from '@/components/dialog/Dialog'

import { useOptionalSekai } from '@/hooks/internal/useOptionalSekai'
import { LIGHT_MODE, type PaletteMode } from '@/hooks/useThemeMode'
import { XoMikuSvg } from '@/img/xomiku'
import { fireOnEscapeKey } from '@/utils/operation'

import globalStyles from '@/styles/global.module.scss'

import styles from './XoMikuDialog.module.scss'

import type { DialogButton } from '@/components/dialog/Dialog'

export interface XoMikuDialogProps {
  open: boolean
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
  buttons
}: XoMikuDialogProps) => {
  const displayDialog = open ? 'sekai-dialog-visible' : 'sekai-dialog-hidden'
  const portalContainer = containerComponent || document.body
  const { modeTheme } = useOptionalSekai({ mode: themeMode })

  useEffect(() => {
    if (!open) return
    const handleKeyDownEsc = fireOnEscapeKey(onClose)

    document.addEventListener('keydown', handleKeyDownEsc)

    return () => document.removeEventListener('keydown', handleKeyDownEsc)
  }, [open])

  const headerProps = { size, onClose, title }
  const xxButtonProps = useMemo(
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
  const buttonsProps = { buttons: xxButtonProps }

  return createPortal(
    <div className={styles[displayDialog]}>
      <div className={globalStyles[`sekai-overlay-${modeTheme}`]}>
        <div
          role="dialog"
          className={[
            globalStyles['sekai-absolute-center'],
            styles[`sekai-container-${size}`]
          ].join(' ')}
          aria-label={title || 'Dialog'}>
          <XoMikuSvg className={styles[`sekai-xomiku-svg-1-${size}`]} />
          <XoMikuSvg className={styles[`sekai-xomiku-svg-2-${size}`]} />
          <XoMikuSvg className={styles[`sekai-xomiku-svg-3-${size}`]} type={'type2'} />
          <XoMikuSvg className={styles[`sekai-xomiku-svg-4-${size}`]} type={'type2'} />
          <XoMikuSvg className={styles[`sekai-xomiku-svg-5-${size}`]} type={'type2'} />
          <div className={styles['sekai-content-wrap']}>
            <DialogTitleHeader {...headerProps} />
            {children}
            <DialogButtons
              className={styles['sekai-xomiku-button']}
              themeMode={LIGHT_MODE}
              {...buttonsProps}
            />
          </div>
        </div>
      </div>
    </div>,
    portalContainer
  )
}
