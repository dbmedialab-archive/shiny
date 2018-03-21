import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
	HorizontalOverflowGradient,
	HorizontalFlexingList as Bar,
	LinkBarItem,
	NavWithOptionalConstrainer as DefaultSemanticElement,
} from '..';

const LinkBar = ({
	background,
	children,
	shouldFadeOut,
	width,
	zIndex,
	isTopLevelComponent,
	SemanticElement: PropSemanticElement,
	...rest
}) => {
	const SemanticElement = PropSemanticElement ? PropSemanticElement : DefaultSemanticElement;

	return (
		<SemanticElement
			background={background}
			width={width}
			zIndex={zIndex}
			isTopLevelComponent={isTopLevelComponent}
		>
			<Bar background={background} {...rest}>
				{children && children.map((child, i) => {
					if (child.props && child.props.isListItem) {
						return child;
					}
					return (
						<LinkBarItem key={i} {...child.props}>
							{child}
						</LinkBarItem>
					);
				})}
			</Bar>
			{shouldFadeOut && <HorizontalOverflowGradient />}
		</SemanticElement>
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
	SemanticElement: PropTypes.node,
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
	SemanticElement: null,
};

// When we export this as a styled component,
// we can use it in interpoliations,
// for example in other styled compontents
const HorizontalLinkBar = styled(LinkBar)``;

export { HorizontalLinkBar };
