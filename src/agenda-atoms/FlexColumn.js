import styled, { css } from 'react-emotion';

const FlexColumn = styled.div`
    box-sizing: border-box;
	${({ grow }) => grow && css`
		flex-grow: ${grow};
		width: auto !important;
	`}

	${({ shrink }) => shrink && css`
		flex-shrink: ${shrink};
		width: auto !important;
	`}
`

export default FlexColumn;
