import styled from "react-emotion"

const Label = styled.label`
	color: ${p => p.theme.color.black};
	font-size: inherit;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: .05rem;
	font-size: 1.2rem;
	margin-bottom: ${p => p.theme.grid.gutter / 2}rem;
	display: inline-block;
	span {
		text-transform: none;
		font-size: 1.2rem;
		margin-left: .5rem;
		font-weight: 300;
		font-style: italic;
		&:before {
			content: '*';
			color: ${p => p.theme.color.primary};
			display: inline;
			margin-right: .5rem;
		}
	}
	>* {
		margin-top: .5rem;
	}
	${({ block }) => block && `
		display: block;
	`}
`;

export default Label;
