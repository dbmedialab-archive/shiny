import React from 'react';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { Code } from '../../src/atoms/Code';
import { DemoContainer } from '../storybook-components';

import {
	LinkBarLink,
	VerticalLinkBar,
} from '../..';

const VerticalLinkBarStory = () => (
	<section>
		<HugeHeading>VerticalLinkBar</HugeHeading>
		<p>A horizontal navbar that can contain items such as links, buttons, dropdowns or other stuff.</p>

		<Heading>Demo</Heading>
		<DemoContainer>
			<VerticalLinkBar>
				<LinkBarLink linkText="One" url="https://example.com" isActive />
				<LinkBarLink linkText="Two" url="https://example.com" />
				<LinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
			</VerticalLinkBar>
		</DemoContainer>

		<Heading>Usage</Heading>

		<Code language="jsx">
			{`
<VerticalLinkBar>
	<LinkBarLink linkText="One" url="https://example.com" isActive />
	<LinkBarLink linkText="Two" url="https://example.com" />
	<LinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
</VerticalLinkBar>
			`}
		</Code>
	</section>
);
export { VerticalLinkBarStory };
