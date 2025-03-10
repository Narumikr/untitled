import React, { createContext } from 'react'

import { useOptionalSekai } from '@/internal/useOptionalSekai'

import globalStyles from '@/styles/global.module.scss'

import styles from './List.module.scss'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'

export const ListContext = createContext<boolean>(false)

export interface ListProps {
  className?: string
  sekai?: ColorsSekaiKey
  themeMode?: PaletteMode
  children: React.ReactNode
  as?: 'ul' | 'ol'
  noBullet?: boolean
}

export const List = ({
  className = '',
  sekai,
  themeMode,
  children,
  as = 'ul',
  noBullet = true
}: ListProps) => {
  const { sekaiColor, modeTheme } = useOptionalSekai({ sekai, mode: themeMode })

  const Component = as
  const optionStyle = {
    '--sekai-color': sekaiColor
  }
  const listStyleType = noBullet ? 'none' : undefined
  const paddingLeft = noBullet ? '16px' : '36px'

  return (
    <ListContext.Provider value={true}>
      <Component
        className={[
          globalStyles[`sekai-color-${modeTheme}`],
          styles['sekai-list'],
          className
        ].join(' ')}
        style={{
          listStyleType: listStyleType,
          paddingLeft: paddingLeft,
          ...(optionStyle as React.CSSProperties)
        }}>
        {children}
      </Component>
    </ListContext.Provider>
  )
}
