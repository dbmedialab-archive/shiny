import React from 'react';

import {
	StoryTitle,
	StorySubtitle,
	DemoContainer,
	SiteSelection,
} from '../storybook-components';

import LeetTextarea from '../../src/atoms/LeetTextarea';

import Kicker from '../../src/atoms/Kicker';
import NativeAdKicker from '../../src/atoms/NativeAdKicker';

export default () => (
	<SiteSelection>
		<section>
			<StoryTitle>Kicker heading</StoryTitle>
			<p>Also called deck, stikktittel.</p>

			<p>There is also a <code>&lt;NativeAdKicker&gt;</code> with a predefined color.</p>

			<StorySubtitle>Demo</StorySubtitle>
			<DemoContainer>
				<Kicker>Kicker</Kicker>
				<Kicker color="teal">Kicker</Kicker>
				<Kicker color="secondaryLight" textColor="type">Kicker</Kicker>
				<NativeAdKicker>Annonsørinnhold: Hurra</NativeAdKicker>
			</DemoContainer>

			<StorySubtitle>Usage</StorySubtitle>
			<LeetTextarea>
				{`
import Kicker from '/path/to/shiny/atoms/Kicker';
import NativeAdKicker from '/path/to/shiny/atoms/NativeAdKicker';

<Kicker>Kicker</Kicker>
<Kicker color="teal">Kicker</Kicker>
<Kicker color="secondaryLight" textColor="type">Kicker</Kicker>
<NativeAdKicker>Annonsørinnhold: Hurra</NativeAdKicker>
				`}
			</LeetTextarea>
			<p>
				The <code>color</code> and <code>textColor</code> props can be any of the colors names in the palette.
				They default to &quot;primary&quot; and &quot;white&quot;.
			</p>
		</section>
	</SiteSelection>
);
