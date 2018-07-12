import { cssReset } from '../../utils/css-reset';

import colors from './colors';
import variables from './variables';

const global = `
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:400');

	${cssReset}

	body {
		color: ${colors[colors.skinColors.type]};
		font-family: ${variables.mainFont};
		font-size: ${variables.uiRegularSize};
		line-height: ${variables.uiRegularLineHeight};
		background-color: ${colors[colors.skinColors.background]};
	}
`;

export default {
	name: 'Start',
	global,
	colors,
	variables,
};
