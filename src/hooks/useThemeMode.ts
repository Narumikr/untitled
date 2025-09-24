import { useEffect, useState } from 'react';

export const LIGHT_MODE = 'light';
export const DARK_MODE = 'dark';
export type PaletteMode = typeof LIGHT_MODE | typeof DARK_MODE;

export const useThemeMode = (): PaletteMode => {
  const [isDarkMode, setDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const darkModeChangeListener = (event: MediaQueryListEvent) => {
      setDarkMode(event.matches);
    };

    setDarkMode(darkModeQuery.matches);

    darkModeQuery.addEventListener('change', darkModeChangeListener);

    return () => {
      darkModeQuery.removeEventListener('change', darkModeChangeListener);
    };
  }, []);

  return isDarkMode === null ? LIGHT_MODE : isDarkMode ? DARK_MODE : LIGHT_MODE;
};
