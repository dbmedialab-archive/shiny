import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Col } from '../../atoms/Col';
import { Row } from '../../atoms/Row';

export const Wrapper = styled.div`
	margin: 3rem 0;
`;

const LeftAlignedRow = Row.extend`&&{text-align: left;}`;
const LeftAlignedCenteredRow = props => <LeftAlignedRow {...props} center="xs" />;

export const Quantity = props => (
	<section>
		<LeftAlignedCenteredRow>
			<Col xs={3} md={3} lg={3}>
				<span>{props.amount} {props.type}</span>
			</Col>
			<Col xs={9} md={9} lg={9}>
				<span>
					{props.title}
				</span>
			</Col>
		</LeftAlignedCenteredRow>
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
