import styled from '@emotion/styled';

import { getColor, getVariable } from '../utils';

const Kicker = styled.h1`
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 0.2rem;
	margin: ${props => (props.kickerMargin ? props.kickerMargin : 0)};
	padding: calc(1/4 * ${getVariable('verticalBase')}) 0;
	font-size: ${getVariable('uiSmallSize')};
	line-height: ${getVariable('uiSmallLineHeight')};
	font-weight: bold;
	color: ${props => getColor(props.textColor)};
	background-color: ${props => getColor((props.backgroundColor || props.color))};

	a:hover && {
		text-decoration: none;
		background-color: ${props => getColor((props.backgroundColor || props.color), props.backgroundHoverShade)};
	}
`;
Kicker.defaultProps = {
	color: 'primary', // Deprecated
	backgroundColor: 'primary', // Deprecated
	backgroundHoverShade: 'dark',
	textColor: 'white',
};

export { Kicker };
