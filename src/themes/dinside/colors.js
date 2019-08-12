import { shadeColors } from '../../utils/shade-colors';

const colorsToShade= {
	primary: '#BE4125',
	secondary: '#2664AC',

	yellow: '#ffd861',
	sand: '#e5e1d9',
	green: '#839d63',
	navy: '#0064b4',
	red: '#2664AC',
	purple: '#609',
	floralWhite: '#fbf8f3',
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
		splashBackground: 'sand',
		splashText: 'navy',
		background: 'floralWhite',

		calmBackground: 'sand',
		calmBorder: 'sand',
		calmText: 'secondary',

		link: 'navy',
		linkVisited: 'purple',
	},
};

export default colors;
