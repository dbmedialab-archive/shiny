import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { LinkBarLinkBase } from '../..';

const Container = LinkBarLinkBase.withComponent('div').extend`
	position: absolute;
	top: 0;
	${props => (props.pointsTo === 'left' ? css`left: 0` : css`right: 0;`)};
	font-weight: 800;
	cursor: pointer;
	z-index: 1;
	background: ${props => props.background};
`;

const Gradient = styled.div`
	background:
		linear-gradient(
			to ${props => props.pointsTo},
			transparent -30%,
			${props => props.background} 100%
		);
	position: absolute;
	top: 0;
	${props => (props.pointsTo === 'left' ? css`right: -60%` : css`left: -60%;`)};
	width: 60%;
	height: 100%;
	cursor: default;
`;

const Arrow = props => (
	<Container {...props}>
		{props.content}
		<Gradient {...props} onClick={(e) => { e.stopPropagation(); }} />
	</Container>
);

Arrow.propTypes = {
	content: PropTypes.string.isRequired,
};

export const LeftScrollArrow = props => (
	<Arrow {...props} pointsTo="left" content="&#8826;" />
);

export const RightScrollArrow = props => (
	<Arrow {...props} pointsTo="right" content="&#8827;" />
);
