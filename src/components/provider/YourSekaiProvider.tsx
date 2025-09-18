import React, { createContext, useEffect, useMemo, useState } from 'react'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { DARK_MODE } from '@/hooks/useThemeMode'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'
import type { SekaiTheme } from '@/utils/createSekai'

export const YOUR_COLOR_THEME = 'your_color_theme'
export interface YourSekaiContextProps {
  sekaiTheme: SekaiTheme
  onSwitchSekaiColor: (sekai: ColorsSekaiKey) => void
  onSwitchColorTheme: (color: PaletteMode) => void
}

export const YourSekaiContext = createContext<YourSekaiContextProps | null>(null)

export interface YourSekaiProviderProps {
  children: React.ReactNode
  sekaiTheme: SekaiTheme
  settingOptions?: {
    /**
     * Whether to store the color theme setting in LocalStorage
     */
    colorTheme?: boolean
  }
}
export const YourSekaiProvider = ({
  children,
  sekaiTheme,
  settingOptions
}: YourSekaiProviderProps) => {
  const [currentSekaiTheme, setCurrentSekaiTheme] = useState<SekaiTheme>(sekaiTheme)
  const {
    storedvalue: colorTheme,
    setStoredValue: setColorTheme,
    deleteLocalStorage
  } = useLocalStorage<PaletteMode>(YOUR_COLOR_THEME, sekaiTheme.palette.mode)

  const onSwitchSekaiColor = (sekai: ColorsSekaiKey) => {
    setCurrentSekaiTheme((pre) => ({
      ...pre,
      palette: {
        ...pre.palette,
        sekai: sekai
      }
    }))
  }

  const onSwitchColorTheme = (color: PaletteMode) => {
    setColorTheme(color)
    setCurrentSekaiTheme((pre) => ({
      ...pre,
      palette: {
        ...pre.palette,
        palette: {
          mode: color
        }
      }
    }))
  }

  useEffect(() => {
    setCurrentSekaiTheme((pre) => ({
      ...pre,
      palette: {
        ...pre.palette,
        mode: colorTheme
      }
    }))
  }, [colorTheme])

  useEffect(() => {
    return () => {
      // Delete colorTheme store value, if setting option is not available
      if (!settingOptions?.colorTheme) {
        deleteLocalStorage()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const provideValue = {
    sekaiTheme: currentSekaiTheme,
    onSwitchSekaiColor,
    onSwitchColorTheme
  }

  const globalStyle = useMemo(
    () => `
    * {
      font-family: ${sekaiTheme.typography.fontFamily};
    }
    body {
      color: ${sekaiTheme.palette.mode === DARK_MODE ? '#e0e0e0' : '#212121'};
      background: ${sekaiTheme.palette.mode === DARK_MODE ? '#121212' : '#ffffff'};
    }
  `,
    [sekaiTheme]
  )

  return (
    <YourSekaiContext.Provider value={provideValue}>
      <style>{globalStyle}</style>
      {children}
    </YourSekaiContext.Provider>
  )
}
