import merge from 'deepmerge';
import elbil24 from '../elbil24';

import { shadeColors } from '../../utils/shade-colors';

const colorsToShade = { darkness: '#212325' };

const shadeScheme = {
	dark: 0.2,
	light: 0.15,
	lighter: 0.3,
};

const shadedColors = shadeColors(colorsToShade, shadeScheme);

const colorsBase = {
	type: '#ffffff',
	skinColors: {
		background: 'darkness',
		type: 'type',
		typeLight: 'grayTint',
		typeLighter: 'grayTintDark',
		typeDisabled: 'darknessLighter',

		splashBackground: 'primaryDark',
		splashText: 'white',

		calmBackground: 'darknessLight',
		calmText: 'type',
		link: 'type',
	},
};

const colors = Object.assign(shadedColors, colorsBase);

const darkOverrides = {
	name: 'Elbil24 Dark',
	colors,
};

const theme = merge(elbil24, darkOverrides);

export default theme;
