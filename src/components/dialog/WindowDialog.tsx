import React, { useEffect, useRef, useState } from 'react'

import clsx from 'clsx'
import { createPortal } from 'react-dom'

import { ClearSvg } from '@/img/clear'
import { SquareSvg } from '@/img/square'
import { useOptionalSekai } from '@/internal/useOptionalSekai'
import { convertHexToRgbMixWithBlackOrWhite } from '@/utils/converter'

import styles from './WindowDialog.module.scss'

import type { DialogSize } from './Dialog'
import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'

export interface WindowDialogProps {
  id?: string
  className?: string
  style?: React.CSSProperties
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  children: React.ReactNode
  containerComponent?: HTMLElement
  size?: DialogSize
}

export const WindowDialog = ({
  sekai,
  themeMode,
  children,
  containerComponent,
  size = 'medium',
  ...rest
}: WindowDialogProps) => {
  const portalContainer = containerComponent || document.body
  const { sekaiColor, modeTheme, isLight } = useOptionalSekai({ sekai, mode: themeMode })

  const sekaiColorBg = convertHexToRgbMixWithBlackOrWhite(sekaiColor, 0.3, isLight)
  const sekaiColorHeader = convertHexToRgbMixWithBlackOrWhite(sekaiColor, 0.5, isLight)

  const [position, setPosition] = useState({ x: '50%', y: '50%' })

  const modalRef = useRef<HTMLDivElement>(null)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)

  const onMouseDown = (e: React.MouseEvent) => {
    const rect = modalRef.current?.getBoundingClientRect()
    if (!rect) return
    setDragging(true)
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const onMouseMove = (e: MouseEvent) => {
    if (!dragging) return
    setPosition({
      x: `${e.clientX - dragOffset.x}px`,
      y: `${e.clientY - dragOffset.y}px`
    })
  }

  const onMouseUp = () => setDragging(false)

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [dragging])

  const optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-bg': sekaiColorBg,
    '--sekai-color-header': sekaiColorHeader,
    'left': position.x,
    'top': position.y,
    'transform': position.x === '50%' ? 'translate(-50%, -50%)' : 'none'
  }

  return createPortal(
    <div
      {...rest}
      ref={modalRef}
      role="dialog"
      className={clsx(
        styles[`sekai-window-dialog-${modeTheme}`],
        styles[`sekai-window-dialog-size-${size}`],
        rest.className
      )}
      style={{ ...(optionStyle as React.CSSProperties), ...rest.style }}>
      <WindowHeader onMouseDown={onMouseDown} />
      <div className={clsx(styles['sekai-window-dialog-container'])}>{children}</div>
    </div>,

    // <div
    //   onMouseDown={onMouseDown}
    //   style={{
    //     position: 'fixed',
    //     left: position.x,
    //     top: position.y,
    //     width: 100,
    //     height: 100,
    //     backgroundColor: 'skyblue',
    //     cursor: 'grab',
    //     userSelect: 'none',
    //     overflow: 'hidden'
    //   }}>
    //   ドラッグして動かせます
    // </div>,
    portalContainer
  )
}

interface WindowHeaderProps {
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  onMouseDown: (e: React.MouseEvent) => void
}
const WindowHeader = ({ onMouseDown, ...rest }: WindowHeaderProps) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className={styles['sekai-window-dialog-header']}
      onMouseDown={onMouseDown}>
      <button className={styles['sekai-window-dialog-button']}>
        <SquareSvg {...rest} className={clsx(styles['sekai-window-dialog-icon'])} />
      </button>
      <button className={styles['sekai-window-dialog-button']}>
        <ClearSvg {...rest} className={clsx(styles['sekai-window-dialog-icon'])} />
      </button>
    </div>
  )
}
