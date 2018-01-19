import styled from 'styled-components';

// Originally written for the VerticalLinkBar molecule
const VerticalFlexingList = styled.ul`
	display: inline-block;
	padding: 0;
	font-family: ${props => props.theme.variables.mainFont};
	background: ${props => props.background};
	position: relative;
`;

export { VerticalFlexingList };
