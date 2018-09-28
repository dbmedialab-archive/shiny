import React from 'react';
import propTypes from 'prop-types';
import styled from 'react-emotion';
import { withTheme } from 'emotion-theming';
import getBestContrastColor from 'get-best-contrast-color';

import { getColor, getVariable } from '../utils';

const getTextColor = props => getBestContrastColor( // eslint-disable-line function-paren-newline
	getColor(props.displayColor)(props), [
		getColor('type')(props),
		getColor('white')(props),
	]
);

const ColorDiv = styled.div`
	flex: ${props => (props.isMainShade ? '9 1 20%' : '1 1 20%')};
	padding:
		${props => getVariable('verticalBase')}
		${props => getVariable('horizontalBase')}
	;
	background-color: ${props => getColor(props.displayColor)};
	color: ${getTextColor};
	text-align: center;
`;

const ColorBox = withTheme(({ displayColor, theme, ...rest }) => {
	return (
		<ColorDiv displayColor={displayColor} {...rest}>
			{displayColor}
			<br />
			<small>{`${getColor(displayColor)({ theme })}`}</small>
		</ColorDiv>
	);
});

ColorBox.propTypes = {
	displayColor: propTypes.string.isRequired,
};

export { ColorBox };
