import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { LinkBarLinkBase } from '../..';

const hexToRgba = (hex, opacity) => {
	// http://stackoverflow.com/a/5624139
	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, (m, r, g, b) => {
		return r + r + g + g + b + b;
	});

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	if (!result) {
		return `rgba(255, 255, 255, ${opacity})`;
	}

	const rgb = result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16),
	} : null;

	return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
};

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
			to ${props => ((props.pointsTo === 'left') ? 'left' : 'right')},
			${props => hexToRgba(props.background, 0.3)} 0%,
			${props => hexToRgba(props.background, 1)} 100%
		);
	position: absolute;
	top: 0;
	${props => (props.pointsTo === 'left' ? css`right: -70%` : css`left: -70%;`)};
	width: 70%;
	height: 100%;
`;

const Arrow = props => (
	<Container {...props}>
		{props.content}
		<Gradient {...props} />
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
