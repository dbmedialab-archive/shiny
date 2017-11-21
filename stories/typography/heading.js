import React from 'react';

import {
	StoryTitle,
	StorySubtitle,
	DemoContainer,
} from '../storybook-components';

import LeetTextarea from '../../src/atoms/LeetTextarea';

// Typography
import {
	SmallHeading,
	MediumHeading,
	LargeHeading,
	XLargeHeading,
	HugeHeading,
} from '../../src/atoms/Heading';

export default () => (
	<section>
		<StoryTitle>Heading</StoryTitle>
		<p>Also called headline, overskrift.</p>
		<p>There are four sizes of headings:</p>
		<ul>
			<li>Small</li>
			<li>Medium</li>
			<li>Large (default)</li>
			<li>XLarge</li>
			<li>Huge</li>
		</ul>
		<p>The font-sizes will increase on large screens.</p>

		<StorySubtitle>Demo</StorySubtitle>
		<DemoContainer>
			<SmallHeading>This is a small heading</SmallHeading>
			<MediumHeading>This is a medium heading</MediumHeading>
			<LargeHeading>This is a large heading (default)</LargeHeading>
			<XLargeHeading>This is an X large heading</XLargeHeading>
			<HugeHeading>This is a huge heading</HugeHeading>
		</DemoContainer>

		<StorySubtitle>Usage</StorySubtitle>
		<LeetTextarea>
			{`
import {
SmallHeading,
MediumHeading,
LargeHeading,
XLargeHeading,
HugeHeading
} from '/path/to/shared-components/atoms/Heading';

<SmallHeading>Dette er en liten overskrift</SmallHeading>
<MediumHeading>Dette er en middels overskrift</MediumHeading>
<LargeHeading>Dette er en vanlig størrelse overskrift</LargeHeading>
<XLargeHeading>Dette er en ekstra stor overskrift</XLargeHeading>
<HugeHeading>Dette er en ekstra stor overskrift</HugeHeading>
			`}
		</LeetTextarea>
	</section>
);
