import { darken, lighten } from 'polished';

const colorsToShade= {
	primary: '#064163',
	secondary: '#D5EAEF',

	yellow: '#ffd861',
	sand: '#e5e1d9',
	gray: '#C0C0C0',
	teal: '#077F8C',
	dark: '#666666',
	green: '#839d63',
	darkness: '#333333',
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
		splashBackground: 'primary',
		splashText: 'secondary',
		background: 'white',
		link: 'secondary',
		type: 'darkness',
	},
};

export default colors;
