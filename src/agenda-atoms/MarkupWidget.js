import styled, { css } from 'react-emotion'

const MarkupWidget = styled.textarea`
	background: #f6f8f9;
	padding: ${p => p.theme.grid.gutter / 2}rem;
	min-width: calc(100% - 20px);
	max-width: calc(100% - 20px);
	min-height: 1rem;
	height: auto;
	border: 1px solid #ececec;
	font-family: "Courier New", "Arial";
	font-size: 1.3rem;
	box-sizing: border-box;
	width: 100%;
	max-width: 100%;
	resize: vertical;

	${({ disabled }) => disabled && css`
		opacity: 0.7;
	`}

	> iframe {
		width: 100%;
	}
`

export default MarkupWidget
