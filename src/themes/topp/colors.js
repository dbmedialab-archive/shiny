import { shadeColors } from '../../utils/shade-colors';

const colorsToShade= {
	primary: '#ff1c56',
	secondary: '#0000ff',
};

const shadeScheme = {
	dark: 0.1,
	light: 0.15,
	lighter: 0.3,
};

const combinedShadedColors = shadeColors(colorsToShade, shadeScheme);

const colors = {
	...combinedShadedColors,
	skinColors: {},
};

export default colors;
