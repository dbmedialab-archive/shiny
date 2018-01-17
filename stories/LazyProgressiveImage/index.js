import { storiesOf } from '@storybook/react';

import lazyProgressiveImage from './lazy-progressive-image';

export default () => {
	storiesOf('LazyProgressiveImage', module)
		.add('Lazy Progressive Image', lazyProgressiveImage);
};
