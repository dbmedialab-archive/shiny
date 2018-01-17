import React from 'react';
import PropTypes from 'prop-types';

import { LinkBarItem } from './LinkBarItem';
import { Gradient } from './Gradient';
import { Bar } from './Bar';
import { NavWithOptionalConstrainer } from './NavWithOptionalConstrainer';

const HorizontalLinkBar = ({
	background,
	children,
	shouldFadeOut,
	shouldUseScrollArrows,
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
			shouldUseScrollArrows={shouldUseScrollArrows}
			{...rest}
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
	shouldUseScrollArrows: PropTypes.bool,
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
	shouldUseScrollArrows: false,
	width: 'auto',
	zIndex: 4,
	shouldHavePadding: true,
	isTopLevelComponent: true,
};

export { HorizontalLinkBar };
