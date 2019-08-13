import { shadeColors } from '../../utils/shade-colors';

const colorsToShade = {
	primary: '#7a9a26',
	secondary: '#313131',
	darkness: '#222',
	pageBackground: '#f9f9f9',
};

const combinedShadedColors = shadeColors(colorsToShade);

const skinColors = {
	type: 'darkness',
	background: 'pageBackground',
};

export default {
	...combinedShadedColors,
	skinColors,
};
