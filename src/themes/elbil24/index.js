import { cssReset } from '../../utils/css-reset';

import colors from './colors';

const variables = {
	mainFont: "'Barlow', sans-serif",
	headingsFont: "'Barlow', sans-serif",
	uiFont: "'Barlow', sans-serif",
	uiWeightBold: 800,
};

const global = `
	@import url('https://fonts.googleapis.com/css?family=Barlow:400,600,800,800i&display=fallback');

	${cssReset}
`;

const theme = {
	name: 'Elbil24',
	global,
	colors,
	variables,
};

export default theme;
