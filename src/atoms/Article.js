import Styled from 'styled-components';

const Article = Styled.article`
	margin-left: calc(${props => props.theme.variables.horizontalBase} / 2);
	margin-right: calc(${props => props.theme.variables.horizontalBase} / 2);
	margin-bottom: ${props => props.theme.variables.verticalBase};
`;

export { Article };
