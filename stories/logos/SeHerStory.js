import React from 'react';
import { DemoContainer } from '../storybook-components';

import {
	Heading,
	HugeHeading,
	SeHerLogo,
} from '../../src';

import { Code } from '../../src/atoms/Code';

const SeHerStory = () => (
	<section>
		<HugeHeading>SeHerLogo</HugeHeading>
		<Paragraph>This svg beauty grabs all the space it can get, before displaying the SeHer logo in all its outwards exploding
			glory.
		</Paragraph>

		<Heading>Demo</Heading>
		<DemoContainer>
			<SeHerLogo />
		</DemoContainer>

		<Heading>Props</Heading>
		<Paragraph>There are none.</Paragraph>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import { SeHerLogo } from '@aller/shiny';

<SeHerLogo />
			`}
		</Code>
	</section>
);

export { SeHerStory };
