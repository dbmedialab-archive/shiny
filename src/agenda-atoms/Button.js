import styled, { css } from "react-emotion"

const Button = styled.button`
    border: none;
	border-radius: 2px;
	box-shadow: 0 5px 15px 0 transparent;
	font-size: 1.2rem;
	font-weight: 400;
	text-transform: uppercase;
	letter-spacing: .5px;
	transition: .2s all;
	text-decoration: none;
	${p => css`
		padding: ${p.theme.grid.gutter / 3}rem ${p.theme.grid.gutter / 2}rem;
		background: ${p.color ? p.theme.withShiny ? p.theme.colors[p.color] :p.theme.color.card[p.color].bg :  p.theme.color.card['default'].bg};
		color: ${p.color ? p.theme.color.card[p.color].text : p.theme.color.card['default'].text };
	`}

    &:hover {
        cursor: pointer;
		text-decoration: none;
		@media ${p => p.theme.media.mediumUp} {
			&:not(:disabled) {
				${p => css`
					background: ${p.theme.color.lightestGrey};
					background: ${p.color === 'primary' ? p.theme.color.darkPrimary : ''};
					box-shadow: ${p.theme.shadow.large};
				`}
			}
		}
    }

	&:active {
        outline: none;
		box-shadow: none;
		${p => css`
			background: ${p.theme.color.darkPrimary};
		`}
	}

	${({ small }) => small && css`
		padding: 0.5rem 0.8rem;
	`}

	${({ tiny }) => tiny && css`
		padding: 0.4rem 0.6rem;
		font-size: 1rem;
	`}

    ${({ disabled }) => disabled && css`
        opacity: 0.5;
        cursor: auto !important;
    `}
	${({ border, theme }) => border && css`
		box-shadow: none;
		${p => css`
			border: 1px solid ${theme.color.lightGrey};
		`}
		&:hover {
			box-shadow: none !important;
		}
	`}
	${({ block }) => block && css`
		display: block;
	`}

	${({ besidesInput, right, theme }) => besidesInput && css`
		position: absolute;
		margin-top: -5px;
		right: ${ right ? right : theme.grid.gutter+'rem' };
	`}

	${({transparent}) => transparent && css`
		background: transparent;
		box-shadow: none;
		&:hover {
			&:not(:disabled) {
				background: transparent;
				box-shadow: none;
				text-decoration: underline;
			}
		}
	`}

	${({ active, theme }) => active && css`
		background: ${theme.color.primary};
		color: #fff;
	`}

	${({ fullWidth }) => fullWidth && css`
		width: 100%;
		text-align: center;
	`}
`

export default Button;
