import React, { createContext, useMemo, useState } from 'react'

import { type ColorsSekaiKey } from '@/styles/sekai-colors'

import { DARK_MODE } from '@/hooks/useThemeMode'
import { type SekaiTheme } from '@/utils/createSekai'

export interface CreationSekaiContextProps {
  sekaiTheme: SekaiTheme
  onSwitchSekaiColor: (sekai: ColorsSekaiKey) => void
}

export const CreationSekaiContext = createContext<CreationSekaiContextProps | null>(null)

export const CreationSekaiProvider = ({
  children,
  sekaiTheme
}: {
  children: React.ReactNode
  sekaiTheme: SekaiTheme
}) => {
  const [currentSekaiTheme, setCurrentSekaiTheme] = useState<SekaiTheme>(sekaiTheme)

  const onSwitchSekaiColor = (sekai: ColorsSekaiKey) => {
    setCurrentSekaiTheme((pre) => ({
      ...pre,
      palette: {
        ...pre.palette,
        sekai: sekai
      }
    }))
  }

  const provideValue = {
    sekaiTheme: currentSekaiTheme,
    onSwitchSekaiColor
  }

  const globalStyle = useMemo(
    () => `
    * {
      font-family: ${sekaiTheme.typography?.fontFamily};
    }
    body {
      color: ${sekaiTheme.palette?.mode === DARK_MODE ? '#e0e0e0' : '#212121'};
      background: ${sekaiTheme.palette?.mode === DARK_MODE ? '#121212' : '#ffffff'};
    }
  `,
    [sekaiTheme]
  )

  return (
    <CreationSekaiContext.Provider value={provideValue}>
      <style>{globalStyle}</style>
      {children}
    </CreationSekaiContext.Provider>
  )
}
