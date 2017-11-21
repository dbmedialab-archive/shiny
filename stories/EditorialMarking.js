import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies,no-unused-vars

import { StoryBox } from './storybook-components';

import kicker from './editorialMarking/kicker';

// import BlockLink from '../shared-components/Typography/BlockLink';
// import LargeScreenText from '../shared-components/Typography/LargeScreenText';

export default () => {
	storiesOf('Editorial marking', module)
		.addDecorator(stories => <StoryBox>{stories()}</StoryBox>)
		.add('Kicker', kicker);
};
