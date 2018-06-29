import { cssReset } from '../../utils/css-reset';

import colors from './colors';

const variables = {
	mainFont: '"Roboto","Helvetica",Helvetica,Arial,sans-serif',
	headingsFont: '"Roboto","Helvetica",Helvetica,Arial,sans-serif',

	uiRegularSize: '1.6rem',
	uiRegularLineHeight: '2.4rem',
};

const global = `
	@import url('https://fonts.googleapis.com/css?family=Roboto:300,700,800');

	${cssReset}

	body {
		color: ${colors[colors.skinColors.type]};
		font-family: ${variables.mainFont};
		font-size: ${variables.uiRegularSize};
		line-height: ${variables.uiRegularLineHeight};

		font-weight: 300;
	}
`;

const theme = {
	name: 'Dagbladet',
	global,
	colors,
	variables,
};

export default theme;
