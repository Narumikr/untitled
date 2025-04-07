import React from 'react'

import { DocsContainer } from '@storybook/addon-docs'

import { YourSekaiProvider } from '@/components/provider/YourSekaiProvider'

import { DARK_MODE, LIGHT_MODE } from '@/hooks/useThemeMode'
import { createSekai } from '@/utils/createSekai'

import { COLORS_SEKAI_KEYS } from '@/styles/sekai-colors'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'
import type { DocsContextProps } from '@storybook/addon-docs'
import type { Preview, StoryContext } from '@storybook/react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: 'centered',
    docs: {
      container: ({
        children,
        context
      }: {
        children: React.ReactNode
        context: DocsContextProps
      }) => {
        const lightStoryIds = sortStories(context, LIGHT_MODE)
        const darkStoryIds = sortStories(context, DARK_MODE)
        const llightStyles = lightStoryIds.reduce(
          (pre, el) =>
            pre +
            `
            #anchor--${el} .docs-story {
              color: #212121 !important;
              background-color: #ffffff !important;
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
          `
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
          llightStyles
        )

        return (
          <DocsContainer context={context}>
            <div>
              <style>{styles}</style>
              {children}
            </div>
          </DocsContainer>
        )
      }
    }
  },
  decorators: [
    (Story, context) => {
      const sekai: ColorsSekaiKey = context.parameters.sekai || COLORS_SEKAI_KEYS.Miku
      const isDark = DARK_MODE === context.parameters.background
      const isDocs = context.viewMode === 'docs'
      const isPortal: boolean = context.parameters.portal

      const theme = createSekai({
        palette: {
          sekai: sekai,
          mode: isDark ? DARK_MODE : LIGHT_MODE
        }
      })

      return (
        <YourSekaiProvider sekaiTheme={theme}>
          <Story
            args={{
              ...context.args,
              ...(isPortal && { containerComponent: getContainerPortalRoot(context, isDocs) })
            }}
          />
        </YourSekaiProvider>
      )
    }
  ]
}

const sortStories = (context: DocsContextProps, mode: PaletteMode) => {
  const storyIds = Array.from(context.componentStories())
    .map((el) => (mode === el.parameters.background ? el.id : -1))
    .filter((el) => -1 !== el)
  return storyIds
}

const getContainerPortalRoot = (context: StoryContext, isDocs: boolean) => {
  const isPrimary = context.canvasElement.id.indexOf('primary') !== -1
  const nodeList = document.querySelectorAll(`#anchor--${context.id}`) || []
  return isDocs
    ? nodeList.length > 1
      ? nodeList[isPrimary ? 0 : 1]?.querySelector('.docs-story')
      : document.getElementById(`anchor--${context.id}`)?.querySelector('.docs-story')
    : document.body
}

export default preview
