import React from 'react';
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

const ScrollArrowsGradientBackground = () => (
	<section>
		<HugeHeading>ScrollArrowsLinkBar</HugeHeading>
		<p>... which have gradient background</p>
		<p>A ScrollArrowsLinkBar is a HorizontalLinkBar with clickable arrows for scrolling.</p>

		<Heading>Demo</Heading>
		<DemoContainer>
			<ScrollArrowsLinkBar
				background={`linear-gradient(0deg, ${colors.grayTint}, ${colors.white} .1rem)`}
				shouldAdjustForNestedPadding
				drawRightArrowInitially
				arrowGradientRgbBackgroundValues={[255, 255, 255]}
				arrowGradientHeight="97%"
			>
				<LinkBarLink linkText="One long link" url="https://example.com" isActive />
				<LinkBarLink linkText="Two long link" url="https://example.com" />
				<LinkBarLink linkText="Three long link" url="https://example.com" />
				<LinkBarLink linkText="Four long link" url="https://example.com" />
				<LinkBarLink linkText="Five long link" url="https://example.com" />
				<LinkBarLink linkText="Six long link" url="https://example.com" />
				<LinkBarLink linkText="Seven long link" url="https://example.com" />
				<LinkBarLink linkText="Eight long link" url="https://example.com" />
				<LinkBarLink linkText="Nine long link" url="https://example.com" />
				<LinkBarLink linkText="aaa long link" url="https://example.com" />
				<LinkBarLink linkText="bbb long link" url="https://example.com" />
				<LinkBarLink linkText="ccc long link" url="https://example.com" />
				<LinkBarLink linkText="ddd long link" url="https://example.com" />
				<LinkBarLink linkText="eee long link" url="https://example.com" />
				<LinkBarLink linkText="fff long link" url="https://example.com" />
				<LinkBarLink linkText="ggg long link" url="https://example.com" />
				<LinkBarLink linkText="hhh long link" url="https://example.com" />
				<LinkBarLink linkText="Full Width for You" url="https://example.com" />
			</ScrollArrowsLinkBar>
		</DemoContainer>


		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import {
	ScrollArrowsLinkBar,
	LinkBarLink,
} from '@aller/shiny';

<ScrollArrowsLinkBar
	background={\`linear-gradient(0deg, \${colors.grayTint}, \${colors.white} .1rem)\`}
	shouldAdjustForNestedPadding
	drawRightArrowInitially
	arrowGradientBackground={colors.white}
	arrowGradientHeight="97%"
>
	<LinkBarLink linkText="One long link" url="https://example.com" isActive />
	<LinkBarLink linkText="Two long link" url="https://example.com" />
	<LinkBarLink linkText="Three long link" url="https://example.com" />
	<LinkBarLink linkText="Four long link" url="https://example.com" />
	<LinkBarLink linkText="Five long link" url="https://example.com" />
	<LinkBarLink linkText="Six long link" url="https://example.com" />
	<LinkBarLink linkText="Seven long link" url="https://example.com" />
	<LinkBarLink linkText="Eight long link" url="https://example.com" />
	<LinkBarLink linkText="Nine long link" url="https://example.com" />
	<LinkBarLink linkText="aaa long link" url="https://example.com" />
	<LinkBarLink linkText="bbb long link" url="https://example.com" />
	<LinkBarLink linkText="ccc long link" url="https://example.com" />
	<LinkBarLink linkText="ddd long link" url="https://example.com" />
	<LinkBarLink linkText="eee long link" url="https://example.com" />
	<LinkBarLink linkText="fff long link" url="https://example.com" />
	<LinkBarLink linkText="ggg long link" url="https://example.com" />
	<LinkBarLink linkText="hhh long link" url="https://example.com" />
	<LinkBarLink linkText="Full Width for You" url="https://example.com" />
</ScrollArrowsLinkBar>
			`}
		</Code>
	</section>
);

export { ScrollArrowsGradientBackground };
