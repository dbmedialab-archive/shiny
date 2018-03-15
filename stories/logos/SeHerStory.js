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
		<p>This svg beauty grabs all the space it can get, before displaying the SeHer logo in all its outwards exploding
			glory.
		</p>

		<Heading>Demo</Heading>
		<DemoContainer>
			<SeHerLogo />
		</DemoContainer>

		<Heading>Props</Heading>
		<p>There are none.</p>

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
