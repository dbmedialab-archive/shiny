import React from 'react';
import styled from '@emotion/styled';
import { SvgIcon } from '../SvgIcon';

const StyledLoader = styled.div`
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
	<StyledLoader>
		<SvgIcon color="primary" name="gears" size={10} {...props} />
	</StyledLoader>
);

export { GearsLoader };
