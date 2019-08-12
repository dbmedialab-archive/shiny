import { shadeColors } from '../../utils/shade-colors';

import { cssReset } from '../../utils/css-reset';

import { flexboxgrid } from './flexboxgrid';
import { variables } from './variables';

const colorsToShade= {
	primary: '#2d2d2d',
	secondary: '#e7e7e7',
	tertiary: '#222222',

	black: '#222222',
	darkness: '#272727',
};

const shadeScheme = {
	dark: 0.2,
	light: 0.15,
	lighter: 0.3,
};

const combinedShadedColors = shadeColors(colorsToShade, shadeScheme);

const colors = {

	...combinedShadedColors,

	skinColors: {
		type: 'darkness',
		splashBackground: 'primary',
		splashBorder: 'darkness',
		splashText: 'white',
		calmBackground: 'grayTintLight',
		calmBorder: 'darkness',
		calmText: 'tertiary',
	},
};

const global = `
	${cssReset}
`;

export default {
	name: 'Aller',
	flexboxgrid,
	colors,
	global,
	variables,
};
