import React, { createContext, memo, useCallback, useEffect, useMemo, useState } from 'react'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { DARK_MODE } from '@/hooks/useThemeMode'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'
import type { SekaiTheme } from '@/utils/createSekai'

export const YOUR_SEKAI_COLOR = 'your_sekai_color'
export const YOUR_COLOR_THEME = 'your_color_theme'

export interface YourSekaiContextProps {
  sekaiTheme: SekaiTheme
  switchSekaiColor: (sekai: ColorsSekaiKey) => void
  switchColorTheme: (color: PaletteMode) => void
}

export const YourSekaiContext = createContext<YourSekaiContextProps | null>(null)

export interface YourSekaiProviderProps {
  children: React.ReactNode
  sekaiTheme: SekaiTheme
}
export const YourSekaiProvider = ({ children, sekaiTheme }: YourSekaiProviderProps) => {
  const { storedValue: sekaiColor, setStoredValue: setSekaiColor } =
    useLocalStorage<ColorsSekaiKey>(YOUR_SEKAI_COLOR, sekaiTheme.palette.sekai)
  const { storedValue: colorTheme, setStoredValue: setColorTheme } =
    useLocalStorage<PaletteMode>(YOUR_COLOR_THEME, sekaiTheme.palette.mode)

  const switchSekaiColor = useCallback(
    (sekai: ColorsSekaiKey) => {
      setSekaiColor(sekai)
    },
    [setSekaiColor]
  )

  const switchColorTheme = useCallback(
    (color: PaletteMode) => {
      setColorTheme(color)
    },
    [setColorTheme]
  )

  const currentSekaiTheme = useMemo(
    () => ({
      ...sekaiTheme,
      palette: {
        ...sekaiTheme.palette,
        sekai: sekaiColor,
        mode: colorTheme
      }
    }),
    [colorTheme, sekaiColor, sekaiTheme]
  )

  const contextValue = useMemo(
    () => ({
      sekaiTheme: currentSekaiTheme,
      switchSekaiColor,
      switchColorTheme
    }),
    [currentSekaiTheme, switchColorTheme, switchSekaiColor]
  )

  return (
    <YourSekaiContext.Provider value={contextValue}>
      <GlobalStyle theme={currentSekaiTheme} />
      {children}
    </YourSekaiContext.Provider>
  )
}

const GlobalStyle = memo(({ theme }: { theme: SekaiTheme }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const style = useMemo(
    () => `
    * {
      font-family: ${theme.typography.fontFamily};
    }
    body {
      color: ${theme.palette.mode === DARK_MODE ? '#e0e0e0' : '#212121'};
      background: ${theme.palette.mode === DARK_MODE ? '#121212' : '#ffffff'};
    }
  `,
    [theme.palette.mode, theme.typography.fontFamily]
  )

  if (!isClient) return null

  return <style>{style}</style>
})

GlobalStyle.displayName = 'GlobalStyle'
