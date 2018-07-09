import { cssReset } from '../../utils/css-reset';

import colors from './colors';
import { fontSpecs } from './font-specs';

const variables = {
	mainFont: '"Open Sans", Helvetica, Arial, sans-serif',
	headingsFont: '"Didot 16 A", "Didot 16 B", Didot, "GFS Didot", Georgia, serif',

	uiRegularSize: '1.6rem',
	uiRegularLineHeight: '2.4rem',
};

const global = `
	${fontSpecs}

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
	name: 'KK',
	colors,
	global,
	variables,
};

export default theme;
