import styled, {css} from 'react-emotion';

const status = styled.span`
    /* right: ${p => p.theme.grid.gutter}rem; */
    /* top: ${p => p.theme.grid.gutter + 0.4}rem; */
    font-size: 1.2rem;
	font-weight: 300;
	float: right;
    &:after {
        content: "";
        display: inline-block;
        margin-left: 0.5rem;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: ${p => p.theme.color.lightGrey};
		position: relative;
		top: 0.1rem;

		&:after {
			background: ${p => p.theme.color.primary};
		}
    }

    ${({ published, theme }) => published && css`
        &:after {
            background: ${theme.color.green};
        }
    `}

	${({ publishedHidden, theme }) => publishedHidden && css`
		&:after {
			background: orange;
		}
	`}
`

export default status;
