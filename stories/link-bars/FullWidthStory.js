import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies,no-unused-vars
import { DemoContainer } from '../storybook-components';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { Code } from '../../src/atoms/Code';

// HorizontalLinkBar
import {
	FullWidthLinkBar,
	LinkBarLink,
} from '../../src';

import theme from '../../src/themes/default-theme';

const { colors } = theme;

const FullWidthStory = () => (
	<section>
		<HugeHeading>FullWidthLinkBar</HugeHeading>
		<p>A FullWidthLinkBar is a HorizontalLinkBar that uses 100% of the available space.</p>
		<p>
			By default, it is positioned absolutely. If you add a truthy <code>fixed</code> prop, it is
			positioned fixed instead.
		</p>

		<Heading>Demo</Heading>
		<DemoContainer>
			<FullWidthLinkBar background={colors.white}>
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

<FullWidthLinkBar background={colors.white}>
	<LinkBarLink linkText="One" url="https://example.com" isActive />
	<LinkBarLink linkText="Two" url="https://example.com" />
	<LinkBarLink linkText="Full Width for You" url="https://example.com" />
</FullWidthLinkBar>
			`}
		</Code>
	</section>
);

export { FullWidthStory };
