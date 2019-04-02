import { cssReset } from '../../utils/css-reset';
import flexboxgrid from './flexboxgrid';
import colors from './colors';

const variables = {
	mainFont: '"Roboto","Helvetica",Helvetica,Arial,sans-serif',
	headingsFont: '"Roboto","Helvetica",Helvetica,Arial,sans-serif',

	uiWeight: 300,

	uiRegularSize: '1.6rem',
	uiRegularLineHeight: '2.4rem',
};

const global = `
	@import url('https://fonts.googleapis.com/css?family=Roboto:300,700,800');

	${cssReset}
`;

const theme = {
	name: 'Dagbladet',
	global,
	colors,
	variables,
	flexboxgrid,
};

export default theme;
