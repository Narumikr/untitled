import { create } from '@storybook/theming/create'

export default create({
  base: 'light',

  brandTitle: 'Untitled library',
  brandUrl: './',
  // brandImage: '',
  brandTarget: '_self',

  colorPrimary: '#33ccba',
  colorSecondary: '#33aaee',

  appBg: '#33aaee1a',
  appContentBg: '#f5f5f7',
  appPreviewBg: '#f5f5f7',
  appBorderColor: '#33aaee1a',
  appBorderRadius: 4,

  textColor: '#333333',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#666666',

  barTextColor: '#999999',
  barSelectedColor: '#33aaee',
  barHoverColor: '#ffc800',
  barBg: '#33aaee1a',

  inputBg: '#FFFFFF',
  inputBorder: '#E6E6E6',
  inputTextColor: '#333333',
  inputBorderRadius: 4,

  buttonBg: '#F6F9FC',
  buttonBorder: '#E6E6E6',

  booleanBg: '#F6F9FC',
  booleanSelectedBg: '#E6E6E6',
})
