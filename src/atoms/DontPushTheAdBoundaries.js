import styled from 'styled-components';
import { getColor, getVariable } from '../utils';

const DontPushTheAdBoundaries = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	box-orient: vertical; /* ios8.x really, really needs this; overrides flex direction */
	padding: calc(${getVariable('verticalBase')}/2) 0 0;

	@media (min-width: ${getVariable('largeWidth')}) {
		position: relative;
		width: 100%;
		max-width: 100.0rem;
		margin: 0 auto;
		padding: ${getVariable('verticalBase')} .3rem 0;
		background: ${props => props.background || getColor('white')};
		z-index: 4;
	}
`;

export { DontPushTheAdBoundaries };
