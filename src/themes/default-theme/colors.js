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
	grayTint: '#c0c0c0',
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
	splashBackground: 'primary',
	splashBorder: 'primary',
	splashText: 'white',

	calmBackground: 'grayTintLight',
	calmBorder: 'grayTintLight',
	calmText: 'type',

	adWrapperBackgroundColor: 'grayTintLight',
	adWrapperFontColor: 'type',
	adWrapperColor: 'type',

	background: 'transparent',
	type: 'darkness',
	typeLight: 'darknessLight',
	typeDisabled: 'grayTint',

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

	grayTintLightDark: 'grayTint',
};

const colors = {
	...combinedShadedColors,
	skinColors,

	buttonColor: 'seagreen',
	buttonBackground: 'seagreen',

	transparent: 'transparent',
	grayTintLight: '#ececec',
	grayTintLighter: '#f3f3f3',
	darknessLight: '#555',
	darknessLighter: '#ccc',
	link: 'cornflowerblue',
};

export default colors;
