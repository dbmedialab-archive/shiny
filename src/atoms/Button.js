import styled from 'styled-components';

export default styled.button`
	letter-spacing: 1px;
	text-transform: uppercase;
	background-color: ${props => props.theme.colors.button.background}
	border-color: #bdbdbd;
	color: ${props => props.theme.colors.button.color}
	border-style: solid;
	border-width: 0;
	cursor: pointer;
	font-weight: 700;
	line-height: normal;
	margin: 0 0 1.25rem;
	position: relative;
	text-decoration: none;
	text-align: center;
	border-radius: 0;
	display: inline-block;
	padding-top: 0.7rem;
	padding-right: 1.4rem;
	padding-bottom: 0.7625rem;
	padding-left: 1.4rem;
	font-size: 0.9rem;
	transition: background-color 300ms ease-out;

	${props => props.outline && `
		border: 1px solid ${props.theme.colors.button.background};
		background: transparent;
		color: ${props.theme.colors.button.background};
		`}
`;
