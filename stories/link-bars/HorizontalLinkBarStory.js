import React from 'react';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { Code } from '../../src/atoms/Code';
import { DemoContainer } from '../storybook-components';

import {
	LinkBarLink,
	HorizontalLinkBar,
} from '../../src';

import theme from '../../src/themes/default-theme';

const { colors } = theme;

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
	</section>
);

export { HorizontalLinkBarStory };
