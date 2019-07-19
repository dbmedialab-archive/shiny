import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import debug from 'debug';

import { themePropTypes } from '../themes/theme-prop-types';
import { getColor, getVariable, linkBarElementSizes } from '../utils';

const log = debug('LinkBarElementBase');

const textColor = (props) => {
	const {
		isActive, activeTextColor, textColor,
	} = props;

	const color = (
		(isActive && activeTextColor)
			? getColor(activeTextColor)(props)
			: getColor(textColor)(props)
	);

	const hoverColor = getColor(activeTextColor || textColor)(props);

	return css`
		&, &:visited {
			color: ${color};

			&:hover,
			&:focus {
				color: ${hoverColor};
			}
		}
	`;
};

const getFocusBackground = (props) => {
	const activeBackgroundFromProps = (
		props.activeBackgroundColor ? getColor(props.activeBackgroundColor)(props) : props.activeBackground
	);

	return (activeBackgroundFromProps === 'transparent' ? 'rgba(0,0,0,.04)' : activeBackgroundFromProps);
};

const allcaps = props => props.ALLCAPS && css`
	text-transform: uppercase;
	letter-spacing: .1rem;
`;

/* This is the underline feature */
const underlineFeature = (props) => {
	const {
		isActive,
		useUnderline,
		size,
		skin,
		theme: { colors },
	} = props;
	const horizontalBase = getVariable('horizontalBase')(props);
	const sizeFactor = ['xsmall', 'small'].includes(size) ? 1/2 : 1;

	const width = (
		useUnderline
			? `calc( 100% - 2 * ${sizeFactor} * ${horizontalBase} )`
			: '0'
	);

	const background = colors[colors.skinColors[skin]] || colors.primary;

	return css`
		&::after {
			width: ${isActive ? width :'0'};
			display: block;
			position: absolute;
			bottom: 0;
			left: 0;
			height: .1rem;
			margin: 0 calc(${sizeFactor} * ${horizontalBase});
			background: ${background};
			content: '';
			transition: width .2s ease-in-out;
		}

		&:hover::after {
			width: ${width};
		}
	`;
};

/*
 * As opposed to other links,
 * blocklinks will not have
 * line-height or horizontal padding.
 * Often used for logos or other images.
 */
const blocklinks = (props) => {
	const { isBlockLink } = props;
	if (!isBlockLink) {
		return '';
	}

	return css`
		&& {
			line-height: 0;
			padding: 0;
		}
	`;
};

const backgroundColor = (props) => {
	const {
		isActive, activeBackground, activeBackgroundColor, backgroundColor,
	} = props;
	let background='';

	if (isActive) {
		if (activeBackground && !activeBackgroundColor) {
			log('The `activeBackground` prop has been deprecated. Use the `activeBackgroundColor instead.'
			+ ' It expects a color name from your theme instead of an actual css color string.`');
		}

		if (!activeBackgroundColor) {
			// Deprecated actual css color
			background = activeBackground;
		} else {
			// Let's use the color palette / getColor when we can
			background = getColor(activeBackgroundColor)(props);
		}
	} else {
		background = getColor(backgroundColor)(props);
	}

	const hoverBackground = props.activeBackgroundColor
		? getColor(props.activeBackgroundColor)(props)
		: props.activeBackground;
	const focusBackground = getFocusBackground(props);

	return css`
		background: ${background};

		&, &:visited {
			:hover {
				background: ${hoverBackground};
			}
		}

		&:focus {
			background: ${focusBackground};
			box-shadow: none;

			&:hover {
				background: ${focusBackground};
			}
		}

	`;
};

export const LinkBarElementBase = styled.a`
	display: inline-block;

	border: 0;
	${props => props.rounded && 'border-radius: .3rem;'}
	outline: none;
	text-decoration: none;
	font-family: ${getVariable('uiFont')};
	font-weight: ${props => (props.isActive ? '600' : '400')};

	:hover {
		text-decoration: none;
	}

	${linkBarElementSizes}
	${textColor}
	${backgroundColor};
	${allcaps}
	${blocklinks}
	${underlineFeature}
`;
LinkBarElementBase.propTypes = {
	/** Display text in capital letters */
	ALLCAPS: PropTypes.bool,
	/** DEPRECATED css color string, use activeBackgroundColor instead */
	activeBackground: PropTypes.string,
	/** Color name from theme */
	activeBackgroundColor: PropTypes.string,
	/** Color name from theme */
	backgroundColor: PropTypes.string,
	/**
	 * If props.inset is true, we will remove half the vertical padding
	 * We use this for elements like buttons and search forms that do not
	 * cover the entire height of the link bar
	 */
	inset: PropTypes.bool,
	/** Mark selected link */
	isActive: PropTypes.bool,
	/** Flag to remove line-height */
	isBlockLink: PropTypes.bool,
	/** Round the corners */
	rounded: PropTypes.bool,
	size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
	/** Color name from theme */
	textColor: PropTypes.string,
	/** Shiny theme */
	theme: PropTypes.shape(themePropTypes),
	/** Fancy underline feature on hover and focus */
	useUnderline: PropTypes.bool,
};
LinkBarElementBase.defaultProps = {
	ALLCAPS: false,
	backgroundColor: 'transparent',
	inset: false,
	isActive: false,
	isBlockLink: false,
	rounded: false,
	size: 'medium',
	textColor: 'type',
	useUnderline: false,
};
