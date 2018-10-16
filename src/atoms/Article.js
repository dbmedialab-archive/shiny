import styled, { css } from 'react-emotion';
import { getVariable } from '../utils';

const articleCss = props => css`
	margin-bottom: ${getVariable('verticalBase')(props)};
	${props.float ? `float: ${props.float}` : ''}
`;

const Article = styled.article`
	${articleCss};
`;

export { Article };
