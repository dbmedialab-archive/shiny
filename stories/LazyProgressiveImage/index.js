import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import LazyProgressiveImage from './basic';
import MultipleLazyProgressiveImagesStory from './without-blur';
import NoImageOnInitialLoadImagesStory from './without-src';

export default () => {
	storiesOf('LazyProgressiveImage', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Low quality image placeholder', LazyProgressiveImage)
		.add('... without blur transition', MultipleLazyProgressiveImagesStory)
		.add('... without src', NoImageOnInitialLoadImagesStory);
};
