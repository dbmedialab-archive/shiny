import { merge } from 'aurora-deep-slice-merge';
import dagbladet from '../dagbladet';

const colors = merge(dagbladet.colors, {
	type: '#efefef',

	skinColors: Object.assign({}, dagbladet.colors.skinColors, {
		background: 'darkness',
		type: 'type',
		typeLight: 'grayTint',
		typeLighter: 'grayTintDark',
		typeDisabled: 'darknessLighter',

		splashBackground: 'primaryDark',
		splashText: 'white',
	}),
});

const theme = {
	name: 'Dagbladet Dark',
	colors,
};

export default theme;
