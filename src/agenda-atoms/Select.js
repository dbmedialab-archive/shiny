import styled, { css } from "react-emotion"

const Select = styled.select`
	background: #fff;
	width: 100%;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	padding: ${p => p.theme.grid.gutter / 4}rem;
	border: none;
	font-size: 1.5rem;
	color: ${p => p.theme.color.black};
	transition: 0.2s all;
	padding-right: ${p => p.theme.grid.gutter * 1.5}rem;
	box-shadow: 0 15px 15px -7px rgba(63, 0, 196, 0.01), 0 15px 35px 0 rgba(21, 133, 207, 0.02), 0 2px 5px 0 rgba(0, 0, 0, 0.05);
	&:hover {
		box-shadow: 0 15px 15px -7px rgba(63, 0, 196, 0.01), 0 15px 35px 0 rgba(21, 133, 207, 0.02), 0 5px 15px 0 rgba(0, 0, 0, 0.05);
		cursor: pointer;
	}
	${({ border, theme }) => border && css`
		border: 1px solid ${p => theme.color.lightGrey};
		box-shadow: none;
		border-radius: .2rem;
		&:hover {
			border-bottom: 1px solid ${p => theme.color.primary};
			box-shadow: none;
		}
		&:focus {
			outline: none;
		}
	`};
	${({ disabled, theme }) => disabled && css`
		opacity: 0.7;
		&:hover {
			transition: none;
			border-bottom: 1px solid ${p => theme.color.lightGrey};
		}
	`}
`;

export default Select;
