import React from 'react';
import { DemoContainer } from '../storybook-components';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { Code } from '../../src/atoms/Code';

// HorizontalLinkBar
import {
	ScrollArrowsLinkBar,
	LinkBarLinkBordered,
} from '../../src';

import theme from '../../src/themes/mat';

const { colors } = theme;

const MatTagBarStory = () => (
	<section>
		<HugeHeading>ScrollArrowsLinkBar</HugeHeading>
		<p>A horizontal navbar that will be used for tags in MAT project. </p>

		<Heading>Demo</Heading>
		<DemoContainer background={colors.white}>
			<ScrollArrowsLinkBar
				background={colors.white}
				arrowColor={colors.primary}
			>
				<LinkBarLinkBordered linkText="Kjøtt" url="#" isActive />
				<LinkBarLinkBordered linkText="Kylling" url="#" />
				<LinkBarLinkBordered linkText="Vegetar" url="#" />
				<LinkBarLinkBordered linkText="Pasta" url="#" />
				<LinkBarLinkBordered linkText="Supper" url="#" />
				<LinkBarLinkBordered linkText="Fisk" url="#" />
				<LinkBarLinkBordered linkText="Pizza" url="#" />
				<LinkBarLinkBordered linkText="Middag" url="#" />
				<LinkBarLinkBordered linkText="Sunn" url="#" />
				<LinkBarLinkBordered linkText="Dessert" url="#" />
				<LinkBarLinkBordered linkText="Kaker" url="#" />
				<LinkBarLinkBordered linkText="Full Width for You" url="#" />
			</ScrollArrowsLinkBar>
		</DemoContainer>


		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import {
	ScrollArrowsLinkBar,
	LinkBarLinkBordered,
} from '@aller/shiny';

<ScrollArrowsLinkBar
	background={colors.white}
	arrowColor={colors.primary}
>
	<LinkBarLinkBordered linkText="Kjøtt" url="#" isActive />
	<LinkBarLinkBordered linkText="Kylling" url="#" />
	<LinkBarLinkBordered linkText="Vegetar" url="#" />
	<LinkBarLinkBordered linkText="Pasta" url="#" />
	<LinkBarLinkBordered linkText="Supper" url="#" />
	<LinkBarLinkBordered linkText="Fisk" url="#" />
	<LinkBarLinkBordered linkText="Pizza" url="#" />
	<LinkBarLinkBordered linkText="Middag" url="#" />
	<LinkBarLinkBordered linkText="Sunn" url="#" />
	<LinkBarLinkBordered linkText="Dessert" url="#" />
	<LinkBarLinkBordered linkText="Kaker" url="#" />
	<LinkBarLinkBordered linkText="Full Width for You" url="#" />
</ScrollArrowsLinkBar>
			`}
		</Code>
	</section>
);

export { MatTagBarStory };
