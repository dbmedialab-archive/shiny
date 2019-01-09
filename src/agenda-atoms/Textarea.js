import styled, { css } from "react-emotion"

const Textarea = styled.textarea`
    padding: 0 0 0.8rem 0;
    width: 100%;
    border: none;
    font-size: 1.5rem;
    border-bottom: 1px solid ${p => p.theme.color.lightGrey};
    color:  ${p => p.theme.color.black};
    font-weight: normal;
    /* margin-bottom: ${p => p.theme.grid.gutter / 2}rem; */
	 width: 100%;
	 box-sizing: border-box;
	 resize: vertical;

	&:hover {
		transition: border-color 0.2s;
		border-color: ${p => p.theme.color.primary};
	}

    &:focus {
		transition: box-shadow 0.2s, border-color .2s;
		outline: none;
		box-shadow: 0 1px 0 ${p => p.theme.color.primary};
		border-color: ${p => p.theme.color.primary};
    }

	&::-webkit-input-placeholder {
		font-weight: 300;
		font-size: 1.4rem;
		letter-spacing: .05rem;
	}

	${({ disableHorizontalResize }) =>
		disableHorizontalResize &&
		css`
			resize: vertical;
		`}

	${({ disableVerticalResize }) =>
		disableVerticalResize &&
		css`
			resize: horizontal;
		`}
	
	${({ large }) =>
		large &&
		css`
			font-size: 1.8rem;
		`}

	${({ embed }) =>
		embed &&
		css`
			font-family: "Courier New", "Arial";
			font-size: 1.2rem;
			line-height: 1;
		`}


	${({ disabled, theme }) =>
		disabled &&
		css`
			font-style: italic;
			font-weight: 100;
			border: none;
			opacity: 0.8;
			background: transparent;
			&:hover {
				transition: none;
				border-color: transparent;
			}
		`}
`;

export default Textarea;
