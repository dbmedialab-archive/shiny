import { shadeColors, defaultShadeScheme } from '../../utils/shade-colors';

const colorsToShade= {
	primary: 'black',
	secondary: '#999',
	pink: 'hotpink',
};

const shadeScheme = {
	dark: 0.1,
};

const shades = Object.assign({}, defaultShadeScheme, shadeScheme);

const combinedShadedColors = shadeColors(colorsToShade, shades);

const colors = {
	...combinedShadedColors,
	skinColors: {
		splashBackground: 'white',
		splashText: 'primary',
		background: 'white',

		calmBackground: 'white',
		calmBorder: 'primary',
		calmText: 'type',
	},
};

export default colors;
