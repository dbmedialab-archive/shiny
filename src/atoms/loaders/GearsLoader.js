import React from 'react';
import styled from 'styled-components';
import { SvgIcon } from '../SvgIcon';

const SpinningIcon = styled(SvgIcon)`
	.gears-icon-large {
	  	transform-origin: 34% 34%;
	  	animation: rotate 2.0s linear infinite
	}

	.gears-icon-small {
	   transform-origin: 74% 74%;
	   animation: reverseRotate 2.0s linear infinite;
	}

	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		   }
		100% {
		  transform: rotate(360deg);
	   }
	}

	@keyframes reverseRotate {
	   0% {
		  transform: rotate(360deg);
	   }
	   100% {
		  transform: rotate(0);
	   }
	}
`;

const GearsLoader = props => (
	<SpinningIcon name="gears" {...props} />
);
GearsLoader.defaultProps = {
	color: 'primary',
	size: 10,
};

export { GearsLoader };
