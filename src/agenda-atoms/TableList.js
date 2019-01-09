import styled from "react-emotion"

const TableList = styled.table`
	width: 100%;
    border-collapse: collapse;
    margin-bottom: ${p => p.theme.grid.gutter}rem;

    td, th {
        text-align: left;
        padding: 1rem;
		@media ${props => props.theme.media.smallOnly} {
			display: block;
		}
    }

    tbody {
        border: 1px solid ${p => p.theme.color.lightGrey};
    }

    tbody > tr {
        border-bottom: 1px solid ${p => p.theme.color.lightGrey};
    }

	.name {
		color: ${p => p.theme.color.black};
		font-weight: 400;
	}

	.mail {
		display: inline-block;
		margin: 8px 0;
		color: ${p => p.theme.color.blue};
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;
export default TableList
