import React from 'react';

import { HugeHeading } from '../../src/atoms/Heading';
import { Code } from '../../src/atoms/Code';
import { DemoContainer } from '../storybook-components';

import {
	LinkBarLink,
	HorizontalLinkBar,
} from '../../src';

import theme from '../../src/themes/default-theme';

const { colors } = theme;

const GradientBackgroundStory = () => (
	<section>
		<HugeHeading>HorizontalLinkBar with gradient background</HugeHeading>

		<DemoContainer>
			<HorizontalLinkBar
				background={`linear-gradient(0deg, ${colors[colors.skinColors.splashBackground]}, ${colors.white})`}
			>
				<LinkBarLink
					key={1}
					linkText="Oh yeah"
					url="#yeah"
				/>
				<LinkBarLink
					key={2}
					isActive
					linkText="It's a gradient"
					url="#gradient"
				/>
			</HorizontalLinkBar>
		</DemoContainer>
		<DemoContainer>
			<HorizontalLinkBar
				background={`linear-gradient(0deg, ${colors.grayTint}, ${colors.white} .1rem)`}
			>
				<LinkBarLink
					key={1}
					linkText="A"
					url="#a"
				/>
				<LinkBarLink
					key={2}
					linkText=".1rem"
					url="#.1rem"
				/>
				<LinkBarLink
					key={3}
					linkText="gradient"
					url="#gradient"
				/>
				<LinkBarLink
					key={4}
					isActive
					linkText="simulates"
					url="#simulates"
				/>
				<LinkBarLink
					key={5}
					linkText="a border"
					url="#border"
				/>
			</HorizontalLinkBar>
		</DemoContainer>
		<Code language="jsx">
			{`
<HorizontalLinkBar
	background={\`linear-gradient(
		0deg,
		\${colors[colors.skinColors.splashBackground]},
		${colors.white} .1rem
	)\`}
>
	<LinkBarLink
		key={1}
		linkText="Oh yeah"
		url="#yeah"
	/>
	<LinkBarLink
		key={2}
		isActive
		linkText="It's a gradient"
		url="#gradient"
	/>
</HorizontalLinkBar>
			`}
		</Code>
	</section>
);

export { GradientBackgroundStory };
