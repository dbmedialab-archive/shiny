import { darken, lighten } from 'polished';

import { cssReset } from '../../utils/css-reset';

import { flexboxgrid } from './flexboxgrid';
import { variables } from './variables';

const colorsToShade= {
	primary: '#2d2d2d',
	secondary: '#e7e7e7',
	tertiary: '#222222',

	black: '#222222',
	darkness: '#272727',
};
// Creates 4 shades of each color in colorsToShade
// For example: primary becomes primary, primaryDark, primaryLight and primaryLighter
const shadedColors = Object.keys(colorsToShade).map(color => ({
	[`${color}`]: colorsToShade[color],
	[`${color}Dark`]: darken(0.2, colorsToShade[color]),
	[`${color}Light`]: lighten(0.15, colorsToShade[color]),
	[`${color}Lighter`]: lighten(0.3, colorsToShade[color]),
}));

const combinedShadedColors = shadedColors.reduce((acc, cur) => Object.assign(acc, cur), {});

const colors = {

	...combinedShadedColors,

	skinColors: {
		type: 'darkness',
		splashBackground: 'primary',
		splashBorder: 'darkness',
		splashText: 'white',
		calmBackground: 'grayTintLight',
		calmBorder: 'darkness',
		calmText: 'tertiary',
	},
};

const global = `
	${cssReset}
`;

export default {
	name: 'Aller',
	flexboxgrid,
	colors,
	global,
	variables,
};
