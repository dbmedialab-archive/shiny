import React from 'react';

import { Row, Col, HugeHeading, Heading } from '../..';
import { PaddedGrid as Grid } from '../../src/storybook-decorators/PaddedGrid';
import { Code } from '../../src/atoms/Code';
import { Description } from '../../src/atoms/MainRecipe/Description';

export default () => (
	<section>
		<Grid>
			<Row>
				<Col xs={12}>
					<HugeHeading>Description</HugeHeading>
					<Heading>Demo</Heading>
					<Description>
						<span>
						Helstekt kalkun er en selvfølge på
						middagsbordet ved Thanksgiving, jul
						og nyttår! For en smakfull og saftig
						kalkun anbefaler vi denne oppskriften.
						</span>
					</Description>

					<Heading>Usage</Heading>
					<Code language="jsx">
						{`
import { Description } from '@aller/shiny';

<Description textColor="white" bgColor="primary">
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
</Description>
				`}
					</Code>
				</Col>
			</Row>
		</Grid>
	</section>
);
