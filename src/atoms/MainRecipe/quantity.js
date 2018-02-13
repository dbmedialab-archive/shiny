import React from 'react';

import { Col } from '../../atoms/Col';
import { Row } from '../../atoms/Row';

export const Quantity = props => (
	<section>
		<Row>
			<Col xs={3} md={2} lg={1}>
				<span> {props.amount} </span>
			</Col>
			<Col xs={9} md={10} lg={11}>
				<span>
					{props.name}
				</span>
			</Col>
		</Row>
	</section>
);
