import { darken, lighten } from 'polished';

const colorsToShade= {
	primary: '#ff790a',
	secondary: '#0096a3',
	grey: '#7a7a7a',
	darkGrey: '#4a4a4a',
	darkness: '#333333',
	white: '#ffffff',
	red: '#ff5500',
	sand: '#f8f8f1',
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

const skinColors = {
	type: 'darkness',
	typeLight: 'darknessLight',
	typeLighter: 'darknessLighter',
	typeDark: 'darknessDark',
};

export default {
	...combinedShadedColors,
	skinColors,
};
