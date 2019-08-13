import { shadeColors } from '../../utils/shade-colors';

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

const combinedShadedColors = shadeColors(colorsToShade);

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

	buttonColor: 'link',
	buttonBackground: 'link',

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

	transparent: 'transparent',
	grayTintLight: '#ececec',
	grayTintLighter: '#f3f3f3',
	darknessLight: '#555',
	darknessLighter: '#ccc',
	link: '#3768c9',
};

export default colors;
