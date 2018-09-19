import propTypes from 'prop-types';
import styled from 'react-emotion';

import { getColor, getVariable } from '../utils';
import { LinkBarDropdown } from './LinkBarDropdown';


// Originally written for the VerticalLinkBar molecule
const VerticalFlexingList = styled.ul`
	display: inline-block;
	margin: 0;
	padding: 0;
	font-family: ${getVariable('mainFont')};
	background: ${props => (props.backgroundColor ? getColor(props.backgroundColor) : props.background)};
	position: relative;

	width: 100%;
	@media screen and (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
		width: auto;
	}

	${LinkBarDropdown} + div & {
		display: ${props => (props.hide ? 'none' : 'flex')};
		flex-direction: column;
		min-width: calc(14 * ${getVariable('horizontalBase')});
		position: absolute;
		top: 100%;
		left: ${props => (props.align === 'left' ? 0 : 'initial')};
		right: ${props => (props.align === 'right' ? 0 : 'initial')};
		box-shadow: 0 0 2rem 0 rgba(0,0,0,.15);

		::before {
			content: '';
			display: block;
			width: ${getVariable('verticalBase')};
			height: ${getVariable('verticalBase')};
			background: ${props => (props.backgroundColor ? getColor(props.backgroundColor) : props.background)};
			position: absolute;
			left:  ${props => (props.align === 'left'  ? `calc(1/4 * ${props.theme.variables.verticalBase})` : 'initial')};
			right: ${props => (props.align === 'right' ? `calc(1/4 * ${props.theme.variables.verticalBase})` : 'initial')};
			transform: rotate(45deg);
		}
	}
`;
VerticalFlexingList.propTypes = {
	align: propTypes.oneOf(['left', 'right']),
	background: propTypes.string, // Deprecated, actual css color string
	backgroundColor: propTypes.string, // Color name from theme
};
VerticalFlexingList.defaultProps = {
	align: 'left',
	background: null,
	backgroundColor: null,
};

export { VerticalFlexingList };
