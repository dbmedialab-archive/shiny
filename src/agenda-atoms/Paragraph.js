import styled, {css} from 'react-emotion';

const paragraph = styled.p`
    line-height: 1.4;
	margin: 0 0 ${p => p.theme.grid.gutter / 2}rem 0;
    &:last-child {
        margin-bottom: 0;
    }

	${({ center }) => center && css`
		text-align: center;
	`}

	${({ size }) => size && css`
		font-size: ${size};
	`}
`

export default paragraph;
