import React from 'react';
import {
	ThemeSwitcher,
	Grid,
} from '..';

const StorybookThemeSwitcher = stories => <ThemeSwitcher><Grid>{stories()}</Grid></ThemeSwitcher>;

export { StorybookThemeSwitcher };
