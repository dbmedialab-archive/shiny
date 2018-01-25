import styled, { css } from 'styled-components';

export const LinkBarLinkBase = styled.a`
	display: inline-block;

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
	outline: none;
	text-decoration: none;
	color: ${props => (
		props.textColor
			? props.theme.colors[props.textColor]
			: props.theme.colors.type
	)};
	font-size: ${props => props.theme.variables.uiRegularSize};
	line-height: ${props => props.theme.variables.uiRegularLineHeight};
	font-weight: ${props => (props.isActive ? '600' : '400')};
	transition: padding .2s;
	background: ${props => (props.isActive ? props.activeBackground : 'transparent')};

	:hover {
		text-decoration: none;
	}

	&:hover {
		background: ${props => (props.activeBackground)};
	}

	&:focus {
		background: ${props => (props.activeBackground === 'transparent' ? 'rgba(0,0,0,.04)' : props.activeBackground)};
		box-shadow: none;
		&:hover {
			background: ${props => (props.activeBackground === 'transparent' ? 'rgba(0,0,0,.04)' : props.activeBackground)};
		}
	}

	&::after {
		width: ${props =>
		(
			props.isActive && props.useUnderline
				? `calc( 100% - 2*${props.theme.variables.horizontalBase} )`
				: '0px'
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
		width: ${props => (props.useUnderline ? `calc( 100% - 2*${props.theme.variables.horizontalBase} )` : '0px')};
	}
}
	`;
