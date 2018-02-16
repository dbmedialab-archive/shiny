import React from 'react';

import { DemoContainer } from '../storybook-components';

import { Code } from '../../src/atoms/Code';

import {
	Heading,
	HugeHeading,
} from '../../src';

// Typography
import {
	SmallDymoHeading,
	MediumDymoHeading,
	LargeDymoHeading,
	XLargeDymoHeading,
	HugeDymoHeading,
} from '../../src/atoms/DymoHeading';

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
			<SmallDymoHeading >This is lots and lots of text in a small heading</SmallDymoHeading>
			<MediumDymoHeading>This is lots and lots of text in a medium heading</MediumDymoHeading>
			<LargeDymoHeading >This is lots and lots of text in a large heading (default)</LargeDymoHeading>
			<XLargeDymoHeading>This is lots and lots of text in an X large heading</XLargeDymoHeading>
			<HugeDymoHeading  >This is lots and lots of text in a huge heading</HugeDymoHeading>
		</DemoContainer>

		<Heading>Usage</Heading>
		<Code language="jsx">
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
