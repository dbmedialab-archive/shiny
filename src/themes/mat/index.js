import { stripUnit } from 'polished';

import { cssReset } from '../../utils/css-reset';

import colors from './colors';
import variables from './variables';

const global = `
	@import url('https://fonts.googleapis.com/css?family=Ubuntu|Cabin:400,700');

	${cssReset}

	body {
		color: ${colors[colors.skinColors.type]};
		font-family: ${variables.mainFont};
		font-size: ${variables.uiRegularSize};
		line-height: ${variables.uiRegularLineHeight};
	}
`;

const theme = {
	name: 'Oppskrift',
	global,
	colors,
	variables,

	flexboxgrid: {
		gutterWidth: stripUnit(variables.horizontalBase), // rem
		outerMargin: 2, // rem
		container: {
			sm: 71, // rem
			md: 100.0, // rem
			lg: 110.0,  // rem
		},
		breakpoints: {
			xs: 0,  // em
			sm: 48, // em 768px
			md: 75, // em 1200px
			lg: 90,  // em 1440px
		},
	},
};

export default theme;
