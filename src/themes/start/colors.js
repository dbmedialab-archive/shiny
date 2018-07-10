import { darken, lighten } from 'polished';

const colorsToShade = {
	// Brand colors
	primary: '#313131',
	secondary: '#7a9a26',

	grayTint: '#eee',
};

// Creates 4 shades of each color in colorsToShade
// For example: primary becomes primary, primaryDark, primaryLight and primaryLighter
const shadedColors = Object.keys(colorsToShade).map(color => ({
	[`${color}`]: colorsToShade[color],
	[`${color}Dark`]: darken(0.2, colorsToShade[color]),
	[`${color}Light`]: lighten(0.15, colorsToShade[color]),
	[`${color}Lighter`]: lighten(0.3, colorsToShade[color]),
}));

export default {
	...shadedColors,
};
