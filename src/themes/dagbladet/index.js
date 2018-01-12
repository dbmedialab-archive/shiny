import colors from './colors';

const variables = {
	mainFont: '"Roboto","Helvetica",Helvetica,Arial,sans-serif',
	headingsFont: '"Roboto","Helvetica",Helvetica,Arial,sans-serif',
};

const global = `
	color: #222;
	padding: 0;
	margin: 0;
	font-family: ${variables.mainFont};
	font-weight: 300;
	font-style: normal;
	line-height: 1.5;
	position: relative;
	cursor: auto;
`;

const theme = {
	name: 'Dagbladet',
	global,
	colors,
	variables,
};

export default theme;
