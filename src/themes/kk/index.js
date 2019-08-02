import { cssReset } from '../../utils/css-reset';

import colors from './colors';

const variables = {
	mainFont: '"Open Sans", Helvetica, Arial, sans-serif',
	headingsFont: '"Playfair Display", Georgia, serif',
	uiFont: '"Open Sans", Helvetica, Arial, sans-serif',

	uiWeight: 300,
	uiRegularSize: '1.6rem',
	uiRegularLineHeight: '2.4rem',
};

const global = `
	@import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i&display=fallback');
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&display=fallback');

	${cssReset}
`;

const theme = {
	name: 'KK',
	colors,
	global,
	variables,
};

export default theme;
