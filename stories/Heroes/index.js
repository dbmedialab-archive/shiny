import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import HorizontalHeroUnit from './horizontal-hero-unit';

export default () => {
	storiesOf('Heroes', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Horizontal Hero Unit', HorizontalHeroUnit);
};
