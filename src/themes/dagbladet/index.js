import colors from './colors';

const global = `
	color: #222;
	padding: 0;
	margin: 0;
	font-family: "Roboto","Helvetica",Helvetica,Arial,sans-serif;
	font-weight: 300;
	font-style: normal;
	line-height: 1.5;
	position: relative;
	cursor: auto;
`;

const variables = {
	mainFont: '"Roboto","Helvetica",Helvetica,Arial,sans-serif',
};

const theme = {
	name: 'Dagbladet',
	global,
	colors,
	variables,
};

export default theme;
