import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { Col } from './Col';
import { getColor, getVariable } from '../utils';

const Box = styled('div')`
	${(props) => {
		const verticalBase = getVariable('verticalBase')(props);
		const horizontalBase = getVariable('horizontalBase')(props);
		const mdBreakpoint = props.theme.flexboxgrid.breakpoints.md;
		const headingRegularSize = getVariable('headingRegularSize')(props);
		const headingRegularLineHeight = getVariable('headingRegularLineHeight')(props);
		const uiWeightSemiBold = getVariable('uiWeightSemiBold')(props);

		const textColor = getColor(props.textColor)(props);
		const bgColor = getColor(props.bgColor)(props);
		const isSmall = props.size === 'small';

		const verticalFactor = isSmall ? 0 : 3/2;
		const horizontalFactor = isSmall ? 1 : 3;
		const mdVerticalFactor = isSmall ? 0 : 4;
		const mdHorizontalFactor = isSmall ? 1 : 7;

		return `
			&& {
				font-size: ${headingRegularSize};
				line-height: ${headingRegularLineHeight};
				font-weight: ${uiWeightSemiBold};
				letter-spacing: .05rem;
				word-wrap: break-word;
				text-align: left;
				color: ${textColor};
				background-color: ${bgColor};

				display: flex;
				align-items: center;
				justify-content: center;
				padding: calc(${verticalFactor} * ${verticalBase}) calc(${horizontalFactor} * ${horizontalBase});

				@media screen and (min-width: ${mdBreakpoint}em) {
					padding: calc(${mdVerticalFactor} * ${verticalBase}) calc(${mdHorizontalFactor} * ${horizontalBase});
				}
			}
		`;
	}}
`;

const ColorTextBox = ({ column, ...rest }) => {
	const Element = column ? Col : 'div';
	const StyledBox = Box.withComponent(Element);

	return <StyledBox {...column} {...rest} />;
};

ColorTextBox.propTypes = {
	/** Color name from theme */
	bgColor: PropTypes.string,
	/** Column object to decide whether the article should be a Col or not */
	column: PropTypes.shape({
		width: PropTypes.number,
		reverse: PropTypes.bool,
		xs: PropTypes.number,
		sm: PropTypes.number,
		md: PropTypes.number,
		lg: PropTypes.number,
		xsOffset: PropTypes.number,
		smOffset: PropTypes.number,
		mdOffset: PropTypes.number,
		lgOffset: PropTypes.number,
		children: PropTypes.node,
	}),
	size: PropTypes.oneOf(['small', '']),
	/** Color name from theme */
	textColor: PropTypes.string,
};

ColorTextBox.defaultProps = {
	bgColor: 'primary',
	column: null,
	size: '',
	textColor: 'white',
};


export { ColorTextBox };
