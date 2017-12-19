import { storiesOf } from '@storybook/react';

import basicIssue from './basic-issue';
import rowWithThreePlugs from './row-with-three-plugs';
import kicker from './kicker';

export default () => {
	storiesOf('TrysilPlug', module)
		.add('A typical plug', basicIssue)
		.add('With Kicker', kicker)
		.add('Row with three plugs', rowWithThreePlugs);
};
