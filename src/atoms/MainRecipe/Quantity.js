import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { Col } from '../../atoms/Col';
import { Row } from '../../atoms/Row';

export const Wrapper = styled.div`
	margin: 0.7rem 0;
    font-size: 2.1rem;
    line-height: 3rem;
`;

const commonCss = css`
	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
		font-size: 4.3rem;
		font-family: "Roboto", sans-serif;
		letter-spacing: 1px;
    	line-height: 6rem;
	}
`;

const LightCol = Col.extend`
	${commonCss};
	font-weight: 300;
`;

const BoldCol = Col.extend`
	${commonCss};
	font-weight: bold;
`;

const RowWrapper = styled.section`
	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
		padding-left: 3rem
	}
`;

const LeftAlignedRow = Row.extend`&&{text-align: left;}`;
const LeftAlignedCenteredRow = props => <LeftAlignedRow {...props}  start="md" />;

export const Quantity = props => (
	<RowWrapper>
		<LeftAlignedCenteredRow>
			<meta itemProp="recipeIngredient" content={`${props.amount} ${props.type} ${props.title}`} />
			<LightCol xs={5} md={4}>
				{props.amount} {props.type}
			</LightCol>
			<BoldCol xs={7} md={8}>
				{props.title}
			</BoldCol>
		</LeftAlignedCenteredRow>
	</RowWrapper>
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
