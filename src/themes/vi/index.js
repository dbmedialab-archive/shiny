import { cssReset } from '../../utils/css-reset';

import colors from './colors';

const variables = {
	mainFont: "'Avenir', helvetica, arial, sans-serif",
	headingsFont: "'Avenir', helvetica, arial, sans-serif",
	headingsWeight: 700,

	uiRegularSize: '1.6rem',
	uiRegularLineHeight: '2.4rem',
};

const global = `
	@import url('https://fonts.googleapis.com/css?family=Avenir:400,700');

	${cssReset}
`;

const theme = {
	name: 'Vi',
	global,
	colors,
	variables,
};

export default theme;
