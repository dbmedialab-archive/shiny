import {
	configure,
	getStorybook,
	setAddon,
 } from '@storybook/react';

import createPercyAddon from '@percy-io/percy-storybook';
import { setDefaults } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import { addDecorator } from '@storybook/react';

import { StorybookThemeSwitcher } from '../src/storybook-decorators/ThemeSwitcher';

addDecorator(StorybookThemeSwitcher);

setDefaults({
	header: true,
	inline: true,
	source: true,
	styles: style => ({
		...style,
		infoBody: {
			...style.infoBody,
			border: 'none',
			boxShadow: 'none',
		},
		jsxInfoContent: {
			...style.jsxInfoContent,
			borderTop: 'none',
		},
		header: {
			...style.header,
			body: {
				...style.header.body,
				borderBottom: 'none'
			}
		},
		source: {
			...style.source,
			h1: {
				...style.source.h1,
				borderBottom: 'none',
			}
		}
	})
})

addDecorator(
	withOptions(
		{
			hierarchyRootSeparator: /\|/,
			name: 'Shiny',
			url: 'https://dbmedialab.github.io/shiny/',
		}
	)
)

const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);

serializeStories(getStorybook);
