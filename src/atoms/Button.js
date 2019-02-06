import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { getColor, getVariable, calculateTextColorFromName } from '../utils';

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
	font-weight: 400;
	font-family: inherit;
	font-size: 1.28rem;
	line-height: normal;
	margin: 0 .25rem 1.25rem;
	position: relative;
	text-decoration: none;
	text-align: center;
	border-radius: ${props => props.borderRadius};
	display: inline-block;
	padding-top: calc(${getVariable('verticalBase')} / 2);
	padding-right: calc(${getVariable('horizontalBase')} * 1.5);
	padding-bottom: calc(${getVariable('verticalBase')} / 2);
	padding-left: calc(${getVariable('horizontalBase')} * 1.5);
	transition: background-color 300ms ease-out;
	${props => (props.ALLCAPS && 'text-transform: uppercase')};

	& a {
		color: inherit;
		font-size: inherit;
		font-weight: inherit;
		text-decoration: inherit;
		&:visited {
			color: inherit;
		}
	}

	${props => props.outline && css`
		border: .1rem solid ${getColor(props.background)(props)};
		background: transparent;
		color: ${getColor(props.background)(props)};
		&:hover {
			background: ${getColor(props.background)(props)};
			color: ${calculateTextColorFromName(props.background, props)};
		}
	`}

	& span {
		font-size: 2.048rem;
		line-height: 0;
		position: relative;
		top: 0.48rem;
	}
`;

Button.defaultProps = {
	background: 'grayTintLight',
	textColor: null,
	borderRadius: 0,
	ALLCAPS: false,
};


Button.propTypes = {
	background: PropTypes.string,
	textColor: PropTypes.string,
	ALLCAPS: PropTypes.bool,
};

export { Button };
