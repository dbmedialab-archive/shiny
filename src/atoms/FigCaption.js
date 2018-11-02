import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import { getColor, getVariable } from '../utils';

const StyledFigCaption = styled.figcaption`
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

/**
 * A styled figcaption element.
 */
// The only reason for this 'extra' wrapper is that withInfo cannot handle
// descriptions from emotion components directly.
const FigCaption = props => <StyledFigCaption {...props} />;

FigCaption.propTypes = {
	/** Add a visual marker beneath the caption. */
	border: PropTypes.bool,
};
FigCaption.defaultProps = {
	border: false,
};

export { FigCaption };
