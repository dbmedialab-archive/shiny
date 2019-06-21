import { cssReset } from '../../utils/css-reset';

import colors from './colors';

const variables = {
	mainFont: '"Roboto","Helvetica",Helvetica,Arial,sans-serif',
	headingsFont: '"Roboto","Helvetica",Helvetica,Arial,sans-serif',
	uiFont: '"Roboto","Helvetica",Helvetica,Arial,sans-serif',

	uiWeight: 300,

	uiRegularSize: '1.6rem',
	uiRegularLineHeight: '2.4rem',
	uiSmallSize: '1.4rem',
	uiSmallLineHeight: '1.6rem',
};

const global = `
	@import url('https://fonts.googleapis.com/css?family=Roboto:300,700,800');

	${cssReset}
`;

const theme = {
	name: 'Dagbladet',
	flexboxgrid: {
		container: {
			sm: 75.3, // rem
			md: 101.0, // rem
		},
	},
	global,
	colors,
	variables,
};

export default theme;
