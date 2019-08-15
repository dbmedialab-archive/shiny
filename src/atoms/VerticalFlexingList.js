import PropTypes from 'prop-types';
import styled from 'styled-components';
import { css } from 'styled-components';

import { getColor, getVariable } from '../utils';
import { LinkBarDropdown } from './LinkBarDropdown';


// Originally written for the VerticalLinkBar molecule
const VerticalFlexingList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin: 0;
	padding: 0;
	font-family: ${getVariable('mainFont')};
	background: ${props => (props.backgroundColor ? getColor(props.backgroundColor) : props.background)};
	position: relative;

	width: 100%;
	@media screen and (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
		width: auto;
	}

	${LinkBarDropdown} ~ div & {
		display: ${props => (props.hide ? 'none' : 'flex')};
		flex-direction: column;
		min-width: calc(14 * ${getVariable('horizontalBase')});
		position: absolute;
		top: 100%;
		left: ${props => (props.align === 'left' ? 0 : 'initial')};
		right: ${props => (props.align === 'right' ? 0 : 'initial')};
		box-shadow: ${({ boxShadow }) => boxShadow};

		${({ shouldFadeOut }) => shouldFadeOut && css`
			animation: fadeSlideDown 0.2s;
			@keyframes fadeSlideDown {
				0% {
					display: block;
					opacity: 0;
					transform: translateY(1rem);
				}
				10% {
					opacity: 0.25;
				}
				100% {
					opacity: 1;
				}
			}
		`}

		::before {
			content: '';
			display: ${({ hideArrow }) => (hideArrow? 'none' : 'block')};
			width: ${getVariable('verticalBase')};
			height: ${getVariable('verticalBase')};
			background: ${props => (props.backgroundColor ? getColor(props.backgroundColor) : props.background)};
			position: absolute;
			top: 0;
			left:  ${props => (props.align === 'left'  ? `calc(1/4 * ${props.theme.variables.verticalBase})` : 'initial')};
			right: ${props => (props.align === 'right' ? `calc(1/4 * ${props.theme.variables.verticalBase})` : 'initial')};
			transform: rotate(45deg);
		}
	}
`;
VerticalFlexingList.propTypes = {
	align: PropTypes.oneOf(['left', 'right']),
	background: PropTypes.string, // Deprecated, actual css color string
	backgroundColor: PropTypes.string, // Color name from theme
	boxShadowLinkBar: PropTypes.string,
	hideArrow: PropTypes.bool,
	shouldFadeOut: PropTypes.bool,
};
VerticalFlexingList.defaultProps = {
	align: 'left',
	background: null,
	backgroundColor: null,
	boxShadow: '0 0 2rem 0 rgba(0,0,0,.15)',
	hideArrow: false,
	shouldFadeOut: false,
};

export { VerticalFlexingList };
