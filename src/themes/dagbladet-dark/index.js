import merge from 'deepmerge';
import dagbladet from '../dagbladet';

import { shadeColors } from '../../utils/shade-colors';

const colorsToShade = { darkness: '#1c1d25' };

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

		adWrapperFontColor: 'grayTintDark',
		splashBackground: 'primaryDark',
		splashText: 'white',

		calmBackground: 'darknessLight',
		calmText: 'type',
		link: 'type',
	},
};

const colors = Object.assign(shadedColors, colorsBase);

const darkOverrides = {
	name: 'Dagbladet Dark',
	colors,
};

const theme = merge(dagbladet, darkOverrides);

export default theme;
