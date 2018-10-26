import { stripUnit } from 'polished';
import { variables } from './variables';

const flexboxgrid = {
	gutterWidth: stripUnit(variables.horizontalBase),
	container: {
		sm: 49.0, // rem
		md: 64.0, // rem
		lg: 95.0,  // rem
	},
};
export { flexboxgrid };
