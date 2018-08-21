import styled, { css } from 'react-emotion';
import { getColor, getVariable } from '../utils';

const getTextColor = ({
	isActive, activeTextColor, textColor,
}) => (
	(isActive && activeTextColor)
		? getColor(activeTextColor)
		: getColor(textColor)
);

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
		if (props.size === 'xsmall') {
			return css`
				padding: 0 calc(1/2 * ${getVariable('horizontalBase')});
`;
		}
		if (props.size === 'small') {
			return css`
				padding:
					calc(1/2 * (3/2*${getVariable('verticalBase')} - ${getVariable('uiRegularLineHeight')}) )
					calc(1/2 * ${getVariable('horizontalBase')});
			`;
		}
		return css`
			padding:
				calc(1/2 * (3/2*${getVariable('verticalBase')} - ${getVariable('uiRegularLineHeight')}) )
				${getVariable('horizontalBase')};
		`;
	}}

	border: 0;
	outline: none;
	text-decoration: none;
	font-family: ${getVariable('headingsFont')};
	font-size: ${getVariable('uiRegularSize')};
	line-height: ${props => (props.isBlockLink ? '0' : getVariable('uiRegularLineHeight'))};
	font-weight: ${props => (props.isActive ? '600' : '400')};
	transition: padding .2s;
	background: ${props => (props.isActive ? props.activeBackground : 'transparent')};
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
			background: ${props => (props.activeBackground)};
			color: ${props => getColor(props.activeTextColor || props.textColor)};
		}
	}

	&:focus {
		background: ${props => (props.activeBackground === 'transparent' ? 'rgba(0,0,0,.04)' : props.activeBackground)};
		box-shadow: none;

		&:hover {
			background: ${props => (props.activeBackground === 'transparent' ? 'rgba(0,0,0,.04)' : props.activeBackground)};
		}
	}

	/* This is the underline feature */
	&::after {
		width: ${props => (
		props.isActive && props.useUnderline
			? css`calc( 100% - 2*${getVariable('horizontalBase')} )`
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

	@media (min-width: ${getVariable('largeWidth')}) {
		${(props) => {
		if (props.size === 'xsmall') {
			return css`
				padding: 0 calc(1/2 * ${getVariable('horizontalBase')});
			`;
		}

		if (props.size === 'small') {
			return css`
				padding:
					calc(1/2 * ( 3/2*${getVariable('verticalBase')} - ${getVariable('uiRegularLineHeight')}) )
					calc(1/4*${getVariable('horizontalBase')});
			`;
		}

		if (props.size === 'large') {
			return css`
				padding:
					calc(1/2 * ( 5/2*${getVariable('verticalBase')} - ${getVariable('uiRegularLineHeight')}) )
					${getVariable('horizontalBase')};
			`;
		}

		return css`
			padding:
				calc(1/2 * ( 2*${getVariable('verticalBase')} - ${getVariable('uiRegularLineHeight')}) )
				${getVariable('horizontalBase')};
		`;
	}}

	&:hover::after{
		width: ${props => (props.useUnderline ? css`calc( 100% - 2*${getVariable('horizontalBase')} )` : '0')};
	}
}
`;
LinkBarLinkBase.defaultProps = {
	textColor: 'type',
	ALLCAPS: false,
};
