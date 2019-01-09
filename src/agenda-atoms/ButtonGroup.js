import styled, { css } from 'react-emotion'

const ButtonGroup = styled.div`

	${({ margin }) => margin && css`
		margin: ${margin};
	`}

	${({ align }) => align && css`
		text-align: ${align};
	`}

	${({ spacing }) => spacing && css`
		> *:not(:last-child) {
			margin-right: ${spacing};
		}
	`}
`

export default ButtonGroup;
