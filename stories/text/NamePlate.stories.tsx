import { NamePlate } from '@/components/text/NamePlate'

import { COLORS_SEKAI_KEYS } from '@/styles/sekai-colors'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Untitled/NamePlate',
  component: NamePlate,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: 'Custom styles',
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
    },
    text: {
      description: 'Text to display',
      table: {
        type: { summary: 'string' }
      }
    },
    colorCount: {
      description: 'Number of color text',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' }
      }
    }
  },
  args: {}
} satisfies Meta<typeof NamePlate>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultLight: Story = {
  args: {
    sekai: 'Miku',
    themeMode: 'light',
    text: '初音ミク'
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
    text: '初音ミク'
  },
  parameters: {
    sekai: 'Miku',
    background: 'dark'
  }
}
