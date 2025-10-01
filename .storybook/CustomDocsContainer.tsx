import React, { useEffect } from 'react'

import { DocsContainer } from '@storybook/blocks'

import { DARK_MODE, LIGHT_MODE } from '@/hooks/useThemeMode'
import {
  BACKGROUND_DARK_MODE,
  BACKGROUND_LIGHT_MODE,
  COLOR_DARK_MODE,
  COLOR_LIGHT_MODE,
} from '@/internal/color.constant'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { DocsContextProps } from '@storybook/blocks'

interface CustomDocsContainerProps {
  children: React.ReactNode
  context: DocsContextProps
}

export const CustomDocsContainer = ({ children, context }: CustomDocsContainerProps) => {
  const lightStoryIds = sortStories(context, LIGHT_MODE)
  const darkStoryIds = sortStories(context, DARK_MODE)
  const lightStyles = lightStoryIds.reduce(
    (pre, el) =>
      pre +
      `
      #anchor--${el} .docs-story {
        color: ${COLOR_LIGHT_MODE} !important;
        background-color: ${BACKGROUND_LIGHT_MODE} !important;
      }
      `,
    `
      .docs-story {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 100%;
        min-height: 250px;
      }
      .css-11xgcgt {
        z-index: 10000;
      }
    `,
  )
  const styles = darkStoryIds.reduce(
    (pre, el) =>
      pre +
      `
      #anchor--${el} .docs-story {
        color: ${COLOR_DARK_MODE} !important;
        background-color: ${BACKGROUND_DARK_MODE} !important;
      }
      `,
    lightStyles,
  )

  useEffect(() => {
    if (!context.componentStories().length) return
    if (context.componentStories()[0].parameters.invisible) {
      const target = document.querySelector('.css-1qq744x')
      if (target) {
        const p = document.createElement('p')
        p.textContent = 'こちらのコンポーネントはDocsのプレビューはありません。'
        target.appendChild(p)
      }
    }
  }, [context])

  return (
    <DocsContainer context={context}>
      <div>
        <style>{styles}</style>
        {children}
      </div>
    </DocsContainer>
  )
}

const sortStories = (context: DocsContextProps, mode: PaletteMode) => {
  const storyIds = Array.from(context.componentStories())
    .map((el) => (mode === el.parameters.background ? el.id : -1))
    .filter((el) => -1 !== el)
  return storyIds
}
