import styled, { css } from "react-emotion"

const Icon = styled.span`
	padding: 5px;
	display: inline-flex;
	vertical-align: middle;

	img {
		width: ${p => p.size ? p.size.width : '20px'};
		height: ${p => p.size ? p.size.height : '20px'};
	}

	@media ${p => p.theme.media.largeUp} {
		${({ hasClick, theme }) => hasClick && css`
			position: relative;
			&:hover {
				cursor: pointer;
				&:after {
					position: absolute;
					content: "";
					width: 100%;
					height: 2px;
					background: ${theme.color.primary};
					bottom: -2px;
					left: 0;
				}
			}
		`}
	}

	${({ rotate }) => rotate && css`
		animation: rotate 2.5s linear infinite;
		@keyframes rotate {
			to {
				transform: rotate(360deg);
			}
		}
	`}
`

export default Icon;
