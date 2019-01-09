import styled from 'react-emotion';

const Header = styled.header`

    /* padding: ${p => p.theme.grid.gutter / 2}rem 0; */
	margin-bottom: ${p => p.theme.grid.gutter}rem;
	background: white;
	padding: 1.5rem 0 1.5rem;
	border-bottom: 1px solid ${p => p.theme.color.lightGrey};
	div {
		vertical-align: middle;
		&:last-child {
			&:after {
				content: '';
				clear: both;
				display: table;
			}
		}
		a {
			display: inline-block;
			> * {
				vertical-align: middle;
			}
			img {
				height: 4rem;
				transition: .2s opacity;
				&:hover {
					opacity: .8;
				}
			}
		}
	}
`;

export default Header;
