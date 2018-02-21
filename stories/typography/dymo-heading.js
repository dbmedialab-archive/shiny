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

const skin = {
	textColor: 'splashText',
	backgroundColor: 'splashBackground',
	needsPadding: true,
};

export default () => (
	<section>
		<HugeHeading>DymoHeading</HugeHeading>
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
			<SmallDymoHeading {...{ skin }}>This is lots and lots of text in a small heading</SmallDymoHeading>
			<MediumDymoHeading {...{ skin }}>This is lots and lots of text in a medium heading</MediumDymoHeading>
			<LargeDymoHeading {...{ skin }}>This is lots and lots of text in a large heading (default) lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do </LargeDymoHeading>
			<XLargeDymoHeading {...{ skin }}>This is lots and lots of text in an X large heading</XLargeDymoHeading>
			<HugeDymoHeading {...{ skin }}>This is lots and lots of text in a huge heading</HugeDymoHeading>
		</DemoContainer>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import {
	SmallDymoHeading,
	MediumDymoHeading,
	LargeDymoHeading,
	XLargeDymoHeading,
	HugeDymoHeading,
} from '../../src/atoms/DymoHeading';

<SmallDymoHeading >This is lots and lots of text in a small heading</SmallDymoHeading>
<MediumDymoHeading>This is lots and lots of text in a medium heading</MediumDymoHeading>
<LargeDymoHeading >This is lots and lots of text in a large heading (default)</LargeDymoHeading>
<XLargeDymoHeading>This is lots and lots of text in an X large heading</XLargeDymoHeading>
<HugeDymoHeading  >This is lots and lots of text in a huge heading</HugeDymoHeading>
			`}
		</Code>
	</section>
);
