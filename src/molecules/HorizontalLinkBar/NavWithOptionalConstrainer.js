import React from 'react';
import PropTypes from 'prop-types';

import { Nav } from './Nav';
import { DesktopWidthConstrainer } from './DesktopWidthConstrainer';

const NavWithOptionalConstrainer = ({
	width, background, zIndex, isTopLevelComponent, ...props
}) => {
	if (isTopLevelComponent) {
		return (
			<Nav width={width} background={background}>
				<DesktopWidthConstrainer zIndex={zIndex}>
					{props.children}
				</DesktopWidthConstrainer>
			</Nav>
		);
	}
	return (
		<Nav width={width} background={background}>
			{props.children}
		</Nav>
	);
};

NavWithOptionalConstrainer.propTypes = {
	background: PropTypes.string,
	width: PropTypes.string.isRequired,
	zIndex: PropTypes.number.isRequired,
	isTopLevelComponent: PropTypes.bool.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

NavWithOptionalConstrainer.defaultProps = {
	background: 'transparent',
};

export { NavWithOptionalConstrainer };
