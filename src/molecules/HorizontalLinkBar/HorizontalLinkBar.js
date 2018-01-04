import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { DontPushTheAdBoundaries } from '../../atoms/DontPushTheAdBoundaries';

import { LinkBarItem } from './LinkBarItem';

const Gradient = styled.div`
	background: linear-gradient(to right, rgba(255,255,255,.3) 0%, rgba(255,255,255,1) 70%);
	position: absolute;
	top: 0;
	right: 0;
	width: 3rem;
	height: calc(100% - .1rem);
`;

const Nav = styled.nav`
	background: ${props => props.background};
	position: relative;
	width: ${props => props.width};
`;

const Bar = styled.ul`
	${props => (props.shouldFlexChildren
		? `
			display: flex;
			align-items: center;
		` : `
			display: block;
		`
	)}
	width: ${props => (props.shouldAdjustForNestedPadding
		? `calc(100% + 2*${props.theme.variables.horizontalBase})`
		: '100%'
	)};
	margin: ${props => (props.shouldAdjustForNestedPadding ? `0 -${props.theme.variables.horizontalBase}` : '0')};
	padding: ${props => (props.shouldHavePadding ? `0 calc(1/2 * ${props.theme.variables.horizontalBase})` : '0')};
	font-family: ${props => props.theme.variables.mainFont};

	background: ${props => props.background};

	white-space: nowrap;
	overflow: ${props => props.overflow};

	-webkit-overflow-scrolling: touch!important;
	-ms-overflow-style: -ms-autohiding-scrollbar!important;
	-ms-overflow-style: none;
	position: relative;

	::-webkit-scrollbar {
		display: none;
	}
`;

const DesktopWidthConstrainer = styled(DontPushTheAdBoundaries)`
padding-top: 0;
background: transparent;
align-items: center;
z-index: ${props => props.zIndex};
`;

const NavWithOptionalConstrainer = ({
	width, background, zIndex, isTopLevelComponent, ...props
}) => {
	if (isTopLevelComponent) {
		return (
			<Nav width={width} background={background}>
				<DesktopWidthConstrainer zIndex={zIndex}>
					{props.children}
				</DesktopWidthConstrainer>
			</Nav>
		);
	}
	return (
		<Nav width={width} background={background}>
			{props.children}
		</Nav>
	);
};

NavWithOptionalConstrainer.propTypes = {
	background: PropTypes.string,
	width: PropTypes.string.isRequired,
	zIndex: PropTypes.number.isRequired,
	isTopLevelComponent: PropTypes.bool.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};
NavWithOptionalConstrainer.defaultProps = {
	background: 'transparent',
};

const HorizontalLinkBar = ({
	background,
	children,
	shouldFadeOut,
	width,
	zIndex,
	isTopLevelComponent,
	...rest
}) => {
	return (
		<NavWithOptionalConstrainer
			background={background}
			width={width}
			zIndex={zIndex}
			isTopLevelComponent={isTopLevelComponent}
		>
			<Bar {...rest}>
				{children && children.map((child, i) => {
					return (
						<LinkBarItem key={i} {...child.props}>
							{child}
						</LinkBarItem>
					);
				})}
			</Bar>
			{shouldFadeOut &&
			<Gradient />
			}
		</NavWithOptionalConstrainer>
	);
};

HorizontalLinkBar.propTypes = {
	background: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	overflow: PropTypes.string,
	shouldAdjustForNestedPadding: PropTypes.bool,
	shouldFlexChildren: PropTypes.bool,
	shouldFadeOut: PropTypes.bool,
	width: PropTypes.string,
	shouldHavePadding: PropTypes.bool,
	zIndex: PropTypes.number,
	isTopLevelComponent: PropTypes.bool,
};

HorizontalLinkBar.defaultProps = {
	background: 'papayawhip', // colors.white,
	children: null,
	overflow: 'auto',
	shouldAdjustForNestedPadding: false,
	shouldFlexChildren: false,
	shouldFadeOut: false,
	width: 'auto',
	zIndex: 4,
	shouldHavePadding: true,
	isTopLevelComponent: true,
};

export { HorizontalLinkBar };
