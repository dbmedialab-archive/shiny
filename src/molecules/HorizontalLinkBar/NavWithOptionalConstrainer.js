import React from 'react';
import PropTypes from 'prop-types';

import { Nav } from './Nav';
import { DesktopWidthConstrainer } from './DesktopWidthConstrainer';
import { ScrollArrow } from './ScrollArrow';

const NavWithOptionalConstrainer = ({
	width, background, zIndex, isTopLevelComponent, shouldUseScrollArrows, children,
}) => {
	if (isTopLevelComponent) {
		return (
			<Nav width={width} background={background}>
				{shouldUseScrollArrows && <ScrollArrow pointTo="left">&#8826;</ScrollArrow>}
				<DesktopWidthConstrainer zIndex={zIndex}>
					{children}
				</DesktopWidthConstrainer>
				{shouldUseScrollArrows && <ScrollArrow pointTo="right">&#8827;</ScrollArrow>}
			</Nav>
		);
	}
	return (
		<Nav width={width} background={background}>
			{children}
		</Nav>
	);
};

NavWithOptionalConstrainer.propTypes = {
	background: PropTypes.string,
	width: PropTypes.string.isRequired,
	zIndex: PropTypes.number.isRequired,
	isTopLevelComponent: PropTypes.bool.isRequired,
	shouldUseScrollArrows: PropTypes.bool.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

NavWithOptionalConstrainer.defaultProps = {
	background: 'transparent',
};

export { NavWithOptionalConstrainer };
