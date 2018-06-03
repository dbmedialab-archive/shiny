import {
	configure,
	getStorybook,
	setAddon,
 } from '@storybook/react';

import createPercyAddon from '@percy-io/percy-storybook';
import { setDefaults } from '@storybook/addon-info';
import { addDecorator } from '@storybook/react';

import { StorybookThemeSwitcher } from '../src/storybook-decorators/ThemeSwitcher';

addDecorator(StorybookThemeSwitcher);

setDefaults({
	header: true,
	inline: true,
	source: true
})

const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);

serializeStories(getStorybook);


