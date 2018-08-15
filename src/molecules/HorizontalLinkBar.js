import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { HorizontalOverflowGradient } from '../atoms/HorizontalOverflowGradient';
import { HorizontalFlexingList as Bar } from '../atoms/HorizontalFlexingList';
import { LinkBarItem } from '../atoms/LinkBarItem';
import { NavWithOptionalConstrainer } from './NavWithOptionalConstrainer';

const LinkBar = ({
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
			<Bar background={background} position="static" {...rest}>
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
	shouldWrap: PropTypes.bool,
};

LinkBar.defaultProps = {
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
	shouldWrap: false,
};

// When we export this as a styled component,
// we can use it in interpoliations,
// for example in other styled compontents
const HorizontalLinkBar = styled(LinkBar)``;

export { HorizontalLinkBar };
