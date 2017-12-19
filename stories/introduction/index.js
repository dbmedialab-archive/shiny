import React from 'react';
// import { storiesOf, addDecorator } from '@storybook/react';
import { storiesOf } from '@storybook/react';

import Palette from './Palette';

// import { StorybookThemeSwitcher } from '../../src/storybook-decorators/ThemeSwitcher';

// addDecorator(StorybookThemeSwitcher);

export default () => {
	storiesOf('Welcome', module)

		.add('Palette', () => <Palette />);
};
