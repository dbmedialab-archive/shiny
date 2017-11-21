import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies,no-unused-vars

// import Heading from '../src/atoms/Heading';

import { StoryBox } from './storybook-components';

import label from './typography/label';
import heading from './typography/heading';

// import BlockLink from '../shared-components/Typography/BlockLink';
// import LargeScreenText from '../shared-components/Typography/LargeScreenText';

export default () => {
	storiesOf('Typography', module)
		.addDecorator(stories => <StoryBox>{stories()}</StoryBox>)
		.add('Label', label)
		.add('Heading', heading);
};
