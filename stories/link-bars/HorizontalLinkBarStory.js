import React from 'react';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { Code } from '../../src/atoms/Code';
import { DemoContainer } from '../storybook-components';

import {
	LinkBarLink,
	HorizontalLinkBar,
} from '../../src';

const HorizontalLinkBarStory = () => (
	<section>
		<HugeHeading>HorizontalLinkBar</HugeHeading>
		<p>A horizontal navbar that can contain items such as links, buttons, dropdowns or other stuff.</p>

		<Heading>Demo</Heading>
		<DemoContainer>
			<HorizontalLinkBar backgroundColor="white">
				<LinkBarLink linkText="One" url="https://example.com" isActive />
				<LinkBarLink linkText="Two" url="https://example.com" />
				<LinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
			</HorizontalLinkBar>
		</DemoContainer>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import {
	HorizontalLinkBar,
	LinkBarLink,
} from '@aller/shiny';

<HorizontalLinkBar backgroundColor="white">
	<LinkBarLink linkText="One" url="https://example.com" isActive />
	<LinkBarLink linkText="Two" url="https://example.com" />
	<LinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
</HorizontalLinkBar>
					`}
		</Code>

		<Heading>Overflowing content</Heading>
		<p>Here is another link bar, with enough content to overflow the allotted space.</p>
		<DemoContainer>
			<HorizontalLinkBar backgroundColor="white">
				<LinkBarLink linkText="One" url="https://example.com" isActive />
				<LinkBarLink linkText="Two" url="https://example.com" />
				<LinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
				<LinkBarLink linkText="Three" url="https://example.com" isActive />
				<LinkBarLink linkText="Four" url="https://example.com" />
				<LinkBarLink linkText="Shut The Door" url="https://example.com" />
				<LinkBarLink linkText="Five" url="https://example.com" isActive />
				<LinkBarLink linkText="Six" url="https://example.com" />
				<LinkBarLink linkText="Pick Up Sticks" url="https://example.com" />
				<LinkBarLink linkText="Seven" url="https://example.com" isActive />
				<LinkBarLink linkText="Eight" url="https://example.com" />
				<LinkBarLink linkText="Lay Them Straight" url="https://example.com" />
				<LinkBarLink linkText="Nine" url="https://example.com" isActive />
				<LinkBarLink linkText="Ten" url="https://example.com" />
				<LinkBarLink linkText="Begin Again" url="https://example.com" />
			</HorizontalLinkBar>
		</DemoContainer>
	</section>
);

export { HorizontalLinkBarStory };
