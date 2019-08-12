import { shadeColors } from '../../utils/shade-colors';

const colorsToShade= {
	primary: '#064163',
	secondary: '#D5EAEF',

	yellow: '#ffd861',
	sand: '#e5e1d9',
	gray: '#C0C0C0',
	teal: '#077F8C',
	dark: '#666666',
	green: '#839d63',
	darkness: '#333333',
};

const shadeScheme = {
	dark: 0.1,
	light: 0.15,
	lighter: 0.3,
};

const combinedShadedColors = shadeColors(colorsToShade, shadeScheme);

const colors = {
	...combinedShadedColors,
	skinColors: {
		splashBackground: 'primary',
		splashText: 'secondary',
		background: 'white',
		link: 'secondary',
		type: 'darkness',
	},
};

export default colors;
