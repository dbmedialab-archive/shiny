import React from 'react';

import { DemoContainer } from '../storybook-components';
import { Row } from '../../src/atoms/Row';
import { Col } from '../../src/atoms/Col';

import { Code } from '../../src/atoms/Code';
import { HugeHeading, Heading } from '../../src/atoms/Heading';
// Typography
import {
	UnderlinedHeading,
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
			<Row>
				<Col>
					<UnderlinedHeading>This is the default underlined heading</UnderlinedHeading>
				</Col>
			</Row>
			<Row>
				<Col>
					<UnderlinedSmallHeading>This is a small underlined heading</UnderlinedSmallHeading>
				</Col>
			</Row>
			<Row>
				<Col>
					<UnderlinedMediumHeading>This is a medium underlined heading</UnderlinedMediumHeading>
				</Col>
			</Row>
			<Row>
				<Col>
					<UnderlinedLargeHeading>This is a large underlined heading (default)</UnderlinedLargeHeading>
				</Col>
			</Row>
			<Row>
				<Col>
					<UnderlinedXLargeHeading>This is an X large underlined heading</UnderlinedXLargeHeading>
				</Col>
			</Row>
			<Row>
				<Col>
					<UnderlinedHugeHeading>This is a huge underlined heading</UnderlinedHugeHeading>
				</Col>
			</Row>
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
