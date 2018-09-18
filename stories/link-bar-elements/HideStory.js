import React from 'react';
import { DemoContainer } from '../storybook-components';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { Code } from '../../src/atoms/Code';

// HorizontalLinkBar
import {
	HorizontalLinkBar,
	LinkBarLink,
} from '../../src';

import theme from '../../src/themes/default-theme';

const { colors } = theme;

const HideStory = () => (
	<section>
		<HugeHeading>Hidden LinkBar elements</HugeHeading>
		<p>Elements in `VerticalLinkBar` and `HorizontalLinkBar` can be hidden with props that resemble the `Col` props.</p>
		<p>Set `xs`, `sm`, `md` or `lg` to `false`, and the element will be hidden from that breakpoint and up.</p>
		<p>Override with a higher breakpoint</p>

		<Heading>Demo</Heading>
		<DemoContainer>
			<HorizontalLinkBar backgroundColor="white">
				<LinkBarLink linkText="All screens" url="https://example.com" />
				<LinkBarLink md={false} linkText="xs and sm screens" url="https://example.com" />
				<LinkBarLink xs={false} sm linkText="sm, md and lg screens" url="https://example.com" />
				<LinkBarLink xs={false} md linkText="md and lg screens" url="https://example.com" />
				<LinkBarLink xs={false} lg linkText="lg screens" url="https://example.com" />
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
	<LinkBarLink linkText="All screens" url="https://example.com" />
	<LinkBarLink md={false} linkText="xs and sm screens" url="https://example.com" />
	<LinkBarLink xs={false} sm linkText="sm, md and lg screens" url="https://example.com" />
	<LinkBarLink xs={false} md linkText="md and lg screens" url="https://example.com" />
	<LinkBarLink xs={false} lg linkText="lg screens" url="https://example.com" />
</HorizontalLinkBar>
			`}
		</Code>
	</section>
);

export { HideStory };
