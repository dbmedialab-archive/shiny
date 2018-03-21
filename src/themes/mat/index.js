import { css } from 'styled-components';
import { stripUnit } from 'polished';
import colors from './colors';
import variables from './variables';

const global = css`
	@import url('https://fonts.googleapis.com/css?family=Cabin:400,700');

	* {
		box-sizing: border-box;
	}

	body {
		padding: 0;
		margin: 0;
		font-family: ${variables.mainFont};
		position: relative;
		cursor: auto;
	}

	nav {
		text-transform: uppercase;
	}
`;

const theme = {
	name: 'Oppskrift',
	global,
	colors,
	variables,

	flexboxgrid: {
		gutterWidth: stripUnit(variables.horizontalBase), // rem
		outerMargin: 0, // rem
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
