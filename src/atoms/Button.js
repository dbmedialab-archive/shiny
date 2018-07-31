import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { getColor, calculateTextColorFromName, getNestedVariable } from '../utils';

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
	font-weight: ${props => getNestedVariable(`buttonSizes.${props.size}.fontWeight`)};
	font-family: inherit;
	font-size: ${props => getNestedVariable(`buttonSizes.${props.size}.fontSize`)};
	line-height: normal;
	margin: 0 .25rem 1.25rem;
	position: relative;
	text-decoration: none;
	text-align: center;
	border-radius: ${props => props.borderRadius};
	display: inline-block;
	padding-top: ${props => getNestedVariable(`buttonSizes.${props.size}.vertical`)};
	padding-right: ${props => getNestedVariable(`buttonSizes.${props.size}.horizontal`)};
	padding-bottom: ${props => getNestedVariable(`buttonSizes.${props.size}.vertical`)};
	padding-left: ${props => getNestedVariable(`buttonSizes.${props.size}.horizontal`)};
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
		border: .1rem solid ${getColor(props.background)};
		background: transparent;
		color: ${getColor(props.background)};
		&:hover {
			background: ${getColor(props.background)};
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
	size: 'large',
};


Button.propTypes = {
	background: propTypes.string,
	textColor: propTypes.string,
	ALLCAPS: propTypes.bool,
	size: propTypes.oneOf(['small', 'medium', 'large']),
};

export { Button };
