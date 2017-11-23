import { darken, lighten } from 'polished';

const colorsToShade= {
	primary: '#0000ff',
	secondary: '#ECECEC',
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
	sand: '#e5e1d9',
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
	type: '#222222',
	typeLight: '#555555',
	typeDisabled: '#ccc',

	grayTint: '#C0C0C0',
	grayTintLight: '#ECECEC',
	grayTintLightDark: '#C0C0C0',
	grayTintDark: '#767676',

	white: '#fff',
	darkness: '#222222',
	darknessLight: '#453d3f',

	button: {
		background: '#ececec',
		color: '#333333',
	},

	...combinedShadedColors,

	skinColors: {
		splashBackground: 'orange',
		splashText: 'purple',

		calmBackground: 'grayTintLight',
		calmBorder: 'grayTintLight',
		calmText: 'type',

		nativeAd: 'orange',
		sport: 'green',
		helse: 'blue',
		reise: 'purple',
		mat: 'orange',
		bolig: 'brown',
		motor: 'yellow',
		underholdning: 'pink',
		meninger: 'teal',
		redaksjonenanbefaler: 'burgundy',
		anbefalt: 'burgundy',

		solRed: 'primary',
		solBlue: 'secondary',
		primary: 'primary',
		secondary: 'secondary',
	},
};

export default colors;
