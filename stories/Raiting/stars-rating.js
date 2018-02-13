import React from 'react';
import { StarsRating } from '../../src/atoms/StarsRating';
import { Row } from '../../lib/atoms/Row';
import { Col } from '../../lib/atoms/Col';
import { HugeHeading } from '../../src/atoms/Heading';
import { Code } from '../../src/atoms/Code';

export default () => (
	<section>
		<HugeHeading>Stars Rating</HugeHeading>
		<a href="https://www.npmjs.com/package/react-stars">Component documentation</a>
		<Row>
			<Col xs={6}>
				<StarsRating size={60} count={5} />
			</Col>
		</Row>

		<Code language="jsx">
			{`
				import { StarsRating } from '../../src/atoms/StarsRating';

				<StarsRating size={60} count={5} />
			`}
		</Code>
	</section>
);
