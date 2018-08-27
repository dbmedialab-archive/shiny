import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import MatColophon from './MatColophon';
import description from './mat-description';
import MoreComponent from './mat-more-component';
import SingleIngredient from './SingleIngredient';
import Footer from './footer';

export default () => {
	storiesOf('Mat Components', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Colophon', MatColophon)
		.add('Mat Description', description)
		.add('More Component', MoreComponent)
		.add('SingleIngredient', SingleIngredient)
		.add('Footer', Footer);
};
