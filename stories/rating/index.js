import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import starsRating from './stars-rating';

export default () => {
	storiesOf('Rating', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Stars Rating', starsRating);
};
