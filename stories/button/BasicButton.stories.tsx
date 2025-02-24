import { fn } from '@storybook/test'

import { BasicButton } from '@/components/button/BasicButton'

import { COLORS_SEKAI_KEYS } from '@/styles/sekai-colors'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Untitled/BasicButton',
  component: BasicButton,
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
      options: [...Object.keys(COLORS_SEKAI_KEYS)]
    },
    withText: {
      description: 'Apply SEKAI color to text',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    themeMode: {
      description: 'Light or Dark mode',
      table: {
        type: { summary: 'PaletteMode' },
        defaultValue: { summary: 'light' }
      },
      options: ['light', 'dark']
    },
    children: {
      description: 'Button contents',
      table: { type: { summary: 'React.ReactNode' } }
    },
    disabled: {
      description: 'Button disabled',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    onClick: { description: 'Click handler', table: { type: { summary: '() => void' } } }
  },
  args: { onClick: fn() }
} satisfies Meta<typeof BasicButton>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultLight: Story = {
  args: {
    sekai: 'Miku',
    withText: false,
    themeMode: 'light',
    children: 'Hatsune Miku',
    disabled: false
  },
  parameters: {
    sekai: 'Miku',
    background: 'light'
  }
}

export const DefaultDark: Story = {
  args: {
    sekai: 'Miku',
    withText: false,
    themeMode: 'dark',
    children: 'Hatsune Miku',
    disabled: false
  },
  parameters: {
    sekai: 'Miku',
    background: 'dark'
  }
}

export const WithTextLight: Story = {
  args: {
    sekai: 'Miku',
    withText: true,
    themeMode: 'light',
    children: 'Hatsune Miku',
    disabled: false
  },
  parameters: {
    sekai: 'Miku',
    background: 'light'
  }
}

export const WithTextDark: Story = {
  args: {
    sekai: 'Miku',
    withText: true,
    themeMode: 'dark',
    children: 'Hatsune Miku',
    disabled: false
  },
  parameters: {
    sekai: 'Miku',
    background: 'dark'
  }
}

export const DisabledLight: Story = {
  args: {
    sekai: 'Miku',
    withText: false,
    themeMode: 'light',
    children: 'Hatsune Miku',
    disabled: true
  },
  parameters: {
    sekai: 'Miku',
    background: 'light'
  }
}

export const DisabledtDark: Story = {
  args: {
    sekai: 'Miku',
    withText: false,
    themeMode: 'dark',
    children: 'Hatsune Miku',
    disabled: true
  },
  parameters: {
    sekai: 'Miku',
    background: 'dark'
  }
}
