import { shadeColors } from '../../utils/shade-colors';

const colorsToShade = {
	primary: '#7a9a26',
	secondary: '#313131',
	darkness: '#222',
	pageBackground: '#f9f9f9',
};

const shadeScheme = {
	dark: 0.2,
	light: 0.15,
	lighter: 0.3,
};

const combinedShadedColors = shadeColors(colorsToShade, shadeScheme);

const skinColors = {
	type: 'darkness',
	background: 'pageBackground',
};

export default {
	...combinedShadedColors,
	skinColors,
};
