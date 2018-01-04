import styled from 'styled-components';

const BlockLink = styled.a`
	position: relative;
	display: block;
	color: ${props => props.theme.colors.textColor};
	text-decoration: none;
	overflow: hidden;
	outline: none;

	&:hover {
		text-decoration: underline;
	}
`;

export { BlockLink };
