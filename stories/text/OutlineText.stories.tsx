import { OutlineText } from '@/components/text/OutlineText'

import { COLORS_SEKAI_KEYS } from '@/styles/sekai-colors'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Untitled/OutlineText',
  component: OutlineText,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: 'Button styles',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      control: false
    },
    sekai: {
      description: 'What SEKAI color to use',
      table: {
        type: { summary: 'ColorsSekaiKey' },
        defaultValue: { summary: 'Miku' }
      },
      control: { type: 'select' },
      options: [...Object.keys(COLORS_SEKAI_KEYS)]
    },
    themeMode: {
      description: 'Light or Dark mode',
      table: {
        type: { summary: 'PaletteMode' },
        defaultValue: { summary: 'light' }
      },
      control: { type: 'select' },
      options: ['light', 'dark']
    }
  },
  args: {}
} satisfies Meta<typeof OutlineText>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultLight: Story = {
  args: {
    sekai: 'Miku',
    themeMode: 'light',
    text: 'Hatsune Miku'
  },
  parameters: {
    sekai: 'Miku',
    background: 'light'
  }
}

export const DefaultDark: Story = {
  args: {
    sekai: 'Miku',
    themeMode: 'dark',
    text: 'Hatsune Miku'
  },
  parameters: {
    sekai: 'Miku',
    background: 'dark'
  }
}
