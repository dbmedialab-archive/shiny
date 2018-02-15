import { storiesOf } from '@storybook/react';

import { Footer } from '../../src/organisms/Footer';
import description from './mat-description';
import matSteps from './mat-steps';
import MainRecipe from './MainRecipe';
import MoreComponent from './mat-more-component';

export default () => {
	storiesOf('Mat Components', module)
		.add('Footer', Footer)
		.add('MainRecipe', MainRecipe)
		.add('Mat Description', description)
		.add('More Component', MoreComponent)
		.add('Mat Steps', matSteps);
};
