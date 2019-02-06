import React from 'react';

import { DemoContainer } from '../storybook-components';
import { Code } from '../../src/atoms/Code';

import {
	Heading, HugeHeading,
	Paragraph,
	HorizontalLinkBar,
	LinkBarLink,
} from '../../src';

const NoPaddingStory = () => (
	<section>
		<HugeHeading>HorizontalLinkBar without padding</HugeHeading>
		<Heading>Remove the padding</Heading>
		<Paragraph>Use the <code>shouldHavePadding</code> prop to remove the left
			and right padding in the link bar.
		</Paragraph>
		<DemoContainer>
			<HorizontalLinkBar shouldHavePadding={false}>
				<LinkBarLink linkText="Siste nytt" />
				<LinkBarLink linkText="Lokale nyheter" />
				<LinkBarLink linkText="Sport" />
			</HorizontalLinkBar>
		</DemoContainer>
		<Code language="jsx">
			{`
<HorizontalLinkBar shouldHavePadding={false}>
	<LinkBarLink linkText="Siste nytt" />
	<LinkBarLink isActive linkText="Lokale nyheter" />
	<LinkBarLink linkText="Sport" />
</HorizontalLinkBar>
			`}
		</Code>

		<Heading>.3rem ad adjustment</Heading>
		<Paragraph>In addition, we have by default added a .3rem padding adjustment to help our grid align with common ad
			formats. You can remove this extra padding by setting the <code>isTopLevelComponent</code> prop
			to <code>false</code>.
		</Paragraph>
		<DemoContainer>
			<HorizontalLinkBar
				shouldHavePadding={false}
				isTopLevelComponent={false}
			>
				<LinkBarLink linkText="Siste nytt" />
				<LinkBarLink isActive linkText="Lokale nyheter" />
				<LinkBarLink linkText="Sport" />
			</HorizontalLinkBar>
		</DemoContainer>
		<DemoContainer>
			<HorizontalLinkBar
				shouldHavePadding={false}
				isTopLevelComponent={false}
			>
				<LinkBarLink linkText="Siste nytt" />
				<LinkBarLink isActive linkText="Lokale nyheter" />
				<LinkBarLink linkText="Sport" />
			</HorizontalLinkBar>
		</DemoContainer>
		<Code language="jsx">
			{`
<HorizontalLinkBar shouldHavePadding={false} isTopLevelComponent={false}>
	<LinkBarLink linkText="Siste nytt" />
	<LinkBarLink isActive linkText="Lokale nyheter" />
	<LinkBarLink linkText="Sport" />
</HorizontalLinkBar>
			`}
		</Code>

		<Heading>Without props</Heading>
		<Paragraph>This section is here just to help you compare the effects of the props.</Paragraph>
		<DemoContainer>
			<HorizontalLinkBar>
				<LinkBarLink linkText="Siste nytt" />
				<LinkBarLink isActive linkText="Lokale nyheter" />
				<LinkBarLink linkText="Sport" />
			</HorizontalLinkBar>
		</DemoContainer>
		<Code language="jsx">
			{`
<HorizontalLinkBar shouldHavePadding={false} isTopLevelComponent={false}>
	<LinkBarLink linkText="Siste nytt" />
	<LinkBarLink isActive linkText="Lokale nyheter" />
	<LinkBarLink linkText="Sport" />
</HorizontalLinkBar>
			`}
		</Code>
	</section>
);

export { NoPaddingStory };
