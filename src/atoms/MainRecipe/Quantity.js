import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { getColor } from '../../utils';

import { Col } from '../Col';
import { Row } from '../Row';

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

export const Quantity = ({
	amount,
	slug,
	title,
	type,
	...rest
}) => (
	<section {...rest}>
		<LeftAlignedCenteredRow>
			<meta itemProp="recipeIngredient" content={`${amount} ${type} ${title}`} />
			<LightCol xs={5}>
				{amount} {type}
			</LightCol>
			<BoldCol xs={7}>
				<a href={`/ingrediens/${slug}`}>{title}</a>
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
