import styled from '@emotion/styled';

const LargeScreenText = styled.span`
	display: none;

	@media (min-width: ${props => props.theme.variables.largeWidth}) {
		display: inline;
	}
`;

export default LargeScreenText;
