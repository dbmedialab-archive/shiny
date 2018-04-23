import styled from 'styled-components';
import { smallUp } from '../utils/media-queries';

const DontPushTheAdBoundaries = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	box-orient: vertical; /* ios8.x really, really needs this; overrides flex direction */
	padding: calc(${props => props.theme.variables.verticalBase}/2) 0 0;

	@media ${smallUp} {
		position: relative;
		width: 100%;
		max-width: 100.0rem;
		margin: 0 auto;
		padding: ${props => props.theme.variables.verticalBase} .3rem 0;
		background: ${props => props.background || props.theme.colors.white};
		z-index: 4;
	}
`;

export { DontPushTheAdBoundaries };
