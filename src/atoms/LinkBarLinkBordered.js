import React from 'react';
import styled from 'styled-components';
import { LinkBarLink } from '..';
import { stringToRGB } from '../utils';

const calculateTextColor = (backgroundColor, theme) => {
	const { r, g, b } = stringToRGB(backgroundColor);
	const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000; // converting to YIQ to determine brightness of background
	return (yiq >= 150) ? theme.colors.type : theme.colors.white;
};

const LinkBarLinkBordered = styled(LinkBarLink)`
	border-radius: 3px;
	border: solid 1px #9b9b9b;	
	letter-spacing: 0.4px;
	color: #7a7a7a;
	margin: 0 5px 5px;
	text-transform: uppercase;
	
	&:after {
   		content: none;
	}
		
	${props => (props.isActive && `
				border-color: ${props.activeBackground || props.theme.colors.primary};
				background-color: ${props.activeBackground || props.theme.colors.primary};
				color: ${calculateTextColor(props.activeBackground || props.theme.colors.primary, props.theme)};
				`
	)}
	
	:hover{
		border-color: ${props => props.activeBackground || props.theme.colors.primary};
		background-color: ${props => props.activeBackground || props.theme.colors.primary};
		color: ${props => calculateTextColor(props.activeBackground || props.theme.colors.primary, props.theme)};
	};
`;

module.exports = { LinkBarLinkBordered };
