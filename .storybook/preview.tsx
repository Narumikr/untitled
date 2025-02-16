import React from 'react'

import { DocsContainer } from '@storybook/addon-docs'

import { CreationSekaiProvider } from '@/components/provider/CreationSekaiProvider'

import { DARK_MODE, LIGHT_MODE } from '@/hooks/useThemeMode'
import { createSekai } from '@/utils/createSekai'
import { COLORS_SEKAI_KEYS } from '@/utils/sekai-colors'

import type { SekaiTheme } from '@/utils/createSekai'
import type { DocsContextProps } from '@storybook/addon-docs'
import type { Preview } from '@storybook/react'

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
      const isAutoDocs = context.viewMode === 'docs'
      const isDark = DARK_MODE === context.parameters.background
      const sekai = context.parameters.sekai || COLORS_SEKAI_KEYS.Miku

      const theme: SekaiTheme = createSekai({
        palette: {
          sekai: isAutoDocs ? COLORS_SEKAI_KEYS.Miku : sekai,
          mode: isDark ? DARK_MODE : LIGHT_MODE
        }
      })

      return (
        <CreationSekaiProvider sekaiTheme={theme}>
          <Story />
        </CreationSekaiProvider>
      )
    }
  ]
}

export default preview
