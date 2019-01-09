import styled, {css} from "react-emotion"

const Input = styled.input`
	padding: 0 0 0.8rem 0;
    width: ${p => (p.width ? p.width : "100%")};
	background: transparent;
    border: none;
    font-size: 1.6rem;
	line-height: 1.2;
    border-bottom: 1px solid ${p => p.theme.color.lightGrey};
    color: ${p => p.theme.color.black};;
    font-weight: 600;
    /* margin-bottom: ${p => p.theme.grid.gutter / 2}rem; */
	&:hover {
		transition: border 0.2s;
        border-color: ${p => p.theme.color.primary};
	}

    &:focus {
		transition: box-shadow 0.2s, border-color .2s;
        outline: none;
		border-color: ${p => p.theme.color.primary};
		box-shadow: 0 1px 0 ${p => p.theme.color.primary};
    }

    &::-webkit-input-placeholder {
		font-size: 1.4rem;
		font-weight: 300;
		letter-spacing: .05rem;
    }
	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus,
	&:-webkit-autofill:active {
		transition: background-color 5000s ease-in-out 0s;
	}
	${({ large }) =>
		large &&
		css`
			font-size: 1.8rem;
		`}
	${({ widget }) =>
		widget &&
		css`
			font-weight: 300;
			font-size: 1.2rem;
			letter-spacing: 0.5px;
		`}

	${({ bodyText }) =>
		bodyText &&
		css`
			font-weight: 400;
		`}


	${({ disabled, theme }) =>
		disabled &&
		css`
			border: none;
			opacity: 0.7;
			background: transparent;
			&:hover {
				transition: none;
				border-color: transparent;
			}
		`}
`;

export default Input;
