import { darken, lighten } from 'polished';

const colorsToShade= {
	primary: 'teal',
	secondary: 'darkgoldenrod',
	pink: 'palevioletred',
	purple: 'darkorchid',
	blue: 'cornflowerblue',
	teal: 'teal',
	green: 'seagreen',
	yellow: 'darkgoldenrod',
	orange: 'chocolate',
	navy: 'navy',
	burgundy: '#9f1d35',
	brown: 'saddlebrown',
	sand: '#c2b280',
	white: '#fff',
	darkness: '#222222',
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
	transparent: 'transparent',
	type: '#222222',
	typeLight: '#555555',
	typeDisabled: '#ccc',

	grayTint: '#C0C0C0',
	grayTintLight: '#ECECEC',
	grayTintLighter: '#f3f3f3',
	grayTintLightDark: '#C0C0C0',
	grayTintDark: '#767676',

	button: {
		background: '#ececec',
		color: '#333333',
	},

	link: 'cornflowerblue',

	...combinedShadedColors,

	skinColors: {
		splashBackground: 'primary',
		splashBorder: 'primary',
		splashText: 'white',

		calmBackground: 'grayTintLight',
		calmBorder: 'grayTintLight',
		calmText: 'type',

		adWrapperBackgroundColor: 'grayTintLight',
		adWrapperFontColor: 'type',
		adWrapperColor: 'type',

		heading: 'type',

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
		transparent: 'transparent',
	},
};

export default colors;
