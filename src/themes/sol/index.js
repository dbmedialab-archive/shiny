import { cssReset } from '../../utils/css-reset';

import colors from './colors';
import variables from './variables';

// TODO: A pemanent solution for the a underline should be made.
//       se: https://github.com/dbmedialab/wolverine-frontend/issues/460
const global = `
	@import url('https://fonts.googleapis.com/css?family=Barlow:400,700,800');
	${cssReset}
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
	flexboxgrid: {
		container: {
			sm: 75.3, // rem
			md: 101.0, // rem
		},
	},
	outermargin: 0.7,
	global,
	colors,
	variables,
};
