import { storiesOf } from '@storybook/react';

import { Footer } from '../../src/organisms/Footer';
import description from './mat-description';
import matSteps from './mat-steps';
import { Quantity } from '../../src/atoms/MainRecipe/quantity';

export default () => {
	storiesOf('Mat Components', module)
		.add('Footer', Footer)
		.add('Mat Description', description)
		.add('Quantity', Quantity)
		.add('Mat Steps', matSteps);
};
