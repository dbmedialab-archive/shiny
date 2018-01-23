import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies,no-unused-vars
import { DemoContainer } from '../storybook-components';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { Code } from '../../src/atoms/Code';

// HorizontalLinkBar
import {
	ScrollArrowsLinkBar,
	LinkBarLink,
} from '../../src';

import theme from '../../src/themes/default-theme';

const { colors } = theme;

const ScrollArrowsNestedPaddingStory = () => (
	<section>
		<HugeHeading>ScrollArrowsLinkBar</HugeHeading>
		<p>...which should adjust for nested padding.</p>

		<Heading>Demo</Heading>
		<DemoContainer>
			<ScrollArrowsLinkBar
				background={colors.white}
				shouldAdjustForNestedPadding
			>
				<LinkBarLink linkText="One" url="https://example.com" isActive />
				<LinkBarLink linkText="Two" url="https://example.com" />
				<LinkBarLink linkText="Three long link" url="https://example.com" />
				<LinkBarLink linkText="Four long link" url="https://example.com" />
				<LinkBarLink linkText="Five long link" url="https://example.com" />
				<LinkBarLink linkText="Six long link" url="https://example.com" />
				<LinkBarLink linkText="Seven long link" url="https://example.com" />
				<LinkBarLink linkText="Eight long link" url="https://example.com" />
				<LinkBarLink linkText="Full Width for You" url="https://example.com" />
			</ScrollArrowsLinkBar>
		</DemoContainer>


		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import {
	HorizontalLinkBar,
	LinkBarLink,
} from '@aller/shiny';

<ScrollArrowsLinkBar
	background={colors.white}
	shouldAdjustForNestedPadding
>
	<LinkBarLink linkText="One" url="https://example.com" isActive />
	<LinkBarLink linkText="Two" url="https://example.com" />
	<LinkBarLink linkText="Three long link" url="https://example.com" />
	<LinkBarLink linkText="Four long link" url="https://example.com" />
	<LinkBarLink linkText="Five long link" url="https://example.com" />
	<LinkBarLink linkText="Six long link" url="https://example.com" />
	<LinkBarLink linkText="Seven long link" url="https://example.com" />
	<LinkBarLink linkText="Eight long link" url="https://example.com" />
	<LinkBarLink linkText="Full Width for You" url="https://example.com" />
</ScrollArrowsLinkBar>
			`}
		</Code>
	</section>
);

export { ScrollArrowsNestedPaddingStory };
