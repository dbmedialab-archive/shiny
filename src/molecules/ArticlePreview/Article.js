import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { getColor } from '../../utils/get-color';
import { getVariable } from '../../utils/get-variable';
import ArticlePreview from '../../../stories/ArticlePreview';

const Article = styled.article`
	background-color: ${props => getColor(props.background)};
    margin-bottom: ${getVariable('verticalBase')};

    & > a {
		color: ${props => (props.linkColor ? getColor(props.linkColor) : getColor('link'))};
        display: block;
		padding: ${props => (props.background !== 'transparent' ? getVariable('spacing') : '0')};
        text-decoration: none;

        &:hover {
            .headline {
				text-decoration: underline;
            }
        }
    }

    ${props => props.background === 'black' && css`
        background-color: ${getColor('darkness')};

        .deck,
        .headline,
        .standfirst {
            color: var(--white);
        }
	`}
`;
ArticlePreview.defaultProps = {
	background: 'transparent'
}

export default Article;
