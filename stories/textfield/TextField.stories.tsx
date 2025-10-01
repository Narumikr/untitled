import { fn } from '@storybook/test'

import { TextField } from '@/components/textfield/TextField'

import { COLORS_SEKAI_KEYS } from '@/styles/sekai-colors'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'UI/TextField',
  component: TextField,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'Unique Id',
      table: {
        type: { summary: 'string' },
      },
    },
    className: {
      description: 'Custom styles',
      table: {
        type: { summary: 'string' },
      },
      control: false,
    },
    style: {
      description: 'Style object',
      table: {
        type: { summary: 'React.CSSProperties' },
      },
      control: false,
    },
    sekai: {
      description: 'What SEKAI color to use',
      table: {
        type: { summary: 'ColorsSekaiKey' },
        defaultValue: { summary: 'Miku' },
      },
      control: { type: 'select' },
      options: [...Object.keys(COLORS_SEKAI_KEYS)],
    },

    themeMode: {
      description: 'Light or Dark mode',
      table: {
        type: { summary: 'PaletteMode' },
        defaultValue: { summary: 'light' },
      },
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
  },
  args: { onChangeInput: fn() },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultLight: Story = {
  args: {
    id: 'textfield-default-light',
    sekai: 'Miku',
    themeMode: 'light',
    clearButton: true,
    placeholder: 'Input text here',
    isError: false,
    errorMessage: '',
  },
  parameters: {
    sekai: 'Miku',
    background: 'light',
  },
}

export const DefaultDark: Story = {
  args: {
    id: 'textfield-default-dark',
    sekai: 'Miku',
    themeMode: 'dark',
    clearButton: true,
    placeholder: 'Input text here',
    isError: false,
    errorMessage: '',
  },
  parameters: {
    sekai: 'Miku',
    background: 'dark',
  },
}

export const ErrorLight: Story = {
  args: {
    id: 'textfield-default-light',
    sekai: 'Miku',
    themeMode: 'light',
    clearButton: true,
    placeholder: 'Input text here',
    isError: true,
    errorMessage: 'The value you entered is not valid',
  },
  parameters: {
    sekai: 'Miku',
    background: 'light',
  },
}

export const ErrorDark: Story = {
  args: {
    id: 'textfield-default-dark',
    sekai: 'Miku',
    themeMode: 'dark',
    clearButton: true,
    placeholder: 'Input text here',
    isError: true,
    errorMessage: 'The value you entered is not valid',
  },
  parameters: {
    sekai: 'Miku',
    background: 'dark',
  },
}
