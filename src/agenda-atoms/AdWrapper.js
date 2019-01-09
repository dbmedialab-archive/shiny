import styled, { css } from 'react-emotion'

const AdWrapper = styled.div`
	text-align: center;
	margin: 3rem 0 1.5rem 0;
	position: relative;
	display: inline-block;
	width: 100%;

	&:before {
		content: "Annonse";
		padding: 1rem 0;
		height: 1rem;
		line-height: 1rem;
		position: absolute;
		font-size: 1rem;
		top: -3rem;
		text-transform: uppercase;
		color: #767676;
		text-align: center;
		display: block;
		width: 100%;
		background: #ECECEC;
	}

	min-height: ${p => p.minHeight};

	${({ marginBottom }) => marginBottom && css `
		margin-bottom: ${marginBottom};
	`}
`

export default AdWrapper
