import { shadeColors } from '../../utils/shade-colors';

import { cssReset } from '../../utils/css-reset';

import { variables } from './variables';
import { flexboxgrid } from './flexboxgrid';

const colorsToShade= {
	primary: '#e3000b',
	secondary: '#f1ca3f',
	tertiary: '#222222',

	yellow: '#f1ca3f',
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
	grayTint: '#C0C0C0',
	grayTintLight: '#ECECEC',
	grayTintLightDark: '#C0C0C0',
	grayTintDark: '#767676',

	...combinedShadedColors,

	skinColors: {
		type: 'darkness',
		background: 'white',
		splashBackground: 'primary',
		splashBorder: 'darkness',
		adWrapperFontColor: 'grayTintDark',
		splashText: 'white',
		calmBackground: 'grayTintLight',
		calmBorder: 'darkness',
		calmText: 'tertiary',
	},
};

const global = `
	@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=fallback');

	${cssReset}
`;

export default {
	name: 'SeHer',
	colors,
	flexboxgrid,
	global,
	variables,
};
