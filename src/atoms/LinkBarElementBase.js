import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import debug from 'debug';

import { themePropTypes } from '../themes/theme-prop-types';
import { getColor, getVariable } from '../utils';

const log = debug('LinkBarElementBase');

const getTextColor = ({
	isActive, activeTextColor, textColor,
}) => (
	(isActive && activeTextColor)
		? getColor(activeTextColor)
		: getColor(textColor)
);

const getFocusBackground = (props) => {
	const activeBackgroundFromProps = (
		props.activeBackgroundColor ? getColor(props.activeBackgroundColor)(props) : props.activeBackground
	);

	return (props.activeBackground === 'transparent' ? 'rgba(0,0,0,.04)' : activeBackgroundFromProps);
};

export const LinkBarElementBase = styled.a`
	display: inline-block;

	/*
	 * With the 'xsmall', 'small', 'medium' (default) and 'large' variants,
	 * LinkBar items like LinkBarLinks, LinkBarButtons and LinkBarDropdowns
	 * all take up the same vertical space. That way, you can stuff in
	 * another item without changing the height of your LinkBar.
	 */
	${(props) => {
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

		let padding;
		let smPadding;
		if (size === 'xsmall') {
			padding = `
				0
				calc(1/2 * ${horizontalBase})
			`;
			smPadding = padding;
		} else if (size === 'small') {
			padding = `
				calc(${insetFactor} * 1/2 * (3/2*${verticalBase} - ${uiSmallLineHeight}) )
				calc(1/2 * ${horizontalBase})
			`;
			smPadding = `
				calc(${insetFactor} * 1/2 * ( 3/2*${verticalBase} - ${uiSmallLineHeight}) )
				calc(1/2 * ${horizontalBase})
			`;
		} else if (size === 'large') {
			padding = `
				calc(${insetFactor} * 1/2 * (4/2*${verticalBase} - ${uiRegularLineHeight}) )
				${horizontalBase}
			`;
			smPadding = `
				calc(${insetFactor} * 1/2 * ( 5/2*${verticalBase} - ${uiRegularLineHeight}) )
				${horizontalBase}
			`;
		} else {
			// size === medium
			padding = `
				calc(${insetFactor} * 1/2 * (3/2*${verticalBase} - ${uiRegularLineHeight}) )
				${horizontalBase}
			`;
			smPadding = `
				calc(${insetFactor} * 1/2 * ( 2*${verticalBase} - ${uiRegularLineHeight}) )
				${horizontalBase};
			`;
		}

		const fontSize = ['xsmall', 'small'].includes(props.size)
			? uiSmallSize
			: uiRegularSize;
		const lineHeight = ['xsmall', 'small'].includes(props.size)
			? uiSmallLineHeight
			: uiRegularLineHeight;

		return css`
			font-size: ${fontSize};
			line-height: ${lineHeight};
			padding: ${padding};
			@media screen and (min-width: ${props.theme.flexboxgrid.breakpoints.sm}em) {
				padding: ${smPadding};
			}
		`;
	}}

	border: 0;
	${props => props.rounded && 'border-radius: .3rem;'}
	outline: none;
	text-decoration: none;
	font-family: ${getVariable('headingsFont')};
	font-weight: ${props => (props.isActive ? '600' : '400')};
	transition: padding .2s;
	background: ${(props) => {
		if (props.isActive) {
			if (props.activeBackground && !props.activeBackgroundColor) {
				log('The `activeBackground` prop has been deprecated. Use the `activeBackgroundColor instead.'
				+ ' It expects a color name from your theme instead of an actual css color string.`');
			}

			if (!props.activeBackgroundColor) {
				// Deprecated actual css color
				return props.activeBackground;
			}

			// Let's use the color palette / getColor when we can
			return getColor(props.activeBackgroundColor)(props);
		}
		return getColor(props.backgroundColor)(props);
	}};
	${props => props.ALLCAPS && css`
		text-transform: uppercase;
		letter-spacing: .1rem;
	`}

	/*
	 * As opposed to other links,
	 * blocklinks will not have
	 * line-height or horizontal padding
	 */
	${(props) => {
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
	}}

	:hover {
		text-decoration: none;
	}

	& {
		color: ${getTextColor};
		:hover {
			background:
				${
	props => (props.activeBackgroundColor
		? getColor(props.activeBackgroundColor)(props)
		: props.activeBackground)
};
			color: ${props => getColor(props.activeTextColor || props.textColor)};
		}
	}

	&:focus {
		background: ${getFocusBackground};
		box-shadow: none;

		&:hover {
			background: ${getFocusBackground};
		}
	}

	/* This is the underline feature */
	${(props) => {
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
				? css`calc( 100% - 2 * ${sizeFactor} * ${horizontalBase} )`
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

			&:hover::after{
				width: ${width};
			}
		`;
	}}
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
	theme: () => themePropTypes,
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
