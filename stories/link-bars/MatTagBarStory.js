import React from 'react';
import { DemoContainer } from '../storybook-components';

import { Code } from '../../src/atoms/Code';

import {
	LinkBarLinkBordered,
	Row,
	Heading,
	HugeHeading,
} from '../../src';

import theme from '../../src/themes/mat';

const { colors } = theme;

const MatTagBarStory = () => (
	<section>
		<HugeHeading>Tag Filter Bar</HugeHeading>
		<p>Example of a filter bar that will be used for tags in MAT project. </p>
		<p>You can specify background color for LinkBarLinkBordered. Default value is theme primary color. </p>

		<Heading>Demo</Heading>
		<DemoContainer background={colors.white}>
			<Row
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
			</Row>
		</DemoContainer>


		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import {
	ScrollArrowsLinkBar,
	LinkBarLinkBordered,
} from '@aller/shiny';

<Row
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
</Row>
			`}
		</Code>
	</section>
);

export { MatTagBarStory };
