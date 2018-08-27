import React from 'react';
import { storiesOf } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import Welcome from './Welcome';
import Themes from './Themes';
import Palette from './Palette';
import ThemeVariables from './ThemeVariables';

// import { StorybookThemeSwitcher } from '../../src/storybook-decorators/ThemeSwitcher';

// addDecorator(StorybookThemeSwitcher);

export default () => {
	storiesOf('Welcome', module)
		.addDecorator(StorybookPaddedGrid)

		.add('Everything\'s shiny', () => <Welcome />)
		.add('Themes', () => <Themes />)
		.add('Palette', () => <Palette />)
		.add('Theme Variables', () => <ThemeVariables />);
};
