import React from 'react';

import SiteSelection from '../SiteSelection';

import {
	StoryTitle,
	StorySubtitle,
    DemoContainer
} from '../styles/storybook-styles';

import LeetTextarea from '../../src/atoms/LeetTextarea';

import Kicker from '../../src/atoms/Kicker';

export default () => (
	<SiteSelection>
		<section>
			<StoryTitle>Kicker heading</StoryTitle>
			<p>Also called deck, stikktittel.</p>

			<StorySubtitle>Demo</StorySubtitle>
			<DemoContainer>
                <Kicker>Kicker</Kicker>
			</DemoContainer>

			<StorySubtitle>Usage</StorySubtitle>
			<LeetTextarea>
				{`
import Kicker from '/path/to/shared-components/atoms/Kicker';

<Kicker>Kicker</Kicker>
        `}
			</LeetTextarea>

		</section>
	</SiteSelection>
);
