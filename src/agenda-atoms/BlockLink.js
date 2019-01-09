import styled, { css } from'react-emotion'

const BlockLink = styled.a`
	text-decoration: none;
	display: block;
	width: 100%;

	${({ right }) => right && css`
		text-align: right;
	`}

	${({ underlineOnHover }) => underlineOnHover && css`
		&:hover {
			text-decoration: underline;
			text-decoration-color: #222;
		}
	`}
`

export default BlockLink
