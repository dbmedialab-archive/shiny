import React from 'react';
import { storiesOf } from '@storybook/react';

import { StoryBox, SiteSelection } from '../storybook-components';
import Palette from './Palette';

export default () => {
	storiesOf('Welcome', module)
		.addDecorator(stories => <StoryBox><SiteSelection>{stories()}</SiteSelection></StoryBox>)
		.add('Palette', () => <Palette />);
};
