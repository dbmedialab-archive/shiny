import React from 'react';
import { css } from 'styled-components';

import { LinkBarLinkBase } from '../..';

const Arrow = LinkBarLinkBase.withComponent('div').extend`
	position: absolute;
	top: 0;
	${props => (props.pointsTo === 'left' ? css`left: 0` : css`right: 0;`)};
	font-weight: 800;
	cursor: pointer;
	z-index: 1;
	background: ${props => props.background};
`;

export const LeftScrollArrow = props => <Arrow {...props}>&#8826;</Arrow>;
export const RightScrollArrow = props => <Arrow {...props}>&#8827;</Arrow>;
