import React from 'react';
import { storiesOf } from '@storybook/react';
import { StoryBox, SiteSelection } from '../storybook-components';

import basic from './basic';
import floatLeft from './floatLeft';
import floatRight from './floatRight';

export default () => {
	storiesOf('Float image', module)
		.addDecorator(stories => <StoryBox><SiteSelection>{stories()}</SiteSelection></StoryBox>)
		.add('Basic', basic)
		.add('Float left', floatLeft)
		.add('Float right', floatRight);
};
