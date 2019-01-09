import styled from "react-emotion";

const CheckboxToggler = styled.div`
	user-select: none;
	outline: 0;
	position: relative;
	border: none;
	padding: 0;
	-webkit-tap-highlight-color: transparent;
	display: block;
	margin-bottom: ${p => p.theme.grid.gutter / 2}rem;
	&:after {
		clear: both;
		display: block;
		content: "";
	}
	> input[type="checkbox"] {
		visibility: hidden;
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		&:checked + label {
			background: ${p => p.theme.color.primary};
			&:after {
				transform: translateX(2.51rem);
			}
		}
	}
	> span {
		height: 2.5rem;
		display: block;
		padding-top: 0.3rem;
		font-weight: 500;
		float: left;
		text-transform: uppercase;
		color: ${p => p.theme.color.grey};
		letter-spacing: 0.05rem;
		font-size: 1.2rem;
		line-height: 2rem;
		transition: 0.2s color;
	}
	> label {
		border-radius: 2rem;
		display: inline-block;
		height: 2.5rem;
		width: 5rem;
		background: ${p => p.theme.color.lightGrey};
		margin-left: 0 !important;
		margin-right: ${p => p.theme.grid.gutter / 3}rem;
		float: left;
		transition: .2s background;
		&:hover {
			cursor: pointer;
			background: #dedede;
			& + span {
				color: #222;
			}
		}
		&:after {
			content: "";
			box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05),
				0 5px 15px 0 rgba(21, 133, 207, 0.04),
				0 15px 15px -7px rgba(63, 0, 196, 0.02);
			border-radius: 6rem;
			display: block;
			height: 2.5rem;
			width: 2.5rem;
			background: white;
			position: absolute;
			left: 0;

			top: 0;
			transition: all 0.15s ease-out;
		}
	}
	${({ small }) =>
		small &&
		`
	
		> span {
			height: 2rem;
			padding-top: 0;
		}
		> label {
			height: 2rem;
			width: 3.5rem;
			&:after {
				top: .2rem;
				height: 1.6rem;
				width: 1.6rem;
				transform: translateX(.2rem);
			}
		}
		> input[type="checkbox"] {
			&:checked + label:after {
				transform: translateX(1.66rem);
			}
		}
	`};
`;

export default CheckboxToggler;
