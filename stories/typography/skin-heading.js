import React from 'react';

import { DemoContainer } from '../storybook-components';

import { Code } from '../../src/atoms/Code';

import {
	Heading,
	HugeHeading,
} from '../../src';

// Typography
import {
	SmallSkinHeading,
	MediumSkinHeading,
	LargeSkinHeading,
	XLargeSkinHeading,
	HugeSkinHeading,
} from '../../src/atoms/SkinHeading';

const skin = {
	textColor: 'splashText',
	backgroundColor: 'splashBackground',
	needsPadding: true,
};

export default () => (
	<section>
		<HugeHeading>SkinHeading</HugeHeading>
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
			<SmallSkinHeading {...{ skin }}>This is lots and lots of text in a small heading</SmallSkinHeading>
			<MediumSkinHeading {...{ skin }}>This is lots and lots of text in a medium heading</MediumSkinHeading>
			<LargeSkinHeading {...{ skin }}>This is lots and lots of text in a large heading (default) lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do </LargeSkinHeading>
			<XLargeSkinHeading {...{ skin }}>This is lots and lots of text in an X large heading</XLargeSkinHeading>
			<HugeSkinHeading {...{ skin }}>This is lots and lots of text in a huge heading</HugeSkinHeading>
		</DemoContainer>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import {
	SmallSkinHeading,
	MediumSkinHeading,
	LargeSkinHeading,
	XLargeSkinHeading,
	HugeSkinHeading,
} from '../../src/atoms/SkinHeading';

<SmallSkinHeading >This is lots and lots of text in a small heading</SmallSkinHeading>
<MediumSkinHeading>This is lots and lots of text in a medium heading</MediumSkinHeading>
<LargeSkinHeading >This is lots and lots of text in a large heading (default)</LargeSkinHeading>
<XLargeSkinHeading>This is lots and lots of text in an X large heading</XLargeSkinHeading>
<HugeSkinHeading  >This is lots and lots of text in a huge heading</HugeSkinHeading>
			`}
		</Code>
	</section>
);
