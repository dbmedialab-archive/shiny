import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { LinkBarItem as Li } from '../atoms/LinkBarItem';

// import { LinkBarNav as Nav } from '../atoms/LinkBarNav';
import { VerticalFlexingList as Bar } from '../atoms/VerticalFlexingList';

const LinkBarItem = styled(Li)`
	box-sizing: border-box;
	width: 100%;

	> a {
		box-sizing: border-box;
		width: 100%;
	}
`;

const LinkBar = ({
	background,
	children,
	shouldFadeOut,
	width,
	zIndex,
	isTopLevelComponent,
	...rest
}) => (
	<Bar background={background} {...rest}>
		{children && children.map((child, i) => {
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
);
/*
Wrap it in this?

<Nav
	background={background}
	width={width}
	zIndex={zIndex}
	isTopLevelComponent={isTopLevelComponent}
	isVertical
>
</Nav>
*/

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
};

// When we export this as a styled component,
// we can use it in interpoliations,
// for example in other styled compontents
const VerticalLinkBar = styled(LinkBar)``;
export { VerticalLinkBar };
