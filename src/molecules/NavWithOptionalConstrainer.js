// Originally written for the HorizontalLinkBar molecule
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { DontPushTheAdBoundaries } from '../atoms/DontPushTheAdBoundaries';
import { LinkBarNav as Nav } from '../atoms/LinkBarNav';

const DesktopWidthConstrainer = styled(DontPushTheAdBoundaries)`
	&& {
		padding-top: 0;
		background: transparent;
		align-items: center;
		z-index: ${props => props.zIndex};
	}
`;

const NavWithOptionalConstrainer = ({
	children,
	isTopLevelComponent,
	zIndex,
	...rest
}) => {
	if (isTopLevelComponent) {
		return (
			<Nav {...rest}>
				<DesktopWidthConstrainer zIndex={zIndex}>
					{children}
				</DesktopWidthConstrainer>
			</Nav>
		);
	}
	return (
		<Nav {...rest}>
			{children}
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
