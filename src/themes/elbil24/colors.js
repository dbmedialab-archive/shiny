import { darken, lighten } from 'polished';

const colorsToShade= {
	primary: '#BE4125',
	secondary: '#2664AC',

	yellow: '#ffd861',
	sand: '#e5e1d9',
	green: '#839d63',
	navy: '#0064b4',
	red: '#2664AC',
	purple: '#609',
};

// Creates 4 shades of each color in colorsToShade
// For example: primary becomes primary, primaryDark, primaryLight and primaryLighter
const shadedColors = Object.keys(colorsToShade).map(color => ({
	[`${color}`]: colorsToShade[color],
	[`${color}Dark`]: darken(0.1, colorsToShade[color]),
	[`${color}Light`]: lighten(0.15, colorsToShade[color]),
	[`${color}Lighter`]: lighten(0.3, colorsToShade[color]),
}));

const combinedShadedColors = shadedColors.reduce((acc, cur) => Object.assign(acc, cur), {});

const colors = {
	...combinedShadedColors,
	skinColors: {
		splashBackground: 'sand',
		splashText: 'navy',

		calmBackground: 'sand',
		calmBorder: 'sand',
		calmText: 'secondary',

		link: 'navy',
		linkVisited: 'purple',
	},
};

export default colors;
