import variables from './variables';
import colors from './colors';
import flexboxgrid from './flexboxgrid';

// @TODO: Switch to a proper CSS reset, like this one in utils:
// import { cssReset } from '../utils';
const cssReset = `
	/* Font reset: 1rem = 10px */
	html {
		font-size: 62.5%;
	}
	body {
		font-size: 1.6rem;
	}

	html, body {
		margin: 0;
		padding: 0;
	}

	* { box-sizing: border-box; }

	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section, main {
    	display: block;
	}
`;

const global = `
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
	name: 'Default',
	global,
	colors,
	flexboxgrid,
	variables,
};

export default theme;
