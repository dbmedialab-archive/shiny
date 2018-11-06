import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import description from './mat-description';
import MoreComponent from './mat-more-component';
import Footer from './footer';

export default () => {
	storiesOf('Mat Components', module)
		.add('Footer', Footer)
		.addDecorator(StorybookPaddedGrid)
		.add('Mat Description', description)
		.add('More Component', MoreComponent);
};
