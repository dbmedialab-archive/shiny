import React from 'react';

import { DemoContainer } from '../storybook-components';

import { LeetTextarea } from '../../src/atoms/LeetTextarea';
import { Heading, HugeHeading } from '../../src/atoms/Heading';

import { Image } from '../../src/atoms/Image';
import { BylineImage } from '../../src/atoms/BylineImage';

export default () => (
	<section>
		<HugeHeading>Byline image</HugeHeading>

		<Heading>Demo</Heading>
		<DemoContainer>
			<Image src="http://styleguide.dagbladet.no/assets/test/large-q60.jpg" />
			<BylineImage src="http://www.dagbladet.no/meninger/assets/images/bylines/msi.png" />
		</DemoContainer>

		<Heading>Usage</Heading>
		<LeetTextarea>
			{`
import {
	Image,
	BylineImage,
} from '@aller/shiny';

<Image src="http://styleguide.dagbladet.no/assets/test/large-q60.jpg" />
<BylineImage src="http://www.dagbladet.no/meninger/assets/images/bylines/msi.png" />
			`}
		</LeetTextarea>
	</section>
);
