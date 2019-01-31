import { darken, lighten } from 'polished';

const colorsToShade= {
	primary: '#d23729',
	secondary: '#000',
	lightGrey: '#ecece8',
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
		splashBackground: 'secondary',
		splashText: 'primary',

		link: 'primary',
		linkVisited: 'primary',
	},
};

export default colors;
