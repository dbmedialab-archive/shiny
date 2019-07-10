import { cssReset } from '../../utils/css-reset';

import colors from './colors';

const variables = {
	mainFont: "'Open Sans', helvetica, arial, sans-serif",
	headingsFont: "'Open Sans', helvetica, arial, sans-serif",
	uiFont: "'Open Sans', helvetica, arial, sans-serif",

	headingsWeight: 800,

	uiRegularSize: '1.6rem',
	uiRegularLineHeight: '2.4rem',
};

const global = `
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&display=optional');

	${cssReset}

	a {
		color: ${colors.skinColors.link};
		text-decoration: underline;
		line-height: inherit;
	}
`;

const theme = {
	name: 'DinSide',
	global,
	colors,
	variables,
};

export default theme;
