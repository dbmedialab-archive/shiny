import { stripUnit } from 'polished';

import colors from './colors';
import variables from './variables';

const cssReset = `
	/* Font reset: 1rem = 10px */
	html {
		font-size: 62.5%;
	}
	body {
		font-size: 1.6rem;
		margin: 0;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section, main {
    	display: block;
	}
`;

const global = `
	@import url('https://fonts.googleapis.com/css?family=Ubuntu|Cabin:400,700');

	${cssReset}

	body {
		color: ${colors[colors.skinColors.type]};
		font-family: ${variables.mainFont};
		font-size: ${variables.uiRegularSize};
		line-height: ${variables.uiRegularLineHeight};
	}
`;

const theme = {
	name: 'Oppskrift',
	global,
	colors,
	variables,

	flexboxgrid: {
		gutterWidth: stripUnit(variables.horizontalBase), // rem
		outerMargin: 2, // rem
		container: {
			sm: 49.0, // rem
			md: 64.0, // rem
			lg: 101.0,  // rem
		},
		breakpoints: {
			xs: 0,  // em
			sm: 48, // em 768px
			md: 75, // em 1200px
			lg: 90,  // em 1440px
		},
	},
};

export default theme;

// gridSize: 12,
// 	gutterWidth: stripUnit(variables.horizontalBase), // rem
// 	outerMargin: 1.5, // rem
// 	mediaQuery: 'only screen',
// 	container: {
// 	sm: 49.0, // rem
// 		md: 64.0, // rem
// 		lg: 101.0,  // rem
// },
// breakpoints: {
// 	xs: 0,  // em
// 		sm: 48, // em
// 		md: 64, // em
// 		lg: 75,  // em
// },


// old
// flexboxgrid: {
// 	gutterWidth: stripUnit(variables.horizontalBase), // rem
// 		outerMargin: 2, // rem
// 		container: {
// 		sm: 71, // rem
// 			md: 100.0, // rem
// 			lg: 110.0,  // rem
// 	},
// 	breakpoints: {
// 		xs: 0,  // em
// 			sm: 48, // em 768px
// 			md: 75, // em 1200px
// 			lg: 90,  // em 1440px
// 	},
// },
