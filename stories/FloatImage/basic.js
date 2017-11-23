import React from 'react';

import {
	StoryTitle,
	StorySubtitle,
	DemoContainer,
} from '../storybook-components';

import LeetTextarea from '../../src/atoms/LeetTextarea';

import FloatImage from '../../src/molecules/FloatImage';

export default () => (
	<section>
		<StoryTitle>Float image</StoryTitle>

		<StorySubtitle>Demo</StorySubtitle>
		<DemoContainer>
			<FloatImage width="50%" url="http://styleguide.dagbladet.no/assets/test/978x.jpg" />
		</DemoContainer>

		<StorySubtitle>Usage</StorySubtitle>
		<LeetTextarea>
			{`
import FloatImage from '/path/to/shiny/molecules/FloatImage';

<FloatImage width="50%" src="http://styleguide.dagbladet.no/assets/test/978x.jpg" />
			`}
		</LeetTextarea>
	</section>
);
