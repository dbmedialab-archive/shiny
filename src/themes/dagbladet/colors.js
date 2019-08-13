import { shadeColors, defaultShadeScheme } from '../../utils/shade-colors';

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

const shadeScheme = {
	dark: 0.05,
};

const shades = Object.assign({}, defaultShadeScheme, shadeScheme);

const combinedShadedColors = shadeColors(colorsToShade, shades);

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
