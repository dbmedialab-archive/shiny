import React from 'react';

import Heading, { HugeHeading } from '../../src/atoms/Heading';
import { DemoContainer } from '../storybook-components';

import LeetTextarea from '../../src/atoms/LeetTextarea';

import FloatImage from '../../src/molecules/FloatImage';

export default () => (
	<section>
		<HugeHeading>Float image (right)</HugeHeading>

		<Heading>Demo</Heading>
		<p>
			Images can be floated left or right with the <code>float</code> prop
			but must be accompanied by a <code>width</code> prop with % units.
		</p>

		<DemoContainer>
			<FloatImage float="right" width="50%" url="http://styleguide.dagbladet.no/assets/test/978x.jpg" />
			<Heading>Politiet vil fengsle SOS Rasisme-leder i fire uker</Heading>
		</DemoContainer>

		<Heading>Usage</Heading>
		<LeetTextarea>
			{`
import FloatImage from '/path/to/shiny/molecules/FloatImage';
import Heading from '/path/to/shiny/atoms/Heading';

<FloatImage float="right" width="50%" src="http://styleguide.dagbladet.no/assets/test/978x.jpg" />
<Heading>Politiet vil fengsle SOS Rasisme-leder i fire uker</Heading>
			`}
		</LeetTextarea>
	</section>
);
