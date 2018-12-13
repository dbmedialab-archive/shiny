import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { getColor, getVariable } from '../utils';

const Kicker = styled.h1`
	order: ${props => props.order};
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 0.2rem;
	margin: 0;
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
Kicker.propTypes = {
	color: PropTypes.string,
	backgroundColor: PropTypes.string,
	backgroundHoverShade: PropTypes.oneOf(['dark', '', 'light', 'lighter']),
	order: PropTypes.number,
	textColor: PropTypes.string,
};
Kicker.defaultProps = {
	color: 'primary', // Deprecated
	backgroundColor: 'primary', // Deprecated
	backgroundHoverShade: 'dark',
	order: 0,
	textColor: 'white',
};

export { Kicker };
