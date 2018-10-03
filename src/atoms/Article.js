import styled, { css } from 'react-emotion';

const articleCss = props => css`
	margin-bottom: ${props.theme.variables.verticalBase};
`;

const Article = styled.article`
	${articleCss};
`;

export { Article, articleCss };
