import { shadeColors } from '../../utils/shade-colors';

const colorsToShade= {
	primary: '#ff790a',
	secondary: '#0096a3',
	grey: '#7a7a7a',
	darkGrey: '#4a4a4a',
	darkness: '#333333',
	white: '#ffffff',
	red: '#ff5500',
	sand: '#f8f8f1',
};

const shadeScheme = {
	dark: 0.2,
	light: 0.15,
	lighter: 0.3,
};

const combinedShadedColors = shadeColors(colorsToShade, shadeScheme);

const skinColors = {
	type: 'darkness',
	typeLight: 'darknessLight',
	typeLighter: 'darknessLighter',
	typeDark: 'darknessDark',
};

export default {
	...combinedShadedColors,
	skinColors,
};
