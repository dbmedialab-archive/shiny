import React from 'react';

import { DemoContainer } from '../storybook-components';

import { Code } from '../../src/atoms/Code';

// Typography
import { Heading,
	SmallHeading,
	MediumHeading,
	LargeHeading,
	XLargeHeading,
	HugeHeading,
} from '../../src/atoms/Heading';

export default () => (
	<section>
		<HugeHeading>Heading</HugeHeading>
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

		<Heading>Demo</Heading>
		<DemoContainer>
			<SmallHeading>This is a small heading</SmallHeading>
			<MediumHeading>This is a medium heading</MediumHeading>
			<LargeHeading>This is a large heading (default)</LargeHeading>
			<XLargeHeading>This is an X large heading</XLargeHeading>
			<HugeHeading>This is a huge heading</HugeHeading>
		</DemoContainer>

		<Heading>Usage</Heading>
		<Code>
			{`
import {
	SmallHeading,
	MediumHeading,
	LargeHeading,
	XLargeHeading,
	HugeHeading
} from '@aller/shiny';

<SmallHeading>Dette er en liten overskrift</SmallHeading>
<MediumHeading>Dette er en middels overskrift</MediumHeading>
<LargeHeading>Dette er en vanlig størrelse overskrift</LargeHeading>
<XLargeHeading>Dette er en ekstra stor overskrift</XLargeHeading>
<HugeHeading>Dette er en ekstra stor overskrift</HugeHeading>
			`}
		</Code>
	</section>
);
