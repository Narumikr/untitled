import { useContext } from 'react';

import { YourSekaiContext } from '@/components/provider/YourSekaiProvider';

import { LIGHT_MODE } from '@/hooks/useThemeMode';

import { COLORS_SEKAI_KEYS, colorsSekai } from '@/styles/sekai-colors';

import type { PaletteMode } from '@/hooks/useThemeMode';
import type { ColorsSekaiCode, ColorsSekaiKey } from '@/styles/sekai-colors';
import type { SekaiTheme } from '@/utils/createSekai';

const defaultTheme: SekaiTheme = {
  palette: {
    sekai: COLORS_SEKAI_KEYS.Miku,
    mode: LIGHT_MODE
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif'
  }
} as const;

type OptionalSekaiProps = {
  sekai?: ColorsSekaiKey;
  mode?: PaletteMode;
};

export const useOptionalSekai = (option: OptionalSekaiProps) => {
  const context = useContext(YourSekaiContext);

  const sekaiColor: ColorsSekaiCode = context
    ? colorsSekai[option.sekai || context.sekaiTheme.palette.sekai]
    : colorsSekai[defaultTheme.palette.sekai];

  const modeTheme = context
    ? option.mode || context.sekaiTheme.palette.mode
    : defaultTheme.palette.mode;

  const isLight = LIGHT_MODE === modeTheme;

  return {
    sekaiColor,
    modeTheme,
    isLight
  };
};
