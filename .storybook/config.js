import { configure, getStorybook, setAddon } from '@storybook/react';
import createPercyAddon from '@percy-io/percy-storybook';

const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);

serializeStories(getStorybook);
