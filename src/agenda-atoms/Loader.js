import styled, { css } from 'react-emotion';

const Loader = styled.div`
	padding: ${p => p.theme.grid.gutter}rem;
	text-align: center;
	font-style: italic;
	width: 100%;
`

export default Loader;
