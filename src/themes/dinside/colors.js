import { darken, lighten } from 'polished';

const colorsToShade= {
	primary: '#cc3612',
	secondary: '#0064b4',
	pink: '#F35D67',
	purple: '#5C3393',
	blue: '#23ACCC',
	teal: '#569091',
	green: '#8ABA56',
	yellow: '#F1CA3F',
	orange: '#E87E0A',
	navy: '#1C1837',
	burgundy: '#862547',
	brown: '#9a663f', // borrowed sols brown
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
};

export default colors;
