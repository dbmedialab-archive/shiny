import { css } from 'styled-components';
import colors from './colors';

const variables = {
	mainFont: "'Open Sans', helvetica, arial, sans-serif",
	headingsFont: "'Open Sans', helvetica, arial, sans-serif",
};

const global = css`
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800');

	* {
		box-sizing: border-box;
	}

	body {
		font-family: ${variables.mainFont};
		line-height: ${variables.verticalBase};
	}

	a {
		color: #333;
	}
`;

const theme = {
	name: 'DinSide',
	global,
	colors,
	variables,
};

export default theme;
