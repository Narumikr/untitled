import { useContext } from 'react'

import { YourSekaiContext } from '@/components/provider/YourSekaiProvider'

import type { ColorsSekaiKey } from '@/styles/sekai-colors'
import { COLORS_SEKAI_KEYS, colorsSekai } from '@/styles/sekai-colors'

import { useCreateSekai } from '@/hooks/useCreateSekai'
import { LIGHT_MODE } from '@/hooks/useThemeMode'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { SekaiTheme } from '@/utils/createSekai'

const defaultTheme: Required<SekaiTheme> = {
  palette: {
    sekai: COLORS_SEKAI_KEYS.Miku,
    mode: LIGHT_MODE
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif'
  }
}

type OptionalSekaiProps = {
  sekai?: ColorsSekaiKey
  mode?: PaletteMode
}

export const useOptionalSekai = (option: OptionalSekaiProps) => {
  const context = useContext(YourSekaiContext)
  const sekaiColor = context
    ? colorsSekai[option.sekai || useCreateSekai().sekaiTheme.palette.sekai]
    : colorsSekai[defaultTheme.palette.sekai]

  const modeTheme = context
    ? option.mode || useCreateSekai().sekaiTheme.palette.mode
    : defaultTheme.palette.mode

  const isLight = LIGHT_MODE === modeTheme

  return {
    sekaiColor,
    modeTheme,
    isLight
  }
}
