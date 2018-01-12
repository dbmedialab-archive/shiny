import colors from './colors';

const variables = {
	mainFont: "'Open Sans', helvetica, arial, sans-serif",
	headingsFont: "'Open Sans', helvetica, arial, sans-serif",
};

const global = `
	a {
		color: #333;
	}

	font-family: ${variables.mainFont};
	line-height: ${variables.verticalBase};
`;

const theme = {
	name: 'DinSide',
	global,
	colors,
	variables,
};

export default theme;
