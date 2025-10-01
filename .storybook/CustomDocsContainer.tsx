import React, { useEffect } from 'react'

import { DocsContainer } from '@storybook/blocks'

import { DARK_MODE, LIGHT_MODE } from '@/hooks/useThemeMode'

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
        color: #212121 !important;
        background-color: #ffffff !important;
      }
      `,
  )
  const styles = darkStoryIds.reduce(
    (pre, el) =>
      pre +
      `
      #anchor--${el} .docs-story {
        color: #e0e0e0 !important;
        background-color: #121212 !important;
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
