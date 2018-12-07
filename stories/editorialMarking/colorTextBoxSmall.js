import React from 'react';

import {
	Row, Col, HugeHeading, Heading,
} from '../../src';
import { Code } from '../../src/atoms/Code';
import { ColorTextBox } from '../../src/atoms/ColorTextBox';

export default () => (
	<section>
		<Row>
			<Col xs={12}>
				<HugeHeading>Description</HugeHeading>
				<Heading>Demo</Heading>
				<ColorTextBox size="small">
					Helstekt kalkun er en selvfølge på
					middagsbordet ved Thanksgiving, jul
					og nyttår! For en smakfull og saftig
					kalkun anbefaler vi denne oppskriften.
				</ColorTextBox>

				<Heading>Usage</Heading>
				<Code language="jsx">
					{`
import { ColorTextBox } from '@aller/shiny';

<ColorTextBox size="small">
	Lorem ipsum dolor sit amet,
	consectetur adipisicing elit.
	Deserunt doloribus ducimus
	illum, iusto laborum maxime
	optio placeat soluta vitae
	voluptates. Animi ea eos
	labore non officia pariatur
	quaerat similique ut.
</ColorTextBox>
				`}
				</Code>
			</Col>
		</Row>
	</section>
);
