import { stripUnit } from 'polished';
import { variables } from './variables';

const flexboxgrid = {
	gutterWidth: stripUnit(variables.horizontalBase),
	container: {
		sm: 75.4, // rem
		md: 75.4, // rem
	},
};
export { flexboxgrid };
