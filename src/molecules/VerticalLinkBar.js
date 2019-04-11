import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import debug from  'debug';

import { LinkBarItem as Li } from '../atoms/LinkBarItem';

// import { LinkBarNav as Nav } from '../atoms/LinkBarNav';
import { VerticalFlexingList as Bar } from '../atoms/VerticalFlexingList';

const log = debug('VerticalLinkBar');

const LinkBarItem = styled(Li)`
	box-sizing: border-box;
	width: 100%;

	> a {
		box-sizing: border-box;
		width: 100%;
	}
`;
const RenderChildren = ({ children }) => {
	console.warn(children);
	if (children && children.map) {
		return children.map((child, i) => <RenderChildren key={i}>{child}</RenderChildren>);
	}
	return (
		<LinkBarItem
			position={children.props.position}
			flex={children.props.flex}
			xs={children.props.xs}
			sm={children.props.sm}
			md={children.props.md}
			lg={children.props.lg}
			zIndex={children.props.zIndex}
		>
			{children}
		</LinkBarItem>
	);
};
RenderChildren.propTypes = {
	children: PropTypes.node.isRequired,
};
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
		<Bar {...rest} background={background} backgroundColor={backgroundColor}>
			<RenderChildren>{children}</RenderChildren>
		</Bar>
	);
};

LinkBar.propTypes = {
	background: PropTypes.string, // Deprecated actual css color
	backgroundColor: PropTypes.string, // Color name from theme
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

LinkBar.defaultProps = {
	background: 'papayawhip', // Deprecated actual css color
	backgroundColor: null, // Color name from theme
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

// When we export this as a styled component,
// we can use it in interpoliations,
// for example in other styled compontents
const VerticalLinkBar = styled(LinkBar)``;
export { VerticalLinkBar };
