import React from 'react'

import { YourSekaiProvider } from '@/components/provider/YourSekaiProvider'

import { DARK_MODE, LIGHT_MODE } from '@/hooks/useThemeMode'
import { createSekai } from '@/utils/createSekai'

import { COLORS_SEKAI_KEYS } from '@/styles/sekai-colors'

import { CustomDocsContainer } from './CustomDocsContainer'

import type { ColorsSekaiKey } from '@/styles/sekai-colors'
import type { Preview, StoryContext, StoryFn } from '@storybook/react'

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
      container: CustomDocsContainer
    }
  },
  decorators: [
    (Story: StoryFn, context: StoryContext) => {
      const sekai: ColorsSekaiKey = context.parameters.sekai || COLORS_SEKAI_KEYS.Miku
      const isDark = DARK_MODE === context.parameters.background
      const isDocs = context.viewMode === 'docs'
      const isPortal: boolean = context.parameters.portal
      const isPortalDocsPreview = isPortal && isDocs

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
              ...(isPortalDocsPreview && {
                containerComponent: getContainerPortalRoot(context, isDocs) ?? undefined
              })
            }}
          />
        </YourSekaiProvider>
      )
    }
  ]
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
