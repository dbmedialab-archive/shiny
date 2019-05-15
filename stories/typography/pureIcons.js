import React from 'react';

import { Code } from '../../src/atoms/Code';

import { Arrow, Heading, Paragraph } from '../../src';

export default () => (
	<section>
		<Heading>Preview</Heading>
		<Paragraph>Left Arrow: <Arrow direction="left" /></Paragraph>
		<Paragraph>Right Arrow: <Arrow direction="right" /></Paragraph>
		<Paragraph>Up Arrow: <Arrow direction="up" /></Paragraph>
		<Paragraph>Down Arrow: <Arrow direction="down" /></Paragraph>
		<Heading>Usage</Heading>
		<Code language="jsx">{`
			import { Arrow, Heading, Paragraph } from '@aller/shiny';

			props:
			direction: oneOf(left, right, up, down);
			layer: thickness of arrow;
			color: color from themes;

			<Arrow direction="left" />
			<Arrow direction="right" />
			<Arrow direction="up" />
			<Arrow direction="down" />
		`}
		</Code>
	</section>
);
