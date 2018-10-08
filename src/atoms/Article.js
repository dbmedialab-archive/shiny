import styled from 'react-emotion';
import { getVariable } from '../utils';

const Article = styled.article`
	margin-bottom: ${getVariable('verticalBase')};
`;

export { Article };
