import React from 'react';
import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import Palette from './Palette';
import ThemeVariables from './ThemeVariables';

// import { StorybookThemeSwitcher } from '../../src/storybook-decorators/ThemeSwitcher';

// addDecorator(StorybookThemeSwitcher);

export default () => {
	storiesOf('Welcome', module)
		.addDecorator(StorybookPaddedGrid)

		.add('Palette', () => <Palette />)
		.add('Theme Variables', () => <ThemeVariables />);
};
