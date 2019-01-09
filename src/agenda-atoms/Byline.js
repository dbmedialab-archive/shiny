import styled, { css } from 'react-emotion'

const Byline = styled.div`
	&:before {
		display: inline;
		content: "I studioet: ";
		font-weight: 600;
	}
	* + & {
		padding: 1.5rem ${p => p.theme.grid.gutter / 1.2}rem;
		padding-bottom: 0;
		margin: 0 -${p => p.theme.grid.gutter / 1.2}rem -1rem;
		border-top: 1px solid ${p => p.theme.color.lightGrey};
	}
`;

export default Byline
