import styled, { css } from 'react-emotion';
import { getColor, getVariable } from '../utils';

const DontPushTheAdBoundaries = styled.div`
	${(props) => {
		const horizontalBase = getVariable('horizontalBase')(props);
		const verticalBase = getVariable('verticalBase')(props);
		const largeWidth = getVariable('largeWidth')(props);

		const white = getColor('white')(props);

		const wallpaperAdInnerWidth = '100.0rem';
		const topbannerAdWidth = '98.0rem';
		const largeScreenSidePadding = `calc(1/2 * (${wallpaperAdInnerWidth} - ${topbannerAdWidth} - ${horizontalBase}))`;

		return css`
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			box-orient: vertical; /* ios8.x really, really needs this; overrides flex direction */
			padding: calc(1/2 * ${verticalBase}) 0 0;

			@media (min-width: ${largeWidth}) {
				position: relative;
				width: 100%;
				max-width: 100.0rem;
				margin: 0 auto;
				padding: ${verticalBase} ${largeScreenSidePadding} 0;
				background: ${props.background || white};
				z-index: 4;
			}
		`;
	}}
`;

export { DontPushTheAdBoundaries };
