import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import genericAd from './generic-ad';
import stickyAd from './sticky-right';

export default () => {
	storiesOf('Ads', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Generic Ad', genericAd)
		.add('Sticky Ad', stickyAd);
};
