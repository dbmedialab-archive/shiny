import React from 'react';

import { DemoContainer } from '../storybook-components';

import LeetTextarea from '../../src/atoms/LeetTextarea';
import Heading, { HugeHeading } from '../../src/atoms/Heading';

import Image from '../../src/atoms/Image';
import BylineImage from '../../src/atoms/BylineImage';
import BylineName from '../../src/atoms/BylineName';

export default () => (
	<section>
		<HugeHeading>Byline name</HugeHeading>

		<Heading>Demo</Heading>
		<DemoContainer>
			<Image src="http://styleguide.dagbladet.no/assets/test/large-q60.jpg" />
			<BylineImage src="http://www.dagbladet.no/meninger/assets/images/bylines/msi.png" />
			<BylineName>Marie Simonsen</BylineName>
		</DemoContainer>

		<Heading>Usage</Heading>
		<LeetTextarea>
			{`
import Image from '/path/to/shiny/atoms/Image';
import BylineImage from '/path/to/shiny/atoms/BylineImage';

<Image src="http://styleguide.dagbladet.no/assets/test/large-q60.jpg" />
<BylineImage src="http://www.dagbladet.no/meninger/assets/images/bylines/msi.png" />
<BylineName>Marie Simonsen</BylineName>
			`}
		</LeetTextarea>
	</section>
);
