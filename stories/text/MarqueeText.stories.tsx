import React from 'react'

import { MarqueeText } from '@/components/text/MarqueeText'

import { COLORS_SEKAI_KEYS } from '@/styles/sekai-colors'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Untitled/MarqueeText',
  component: MarqueeText,
  decorators: [
    (Story) => (
      <div style={{ width: 250, maxWidth: '80vw', height: 150, display: 'flex', alignItems: 'center' }}>
        <Story />
      </div>
    )
  ],
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'Unique Id',
      table: {
        type: { summary: 'string' }
      }
    },
    className: {
      description: 'Custom styles',
      table: {
        type: { summary: 'string' }
      },
      control: false
    },
    style: {
      description: 'Style object',
      table: {
        type: { summary: 'React.CSSProperties' }
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
} satisfies Meta<typeof MarqueeText>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultLight: Story = {
  args: {
    id: 'marquee-text-default-light',
    sekai: 'Miku',
    themeMode: 'light',
    children: 'Testtesttestettsetsetsetsetsetsetsetsetsete-finish'
  },
  parameters: {
    sekai: 'Miku',
    background: 'light'
  }
}

export const DefaultDark: Story = {
  args: {
    id: 'marquee-text-default-dark',
    sekai: 'Miku',
    themeMode: 'dark',
    children: <p>Testtesttestettsetsetsetsetsetsetsetsetsete</p>
  },
  parameters: {
    sekai: 'Miku',
    background: 'dark'
  }
}
