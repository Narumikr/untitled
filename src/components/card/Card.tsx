import React from 'react';

import clsx from 'clsx';

import { useOptionalSekai } from '@/internal/useOptionalSekai';
import { convertHexToRgba } from '@/utils/converter';

import globalStyles from '@/styles/global.module.scss';

import styles from './Card.module.scss';

import type { PaletteMode } from '@/hooks/useThemeMode';
import type { ColorsSekaiKey } from '@/styles/sekai-colors';

export interface CardProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  sekai?: ColorsSekaiKey;
  themeMode?: PaletteMode;
  children: React.ReactNode;
}

export const Card = ({ sekai, themeMode, children, ...rest }: CardProps) => {
  const { sekaiColor, modeTheme } = useOptionalSekai({ sekai, mode: themeMode });

  const sekaiColoShadow = convertHexToRgba(sekaiColor, 0.25);

  const optionStyle = {
    '--sekai-color': sekaiColor,
    '--sekai-color-shadow': sekaiColoShadow
  };

  return (
    <div
      {...rest}
      className={clsx(
        styles['sekai-card'],
        globalStyles[`sekai-color-${modeTheme}`],
        rest.className
      )}
      style={{ ...(optionStyle as React.CSSProperties), ...rest.style }}>
      {children}
    </div>
  );
};

export interface CardContentProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  themeMode?: PaletteMode;
  children: React.ReactNode;
}

export const CardContent = ({ themeMode, children, ...rest }: CardContentProps) => {
  const { modeTheme } = useOptionalSekai({ mode: themeMode });

  return (
    <div
      {...rest}
      className={clsx(
        styles['sekai-card-content'],
        globalStyles[`sekai-color-${modeTheme}`],
        rest.className
      )}>
      {children}
    </div>
  );
};

export interface CardTitleProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  sekai?: ColorsSekaiKey;
  themeMode?: PaletteMode;
  title: string;
  underline?: true;
}

export const CardTitle = ({ sekai, themeMode, title, underline, ...rest }: CardTitleProps) => {
  const { sekaiColor, modeTheme } = useOptionalSekai({ sekai, mode: themeMode });

  const optionStyle = {
    '--sekai-color': sekaiColor
  };

  return (
    <h3
      {...rest}
      className={clsx(
        styles['sekai-card-title'],
        globalStyles[`sekai-color-${modeTheme}`],
        underline && styles['sekai-underline'],
        rest.className
      )}
      style={{ ...(optionStyle as React.CSSProperties), ...rest.style }}>
      {title}
    </h3>
  );
};
