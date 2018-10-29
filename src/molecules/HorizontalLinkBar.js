import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import debug from 'debug';

import { HorizontalOverflowGradient } from '../atoms/HorizontalOverflowGradient';
import { HorizontalFlexingList as Bar } from '../atoms/HorizontalFlexingList';
import { LinkBarItem } from '../atoms/LinkBarItem';
import { NavWithOptionalConstrainer } from './NavWithOptionalConstrainer';

const log = debug('HorizontalLinkBar');

const LinkBar = ({
	background,
	backgroundColor,
	children,
	shouldFadeOut,
	width,
	zIndex,
	isTopLevelComponent,
	...rest
}) => {
	if (background && !backgroundColor) {
		log('the \'background\' prop is deprecated. Use the \'backgroundColor\' prop instead. '
		+ '\'backgroundColor\' takes a color name from the theme instead of an actual css color string.');
	}

	return (
		<NavWithOptionalConstrainer
			background={background}
			backgroundColor={backgroundColor}
			width={width}
			zIndex={zIndex}
			isTopLevelComponent={isTopLevelComponent}
		>
			<Bar background={background} backgroundColor={backgroundColor} position="static" {...rest}>
				{children && React.Children.map(children, (child, i) => {
					if (child.props && child.props.isListItem) {
						return child;
					}

					return (
						<LinkBarItem
							key={i}
							position={child.props.position}
							flex={child.props.flex}
							xs={child.props.xs}
							sm={child.props.sm}
							md={child.props.md}
							lg={child.props.lg}
							zIndex={child.props.zIndex}
						>
							{child}
						</LinkBarItem>
					);
				})}
			</Bar>
			{shouldFadeOut && <HorizontalOverflowGradient />}
		</NavWithOptionalConstrainer>
	);
};

LinkBar.propTypes = {
	/** Deprecated actual css color string. Use activeBackgroundColor instead. */
	background: PropTypes.string,
	/** Color name from theme. Color of the background on links that have the isActive flag set. */
	backgroundColor: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	/** Top level components include a DesktopWidthConstrainer */
	isTopLevelComponent: PropTypes.bool,
	/** This value will be used directly in CSS */
	overflow: PropTypes.string,
	/** Set to true to counteract the effect of having nested components which both have padding. */
	shouldAdjustForNestedPadding: PropTypes.bool,
	/** Add a transparent to white overlay on the sides */
	shouldFadeOut: PropTypes.bool,
	/** Use the flexbox model */
	shouldFlexChildren: PropTypes.bool,
	/** The same as shouldAdjustForNestedPadding? */
	shouldHavePadding: PropTypes.bool,
	/** Whether flexing link bars with overflowing content should wrap to a new line. */
	shouldWrap: PropTypes.bool,
	/** Actual CSS value */
	width: PropTypes.string,
	/** Actual CSS value */
	zIndex: PropTypes.number,
};

LinkBar.defaultProps = {
	background: 'papayawhip',
	backgroundColor: null,
	children: null,
	overflow: 'auto',
	shouldAdjustForNestedPadding: false,
	shouldFlexChildren: false,
	shouldFadeOut: false,
	width: 'auto',
	zIndex: 4,
	shouldHavePadding: true,
	isTopLevelComponent: true,
	shouldWrap: false,
};

// When we export this as a styled component,
// we can use it in interpoliations,
// for example in other styled compontents
const HorizontalLinkBar = styled(LinkBar)``;
HorizontalLinkBar.propTypes = LinkBar.propTypes;
HorizontalLinkBar.displayName = 'HorizontalLinkBar';

export { HorizontalLinkBar };
