import React from 'react';

import { DemoContainer } from '../storybook-components';

import { Code } from '../../src/atoms/Code';

// Typography
import {
	Heading,
	XSmallHeading,
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
			<li>XSmall</li>
			<li>Small</li>
			<li>Medium</li>
			<li>Large (default)</li>
			<li>XLarge</li>
			<li>Huge</li>
		</ul>
		<p>The font-sizes will increase on large screens.</p>

		<Heading>Demo</Heading>
		<DemoContainer>
			<XSmallHeading>This is an X small heading that is long enough to cover two
				lines, as it has many words in it to convey loads of meaning
			</XSmallHeading>
			<p>Paragraph</p>
			<SmallHeading>This is a small heading that is long enough to cover two
				lines, as it has many words in it to convey loads of meaning
			</SmallHeading>
			<p>Paragraph</p>
			<MediumHeading>This is a medium heading that is long enough to cover two
				lines, as it has many words in it to convey loads of meaning
			</MediumHeading>
			<p>Paragraph</p>
			<LargeHeading>This is a large heading that is long enough to cover two
				lines, as it has many words in it to convey loads of meaning (default size)
			</LargeHeading>
			<p>Paragraph</p>
			<XLargeHeading>This is an X large heading that is long enough to cover two
				lines, as it has many words in it to convey loads of meaning
			</XLargeHeading>
			<p>Paragraph</p>
			<HugeHeading>This is a huge heading that is long enough to cover two
				lines, as it has many words in it to convey loads of meaning
			</HugeHeading>
			<p>Paragraph</p>
		</DemoContainer>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import {
	XSmallHeading,
	SmallHeading,
	MediumHeading,
	LargeHeading,
	XLargeHeading,
	HugeHeading
} from '@aller/shiny';

<XSmallHeading>Dette er en ekstra liten overskrift</XSmallHeading>
<SmallHeading>Dette er en liten overskrift</SmallHeading>
<MediumHeading>Dette er en middels overskrift</MediumHeading>
<LargeHeading>Dette er en vanlig størrelse overskrift</LargeHeading>
<XLargeHeading>Dette er en ekstra stor overskrift</XLargeHeading>
<HugeHeading>Dette er en ekstra stor overskrift</HugeHeading>
			`}
		</Code>
	</section>
);
