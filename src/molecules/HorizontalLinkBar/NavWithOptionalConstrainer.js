import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import {
	DontPushTheAdBoundaries,
	LinkBarNav,
} from '../..';

const Nav = LinkBarNav.extend`
	display: flex;
`;

const DesktopWidthConstrainer = DontPushTheAdBoundaries.extend`
	&& {
		padding-top: 0;
		background: transparent;
		align-items: center;
		z-index: ${props => props.zIndex};
		overflow: ${props => (props.shouldUseScrollArrows? 'hidden' : 'visible')};
	}
`;

class NavWithOptionalConstrainer extends Component {
	constructor(props) {
		super(props);

		const { shouldUseScrollArrows, drawRightArrowInitially } = props;

		this.container = null;
		this.content = null;

		this.state = {
			shouldDrawLeftArrow: false,
			shouldDrawRightArrow: shouldUseScrollArrows && drawRightArrowInitially,
		};
	}

	render() {
		const {
			width, background, zIndex, isTopLevelComponent, shouldUseScrollArrows, children,
		} = this.props;

		if (isTopLevelComponent) {
			return (
				<Nav width={width} background={background}>
					<DesktopWidthConstrainer zIndex={zIndex}>
						{children}
					</DesktopWidthConstrainer>
				</Nav>
			);
		}
		return (
			<Nav width={width} background={background}>
				{children}
			</Nav>
		);
	}
}

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
