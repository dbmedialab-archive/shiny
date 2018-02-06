import React from 'react';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
// import { Code } from '../../src/atoms/Code';
import { DemoContainer } from '../storybook-components';

import {
	LinkBarLink,
	LinkBarDropdown,
	HorizontalLinkBar,
	VerticalLinkBar,
} from '../..';

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
				<LinkBarDropdown linkText="Drop Down My Shoe" url="https://example.com">
					<VerticalLinkBar background={colors.white}>
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
	<LinkBarDropdown linkText="Drop Down My Shoe" url="https://example.com">
	<VerticalLinkBar background={colors.white}>
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
