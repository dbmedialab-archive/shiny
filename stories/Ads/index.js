import { storiesOf } from '@storybook/react';

import genericAd from './generic-ad';
import stickyAd from './sticky-right';
import fullscreenAd from './fullscreen-ad';

export default () => {
	storiesOf('Ads', module)
		.add('Generic Ad', genericAd)
		.add('Sticky Ad', stickyAd)
		.add('Fullscreen Ad', fullscreenAd);
};
