import styled, { css } from 'react-emotion'

const BottomNavigation = styled.nav`
	position: fixed;
	z-index: 99;
	width: 100%;
	bottom: 0;
	left: 0;
	height: 50px;

	button {
		border-radius: 0;
		height: 100%;
		${({ buttonCount }) => buttonCount && css`
			width: calc(100%/${buttonCount});
		`}
	}
`

export default BottomNavigation
