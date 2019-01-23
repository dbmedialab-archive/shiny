import React from 'react';
import { DemoContainer } from '../storybook-components';

import { Code } from '../../src/atoms/Code';

// HorizontalLinkBar
import {
	// For the story
	Heading,
	HugeHeading,

	// For this component specifically
	FullWidthLinkBar,
	LinkBarLink,
} from '../../src';

const FullWidthStory = () => (
	<section>
		<HugeHeading>FullWidthLinkBar</HugeHeading>
		<Paragraph>A FullWidthLinkBar is a HorizontalLinkBar that uses 100% of the available space.</Paragraph>
		<Paragraph>
			By default, it is positioned absolutely. If you add a truthy <code>fixed</code> prop, it is
			positioned fixed instead.
		</Paragraph>

		<Heading>Demo</Heading>
		<DemoContainer>
			<FullWidthLinkBar backgroundColor="white">
				<LinkBarLink linkText="One" url="https://example.com" isActive />
				<LinkBarLink linkText="Two" url="https://example.com" />
				<LinkBarLink linkText="Full Width for You" url="https://example.com" />
			</FullWidthLinkBar>
		</DemoContainer>


		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import {
	HorizontalLinkBar,
	LinkBarLink,
} from '@aller/shiny';

<FullWidthLinkBar backgroundColor="white">
	<LinkBarLink linkText="One" url="https://example.com" isActive />
	<LinkBarLink linkText="Two" url="https://example.com" />
	<LinkBarLink linkText="Full Width for You" url="https://example.com" />
</FullWidthLinkBar>
			`}
		</Code>
	</section>
);

export { FullWidthStory };
