import { COLORS_SEKAI_KEYS } from '@/styles/sekai-colors';

import { Color } from './Color';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Untitled/Color',
  component: Color,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    sekai: {
      description: 'What SEKAI color to use',
      table: {
        type: { summary: 'ColorsSekaiKey' }
      },
      control: { type: 'select' },
      options: [...Object.keys(COLORS_SEKAI_KEYS)]
    }
  },
  args: {}
} satisfies Meta<typeof Color>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SEKAIColor: Story = {
  args: {
    sekai: 'Miku'
  },
  parameters: {
    sekai: 'Miku',
    background: 'light'
  }
};

export const SEKAIColorDark: Story = {
  args: {
    sekai: 'Miku'
  },
  parameters: {
    sekai: 'Miku',
    background: 'dark'
  }
};
