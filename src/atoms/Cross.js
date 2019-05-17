import React from 'react';
import styled from '@emotion/styled';
import { getColor } from '../utils/get-color';

const StyledCross = styled.i`
	position: absolute;

	:before, :after {
		position: absolute;
		left: 1.5rem;
		content: "";
		height: ${p => p.size}rem;
		width: ${p => p.layer}rem;
		background-color: ${p => getColor(p.color)};
	}
	:before {
		transform: rotate(45deg);
	}
	:after {
		transform: rotate(-45deg);
	}
`;

const Cross = props => <StyledCross {...props} />;

Cross.defaultProps = {
	size: 2.5,
	layer: 0.2,
	color: 'darkness',
};

export { Cross };
