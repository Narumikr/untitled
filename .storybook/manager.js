import { addons } from '@storybook/manager-api'

import untitledTheme from './untitledTheme'
import './storybook.css'

addons.setConfig({
  theme: untitledTheme,
  sidebar: {
    showRoots: true,
  },
  // initialPath: 'docs',
})
