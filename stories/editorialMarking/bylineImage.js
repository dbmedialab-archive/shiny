import React from 'react';

import {
	StoryTitle,
	StorySubtitle,
	DemoContainer,
	SiteSelection,
} from '../storybook-components';

import LeetTextarea from '../../src/atoms/LeetTextarea';

import Image from '../../src/atoms/Image';
import BylineImage from '../../src/atoms/BylineImage';

export default () => (
	<SiteSelection>
		<section>
			<StoryTitle>Byline image</StoryTitle>

			<StorySubtitle>Demo</StorySubtitle>
			<DemoContainer>
				<Image src="http://styleguide.dagbladet.no/assets/test/large-q60.jpg" />
				<BylineImage src="http://www.dagbladet.no/meninger/assets/images/bylines/msi.png" />
			</DemoContainer>

			<StorySubtitle>Usage</StorySubtitle>
			<LeetTextarea>
				{`
import Image from '/path/to/shiny/atoms/Image';
import BylineImage from '/path/to/shiny/atoms/BylineImage';

<Image src="http://styleguide.dagbladet.no/assets/test/large-q60.jpg" />
<BylineImage src="http://www.dagbladet.no/meninger/assets/images/bylines/msi.png" />
				`}
			</LeetTextarea>
		</section>
	</SiteSelection>
);
