import { cssReset } from '../../utils/css-reset';

import colors from './colors';

const variables = {
	mainFont: "'Open Sans', helvetica, arial, sans-serif",
	headingsFont: "'Open Sans', helvetica, arial, sans-serif",
};

const global = `
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');

	${cssReset}
`;

const theme = {
	name: 'Elbil24',
	global,
	colors,
	variables,
};

export default theme;
