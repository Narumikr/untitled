import { fn } from '@storybook/test'

import { Dialog } from '@/components/dialog/Dialog'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Untitled/Dialog',
  component: Dialog,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    // className: { control: false }
  },
  args: {
    onClose: fn()
  }
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultLight: Story = {
  args: {
    sekai: 'Miku',
    open: true,
    themeMode: 'light',
    children: 'Hatsune Miku',
    size: 'medium',
    title: '開かれた窓のセカイ',
    showCloseIcon: false
  },
  parameters: {
    sekai: 'Miku',
    background: 'light',
    portal: true
  }
}

export const DefaultDark: Story = {
  args: {
    sekai: 'Miku',
    open: true,
    themeMode: 'dark',
    children: 'Hatsune Miku',
    size: 'medium',
    title: '閉ざされた窓のセカイ',
    showCloseIcon: false
  },
  parameters: {
    sekai: 'Miku',
    background: 'dark',
    portal: true
  }
}

export const LightNarrow: Story = {
  args: {
    sekai: 'Miku',
    open: true,
    themeMode: 'light',
    children: 'Hatsune Miku',
    size: 'narrow',
    title: '開かれた窓のセカイ',
    showCloseIcon: false
  },
  parameters: {
    sekai: 'Miku',
    background: 'light',
    portal: true
  }
}

export const DarkNarrow: Story = {
  args: {
    sekai: 'Miku',
    open: true,
    themeMode: 'dark',
    children: 'Hatsune Miku',
    size: 'narrow',
    title: '閉ざされた窓のセカイ',
    showCloseIcon: false
  },
  parameters: {
    sekai: 'Miku',
    background: 'dark',
    portal: true
  }
}

export const LightWide: Story = {
  args: {
    sekai: 'Miku',
    open: true,
    themeMode: 'light',
    children: 'Hatsune Miku',
    size: 'narrow',
    title: '開かれた窓のセカイ',
    showCloseIcon: false
  },
  parameters: {
    sekai: 'Miku',
    background: 'light',
    portal: true
  }
}

export const DarkWide: Story = {
  args: {
    sekai: 'Miku',
    open: true,
    themeMode: 'dark',
    children: 'Hatsune Miku',
    size: 'narrow',
    title: '閉ざされた窓のセカイ',
    showCloseIcon: false
  },
  parameters: {
    sekai: 'Miku',
    background: 'dark',
    portal: true
  }
}
