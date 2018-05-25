import variables from './variables';
import colors from './colors';
import flexboxgrid from './flexboxgrid';

const global = `
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
	name: 'Default',
	global,
	colors,
	flexboxgrid,
	variables,
};

export default theme;
