import { storiesOf } from '@storybook/react';

import genericAd from './generic-ad';
import stickyAd from './sticky-right';

export default () => {
	storiesOf('Ads', module)
		.add('Generic Ad', genericAd)
		.add('Sticky Ad', stickyAd);
};
