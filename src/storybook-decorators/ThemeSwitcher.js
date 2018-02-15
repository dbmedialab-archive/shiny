import React from 'react';
import {
	ThemeSwitcher,
	Grid,
} from '..';

const PaddedGrid = Grid.extend`
	padding-top: calc(2*${props => props.theme.variables.verticalBase});
	padding-bottom: calc(2*${props => props.theme.variables.verticalBase});
`;

const StorybookThemeSwitcher = stories => <ThemeSwitcher><PaddedGrid>{stories()}</PaddedGrid></ThemeSwitcher>;

export { StorybookThemeSwitcher };
