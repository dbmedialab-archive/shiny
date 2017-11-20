import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies,no-unused-vars

import SiteSelection from './SiteSelection';
import Palette from '../src/Palette';
// import Heading from '../src/atoms/Heading';

import { StoryBox } from './styles/storybook-styles';

import label from './typography/label';
import heading from './typography/heading';

// import BlockLink from '../shared-components/Typography/BlockLink';
// import LargeScreenText from '../shared-components/Typography/LargeScreenText';

export default () => {
	storiesOf('Typography', module)
		.addDecorator(stories => <StoryBox>{stories()}</StoryBox>)
		.add('Label', label)
		.add('Heading', heading)

	// @TODO Move Palette to somewhere it belongs
		.add('Palette', () => {
			return (
				<SiteSelection>
					<Palette />
				</SiteSelection>
			);
		});
};
