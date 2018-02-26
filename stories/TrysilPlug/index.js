import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import basicIssue from './basic-issue';
import rowWithThreePlugs from './row-with-three-plugs';
import kicker from './kicker';
import allCaps from './all-caps';
import customHeading from './custom-heading';

export default () => {
	storiesOf('TrysilPlug', module)
		.addDecorator(StorybookPaddedGrid)
		.add('TrysilPlug', basicIssue)
		.add('Custom Heading', customHeading)
		.add('With Kicker', kicker)
		.add('All caps', allCaps)
		.add('Row with three plugs', rowWithThreePlugs);
};
