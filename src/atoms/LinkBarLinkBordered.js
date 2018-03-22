import React from 'react';
import styled from 'styled-components';
import {LinkBarLink} from '..';

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
	
	&:after {
   		content: none;
	}
`;

export const LinkBarLinkBordered = props => <StyledLink {...props} />;

// module.exports = {LinkBarLinkBordered: LinkBarLink};
