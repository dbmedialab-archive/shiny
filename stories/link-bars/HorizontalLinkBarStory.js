import React from 'react';
import { withInfo } from '@storybook/addon-info';

import {
	LinkBarLink,
	HorizontalLinkBar,
} from '../../src';

import { DemoContainer } from '../storybook-components';

const HorizontalLinkBarStory = () => (
	<DemoContainer>
		<HorizontalLinkBar backgroundColor="white">
			<LinkBarLink linkText="One" url="https://example.com" isActive />
			<LinkBarLink linkText="Two" url="https://example.com" />
			<LinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
		</HorizontalLinkBar>
	</DemoContainer>
);

export default withInfo({
	text: `
<p>A horizontal navbar that can contain items such as links, buttons, dropdowns or other stuff.</p>
	`,
})(HorizontalLinkBarStory);
