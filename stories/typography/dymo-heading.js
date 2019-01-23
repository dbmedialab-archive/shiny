import React from 'react';
import { linkTo } from '@storybook/addon-links';

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
		<Paragraph>A variant of the <button type="button" onClick={linkTo('Typography', 'Heading')}>Heading</button> component.</Paragraph>
		<Paragraph>There are four sizes of headings:</Paragraph>
		<ul>
			<li>Small</li>
			<li>Medium</li>
			<li>Large (default)</li>
			<li>XLarge</li>
			<li>Huge</li>
		</ul>
		<Paragraph>The font-sizes will increase on large screens.</Paragraph>

		<Heading>Demo</Heading>
		<DemoContainer>
			<SmallDymoHeading
				ALLCAPS
				{...{ skin }}
			>This is lots and lots of text in a small dymo heading
			</SmallDymoHeading>
			<MediumDymoHeading
				ALLCAPS
				{...{ skin }}
			>This is lots and lots of text in a medium dymo heading
			</MediumDymoHeading>
			<LargeDymoHeading
				ALLCAPS
				{...{ skin }}
			>This is lots and lots of text in a large dymo heading (default)
			</LargeDymoHeading>
			<XLargeDymoHeading
				ALLCAPS
				{...{ skin }}
			>This is lots and lots of text in an X large dymo heading
			</XLargeDymoHeading>
			<HugeDymoHeading ALLCAPS {...{ skin }}>This is lots and lots of text in a huge dymo heading</HugeDymoHeading>
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
