import { storiesOf } from '@storybook/react';

import { Footer } from '../../src/organisms/Footer';
import description from './mat-description';
import matSteps from './mat-steps';
import MainRecipe from './MainRecipe';

export default () => {
	storiesOf('Mat Components', module)
		.add('Footer', Footer)
		.add('Mat Description', description)
		.add('Mat Steps', matSteps)
		.add('Main Recipe', MainRecipe);
};
