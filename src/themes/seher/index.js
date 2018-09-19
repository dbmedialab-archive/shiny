import { darken, lighten } from 'polished';

import { cssReset } from '../../utils/css-reset';

import { variables } from './variables';
import { flexboxgrid } from './flexboxgrid';

const colorsToShade= {
	primary: '#e3000b',
	secondary: '#f1ca3f',
	tertiary: '#222222',

	yellow: '#f1ca3f',
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
	grayTint: '#C0C0C0',
	grayTintLight: '#ECECEC',
	grayTintLightDark: '#C0C0C0',
	grayTintDark: '#767676',

	...combinedShadedColors,

	skinColors: {
		type: 'darkness',
		splashBackground: 'white',
		splashBorder: 'darkness',
		splashText: 'darkness',
		calmBackground: 'grayTintLight',
		calmBorder: 'darkness',
		calmText: 'tertiary',
	},
};

const global = `
	@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,800');

	${cssReset}
`;

export default {
	name: 'SeHer',
	colors,
	flexboxgrid,
	global,
	variables,
};
