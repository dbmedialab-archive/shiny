import { stripUnit } from 'polished';
import variables from './variables';

const flexboxgrid = {
	gridSize: 12,
	gutterWidth: stripUnit(variables.horizontalBase), // rem
	outerMargin: 2.0, // rem
	mediaQuery: 'only screen',
	container: {
		sm: 46.0, // rem
		md: 61.0, // rem
		lg: 98.0,  // rem
	},
	breakpoints: {
		xs: 0,  // em
		sm: 48, // em
		md: 64, // em
		lg: 75,  // em
	},
};
export default flexboxgrid;
