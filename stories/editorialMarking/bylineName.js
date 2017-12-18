import React from 'react';

import { DemoContainer } from '../storybook-components';

import { Code } from '../../src/atoms/Code';
import { Heading, HugeHeading } from '../../src/atoms/Heading';

import { Image } from '../../src/atoms/Image';
import { BylineImage } from '../../src/atoms/BylineImage';
import { BylineName } from '../../src/atoms/BylineName';

export default () => (
	<section>
		<HugeHeading>Byline name</HugeHeading>

		<Heading>Demo</Heading>
		<DemoContainer>
			<Image src="https://styleguide.dagbladet.no/assets/test/large-q60.jpg" />
			<BylineImage
				src="https://dbstatic.no/60384708.jpg?imageId=60384708&x=0&y=0&cropw=100.00&croph=100.00&width=496&height=496"
			/>
			<BylineName>Marie Simonsen</BylineName>
		</DemoContainer>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import {
	Image,
	BylineImage,
} from '@aller/shiny';

<Image src="https://styleguide.dagbladet.no/assets/test/large-q60.jpg" />
<BylineImage
	src="https://dbstatic.no/60384708.jpg?imageId=60384708&x=0&y=0&cropw=100.00&croph=100.00&width=496&height=496"
/>
<BylineName>Marie Simonsen</BylineName>
			`}
		</Code>
	</section>
);
