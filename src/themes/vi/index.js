import { cssReset } from '../../utils/css-reset';

import colors from './colors';

const variables = {
	mainFont: "'Avenir', helvetica, arial, sans-serif",
	headingsFont: "'Avenir', helvetica, arial, sans-serif",
	uiFont: "'Avenir', helvetica, arial, sans-serif",

	headingsWeight: 700,

	uiRegularSize: '1.6rem',
	uiRegularLineHeight: '2.4rem',
};

const global = `
	@font-face {
		font-family: 'Avenir';
		font-style: normal;
		font-weight: 400;
		src: url('https://styleguide.vi.no/fonts/363CCF_2_0.woff2') format('woff2');
	}
	@font-face {
		font-family: 'Avenir';
		font-style: normal;
		font-weight: 700;
		src: url('https://styleguide.vi.no/fonts/363CCF_4_0.woff2') format('woff2');
	}

	${cssReset}
`;

const theme = {
	name: 'Vi',
	global,
	colors,
	variables,
};

export default theme;
