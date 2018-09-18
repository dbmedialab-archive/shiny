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

const StateIndicationStory = () => (
	<section>
		<HugeHeading>LinkBarLink with alternative state indication</HugeHeading>
		<p>You can remove the underline and change the active background with props.</p>

		<Heading>Demo</Heading>
		<DemoContainer>
			<HorizontalLinkBar backgroundColor="white">
				<LinkBarLink
					useUnderline={false}
					activeBackground={colors.pinkLight}
					linkText="One"
					url="https://example.com"
					isActive
				/>
				<LinkBarLink
					useUnderline={false}
					activeBackground={colors.pinkLight}
					linkText="Two"
					url="https://example.com"
				/>
				<LinkBarLink
					useUnderline={false}
					activeBackground={colors.pinkLight}
					linkText="Buckle My Shoe"
					url="https://example.com"
				/>
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
	<LinkBarLink
	useUnderline={false}
	activeBackground={colors.pinkLight}
	linkText="One"
	url="https://example.com"
	isActive
/>
	<LinkBarLink
		useUnderline={false}
		activeBackground={colors.pinkLight}
		linkText="Two"
		url="https://example.com"
	/>
	<LinkBarLink
		useUnderline={false}
		activeBackground={colors.pinkLight}
		linkText="Buckle My Shoe"
		url="https://example.com"
	/>
</HorizontalLinkBar>
					`}
		</Code>
	</section>
);

export { StateIndicationStory };
