import React from 'react';
import { storiesOf } from '@storybook/react';
import { SiteSelection } from '../storybook-components';
import Grid from '../../src/atoms/Grid';

import basicIssue from './basic-issue';
import rowWithThreePlugs from './row-with-three-plugs';
import kicker from './kicker';

export default () => {
	storiesOf('TrysilPlug', module)
		.addDecorator(stories => <SiteSelection><Grid>{stories()}</Grid></SiteSelection>)
		.add('A typical plug', basicIssue)
		.add('With Kicker', kicker)
		.add('Row with three plugs', rowWithThreePlugs);
};
