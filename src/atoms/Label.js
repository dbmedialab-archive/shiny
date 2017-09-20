import styled, { css } from 'styled-components'

export default styled.span`
	background-color: ${props =>
		props.theme.colors ? props.theme.colors : '#ECECEC'};
	color: #333;
	display: inline-block;
	font-family: 'Roboto', 'Helvetica', Helvetica, Arial, sans-serif;
	font-size: 0.6875rem;
	font-weight: 300;
	letter-spacing: 1px;
	line-height: 1;
	margin-bottom: auto;
	margin-right: 1px;
	padding: 0.25rem 0.5rem 0.25rem;
	position: relative;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	white-space: nowrap;

	${p =>
		p.color &&
		css`
			background-color: ${p.theme.colors && p.theme.colors[p.color]
				? p.theme.colors[p.color]
				: '#333'};
		`};
`
