import styled, { css } from 'styled-components';
import { getColor } from '../utils';

const getTextColor = ({
	theme, isActive, activeTextColor, textColor,
}) => ((isActive && activeTextColor)
	? getColor(activeTextColor)
	: getColor(textColor)
);
const getBackgroundColor = ({ isActive, activeBackground, backgroundColor }) => (
	isActive
		? getColor(activeBackground)
		: getColor(backgroundColor)
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
				padding: 0 calc(1/2 * ${props.theme.variables.horizontalBase});
`;
		}
		if (props.size === 'small') {
			return css`
				padding:
					calc(1/2 * (3/2*${props.theme.variables.verticalBase} - ${props.theme.variables.uiRegularLineHeight}) )
					calc(1/2 * ${props.theme.variables.horizontalBase});
			`;
		}
		return css`
			padding:
				calc(1/2 * (3/2*${props.theme.variables.verticalBase} - ${props.theme.variables.uiRegularLineHeight}) )
				${props.theme.variables.horizontalBase};
		`;
	}}

	border: 0;
	${props => props.provideRightSpacer && 'margin-right: .1rem;'}
	outline: none;
	text-decoration: none;
	${props => props.ALLCAPS && 'text-transform: uppercase;'}
	color: ${getTextColor};
	font-family: ${props => props.theme.variables.headingsFont};
	font-size: ${props => props.theme.variables.uiRegularSize};
	line-height: ${props => (props.isBlockLink ? '0' : props.theme.variables.uiRegularLineHeight)};
	font-weight: ${props => (props.isActive ? '600' : '400')};
	transition: padding .2s;
	background: ${getBackgroundColor};

	:hover {
		text-decoration: none;
	}

	&:hover {
		background: ${props => (props.activeBackground)};
		color: ${props => props.theme.colors[props.activeTextColor || props.textColor]};
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
		width: ${props =>
		(
			props.isActive && props.useUnderline
				? `calc( 100% - 2*${props.theme.variables.horizontalBase} )`
				: '0'
		)};
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		height: .1rem;
		margin: 0 ${props => props.theme.variables.horizontalBase};
		background: ${props =>
		(
			props.theme.colors[props.theme.colors.skinColors[props.skin]] || props.theme.colors.primary
		)};
		content: '';
		transition: width .2s ease-in-out;
	}

	@media (min-width: ${props => props.theme.variables.largeWidth}) {
		${(props) => {
		if (props.size === 'xsmall') {
			return css`
				padding: 0 calc(1/2 * ${props.theme.variables.horizontalBase});
			`;
		}

		if (props.size === 'small') {
			return `padding:
				calc(1/2 * ( 3/2*${props.theme.variables.verticalBase} - ${props.theme.variables.uiRegularLineHeight}) )
				calc(1/4*${props.theme.variables.horizontalBase});
			`;
		}

		if (props.size === 'large') {
			return `padding:
				calc(1/2 * ( 5/2*${props.theme.variables.verticalBase} - ${props.theme.variables.uiRegularLineHeight}) )
				${props.theme.variables.horizontalBase};
			`;
		}

		return `padding:
			calc(1/2 * ( 2*${props.theme.variables.verticalBase} - ${props.theme.variables.uiRegularLineHeight}) )
			${props.theme.variables.horizontalBase};
		`;
	}}

	&:hover::after{
		width: ${props => (props.useUnderline ? `calc( 100% - 2*${props.theme.variables.horizontalBase} )` : '0')};
	}
}
`;
LinkBarLinkBase.defaultProps = {
	textColor: 'type',
	activeTextColor: null,
	backgroundColor: 'transparent',
};
