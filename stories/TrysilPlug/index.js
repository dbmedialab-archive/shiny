import React from 'react';
import { storiesOf } from '@storybook/react';
import { StoryBox, SiteSelection } from '../storybook-components';

import basicIssue from './basic-issue';
import rowWithThreePlugs from './row-with-three-plugs';

export default () => {
	storiesOf('TrysilPlug', module)
		.addDecorator(stories => <StoryBox><SiteSelection>{stories()}</SiteSelection></StoryBox>)
		.add('A typical plug', basicIssue)
		.add('Row with three plugs', rowWithThreePlugs);
};
