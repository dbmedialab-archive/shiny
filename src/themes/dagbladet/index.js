import { cssReset } from '../../utils/css-reset';

import colors from './colors';

const variables = {
	mainFont: '"Roboto","Helvetica",Helvetica,Arial,sans-serif',
	headingsFont: '"Roboto","Helvetica",Helvetica,Arial,sans-serif',

	uiWeight: 300,

	uiRegularSize: '1.6rem',
	verticalBase: '2.5rem',
};

const global = `
	@import url('https://fonts.googleapis.com/css?family=Roboto:300,700,800');

	${cssReset}
`;

const theme = {
	name: 'Dagbladet',
	global,
	colors,
	variables,
};

export default theme;
