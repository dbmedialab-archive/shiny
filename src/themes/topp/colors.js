import { shadeColors, defaultShadeScheme } from '../../utils/shade-colors';

const colorsToShade= {
	primary: '#ff1c56',
	secondary: '#0000ff',
};

const shadeScheme = {
	dark: 0.1,
};

const shades = Object.assign({}, defaultShadeScheme, shadeScheme);

const combinedShadedColors = shadeColors(colorsToShade, shades);

const colors = {
	...combinedShadedColors,
	skinColors: {},
};

export default colors;
