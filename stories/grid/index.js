import React from 'react';
import { storiesOf } from '@storybook/react';

import basic from './basic';
import responsive from './responsive';
import offsets from './offsets';
import autoWidth from './auto-width';
import alignment from './alignment';
import distribution from './distribution';
import hide from './hide';

import { StoryBox, SiteSelection } from '../storybook-components';


export default () => {
	storiesOf('Grid', module)
		.addDecorator(stories => <StoryBox><SiteSelection>{stories()}</SiteSelection></StoryBox>)
		.add('Basic', basic)
		.add('Responsive', responsive)
		.add('Offsets', offsets)
		.add('Auto Width', autoWidth)
		.add('Alignment', alignment)
		.add('Distribution', distribution)
		.add('Hide', hide);
};
