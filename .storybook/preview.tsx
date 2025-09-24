import React from 'react';

import { CustomDocsContainer } from './CustomDocsContainer';
import { CustomDocsDecorators } from './CustomDocsDecorators';

import type { Preview, StoryContext, StoryFn } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: 'centered',
    docs: {
      container: CustomDocsContainer
    }
  },
  decorators: [
    (Story: StoryFn, context: StoryContext) => {
      return <CustomDocsDecorators story={Story} context={context} />;
    }
  ]
};

export default preview;
