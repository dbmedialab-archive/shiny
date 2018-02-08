import React from 'react';

import { DemoContainer } from '../storybook-components';

import { Code } from '../../src/atoms/Code';
import { Heading, HugeHeading } from '../../src/atoms/Heading';

import { BylineWithTwoLines } from '../../src/atoms/BylineWithTwoLines';

export default () => (
	<section>
		<HugeHeading>Byline with two lines</HugeHeading>

		<Heading>Demo</Heading>
		<DemoContainer>
			<BylineWithTwoLines
				name="Dagbladet.no"
				email="hello@dagbladet.no"
				src="https://dbstatic.no/60384708.jpg?imageId=60384708&x=0&y=0&cropw=100.00&croph=100.00&width=496&height=496"
			/>
		</DemoContainer>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import { BylineWithTwoLines } from '@aller/shiny';

<BylineWithTwoLines
				name="Dagbladet.no"
				email="hello@dagbladet.no"
				src="https://dbstatic.no/60384708.jpg?imageId=60384708&x=0&y=0&cropw=100.00&croph=100.00&width=496&height=496"
			/>
			`}
		</Code>
	</section>
);
