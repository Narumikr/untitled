import React from 'react'

import { DocsContainer } from '@storybook/addon-docs'

import { YourSekaiProvider } from '@/components/provider/YourSekaiProvider'

import type { ColorsSekaiKey } from '@/styles/sekai-colors'
import { COLORS_SEKAI_KEYS } from '@/styles/sekai-colors'

import { DARK_MODE, LIGHT_MODE } from '@/hooks/useThemeMode'
import { createSekai } from '@/utils/createSekai'

import type { SekaiTheme } from '@/utils/createSekai'
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
        const storyIds = Array.from(context.componentStories())
          .map((el) => (DARK_MODE === el.parameters.background ? el.id : -1))
          .filter((el) => -1 !== el)
        const bgStyles = storyIds.reduce(
          (pre, el) =>
            pre +
            `
            #anchor--${el} .docs-story {
              background-color: #121212 !important;
            }
            `,
          `
          .docs-story {
            padding: 20px;
          }
          `
        )

        return (
          <DocsContainer context={context}>
            <div>
              <style>{bgStyles}</style>
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

      const theme: SekaiTheme = createSekai({
        palette: {
          sekai: sekai,
          mode: isDark ? DARK_MODE : LIGHT_MODE
        }
      })

      if (isPortal) setStylesFixedToAbsolute()

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

const setStylesFixedToAbsolute = () => {
  setTimeout(() => {
    const modals = document.querySelectorAll('[class*=sekai-overlay]')
    modals.forEach((modal) => {
      ;(modal as HTMLElement).style.position = 'absolute'
    })
  }, 0)
}

const getContainerPortalRoot = (context: StoryContext, isDocs: boolean) => {
  const isPrimary = context.canvasElement.id.indexOf('primary') !== -1
  const nodeList = document.querySelectorAll(`#anchor--${context.id}`) || []
  return isDocs
    ? nodeList.length > 1
      ? nodeList[isPrimary ? 0 : 1]?.querySelector('.docs-story')
      : document.getElementById(`anchor--${context.id}`)?.querySelector('.docs-story')
    : document.getElementById('storybook-root')
}

export default preview
