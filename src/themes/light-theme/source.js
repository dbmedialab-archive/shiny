import { darken, lighten } from 'polished';

import { cssReset } from '../../utils/css-reset';

const variables = {
	mainFont: '"Roboto","Helvetica",Helvetica,Arial,sans-serif',
	headingsFont: '"Roboto","Helvetica",Helvetica,Arial,sans-serif',
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

// Creates 4 shades of each color in colorsToShade
// For example: primary becomes primary, primaryDark, primaryLight and primaryLighter
const shadedColors = Object.keys(colorsToShade).map(color => ({
	[`${color}`]: colorsToShade[color],
	[`${color}Dark`]: darken(0.2, colorsToShade[color]),
	[`${color}Light`]: lighten(0.15, colorsToShade[color]),
	[`${color}Lighter`]: lighten(0.3, colorsToShade[color]),
}));

const combinedShadedColors = shadedColors.reduce((acc, cur) => Object.assign(acc, cur), {});

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
	@import url('https://fonts.googleapis.com/css?family=Roboto:300,700,800');

	${cssReset}

`;

const theme = {
	name: 'Light Theme',
	global,
	colors,
	variables,
	flexboxgrid: {},
};

console.log(theme);
