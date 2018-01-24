import React from 'react';
import { css } from 'styled-components';

import { LinkBarLinkBase } from '../..';
import { FontIcon } from './FontIcon';

const Arrow = LinkBarLinkBase.withComponent('div').extend`
	position: absolute;
	top: 0;
	${props => (props.pointsTo === 'left' ? css`left: 0` : css`right: 0;`)};
	font-weight: 800;
	cursor: pointer;
	z-index: 1;
	background: ${props => props.background};
`;

export const LeftScrollArrow = props => <Arrow {...props} pointsTo="left"><FontIcon name="Arrow-alt-left" /></Arrow>;
export const RightScrollArrow = props => <Arrow {...props} pointsTo="right"><FontIcon name="Arrow-alt-right" /></Arrow>;
