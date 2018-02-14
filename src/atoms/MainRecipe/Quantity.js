import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Col } from '../../atoms/Col';
import { Row } from '../../atoms/Row';

export const Wrapper = styled.div`
	margin: 3rem 0;
`;

export const Quantity = props => (
	<section>
		<Row>
			<Col xs={3} md={3} lg={2}>
				<span>{props.amount} {props.type}</span>
			</Col>
			<Col xs={9} md={9} lg={10}>
				<span>
					{props.title}
				</span>
			</Col>
		</Row>
	</section>
);

Quantity.defaultProps = {
	amount: '',
	title: '',
	type: '',
};

Quantity.propTypes = {
	amount: PropTypes.number,
	title: PropTypes.string,
	type: PropTypes.string,
};

