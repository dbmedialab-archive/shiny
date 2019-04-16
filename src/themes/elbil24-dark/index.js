import merge from 'deepmerge';
import { darken, lighten } from 'polished';
import elbil24 from '../elbil24';

const darkness = '#212325';

const colors = {
	type: '#ffffff',
	darkness,
	darknessDark: darken(0.2, darkness),
	darknessLight: lighten(0.15, darkness),
	darknessLighter: lighten(0.3, darkness),

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

const darkOverrides = {
	name: 'Elbil24 Dark',
	colors,
};

const theme = merge(elbil24, darkOverrides);

export default theme;
