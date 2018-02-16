import { css } from 'styled-components';
import { stripUnit } from 'polished';
import colors from './colors';
import variables from './variables';

const global = css`
	@import url('https://fonts.googleapis.com/css?family=Cabin:600');

	* {
		box-sizing: border-box;
	}

	body {
		padding: 0;
		margin: 0;
		text-align: left;
		letter-spacing: normal;
		font-family: ${variables.mainFont};
		font-weight: 600;
		font-style: normal;
		line-height: 1.22;
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
		outerMargin: 2, // rem
		container: {
			sm: 50.0, // rem
			md: 66.0, // rem
			lg: 148.0,  // rem
		},
	},
};

export default theme;
