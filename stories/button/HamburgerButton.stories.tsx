import React from 'react'

import { fn } from '@storybook/test'

import { HamburgerButton } from '@/components/button/HamburgerButton'

import { COLORS_SEKAI_KEYS } from '@/styles/sekai-colors'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Untitled/HamburgerButton',
  component: HamburgerButton,
  decorators: [
    (Story) => (
      <div style={{ width: 500, maxWidth: '80vw', height: 150 }}>
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
    sekai: {
      description: 'What SEKAI color to use',
      table: {
        type: { summary: 'ColorsSekaiKey' },
        defaultValue: { summary: 'Miku' }
      },
      control: { type: 'select' },
      options: [...Object.keys(COLORS_SEKAI_KEYS)]
    },
    style: {
      description: 'Style object',
      table: {
        type: { summary: 'React.CSSProperties' }
      },
      control: false
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
    open: {
      description: 'Hamburger menu open or not',
      // @ts-expect-error Storybook's typing issue
      type: { required: true },
      table: {
        type: { summary: 'boolean' }
      }
    },
    onClick: {
      description: 'Click handler',
      table: { type: { summary: '() => void' } }
    }
  },
  args: { onClick: fn() }
} satisfies Meta<typeof HamburgerButton>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultLight: Story = {
  args: {
    id: 'hamburger-light-light',
    sekai: 'Miku',
    themeMode: 'light',
    open: false
  },
  parameters: {
    sekai: 'Miku',
    background: 'light',
    portal: true
  }
}

export const DefaultDark: Story = {
  args: {
    id: 'hamburger-dark-dark',
    sekai: 'Miku',
    themeMode: 'dark',
    open: false
  },
  parameters: {
    sekai: 'Miku',
    background: 'dark',
    portal: true
  }
}
