import React from 'react';

import { Code } from '../../src/atoms/Code';

import {
	Arrow, Cross, Heading, Paragraph,
} from '../../src';

export default () => (
	<section>
		<Heading>Preview</Heading>
		<Paragraph>Left Arrow: <Arrow direction="left" /></Paragraph>
		<Paragraph>Right Arrow: <Arrow direction="right" /></Paragraph>
		<Paragraph>Up Arrow: <Arrow direction="up" /></Paragraph>
		<Paragraph>Down Arrow: <Arrow direction="down" /></Paragraph>

		<Paragraph>Close icon: <Cross /></Paragraph>
		<Heading>Usage</Heading>
		<Code language="jsx">{`
			import { Arrow } from '@aller/shiny';

			props:
			direction: oneOf(left, right, up, down);
			layer: thickness of arrow | number;
			color: color from themes | string;

			<Arrow direction="left" />
			<Arrow direction="right" />
			<Arrow direction="up" />
			<Arrow direction="down" />

			import { Cross } from '@aller/shiny';

			props:
			size: number;
			layer: thickness of arrow | number;
			color: color from themes | string;
		`}
		</Code>
	</section>
);
