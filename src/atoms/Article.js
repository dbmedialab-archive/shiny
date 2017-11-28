import Styled from 'styled-components';

export default Styled.article`
	margin-top: 40px;
	margin-left: calc(${props => props.theme.variables.horizontalBase} / 2);
	margin-right: calc(${props => props.theme.variables.horizontalBase} / 2);
	margin-bottom: ${props => props.theme.variables.verticalBase};
`;
