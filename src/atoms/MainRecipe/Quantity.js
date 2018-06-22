import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getColor } from '../../utils';

import { Col } from '../../atoms/Col';
import { Row } from '../../atoms/Row';

export const Wrapper = styled.div`
	margin: 3rem 0;
`;

const LightCol = styled(Col)`
	font-weight: 300;
`;

const BoldCol = styled(Col)`
	font-weight: bold;
	& a {
		text-decoration: none;
		color: ${getColor('type')}
	}
`;

const LeftAlignedRow = styled(Row)`&&{text-align: left;}`;
const LeftAlignedCenteredRow = props => <LeftAlignedRow {...props} center="xs" />;

export const Quantity = props => (
	<section>
		<LeftAlignedCenteredRow>
			<meta itemProp="recipeIngredient" content={`${props.amount} ${props.type} ${props.title}`} />
			<LightCol xs={5}>
				{props.amount} {props.type}
			</LightCol>
			<BoldCol xs={7}>
				<a href={`/ingrediens/${props.slug}`}>{props.title}</a>
			</BoldCol>
		</LeftAlignedCenteredRow>
	</section>
);

Quantity.defaultProps = {
	amount: '',
	title: '',
	type: '',
	slug: '',
};

Quantity.propTypes = {
	amount: PropTypes.number,
	title: PropTypes.string,
	type: PropTypes.string,
	slug: PropTypes.string,
};
