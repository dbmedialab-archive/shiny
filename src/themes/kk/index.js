import colors from './colors';
import { fontSpecs } from './font-specs';

const variables = {
	mainFont: '"Open Sans", Helvetica, Arial, sans-serif',
	headingsFont: '"Didot 16 A", "Didot 16 B", Didot, "GFS Didot", Georgia, serif',
};

const global = `
	${fontSpecs}

	* {
		box-sizing: border-box;
	}

	body {
		color: ${colors.type}
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
