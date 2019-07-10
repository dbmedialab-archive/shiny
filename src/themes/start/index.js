import { cssReset } from '../../utils/css-reset';

import colors from './colors';
import variables from './variables';

const global = `
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:400&display=optional');

	${cssReset}
`;

export default {
	name: 'Start',
	global,
	colors,
	variables,
};
