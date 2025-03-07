import React from 'react'

import { fn } from '@storybook/test'

import { XoMikuDialog } from '@/components/dialog/XoMikuDialog'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Untitled/XoMikuDialog',
  component: XoMikuDialog,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    open: {
      description: 'Dialog open',
      table: { types: 'boolean' }
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
    children: {
      description: 'Dialog contents',
      // @ts-expect-error Storybook's typing issue
      type: { required: true },
      table: { type: { summary: 'React.ReactNode' } }
    },
    containerComponent: {
      description: 'Target element where the portal content will be rendered',
      table: { type: { summary: 'HTMLElement' } },
      control: false
    },
    size: {
      description: 'Dialog size',
      table: {
        type: { summary: 'DialogSize' },
        defaultValue: { summary: 'medium' }
      },
      control: 'select',
      options: ['narrow', 'medium', 'wide']
    },
    onClose: {
      description: 'Dialog close method',
      // @ts-expect-error Storybook's typing issue
      type: { required: true },
      table: { type: { summary: '() => void' } }
    },
    title: {
      description: 'Dialog header title',
      table: { type: { summary: 'string' } }
    },
    buttons: {
      description: 'Use Dialog default buttons',
      table: { type: { summary: 'DialogButton[]' } },
      control: { type: 'object' }
    }
  },
  args: {
    onClose: fn()
  }
} satisfies Meta<typeof XoMikuDialog>

export default meta
type Story = StoryObj<typeof meta>

const commonArgs = {
  open: true,
  children: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span>開かれた窓のセカイのミクをイメージしたコンセプトダイアログ</span>
    </div>
  ),
  title: 'Dialog Title'
}

export const DefaultLight: Story = {
  args: {
    ...commonArgs,
    themeMode: 'light',
    size: 'medium',
    buttons: [
      {
        text: 'Cancel',
        onClick: fn()
      },
      {
        text: 'OK',
        type: 'normal',
        onClick: fn()
      }
    ]
  },
  parameters: {
    sekai: 'Miku',
    background: 'light',
    portal: true
  }
}

export const DefalutDark: Story = {
  args: {
    ...commonArgs,
    themeMode: 'dark',
    size: 'medium',
    buttons: [
      {
        text: 'Cancel',
        onClick: fn()
      },
      {
        text: 'OK',
        type: 'normal',
        onClick: fn()
      }
    ]
  },
  parameters: {
    sekai: 'Miku',
    background: 'dark',
    portal: true
  }
}
