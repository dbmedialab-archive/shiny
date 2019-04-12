import { darken, lighten } from 'polished';
import { cssReset } from '../../utils';

const colorsToShade= {
	primary: '#fab',
	secondary: 'gold',
};
// Creates 4 shades of each color in colorsToShade
// For example: primary becomes primary, primaryDark, primaryLight and primaryLighter
const shadedColors = Object.keys(colorsToShade).map(color => ({
	[`${color}`]: colorsToShade[color],
	[`${color}Dark`]: darken(0.2, colorsToShade[color]),
	[`${color}Light`]: lighten(0.15, colorsToShade[color]),
	[`${color}Lighter`]: lighten(0.3, colorsToShade[color]),
}));

const combinedShadedColors = shadedColors.reduce((acc, cur) => Object.assign(acc, cur), {});

const global = `
	@import url('https://fonts.googleapis.com/css?family=Fascinate+Inline');

	${cssReset}
`;

const theme = {
	name: 'Future',
	colors: {
		...combinedShadedColors,
		skinColors: {
			splashBackground: 'secondary',
			splashText: 'type',
		},
	},
	global,
	variables: {
		headingsFont: "'Fascinate Inline', cursive",
		verticalBase: '1.6rem',
		horizontalBase: '1.6rem',
	},
};

export default theme;
