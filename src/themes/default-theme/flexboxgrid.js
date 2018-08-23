import { stripUnit } from 'polished';
import variables from './variables';

const flexboxgrid = {
	gridSize: 12,
	gutterWidth: stripUnit(variables.horizontalBase), // rem
	outerMargin: 5, // rem
	mediaQuery: 'only screen',
	container: {
		sm: 49.0, // rem
		md: 64.0, // rem
		lg: 101.0,  // rem
	},
	breakpoints: {
		xs: 1,  // em
		sm: 48, // em
		md: 64, // em
		lg: 75,  // em
	},
};
export default flexboxgrid;
