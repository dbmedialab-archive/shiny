import { storiesOf } from '@storybook/react';

import MatColophon from './MatColophon';
import description from './mat-description';
import matSteps from './mat-steps';
import MainRecipe from './MainRecipe';
import MoreComponent from './mat-more-component';

export default () => {
	storiesOf('Mat Components', module)
		.add('Colophon', MatColophon)
		.add('MainRecipe', MainRecipe)
		.add('Mat Description', description)
		.add('More Component', MoreComponent)
		.add('Mat Steps', matSteps);
};
