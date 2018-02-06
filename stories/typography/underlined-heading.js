import React from 'react';

import { DemoContainer } from '../storybook-components';

import { Code } from '../../src/atoms/Code';
import { HugeHeading, Heading} from '../../src/atoms/Heading';
// Typography
import { UnderlinedHeading,
	UnderlinedSmallHeading,
	UnderlinedMediumHeading,
	UnderlinedLargeHeading,
	UnderlinedXLargeHeading,
	UnderlinedHugeHeading,
} from '../../src/atoms/UnderlinedHeading';

export default () => (
	<section>
		<HugeHeading>Underlined heading</HugeHeading>
		<p>Also called headline, overskrift.</p>
		<p>There are four sizes of underlined headings:</p>
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
			<UnderlinedSmallHeading>This is a small underlined heading</UnderlinedSmallHeading>
			<UnderlinedMediumHeading>This is a medium underlined heading</UnderlinedMediumHeading>
			<UnderlinedLargeHeading>This is a large underlined heading (default)</UnderlinedLargeHeading>
			<UnderlinedXLargeHeading>This is an X large underlined heading</UnderlinedXLargeHeading>
			<UnderlinedHugeHeading>This is a huge underlined heading</UnderlinedHugeHeading>
		</DemoContainer>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import {
	UnderlinedSmallHeading,
	UnderlinedMediumHeading,
	UnderlinedLargeHeading,
	UnderlinedXLargeHeading,
	UnderlinedHugeHeading
} from '@aller/shiny';

<UnderlinedSmallHeading>Dette er en liten overskrift</UnderlinedSmallHeading>
<UnderlinedMediumHeading>Dette er en middels overskrift</UnderlinedMediumHeading>
<UnderlinedLargeHeading>Dette er en vanlig størrelse overskrift</UnderlinedLargeHeading>
<UnderlinedXLargeHeading>Dette er en ekstra stor overskrift</UnderlinedXLargeHeading>
<UnderlinedHugeHeading>Dette er en ekstra stor overskrift</UnderlinedHugeHeading>
			`}
		</Code>
	</section>
);
