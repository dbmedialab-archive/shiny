import React from 'react';

import { HugeHeading } from '../../src/atoms/Heading';
import { Code } from '../../src/atoms/Code';
import { DemoContainer } from '../storybook-components';

import {
	LinkBarLink,
	HorizontalLinkBar,
} from '../../src';

const NestedPaddingStory = () => (
	<section>
		<HugeHeading>HorizontalLinkBar with adjustment for nested padding</HugeHeading>
		<Paragraph>The shouldAdjustForNestedPadding prop will add a negative margin to the left and right. This can make it
			easier to put a menu line inside a grid.
		</Paragraph>
		<DemoContainer>
			<HorizontalLinkBar shouldAdjustForNestedPadding>
				<LinkBarLink
					key={1}
					linkText="Adjusted"
					url="#adjusted"
				/>
				<LinkBarLink
					key={2}
					linkText="for"
					url="#for"
				/>
				<LinkBarLink
					key={3}
					isActive
					linkText="nested"
					url="#nested"
				/>
				<LinkBarLink
					key={4}
					linkText="padding"
					url="#padding"
				/>
			</HorizontalLinkBar>
		</DemoContainer>
		<DemoContainer>
			<HorizontalLinkBar>
				<LinkBarLink
					key={1}
					linkText="Not"
					url="#not"
				/>
				<LinkBarLink
					key={2}
					linkText="adjusted"
					url="#adjusted"
				/>
				<LinkBarLink
					key={3}
					linkText="for"
					url="#for"
				/>
				<LinkBarLink
					key={4}
					isActive
					linkText="nested"
					url="#nested"
				/>
				<LinkBarLink
					key={1}
					linkText="padding"
					url="#padding"
				/>
			</HorizontalLinkBar>
		</DemoContainer>
		<Code language="jsx">
			{`
<HorizontalLinkBar
	shouldAdjustForNestedPadding
>
	<LinkBarLink
		key={1}
		linkText="Adjusted"
		url="#adjusted"
	/>
	<LinkBarLink
		key={2}
		linkText="for"
		url="#for"
	/>
</HorizontalLinkBar>
			`}
		</Code>
	</section>
);

export { NestedPaddingStory };
