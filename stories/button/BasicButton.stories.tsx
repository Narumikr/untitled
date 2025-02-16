import { fn } from '@storybook/test'

import { BasicButton } from '@/components/button/BasicButton'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Example/BasicButton',
  component: BasicButton,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    className: { control: false }
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
