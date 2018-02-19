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

const LinkStory = () => (
	<section>
		<HugeHeading>LinkBarLink</HugeHeading>
		<p>Provides links (<code>&lt;a&gt;</code> tags) for HorizontalLinkBar.</p>
		<p>You can remove the underline and change the active background with props.</p>

		<Heading>Demo</Heading>
		<DemoContainer>
			<HorizontalLinkBar background={colors.white}>
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

<HorizontalLinkBar background={colors.white}>
	<LinkBarLink linkText="One" url="https://example.com" isActive />
	<LinkBarLink linkText="Two" url="https://example.com" />
	<LinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
</HorizontalLinkBar>
						`}
		</Code>
	</section>
);

export { LinkStory };
