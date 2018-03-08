import React from 'react';

import { Row, Col, HugeHeading, Heading } from '../..';
import { PaddedGrid as Grid } from '../../src/storybook-decorators/PaddedGrid';
import { Code } from '../../src/atoms/Code';
import { ColorTextBox } from '../../src/atoms/MainRecipe/ColorTextBox';

export default () => (
	<section>
		<Grid>
			<Row>
				<Col xs={12}>
					<HugeHeading>Description</HugeHeading>
					<Heading>Demo</Heading>
					<ColorTextBox>
						<span>
						Helstekt kalkun er en selvfølge på
						middagsbordet ved Thanksgiving, jul
						og nyttår! For en smakfull og saftig
						kalkun anbefaler vi denne oppskriften.
						</span>
					</ColorTextBox>

					<Heading>Usage</Heading>
					<Code language="jsx">
						{`
import { ColorTextBox } from '@aller/shiny';

<ColorTextBox textColor="white" bgColor="primary">
	<span>
		Lorem ipsum dolor sit amet,
		consectetur adipisicing elit.
		Deserunt doloribus ducimus
		illum, iusto laborum maxime
		optio placeat soluta vitae
		voluptates. Animi ea eos
		labore non officia pariatur
		quaerat similique ut.
	</span>
</ColorTextBox>
				`}
					</Code>
				</Col>
			</Row>
		</Grid>
	</section>
);
