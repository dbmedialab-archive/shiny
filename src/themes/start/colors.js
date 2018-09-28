import { darken, lighten } from 'polished';

const colorsToShade = {
	primary: '#7a9a26',
	secondary: '#313131',
	darkness: '#222',
	pageBackground: '#f9f9f9',
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
	background: 'pageBackground',
};

export default {
	...combinedShadedColors,
	skinColors,
};
