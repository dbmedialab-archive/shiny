import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import debug from 'debug';

import { themePropTypes } from '../themes/theme-prop-types';
import { getColor, getVariable } from '../utils';

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

/*
 * With the 'xsmall', 'small', 'medium' (default) and 'large' variants,
 * LinkBar items like LinkBarLinks, LinkBarButtons and LinkBarDropdowns
 * all take up the same vertical space. That way, you can stuff in
 * another item without changing the height of your LinkBar.
 */
const linkBarElementSizes =	(props) => {
	const { size, inset } = props;
	const horizontalBase = getVariable('horizontalBase')(props);
	const verticalBase = getVariable('verticalBase')(props);
	const uiSmallSize = getVariable('uiSmallSize')(props);
	const uiSmallLineHeight = getVariable('uiSmallLineHeight')(props);
	const uiRegularSize = getVariable('uiRegularSize')(props);
	const uiRegularLineHeight = getVariable('uiRegularLineHeight')(props);

	// If props.inset is true, we will remove half the vertical padding
	// We use this for elements like buttons and search forms that do not
	// cover the entire height of the link bar
	const insetFactor = inset ? 1/2 : 1;

	let verticalPadding;
	let horizontalPadding;

	if (size === 'xsmall') {
		verticalPadding = '0';
		horizontalPadding = `calc(1/2 * ${horizontalBase})`;
	} else if (size === 'small') {
		verticalPadding = `calc(${insetFactor} * 1/2 * ( 3/2*${verticalBase} - ${uiSmallLineHeight}) )`;
		horizontalPadding = `calc(1/2 * ${horizontalBase})`;
	} else if (size === 'large') {
		verticalPadding = `calc(${insetFactor} * 1/2 * ( 5/2*${verticalBase} - ${uiRegularLineHeight}) )`;
		horizontalPadding = horizontalBase;
	} else {
		// size === medium
		verticalPadding =	`calc(${insetFactor} * 1/2 * ( 2*${verticalBase} - ${uiRegularLineHeight}) )`;
		horizontalPadding = horizontalBase;
	}

	const fontSize = ['xsmall', 'small'].includes(props.size)
		? uiSmallSize
		: uiRegularSize;
	const lineHeight = ['xsmall', 'small'].includes(props.size)
		? uiSmallLineHeight
		: uiRegularLineHeight;

	return css`
		margin: ${inset ? `${verticalPadding} 0` : 0};
		padding: ${verticalPadding} ${horizontalPadding};
		font-size: ${fontSize};
		line-height: ${lineHeight};
	`;
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
	font-family: ${getVariable('headingsFont')};
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
