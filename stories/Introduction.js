import React from 'react';
import { storiesOf } from '@storybook/react';

import { StoryBox, SiteSelection } from './storybook-components';
import Palette from '../src/Palette';
import Welcome from './Welcome';

export default () => {
	storiesOf('Welcome', module)
		.addDecorator(stories => <StoryBox><SiteSelection>{stories()}</SiteSelection></StoryBox>)
		.add('Site selection', () => <Welcome />)
		.add('Palette', () => <Palette />);
};
