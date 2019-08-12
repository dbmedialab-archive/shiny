import { shadeColors } from '../../utils/shade-colors';

const colorsToShade= {
	primary: 'black',
	secondary: '#999',
	pink: 'hotpink',
};

const shadeScheme = {
	dark: 0.1,
	light: 0.15,
	lighter: 0.3,
};

const combinedShadedColors = shadeColors(colorsToShade, shadeScheme);

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
