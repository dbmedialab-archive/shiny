import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { getColor, calculateTextColorFromName, getVariable } from '../utils';

/* eslint-disable max-len */
const Button = styled.button`
	letter-spacing: .1rem;
	text-transform: uppercase;
	background-color: ${props => getColor(props.background)};
	border-color: #bdbdbd;
	color: ${props => (props.textColor
		? getColor(props.textColor)
		: calculateTextColorFromName(props.background, props))
};
	border-style: solid;
	border-width: 0;
	cursor: pointer;
	font-weight: ${getVariable('uiWeight')};
	font-family: inherit;
	line-height: normal;
	margin: 0 calc(1/6 * ${getVariable('horizontalBase')}) calc(1/2 * ${getVariable('verticalBase')});
	position: relative;
	text-decoration: none;
	text-align: center;
	border-radius: ${props => props.borderRadius};
	display: inline-block;
	transition: background-color 300ms ease-out;
	${props => (props.ALLCAPS && 'text-transform: uppercase')};

	${props => props.size === 'small'  && css`padding: calc(1/3*${getVariable('verticalBase')}) ${getVariable('horizontalBase')};`}
	${props => props.size === 'medium' && css`padding: calc(1/2*${getVariable('verticalBase')}) ${getVariable('horizontalBase')};`}
	${props => props.size === 'large'  && css`padding: calc(2/3*${getVariable('verticalBase')}) ${getVariable('horizontalBase')};`}

	${props => props.size === 'small'  && css`font-size: ${getVariable('uiTinySize')};`}
	${props => props.size === 'medium' && css`font-size: ${getVariable('uiSmallSize')};`}
	${props => props.size === 'large'  && css`font-size: ${getVariable('uiRegularSize')};`}

	${props => props.size === 'small'  && css`line-height: ${getVariable('uiTinyLineHeight')};`}
	${props => props.size === 'medium' && css`line-height: ${getVariable('uiSmallLineHeight')};`}
	${props => props.size === 'large'  && css`line-height: ${getVariable('uiRegularLineHeight')};`}

	a {
		color: inherit;
		font-size: inherit;
		font-weight: inherit;
		text-decoration: inherit;
		&:visited {
			color: inherit;
		}
	}

	${props => props.outline && css`
		border: .1rem solid ${getColor(props.background)};
		background: transparent;
		color: ${getColor(props.background)};
		&:hover {
			background: ${getColor(props.background)};
			color: ${calculateTextColorFromName(props.background, props)};
		}
	`}

	span {
		font-size: 2.048rem; /* TODO: Let's revisit these values */
		line-height: 0;
		position: relative;
		top: 0.48rem; /* TODO: Let's revisit these values */
	}
`;

Button.defaultProps = {
	background: 'grayTintLight',
	textColor: null,
	borderRadius: 0,
	ALLCAPS: false,
	size: 'medium',
};


Button.propTypes = {
	background: propTypes.string,
	textColor: propTypes.string,
	ALLCAPS: propTypes.bool,
	size: propTypes.oneOf(['small', 'medium', 'large']),
};

export { Button };
