import styled, { css } from 'react-emotion'

const Card = styled.div`
	position: relative;
	border-radius: 5px;
	background: ${p => p.type ? p.theme.color.card[p.type].bg : p.theme.color.card["default"].bg};
	color: ${p => p.type ? p.theme.color.card[p.type].text : p.theme.color.card["default"].text};
	padding: ${p => p.theme.grid.gutter / 1.2}rem;
	margin-bottom: ${p => p.theme.grid.gutter}rem;
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05), 0 5px 15px 0 rgba(21, 133, 207, 0.04), 0 5px 15px -7px rgba(63, 0, 196, 0.02);
	transition: all .2s ease-in-out;

	header {
		/* text-align: right; */
		position: relative;
		margin-bottom: 1.5rem;
		&:after {
			display: block;
			content: '';
			clear: both;
		}
		h2 {
			float: left;
		}
		a {
			float: right;
			color: ${p => p.theme.color.primary};
			text-decoration: none;
			font-size: 1.2rem;
			text-transform: uppercase;
			letter-spacing: .5px;
			padding-left: ${p => p.theme.grid.gutter / 2}rem;

			&:hover {
				text-decoration: underline;
			}
		}

		&:after {
			content: "";
			clear: both;
			display: table;
		}
	}

	${({ large }) => large && css`
		text-align: center;
		padding: 5rem 0;
	`}

	${({ clickable }) => clickable && css`
		&:hover {
			cursor: pointer;
		}
	`}

	${({ hasIcon, theme }) => hasIcon && css`
		color: ${p => theme.color.black};
		padding: ${p => theme.grid.gutter}rem 0;
		margin-bottom: ${p => theme.grid.gutter}rem;
		text-align: center;
		line-height: 1;
		font-size: 1.4rem;
		transition: all 0.2s ease-in-out;
		&:hover {
			backface-visibility: hidden;
			transform: translateZ(0);
			-webkit-font-smoothing: subpixel-antialiased;
			transform: scale(1.04);
			box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.05),
				0 5px 15px 0 rgba(21, 133, 207, 0.02),
				0 15px 15px 0px rgba(63, 0, 196, 0.02);
		}
		svg {
			width: 100%;
			max-width: 4.5rem;
			display: block;
			margin: auto;
			height: auto;
			margin-bottom: ${p => theme.grid.gutter / 2}rem;
		}
	`}

	${({ arrowRight, theme }) => arrowRight && css`
		padding: 1.5rem;
		&:after {
			content: "";
			position: absolute;
			width: 10px;
			height: 10px;
			border-right: 2px solid;
			border-bottom: 2px solid;
			right: ${theme.grid.gutter}rem;
			top: calc(50% - 5px);
			transform: rotate(-45deg);
		}
	`}

	${({ arrowDown, theme }) => arrowDown && css`
		&:after {
			content: "";
			position: absolute;
			width: 10px;
			height: 10px;
			border-right: 2px solid;
			border-bottom: 2px solid;
			right: ${theme.grid.gutter}rem;
			top: calc(50% - 8px);
			transform: rotate(45deg);
		}
	`}

	${({ fadeToWhite }) => fadeToWhite && css`
		background-color: #fffad5;
	`}
	${({ widget, theme }) => widget && css`
		box-shadow: none;
		border-radius: 0;
		border: none;
		border-top: 1px solid;
		border-bottom: 1px solid;
		border-color: ${p => theme.color.lightGrey};
		margin: 0 ${p => theme.grid.gutter / -2}rem;
		margin-bottom: ${p => theme.grid.gutter / 2}rem;
		padding: 1.5rem;
		& + & {
			border-top: none;
			margin-top: ${p => theme.grid.gutter / -2}rem;
		}

	`}
	${({ widgetPresentation, theme }) => widgetPresentation && css`
		ul {
			margin: 1.5rem 0;
			padding: 0 1.5rem;
			li {
				line-height: 1.4;
			}
		}
		h1{
			font-size: 1.8rem;
			border-bottom: 1px solid ${p => theme.color.lightGrey};
			padding: 0 ${p => theme.grid.gutter / 1.2}rem ${p => theme.grid.gutter / 2}rem;
			margin: 0 ${p => theme.grid.gutter / -1.2}rem ${p => theme.grid.gutter / 2}rem;
			line-height: 1.2;
			&:empty {
				display: none;
			}
		}

		p {
			line-height: 1.4;
		}
	`}
	${({ border, theme }) => border && css`
		header {
			border-bottom: 1px solid ${ p => theme.color.lightGrey};
			margin: 0 ${p => theme.grid.gutter / -2}rem ${p => theme.grid.gutter / 2}rem;
			padding: 0 ${p => theme.grid.gutter / 2}rem;
		}
	`}
	${({ faded }) => faded && css`
		opacity: 0.5;
	`}

	${({ comingSoon, theme }) => comingSoon && css`
		overflow: hidden;
		opacity: .5;
		cursor: none;
		position: relative;
		svg {
			max-width: 4.5rem;
		}
		&:before {
			content: '';
			height: 100%;
			position: absolute;
			right: 0;
			top: 0;
			width: 100%;
			display: block;
			background: url('/static/assets/icon/comingSoon.svg');
			background-size: 60%;
			background-repeat: no-repeat;
			background-position: top right;
		}
		&:hover {
			transform: none;
			cursor: default;
			box-shadow: inherit;
		}
	`}

	.overlay {
		width: 100%;
		background: rgba(255, 255, 255, 0.9);
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		z-index: 1;

		.inner {
			position: absolute;
			width: 100%;
			top: 50%;
			text-align: center;
			margin-top: -28px;
		}
	}
`;

export default Card
