import React from 'react';

import { Grid, Row, Col, HugeHeading, Heading } from '../..';
import { PaddedGrid } from '../../src/storybook-decorators/PaddedGrid';
import { Code } from '../../src/atoms/Code';

const SingleIngredientStory = ({ ...rest }) => (
	<section>
		<PaddedGrid>
			<Row>
				<Col xs={12}>
					<HugeHeading>Single Ingredient</HugeHeading>
					<p>A page displaying a single ingredient that can be used in recipes.</p>
					<Heading>Demo</Heading>
				</Col>
			</Row>
		</PaddedGrid>

		<Grid fluid>
			<Row>
				<Col xs={12} md={6} />
			</Row>
		</Grid>

		<Grid>
			<Row>
				<Col xs={12}>
					<Heading>Usage</Heading>
					<Code language="jsx">
						{`
import { Grid, Row, Col } from '@aller/shiny';
						`}
					</Code>
				</Col>
			</Row>
		</Grid>
	</section>
);

export default SingleIngredientStory;
