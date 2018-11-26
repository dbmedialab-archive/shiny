import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import basic from './basic';
import responsive from './responsive';
import offsets from './offsets';
import autoWidth from './auto-width';
import alignment from './alignment';
import distribution from './distribution';
import hide from './hide';

export default () => {
	storiesOf('Grid|FlexboxGrid', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Basic', basic)
		.add('Responsive', responsive)
		.add('Offsets', offsets)
		.add('Auto Width', autoWidth)
		.add('Alignment', alignment)
		.add('Distribution', distribution)
		.add('Hide', hide);
};
