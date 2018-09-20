import styled, { css } from 'react-emotion';
import debug from 'debug';

import { getColor, getVariable } from '../utils';

const log = debug('LinkBarLinkBase');

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

export const LinkBarLinkBase = styled.a`
	display: inline-block;

	/*
	 * With the 'xsmall', 'small', '' (default) and 'large' variants,
	 * LinkBar items like LinkBarLinks, LinkBarButtons and LinkBarDropdowns
	 * all take up the same vertical space. That way, you can stuff in
	 * another item without changing the height of your LinkBar.
	 *
	 * Also used in media query overrides.
	 */
	${(props) => {
		const horizontalBase = getVariable('horizontalBase')(props);
		const verticalBase = getVariable('verticalBase')(props);
		const uiRegularLineHeight = getVariable('uiRegularLineHeight')(props);

		// If props.inset is true, we will remove half the vertical padding
		// We use this for elements like buttons and search forms that do not
		// cover the entire height of the link bar
		const insetFactor = props.inset ? 1/2 : 1;

		if (props.size === 'xsmall') {
			return css`
				padding:
					0
					calc(1/2 * ${horizontalBase});
			`;
		}
		if (props.size === 'small') {
			return css`
				padding:
					calc(${insetFactor} * 1/2 * (3/2*${verticalBase} - ${uiRegularLineHeight}) )
					calc(1/2 * ${horizontalBase});
			`;
		}
		return css`
			padding:
				calc(${insetFactor} * 1/2 * (3/2*${verticalBase} - ${uiRegularLineHeight}) )
				${horizontalBase};
		`;
	}}

	border: 0;
	${props => props.rounded && 'border-radius: .3rem;'}
	outline: none;
	text-decoration: none;
	font-family: ${getVariable('headingsFont')};
	font-size: ${getVariable('uiRegularSize')};
	line-height: ${props => (props.isBlockLink ? '0' : getVariable('uiRegularLineHeight')(props))};
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
	&::after {
		width: ${props => (
		props.isActive && props.useUnderline
			? css`calc( 100% - 2*${getVariable('horizontalBase')(props)} )`
			: '0'
	)};
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		height: .1rem;
		margin: 0 ${getVariable('horizontalBase')};
		background: ${props => (
		props.theme.colors[props.theme.colors.skinColors[props.skin]] || props.theme.colors.primary
	)};
		content: '';
		transition: width .2s ease-in-out;
	}

	@media screen and (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
		${(props) => {
		const horizontalBase = getVariable('horizontalBase')(props);
		const verticalBase = getVariable('verticalBase')(props);
		const uiRegularLineHeight = getVariable('uiRegularLineHeight')(props);

		// If props.inset is true, we will remove half the vertical padding
		// We use this for elements like buttons and search forms that do not
		// cover the entire height of the link bar
		const insetFactor = props.inset ? 1/2 : 1;

		if (props.size === 'xsmall') {
			return css`
				padding: 0 calc(1/2 * ${getVariable('horizontalBase')(props)});
			`;
		}

		if (props.size === 'small') {
			return css`
				padding:
					calc(${insetFactor} * 1/2 * ( 3/2*${verticalBase} - ${uiRegularLineHeight}) )
					calc(1/4*${horizontalBase});
			`;
		}

		if (props.size === 'large') {
			return css`
				padding:
					calc(${insetFactor} * 1/2 * ( 5/2*${verticalBase} - ${uiRegularLineHeight}) )
					${getVariable('horizontalBase')(props)};
			`;
		}

		return css`
			padding:
				calc(${insetFactor} * 1/2 * ( 2*${verticalBase} - ${uiRegularLineHeight}) )
				${horizontalBase};
		`;
	}}

	&:hover::after{
		width: ${props => (props.useUnderline ? css`calc( 100% - 2*${getVariable('horizontalBase')(props)} )` : '0')};
	}
}
`;
LinkBarLinkBase.defaultProps = {
	backgroundColor: 'transparent',
	textColor: 'type',
	ALLCAPS: false,
};
