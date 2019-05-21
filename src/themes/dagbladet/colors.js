import { darken, lighten } from 'polished';

const colorsToShade= {
	primary: '#d60000',
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
	brown: '#9a663f',
};

// Creates 4 shades of each color in colorsToShade
// For example: primary becomes primary, primaryDark, primaryLight and primaryLighter
const shadedColors = Object.keys(colorsToShade).map(color => ({
	[`${color}`]: colorsToShade[color],
	[`${color}Dark`]: darken(0.05, colorsToShade[color]),
	[`${color}Light`]: lighten(0.15, colorsToShade[color]),
	[`${color}Lighter`]: lighten(0.3, colorsToShade[color]),
}));

const combinedShadedColors = shadedColors.reduce((acc, cur) => Object.assign(acc, cur), {});

const colors = {
	grayTint: '#C0C0C0',
	grayTintLight: '#ECECEC',
	grayTintLightDark: '#C0C0C0',
	grayTintLighter: '#f3f3f3',
	grayTintDark: '#767676',

	white: '#fff',

	darkness: '#222222',
	darknessLight: '#453d3f',
	darknessLighter: '#342c2e',
	darknessDark: '#111111',

	link: '#3768c9',

	...combinedShadedColors,

	primaryDark: '#ab0000', // redefine shaded color primaryDark

	skinColors: {
		background: 'white',
		buttonBackground: 'grayTintLight',
		buttonColor: 'link',
		type: 'darkness',
		nativeAd: 'green',
		splashBackground: 'primary',
		splashText: 'white',
	},
};

export default colors;
