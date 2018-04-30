import styled, { css } from 'styled-components';

// @TODO: Rewrite this piece of code to have mobile first styles
const SvgIconWrapper = styled.div`
	display: inline-block;
	text-align: center;
	width: ${(props) => {
		return props.size;
	}}rem;

	${props => (props['size-sm'] && css`
		@media screen	and (max-width: ${props.theme.flexboxgrid.breakpoints.md}em) {
			width: ${props['size-sm']}rem;
	 	}
 	`)}
`;

export { SvgIconWrapper };
