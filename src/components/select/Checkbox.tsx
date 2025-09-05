import React from 'react'

import clsx from 'clsx'

import { useOptionalSekai } from '@/internal/useOptionalSekai'

import styles from './Checkbox.module.scss'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'

export type CheckboxProps = {
  id?: string
  className?: string
  style?: React.CSSProperties
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  checked?: boolean
  disabled?: boolean
  onChange: (e: boolean) => void
  filling?: boolean
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'checked' | 'disabled'>

export const Checkbox = ({
  sekai,
  themeMode,
  checked,
  disabled,
  onChange,
  filling,
  ...rest
}: CheckboxProps) => {
  const { sekaiColor, modeTheme, isLight } = useOptionalSekai({ sekai, mode: themeMode })

  const optionStyle = {
    '--sekai-color': sekaiColor
  }

  return (
    <label
      htmlFor={rest.id}
      className={clsx(styles['sekai-checkbox'], rest.className)}
      style={{ ...(optionStyle as React.CSSProperties), ...rest.style }}>
        <input
          {...rest}
          type="checkbox"
          checked
          aria-checked={checked}
          disabled
        />
        <span aria-hidden={true} />
    </label>
  )

}