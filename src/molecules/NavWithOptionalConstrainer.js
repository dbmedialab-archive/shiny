// Originally written for the HorizontalLinkBar molecule
import React from 'react';
import PropTypes from 'prop-types';

import { DontPushTheAdBoundaries } from '..';
import { LinkBarNav as Nav } from '..';

const DesktopWidthConstrainer = DontPushTheAdBoundaries.extend`
	&& {
		padding-top: 0;
		background: transparent;
		align-items: center;
		z-index: ${props => props.zIndex};
	}
`;

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
