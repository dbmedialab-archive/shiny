import { css } from 'styled-components';
import colors from './colors';

const variables = {
	mainFont: '"Open Sans","Helvetica",Helvetica,Arial,sans-serif',
	headingsFont: '"GFS Didot", Didot, Georgia, serif',
};

const global = css`
	@import url('https://fonts.googleapis.com/css?family=GFS+Didot:400,700,800|Open+Sans:400,700,800');

	* {
		box-sizing: border-box;
	}

	body {
		color: #222;
		padding: 0;
		margin: 0;
		font-family: ${variables.mainFont};
		font-weight: 300;
		font-style: normal;
		line-height: 1.5;
		position: relative;
		cursor: auto;
	}
`;

const theme = {
	name: 'KK',
	colors,
	global,
	variables,
};

export default theme;
