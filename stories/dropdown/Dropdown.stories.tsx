import { fn } from '@storybook/test'

import { Dropdown } from '@/components/dropdown/Dropdown'

import { COLORS_SEKAI_KEYS } from '@/styles/sekai-colors'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Untitled/Dropdown',
  component: Dropdown,
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
    }
  },
  args: {
    onSelect: fn()
  }
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultLight: Story = {
  args: {
    id: 'loading-default-light',
    sekai: 'Miku',
    themeMode: 'light',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' }
    ],
    placeholder: 'Select an option'
  },
  parameters: {
    sekai: 'Miku',
    background: 'light'
  }
}

export const DefaultDark: Story = {
  args: {
    id: 'loading-default-dark',
    sekai: 'Miku',
    themeMode: 'dark',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' }
    ],
    placeholder: 'Select an option'
  },
  parameters: {
    sekai: 'Miku',
    background: 'dark'
  }
}
