import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import LazyProgressiveImage from './basic';
import MultipleLazyProgressiveImagesStory from './with-blur';

export default () => {
	storiesOf('LazyProgressiveImage', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Low quality image placeholder', LazyProgressiveImage)
		.add('... with blur transition', MultipleLazyProgressiveImagesStory);
};
