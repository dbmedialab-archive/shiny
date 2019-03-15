import { cssReset } from '../../utils/css-reset';

import colors from './colors';

const variables = {
	mainFont: '"Open Sans", Helvetica, Arial, sans-serif',
	headingsFont: '"Didot 16 A", "Didot 16 B", Didot, "GFS Didot", Georgia, serif',

	uiWeight: 300,
	uiRegularSize: '1.6rem',
	uiRegularLineHeight: '2.4rem',
};

const global = `
	@font-face {
		font-family: 'Didot';
		src: url('./fonts/didot-16a-300-italic') format('woff),
			 url('./fonts/didot-16a-300-normal') format('woff'),
			 url('./fonts/didot-16a-700-italic') format('woff'),
			 url('./fonts/didot-16a-700-normal') format('woff'),
			 url('./fonts/didot-16b-300-italic') format('woff),
			 url('./fonts/didot-16b-300-normal') format('woff'),
			 url('./fonts/didot-16b-700-italic') format('woff'),
			 url('./fonts/didot-16b-700-normal') format('woff');
	}
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800');

	${cssReset}
`;

const theme = {
	name: 'KK',
	colors,
	global,
	variables,
};

export default theme;
