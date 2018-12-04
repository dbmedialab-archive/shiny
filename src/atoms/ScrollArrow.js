import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { getColor } from '../utils';
import { LinkBarElementBase } from './LinkBarElementBase';
import { FontIcon } from './FontIcon';

const ArrowBase = LinkBarElementBase.withComponent('div');
const Arrow = styled(ArrowBase)`
	position: absolute;
	top: 0;
	${props => (props.pointsTo === 'left' ? css`left: 0` : css`right: 0;`)};
	font-weight: 800;
	cursor: pointer;
	z-index: 9;
	background: ${props => (props.backgroundColor ? getColor(props.backgroundColor)(props) : props.background)};

	/* ::before is used to add gradient shading beside the arrow */
	&&::before {
		background:
			linear-gradient(
				to ${props => props.pointsTo},
				${props => (`rgba(
					${props.arrowGradientRgbBackgroundValues[0] || 255},
					${props.arrowGradientRgbBackgroundValues[1] || 255},
					${props.arrowGradientRgbBackgroundValues[2] || 255},
					.3) 0%,`)
}
				${props => (`rgba(
					${props.arrowGradientRgbBackgroundValues[0] || 255},
					${props.arrowGradientRgbBackgroundValues[1] || 255},
					${props.arrowGradientRgbBackgroundValues[2] || 255},
					1) 70%`)
}
			);
		position: absolute;
		top: 0;
		${props => (props.pointsTo === 'left' ? css`right: -60%` : css`left: -60%;`)};
		width: 60%;
		height: ${props => (props.arrowGradientHeight ? props.arrowGradientHeight : '100%')};
		cursor: default;
		content: '';
	}
`;

export const LeftScrollArrow = props => <Arrow {...props} pointsTo="left"><FontIcon name="arrow-alt-left" /></Arrow>;
export const RightScrollArrow = props => <Arrow {...props} pointsTo="right"><FontIcon name="arrow-alt-right" /></Arrow>;
