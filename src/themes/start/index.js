import { cssReset } from '../../utils/css-reset';

import colors from './colors';
import variables from './variables';

// TODO: A pemanent solution for the a underline should be made.
//       se: https://github.com/dbmedialab/wolverine-frontend/issues/460
const global = `
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800');

	${cssReset}

	body {
		color: ${colors[colors.skinColors.type]};
		font-family: ${variables.mainFont};
		font-size: ${variables.uiRegularSize};
		line-height: ${variables.uiRegularLineHeight};
		background-color: #f9f9f9;
	}

	a {
		text-decoration: none;

		&:active,
		&:hover,
		&:focus {
			text-decoration: underline;
		}
	}
`;

export default {
	name: 'SOL',
	global,
	colors,
	variables,
};
