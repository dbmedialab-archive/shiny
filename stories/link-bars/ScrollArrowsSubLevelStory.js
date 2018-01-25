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

const ScrollArrowsSubLevelStory = () => (
	<section>
		<HugeHeading>ScrollArrowsLinkBar which is not a top level component</HugeHeading>
		<p>This will not center the LinkBar as is done on top level compontents.</p>

		<Heading>Demo</Heading>
		<DemoContainer>
			<ScrollArrowsLinkBar
				background={colors.white}
				isTopLevelComponent={false}
			>
				<LinkBarLink linkText="One" url="https://example.com" isActive />
				<LinkBarLink linkText="Two" url="https://example.com" />
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
	background={colors.white}
	isTopLevelComponent={false}
>
	<LinkBarLink linkText="One" url="https://example.com" isActive />
	<LinkBarLink linkText="Two" url="https://example.com" />
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

export { ScrollArrowsSubLevelStory };
