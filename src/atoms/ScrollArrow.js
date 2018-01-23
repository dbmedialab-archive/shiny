import React from 'react';
import { css } from 'styled-components';

import { LinkBarLinkBase } from '../..';

const Arrow = LinkBarLinkBase.withComponent('div').extend`
	line-height: 0;
	font-weight: 800;
	cursor: pointer;
	z-index: 1;
	position: absolute;
	top: 0;
	background: ${props => props.background};
	${props => (props.pointsTo === 'left' ? css`left: 0` : css`right: 0;`)};
`;

export const LeftScrollArrow = props => <Arrow {...props} pointsTo="left">&#8826;</Arrow>;
export const RightScrollArrow = props => <Arrow {...props} pointsTo="right">&#8827;</Arrow>;
