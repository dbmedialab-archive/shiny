import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import MatColophon from './MatColophon';
import description from './mat-description';
import MoreComponent from './mat-more-component';
import SingleIngredient from './SingleIngredient';
import Footer from './footer';

export default () => {
	storiesOf('Mat Components', module)
		.add('SingleIngredient', SingleIngredient)
		.add('Footer', Footer)
		.addDecorator(StorybookPaddedGrid)
		.add('Mat Description', description)
		.add('More Component', MoreComponent);
};
