import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { DemoContainer } from '../storybook-components';

import {
	LinkBarLink,
	HorizontalLinkBar,
} from '../../src';

const HorizontalLinkBarStory = () => (
	<DemoContainer>
		<HorizontalLinkBar backgroundColor="white">
			<LinkBarLink linkText="One" url="https://example.com" />
			<LinkBarLink linkText="Two" url="https://example.com" />
			<LinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
			<LinkBarLink linkText="Three" url="https://example.com" isActive />
			<LinkBarLink linkText="Four" url="https://example.com" />
			<LinkBarLink linkText="Shut The Door" url="https://example.com" />
			<LinkBarLink linkText="Five" url="https://example.com" />
			<LinkBarLink linkText="Six" url="https://example.com" />
			<LinkBarLink linkText="Pick Up Sticks" url="https://example.com" />
			<LinkBarLink linkText="Seven" url="https://example.com" />
			<LinkBarLink linkText="Eight" url="https://example.com" />
			<LinkBarLink linkText="Lay Them Straight" url="https://example.com" />
			<LinkBarLink linkText="Nine" url="https://example.com" />
			<LinkBarLink linkText="Ten" url="https://example.com" />
			<LinkBarLink linkText="Begin Again" url="https://example.com" />
		</HorizontalLinkBar>
	</DemoContainer>
);

export default withInfo({
	text: `
<p>Here is another link bar, with enough content to overflow the allotted space.</p>
	`,
})(HorizontalLinkBarStory);
