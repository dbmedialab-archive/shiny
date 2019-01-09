import styled, { css } from 'react-emotion'

const Sidepanel = styled.aside`
	width: calc(85% - 2rem);
	height: calc(100%);
	padding: ${p => p.theme.grid.gutter / 2}rem 0;
	position: absolute;
	right: 0;
	top: 0;
	background: #fff;
	box-shadow: 0px 5px 200px rgba(0, 0, 0, 0.7);
	display: none;
	h3 {
		padding: 0 ${p => p.theme.grid.gutter / 2}rem;
	}

	${({ active }) => active && css`
	display: block;
	`}

	@media ${props => props.theme.media.largeUp} {
		padding: ${p => p.theme.grid.gutter * 2}rem;
		width: 650px;
		left: auto;
		right: 0;
	}

	@media ${props => props.theme.media.mediumDown} {
		overflow-y: scroll;
	}
`

export default Sidepanel;
