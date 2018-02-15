import { css } from 'styled-components';
import colors from './colors';

const variables = {
	mainFont: "'Open Sans', helvetica, arial, sans-serif",
	headingsFont: "'Open Sans', helvetica, arial, sans-serif",
};

const global = css`
	html, html * {
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
