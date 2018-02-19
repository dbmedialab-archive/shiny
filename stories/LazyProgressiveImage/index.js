import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import lazyProgressiveImage from './lazy-progressive-image';

export default () => {
	storiesOf('LazyProgressiveImage', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Lazy Progressive Image', lazyProgressiveImage);
};
