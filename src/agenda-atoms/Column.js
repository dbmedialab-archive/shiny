import styled, { css } from 'react-emotion';

const columns = 12

const Column = styled.div`
	width: 100%;
	padding: 0 ${p => p.theme.grid.gutter / 2}rem;
	box-sizing: border-box;

	@media ${props => props.theme.media.smallUp} {
		width: ${props => (props.small ? props.small / columns * 100 : 100)}%;
	} /* Define mobile styles */
	@media ${props => props.theme.media.smallOnly} { 
		padding: 0 ${p => p.theme.grid.gutter / 2}rem;
	 } /* max-width 640px, mobile-only styles, use when QAing mobile issues */

	@media ${props => props.theme.media.mediumUp} {
		width: ${props => (props.medium ? props.medium / columns * 100 : "inherit")}%;
	} /* min-width 641px, medium screens */
	@media ${props => props.theme.media.mediumOnly} { } /* min-width 641px and max-width 1024px, use when QAing tablet-only issues */

	@media ${props => props.theme.media.largeUp} {
		width: ${props => (props.large ? props.large / columns * 100 : "inherit")}%;
	} /* min-width 1025px, large screens */
	@media ${props => props.theme.media.largeOnly} { } /* min-width 1025px and max-width 1440px, use when QAing large screen-only issues */

	${({ noPadding }) => noPadding && css`
		padding: 0;
	`}
	
	${({ center }) => center && css`
		margin: auto;
	`}

	${({ textAlign }) => textAlign && css`
		text-align: ${textAlign}
	`}
`
export default Column
