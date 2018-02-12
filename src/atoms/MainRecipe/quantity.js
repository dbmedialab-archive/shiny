import React from 'react';
import styled from 'styled-components';

import { Col } from '../../atoms/Col';
import { Row } from '../../atoms/Row';

export const Quantity = props => (
	<section>
		<Row>
			<Col xs={12} md={1}>
				<span>
					1 ss
				</span>
			</Col>
			<Col xs={12} md={3}>
				<span>
					margarin <i>(eller olje til steking)</i>
				</span>
			</Col>
		</Row>
	</section>
);
