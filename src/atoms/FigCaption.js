import styled, { css } from 'react-emotion';

import { getColor, getVariable } from '../utils';

const FigCaption = styled.figcaption`
	${(props) => {
		const { border } = props;

		const grayTintLighter = getColor('grayTintLighter')(props);
		const uiSmallSize = getVariable('uiSmallSize')(props);
		const uiSmallLineHeight = getVariable('uiSmallLineHeight')(props);
		const uiWeight = getVariable('uiWeight')(props);
		const verticalBase = getVariable('verticalBase')(props);

		return css`
			display: block;
			margin: calc(1/2 * ${verticalBase}) 0;
			padding: 0;
			${border && css`
				border-bottom: .1rem solid ${grayTintLighter};
				padding-bottom: calc(1/2 * ${verticalBase});
			`}
			max-width: 100%;
			font-size: ${uiSmallSize};
			line-height: ${uiSmallLineHeight};
			font-weight: ${uiWeight};
			z-index: 1;
		`;
	}}
`;

export { FigCaption };
