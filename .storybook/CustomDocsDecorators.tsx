import React, { useEffect } from 'react'

import { YourSekaiProvider } from '@/components/provider/YourSekaiProvider'

import { useCreateSekai } from '@/hooks/useCreateSekai'
import { DARK_MODE, LIGHT_MODE } from '@/hooks/useThemeMode'
import { createSekai } from '@/utils/createSekai'

import { COLORS_SEKAI_KEYS } from '@/styles/sekai-colors'

import type { PaletteMode } from '@/hooks/useThemeMode'
import type { ColorsSekaiKey } from '@/styles/sekai-colors'
import type { StoryContext, StoryFn } from '@storybook/react'

interface CustomDocsDecoratorsProps {
  story: StoryFn
  context: StoryContext
}

export const CustomDocsDecorators = ({ story: Story, context }: CustomDocsDecoratorsProps) => {
  const sekai: ColorsSekaiKey = context.parameters.sekai || COLORS_SEKAI_KEYS.Miku
  const isDark = DARK_MODE === context.parameters.background
  const modeTheme = isDark ? DARK_MODE : LIGHT_MODE
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
      <SekaiThemeSetting sekai={sekai} mode={modeTheme} />
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

const getContainerPortalRoot = (context: StoryContext, isDocs: boolean) => {
  const isPrimary = context.canvasElement.id.indexOf('primary') !== -1
  const nodeList = document.querySelectorAll(`#anchor--${context.id}`) || []
  return isDocs
    ? nodeList.length > 1
      ? nodeList[isPrimary ? 0 : 1]?.querySelector('.docs-story')
      : document.getElementById(`anchor--${context.id}`)?.querySelector('.docs-story')
    : document.body
}

interface SekaiThemeSettingProps {
  sekai: ColorsSekaiKey
  mode: PaletteMode
}

const SekaiThemeSetting = ({ sekai, mode }: SekaiThemeSettingProps) => {
  const { switchSekaiColor, switchColorTheme } = useCreateSekai()

  useEffect(() => {
    switchSekaiColor(sekai)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sekai])

  useEffect(() => {
    switchColorTheme(mode)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode])

  return <></>
}
