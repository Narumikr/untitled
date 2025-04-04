import { LIGHT_MODE } from '@/hooks/useThemeMode'

import { COLORS_SEKAI_KEYS } from '@/styles/sekai-colors'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'

export type SekaiTheme = {
  palette: {
    sekai: ColorsSekaiKey
    mode?: PaletteMode
  }
  typography?: {
    fontFamily?: string
  }
}

const defaultTheme: Required<SekaiTheme> = {
  palette: {
    sekai: COLORS_SEKAI_KEYS.Miku,
    mode: LIGHT_MODE
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif'
  }
}

export const createSekai = (option: SekaiTheme) => {
  const palette = option.palette
  const typography = option?.typography

  const sekaiTheme: Required<SekaiTheme> = {
    palette: {
      sekai: palette.sekai,
      mode: palette.mode || defaultTheme.palette.mode
    },
    typography: {
      fontFamily: typography?.fontFamily || defaultTheme.typography.fontFamily
    }
  }

  return sekaiTheme
}
