import styled, { css } from 'react-emotion'

const Placeholder = styled.div`
	position: relative;
	width: ${p => p.imageWidth ? p => p.imageWidth : '100%'};
	padding-bottom: ${p => p.paddingBottom ? p => p.paddingBottom : '0'};
	img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export default Placeholder
