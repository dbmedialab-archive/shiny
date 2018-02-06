import React from 'react';

import { MatLogo } from '../../src/atoms/MatLogo';
import { Col, Row } from '../..';

const MatStory = () => (
	<section>
		<Row>
			<Col xs={2}>
				<MatLogo />
			</Col>
		</Row>
	</section>
);

export { MatStory };
