import { cssReset } from '../../utils/css-reset';

import colors from './colors';
import { fontSpecs } from './font-specs';

const variables = {
	mainFont: '"Open Sans", Helvetica, Arial, sans-serif',
	headingsFont: '"Didot 16 A", "Didot 16 B", Didot, "GFS Didot", Georgia, serif',

	uiWeight: 300,
	uiRegularSize: '1.6rem',
	uiRegularLineHeight: '2.4rem',
};

const global = `
	${fontSpecs}

	${cssReset}
`;

const theme = {
	name: 'KK',
	colors,
	global,
	variables,
};

export default theme;
