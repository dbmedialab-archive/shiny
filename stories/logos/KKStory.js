import React from 'react';
import { DemoContainer } from '../storybook-components';

import {
	Heading,
	HugeHeading,
	KKLogo,
} from '../../src';

import { Code } from '../../src/atoms/Code';

const KKStory = () => (
	<section>
		<HugeHeading>KKLogo</HugeHeading>
		<p>This svg beauty grabs all the space it can get, before displaying the Shiny logo in all its spiraly glory.</p>

		<Heading>Demo</Heading>
		<DemoContainer>
			<KKLogo />
		</DemoContainer>

		<Heading>Props</Heading>
		<p>There are none.</p>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import { KKLogo } from '@aller/shiny';

<KKLogo />
			`}
		</Code>
	</section>
);

export { KKStory };
