import React from 'react';

// import { Code } from '../../src/atoms/Code';
import { DemoContainer } from '../storybook-components';

import {
	// For the story
	Heading,
	HugeHeading,

	// For this component specifically
	LinkBarLink,
	LinkBarDropdown,
	HorizontalLinkBar,
	VerticalLinkBar,
} from '../../src';

import { Code } from '../../src/atoms/Code';
import theme from '../../src/themes/default-theme';

const { colors } = theme;

const DropdownStory = () => (
	<section>
		<HugeHeading>HorizontalLinkBar</HugeHeading>
		<p>A horizontal navbar that can contain items such as links, buttons, dropdowns or other stuff.</p>

		<Heading>Demo</Heading>
		<DemoContainer>
			<HorizontalLinkBar overflow="visible">
				<LinkBarLink linkText="One" url="https://example.com" isActive />
				<LinkBarLink linkText="Two" url="https://example.com" />
				<LinkBarDropdown linkText="Drop Down My Shoe" url="https://example.com" displayInitially>
					<VerticalLinkBar background={colors.white}>
						<LinkBarLink linkText="One" url="https://example.com" isActive />
						<LinkBarLink linkText="Two" url="https://example.com" />
					</VerticalLinkBar>
				</LinkBarDropdown>
				<LinkBarDropdown linkText="This dropdown is aligned to the right" url="https://example.com" displayInitially>
					<VerticalLinkBar background={colors.white} align="right">
						<LinkBarLink linkText="One" url="https://example.com" isActive />
						<LinkBarLink linkText="Two" url="https://example.com" />
					</VerticalLinkBar>
				</LinkBarDropdown>
			</HorizontalLinkBar>
		</DemoContainer>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import {
	HorizontalLinkBar,
	LinkBarLink,
	LinkBarDropdown,
	VerticalLinkBar,
} from '@aller/shiny';

<HorizontalLinkBar overflow="visible">
	<LinkBarLink linkText="One" url="https://example.com" isActive />
	<LinkBarLink linkText="Two" url="https://example.com" />
	<LinkBarDropdown linkText="Drop Down My Shoe" url="https://example.com" displayInitially>
		<VerticalLinkBar background={colors.white}>
			<LinkBarLink linkText="One" url="https://example.com" isActive />
			<LinkBarLink linkText="Two" url="https://example.com" />
		</VerticalLinkBar>
	</LinkBarDropdown>
	<LinkBarDropdown linkText="This dropdown is aligned to the right" url="https://example.com" displayInitially>
		<VerticalLinkBar background={colors.white} align="right">
			<LinkBarLink linkText="One" url="https://example.com" isActive />
			<LinkBarLink linkText="Two" url="https://example.com" />
		</VerticalLinkBar>
	</LinkBarDropdown>
</HorizontalLinkBar>
				`}
		</Code>
	</section>
);

export { DropdownStory };
