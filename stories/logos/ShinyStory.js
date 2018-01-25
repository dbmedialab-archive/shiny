import React from 'react';
import { DemoContainer } from '../storybook-components';

import {
	Heading,
	HugeHeading,
	ShinyLogo,
} from '../../src';

import { Code } from '../../src/atoms/Code';

const ShinyStory = () => (
	<section>
		<HugeHeading>ShinyLogo</HugeHeading>
		<p>This svg beauty grabs all the space it can get, before displaying the Shiny logo in all its spiraly glory.</p>

		<Heading>Demo</Heading>
		<DemoContainer>
			<ShinyLogo />
		</DemoContainer>

		<Heading>Props</Heading>
		<p>There are none.</p>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import { ShinyLogo } from '@aller/shiny';

<ShinyLogo />
			`}
		</Code>
	</section>
);

export { ShinyStory };
