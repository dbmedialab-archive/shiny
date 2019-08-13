import { shadeColors, defaultShadeScheme } from '../../utils/shade-colors';

const colorsToShade= {
	primary: '#d23729',
	secondary: '#000',
	lightGrey: '#ecece8',
};

const shadeScheme = {
	dark: 0.1,
};

const shades = Object.assign({}, defaultShadeScheme, shadeScheme);

const combinedShadedColors = shadeColors(colorsToShade, shades);

const colors = {
	...combinedShadedColors,
	skinColors: {
		splashBackground: 'secondary',
		splashText: 'primary',

		link: 'primary',
		linkVisited: 'primary',
	},
};

export default colors;
