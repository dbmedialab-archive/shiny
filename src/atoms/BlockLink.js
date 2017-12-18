import styled from 'styled-components';

const BlockLink = styled.a`
	display: block;
	color: ${props => this.props.theme.colors.textColor};
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

export { BlockLink };
