import React from 'react';

import { Row, Col, HugeHeading, Heading } from '../../src';
import { PaddedGrid as Grid } from '../../src/storybook-decorators/PaddedGrid';
import { Code } from '../../src/atoms/Code';
import { MoreComponent } from '../../src/atoms/MainRecipe/MoreLine';

export default () => (
	<section>
		<Grid>
			<Row>
				<Col xs={12}>
					<HugeHeading>MoreComponent</HugeHeading>
					<Heading>Demo</Heading>
					<MoreComponent />

					<Heading>Usage</Heading>
					<Code language="jsx">
						{`
import { MoreComponent } from '@aller/shiny';

<MoreComponent />
							`}
					</Code>
				</Col>
			</Row>
		</Grid>
	</section>

);
