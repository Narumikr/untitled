import { LIGHT_MODE } from '@/hooks/useThemeMode'

import { COLORS_SEKAI_KEYS } from '@/styles/sekai-colors'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'

export type SekaiThemeProps = {
  palette: {
    sekai: ColorsSekaiKey
    mode?: PaletteMode
  }
  typography?: {
    fontFamily?: string
  }
}

export type SekaiTheme = {
  palette: {
    sekai: ColorsSekaiKey
    mode: PaletteMode
  }
  typography: {
    fontFamily: string
  }
}

const defaultTheme: SekaiTheme = {
  palette: {
    sekai: COLORS_SEKAI_KEYS.Miku,
    mode: LIGHT_MODE
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif'
  }
} as const

export const createSekai = (option: SekaiThemeProps) => {
  const { palette, typography = {} } = option

  const sekaiTheme: SekaiTheme = {
    palette: {
      sekai: palette.sekai,
      mode: palette.mode || defaultTheme.palette.mode
    },
    typography: {
      fontFamily: typography.fontFamily ?? defaultTheme.typography.fontFamily
    }
  }

  return sekaiTheme
}
