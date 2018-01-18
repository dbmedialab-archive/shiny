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
				{shouldUseScrollArrows && <ScrollArrow pointsTo="left" />}
				<DesktopWidthConstrainer zIndex={zIndex}>
					{children}
				</DesktopWidthConstrainer>
				{shouldUseScrollArrows && <ScrollArrow pointsTo="right" />}
			</Nav>
		);
	}
	return (
		<Nav width={width} background={background}>
			{shouldUseScrollArrows && <ScrollArrow pointsTo="left" />}
			{children}
			{shouldUseScrollArrows && <ScrollArrow pointsTo="right" />}
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
