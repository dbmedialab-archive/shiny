import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { Col } from './Col';
import { getColor, getVariable } from '../utils';

const Box = styled('div')`
	padding: calc(3/2 * ${getVariable('verticalBase')}) calc(3 * ${getVariable('horizontalBase')});
	font-size:   ${getVariable('headingRegularSize')};
	line-height: ${getVariable('headingRegularLineHeight')};
	font-weight: ${getVariable('uiWeightSemiBold')};
	letter-spacing: .05rem;
	word-wrap: break-word;
	text-align: left;
	color:            ${props => getColor(props.textColor)};
	background-color: ${props => getColor(props.bgColor)};

	display: flex;
	align-items: center;

	@media screen and (min-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
		padding: calc(4 * ${getVariable('verticalBase')}) calc(7 * ${getVariable('horizontalBase')});
	}
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
	/** Color name from theme */
	textColor: PropTypes.string,
};

ColorTextBox.defaultProps = {
	bgColor: 'primary',
	column: null,
	textColor: 'white',
};


export { ColorTextBox };
