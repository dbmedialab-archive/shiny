import { cssReset } from '../../utils/css-reset';

import colors from './colors';

const variables = {
	mainFont: "'Barlow', helvetica, arial, sans-serif",
	headingsFont: "'Barlow', helvetica, arial, sans-serif",
};

const global = `
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
	@import url('https://fonts.googleapis.com/css?family=Barlow:400,600,800');

	${cssReset}
`;

const theme = {
	name: 'Elbil24',
	global,
	colors,
	variables,
};

export default theme;
