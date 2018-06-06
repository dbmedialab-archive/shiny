import colors from './colors';

const variables = {
	mainFont: "'Open Sans', helvetica, arial, sans-serif",
	headingsFont: "'Open Sans', helvetica, arial, sans-serif",

	uiRegularLineHeight: '1.5',
};

const global = `
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800');

	* {
		box-sizing: border-box;
	}

	body {
		color: #333;
		padding: 0;
		margin: 0;
		font-family: ${variables.mainFont};
		font-weight: 400;
		font-style: normal;
		line-height: ${variables.uiRegularLineHeight};
		position: relative;
		cursor: auto;
	}

	a {
		color: ${colors.skinColors.link};
		text-decoration: underline;
		line-height: inherit;

		&:visited {
			color: ${colors.skinColors.linkVisited};
		}
	}
`;

const theme = {
	name: 'DinSide',
	global,
	colors,
	variables,
};

export default theme;
