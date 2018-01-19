import React from 'react';
import PropTypes from 'prop-types';

import {
	HorizontalOverflowGradient,
	HorizontalFlexingList as Bar,
	LinkBarItem,
	NavWithOptionalConstrainer,
} from '../..';

const HorizontalLinkBar = ({
	background,
	children,
	shouldFadeOut,
	width,
	zIndex,
	isTopLevelComponent,
	shouldUseScrollArrows,
	drawRightArrowInitially,
	...rest
}) => {
	return (
		<NavWithOptionalConstrainer
			background={background}
			width={width}
			zIndex={zIndex}
			isTopLevelComponent={isTopLevelComponent}
			shouldUseScrollArrows={shouldUseScrollArrows}
			drawRightArrowInitially={drawRightArrowInitially}
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
			<HorizontalOverflowGradient />
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
	drawRightArrowInitially: PropTypes.bool,
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
	drawRightArrowInitially: false,
	width: 'auto',
	zIndex: 4,
	shouldHavePadding: true,
	isTopLevelComponent: true,
};

export { HorizontalLinkBar };
