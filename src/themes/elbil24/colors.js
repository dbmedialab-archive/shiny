import { shadeColors } from '../../utils/shade-colors';

const colorsToShade= {
	primary: '#d23729',
	secondary: '#000',
	lightGrey: '#ecece8',
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
		splashBackground: 'secondary',
		splashText: 'primary',

		link: 'primary',
		linkVisited: 'primary',
	},
};

export default colors;
