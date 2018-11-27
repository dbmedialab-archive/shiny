import React from 'react';
import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import Welcome from './Welcome';
import Themes from './Themes';
import Palette from './Palette';
import ThemeVariables from './ThemeVariables';

export default () => {
	storiesOf('Everything\'s shiny|Welcome', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Welcome', () => <Welcome />);

	storiesOf('Everything\'s shiny|Themes', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Themes', () => <Themes />);

	storiesOf('Everything\'s shiny|Colors', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Palette', () => <Palette />);

	storiesOf('Everything\'s shiny|Theme Variables', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Theme Variables', () => <ThemeVariables />);
};
