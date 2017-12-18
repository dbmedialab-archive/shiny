import styled from 'styled-components';

const BlockLink = styled.a`
	display: block;
	color: ${props => props.theme.colors.textColor};
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

export { BlockLink };
