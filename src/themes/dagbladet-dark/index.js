import merge from 'deepmerge';
import { darken, lighten } from 'polished';
import dagbladet from '../dagbladet';

const darkness = '#1c1d25';

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
	name: 'Dagbladet Dark',
	colors,
};

const theme = merge(dagbladet, darkOverrides);

export default theme;
