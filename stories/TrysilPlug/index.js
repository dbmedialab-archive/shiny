import { storiesOf } from '@storybook/react';

import basicIssue from './basic-issue';
import rowWithThreePlugs from './row-with-three-plugs';
import kicker from './kicker';
import allCaps from './all-caps';

export default () => {
	storiesOf('TrysilPlug', module)
		.add('A typical plug', basicIssue)
		.add('With Kicker', kicker)
		.add('All caps', allCaps)
		.add('Row with three plugs', rowWithThreePlugs);
};
