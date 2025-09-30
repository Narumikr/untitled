import { addons } from '@storybook/manager-api'

import untitledTheme from './untitledTheme'

addons.setConfig({
  theme: untitledTheme,
  sidebar: {
    showRoots: true,
  },
  // initialPath: 'docs',
})
