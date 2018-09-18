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

const SkinnedBorderStory = () => (
	<section>
		<HugeHeading>LinkBarLink</HugeHeading>

		<Heading>Demo</Heading>
		<p>If the <code>linkText</code> prop corresponds with a property that exists in your theme
					under <code>colors.skinColors</code>, then that color will be used for the default state indicating bottom
					border. Hover inactive items for an animated effect.
		</p>
		<DemoContainer>
			<HorizontalLinkBar backgroundColor="white">
				<LinkBarLink linkText="Sport" url="https://example.com" />
				<LinkBarLink linkText="Underholdning" url="https://example.com" />
				<LinkBarLink linkText="Non-corresponding linkText defaults to primary color" url="https://example.com" />
				<LinkBarLink isActive linkText="Sport" url="https://example.com" />
				<LinkBarLink isActive linkText="Underholdning" url="https://example.com" />
				<LinkBarLink isActive linkText="Primary" url="https://example.com" />
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
	<LinkBarLink linkText="Sport" url="https://example.com" />
	<LinkBarLink linkText="Underholdning" url="https://example.com" />
	<LinkBarLink linkText="Non-corresponding linkText defaults to primary color" url="https://example.com" />
	<LinkBarLink isActive linkText="Sport" url="https://example.com" />
	<LinkBarLink isActive linkText="Underholdning" url="https://example.com" />
	<LinkBarLink isActive linkText="Primary" url="https://example.com" />
</HorizontalLinkBar>
						`}
		</Code>
	</section>
);

export { SkinnedBorderStory };
