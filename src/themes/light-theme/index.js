import { shadeColors } from '../../utils/shade-colors';

import { cssReset } from '../../utils/css-reset';

const variables = {
	mainFont: '"Roboto","Helvetica",Helvetica,Arial,sans-serif',
	headingsFont: '"Roboto","Helvetica",Helvetica,Arial,sans-serif',
	uiFont: '"Roboto","Helvetica",Helvetica,Arial,sans-serif',

	headingsWeight: 300,

	uiRegularSize: '1.6rem',
	uiRegularLineHeight: '2.4rem',
};

const colorsToShade = {
	primary: '#333',
	secondary: '#f8f8f8',

	blue: '#185bd3',
	type: '#666',

	pink: '#444',
	purple: '#444',
	teal: '#444',
	green: '#444',
	yellow: '#444',
	orange: '#444',
	navy: '#444',
	burgundy: '#444',
	brown: '#444',
	sand: '#444',
};

const shadeScheme = {
	dark: 0.2,
	light: 0.15,
	lighter: 0.3,
};

const combinedShadedColors = shadeColors(colorsToShade, shadeScheme);

const skinColors = {
	splashBackground: 'primary',
	splashBorder: 'primary',
	splashText: 'white',

	calmBackground: 'secondary',
	calmBorder: 'secondary',
	calmText: 'type',

	heading: 'primary',

	type: 'type',
};

const colors = {
	...combinedShadedColors,
	skinColors,
	link: '#185bd3',
};

const global = `
	@import url('https://fonts.googleapis.com/css?family=Roboto:300,700,800&display=fallback');

	${cssReset}

`;

export default {
	name: 'Light Theme',
	global,
	colors,
	variables,
	flexboxgrid: {},
};
