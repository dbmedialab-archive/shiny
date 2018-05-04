import styled from 'styled-components';

import { getColor } from '../utils';

// @TODO Use sizes from theme
const Kicker = styled.h1`
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 0.2rem;
	margin: 0;
	padding: 0.6rem 0;
	font-size: 1.3rem;
	line-height: 1.95rem;
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
