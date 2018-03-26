import React from 'react';
import styled from 'styled-components';
import { LinkBarLink } from '..';
import { stringToRGB } from '../utils';

const calculateTextColor = (backgroundColor, theme) => {
	const { r, g, b } = stringToRGB(backgroundColor);
	const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000; // converting to YIQ to determine brightness of background
	return (yiq >= 150) ? theme.colors.type : theme.colors.white;
};

// const rgbToHsl = (color) => {
// 	const { r, g, b } = stringToRGB(color);
// 	let
// 		min = Math.min(r, g, b),
// 		max = Math.max(r, g, b),
// 		diff = max - min,
// 		h = 0,
// 		s = 0,
// 		l = (min + max) / 2;
//
// 	if (diff != 0) {
// 		s = l < 0.5 ? diff / (max + min) : diff / (2 - max - min);
//
// 		h = (r == max ? (g - b) / diff : g == max ? 2 + (b - r) / diff : 4 + (r - g) / diff) * 60;
// 	}
// 	console.log(h, s, l);
// 	return [h, s, l];
// };


const StyledLink = styled(LinkBarLink)`
	border-radius: 3px;
	border: solid 1px #9b9b9b;	
	font-family: Cabin;
	font-weight: 500;
	letter-spacing: 0.4px;
	text-align: center;
	color: #7a7a7a;
	margin: 0 4px;
	box-sizing: border-box;
	
	:hover{
	    background: #5f5f5f1a;
	}
	&:after {
   		content: none;
	}
	
	${(props) => {
		console.log(props);
		const aaa = (props.isActive && `
			border: none;
			color: ${calculateTextColor(props.activeBackground, props.theme)};
			
			&:hover{
	    		background: hsl(${props.activeBackground});
			}
			`
		);
		console.log(aaa);
		return aaa;
	}
}
`;

export const LinkBarLinkBordered = props => <StyledLink {...props} />;

// module.exports = {LinkBarLinkBordered: LinkBarLink};
