import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { DemoContainer } from '../storybook-components';

import {
	HorizontalLinkBar,
	LinkBarLink,
	SmallLinkBarLink,
	LargeLinkBarLink,
} from '../../src';

const LinkStory = () => (
	<section>
		<DemoContainer>
			<HorizontalLinkBar backgroundColor="white">
				<SmallLinkBarLink linkText="One" url="https://example.com" isActive />
				<SmallLinkBarLink linkText="Two" url="https://example.com" />
				<SmallLinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
			</HorizontalLinkBar>
		</DemoContainer>
		<DemoContainer>
			<HorizontalLinkBar backgroundColor="white">
				<LinkBarLink linkText="One" url="https://example.com" isActive />
				<LinkBarLink linkText="Two" url="https://example.com" />
				<LinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
			</HorizontalLinkBar>
		</DemoContainer>
		<DemoContainer>
			<HorizontalLinkBar backgroundColor="white">
				<LargeLinkBarLink linkText="One" url="https://example.com" isActive />
				<LargeLinkBarLink linkText="Two" url="https://example.com" />
				<LargeLinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
			</HorizontalLinkBar>
		</DemoContainer>
	</section>
);

export default withInfo({
	text: `
<Paragraph>Provides links (<code>&lt;a&gt;</code> tags) for HorizontalLinkBar.</Paragraph>
<Paragraph>You can remove the underline and change the active background with props.</Paragraph>
	`,
})(LinkStory);
