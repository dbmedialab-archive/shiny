import React from 'react';
import PropTypes from 'prop-types';

import {
	LinkBarItem as Li,
} from '../..';

import { LinkBarNav as Nav } from '../atoms/LinkBarNav';
import { VerticalFlexingList as Bar } from '../atoms/VerticalFlexingList';

const LinkBarItem = Li.extend`
	box-sizing: border-box;
	width: 100%;

	> a {
		box-sizing: border-box;
		width: 100%;
	}
`;

const VerticalLinkBar = ({
	background,
	children,
	shouldFadeOut,
	width,
	zIndex,
	isTopLevelComponent,
	...rest
}) => {
	return (
		<Nav
			background={background}
			width={width}
			zIndex={zIndex}
			isTopLevelComponent={isTopLevelComponent}
			isVertical
		>
			<Bar background={background} {...rest}>
				{children && children.map((child, i) => {
					return (
						<LinkBarItem key={i} {...child.props}>
							{child}
						</LinkBarItem>
					);
				})}
			</Bar>
		</Nav>
	);
};

VerticalLinkBar.propTypes = {
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

VerticalLinkBar.defaultProps = {
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

export { VerticalLinkBar };
