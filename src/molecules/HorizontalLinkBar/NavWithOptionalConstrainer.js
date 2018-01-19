import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import {
	DontPushTheAdBoundaries,
	LinkBarNav as Nav,
} from '../..';

import { ScrollArrow } from './ScrollArrow';

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

	componentDidMount() {
		if (this.container && this.content) {
			this.drawRightArrowOnlyIfNeeded();
		}
	}

	drawRightArrowOnlyIfNeeded() {
		const { shouldDrawRightArrow } = this.state;

		const {
			offsetWidth: containerSize,
		} = this.container;
		const {
			scrollWidth: contentFullSize,
			offsetWidth: contentVisibleSize,
			scrollLeft: leftScrollPosition,
		} = this.content;

		const contentWiderThanContainer = contentFullSize > containerSize;
		const allToTheFarRight = (leftScrollPosition + contentVisibleSize) === contentFullSize;

		if (contentWiderThanContainer && !allToTheFarRight) {
			!shouldDrawRightArrow && this.setState({ shouldDrawRightArrow: true });
		} else {
			shouldDrawRightArrow && this.setState({ shouldDrawRightArrow: false });
		}
	}

	drawLeftArrowfOnlyIfNeeded() {
		const { shouldDrawLeftArrow } = this.state;
		if (this.content.scrollLeft && this.content.scrollLeft > 5) {
			!shouldDrawLeftArrow && this.setState({ shouldDrawLeftArrow: true });
		} else {
			shouldDrawLeftArrow && this.setState({ shouldDrawLeftArrow: false });
		}
	}

	leftClick = () => {
		const { scrollLength } = this.props;
		this.content.scrollBy(-scrollLength, 0);
		this.drawLeftArrowfOnlyIfNeeded();
		this.drawRightArrowOnlyIfNeeded();
	}

	rightClick = (e) => {
		const { scrollLength } = this.props;
		this.content.scrollBy(scrollLength, 0);
		this.drawLeftArrowfOnlyIfNeeded();
		this.drawRightArrowOnlyIfNeeded();
	}

	addInnerRefToContent(children) {
		const addInnerRef = (child, i) => {
			if (!child) {
				return null;
			}

			// only change the first child
			if (i !== 0) {
				return child;
			}

			return cloneElement(
				child,
				{
					innerRef: (input) => { this.content = input; },
				}
			);
		};

		return Children.map(children, addInnerRef);
	}

	render() {
		const {
			width, background, zIndex, isTopLevelComponent, shouldUseScrollArrows, children,
		} = this.props;

		const {
			shouldDrawLeftArrow, shouldDrawRightArrow,
		} = this.state;

		const childrenToDraw = shouldUseScrollArrows
			? this.addInnerRefToContent(children)
			: children;

		const content = isTopLevelComponent
			? (
				<DesktopWidthConstrainer
					zIndex={zIndex}
					shouldUseScrollArrows={shouldUseScrollArrows}
				>
					{childrenToDraw}
				</DesktopWidthConstrainer>
			)
			: childrenToDraw;

		return (
			<Nav
				innerRef={(input) => { this.container = input; }} // Must use 'innerRef' instead of 'ref' with styled-components
				width={width}
				background={background}
			>
				{shouldDrawLeftArrow && <ScrollArrow onClick={this.leftClick} pointsTo="left" />}
				{content}
				{shouldDrawRightArrow && <ScrollArrow onClick={this.rightClick} pointsTo="right" />}
			</Nav>
		);
	}
}

NavWithOptionalConstrainer.propTypes = {
	background: PropTypes.string,
	width: PropTypes.string.isRequired,
	zIndex: PropTypes.number.isRequired,
	isTopLevelComponent: PropTypes.bool.isRequired,
	shouldUseScrollArrows: PropTypes.bool.isRequired,
	drawRightArrowInitially: PropTypes.bool.isRequired,
	scrollLength: PropTypes.number,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};
NavWithOptionalConstrainer.defaultProps = {
	background: 'transparent',
	scrollLength: 100,
};

export { NavWithOptionalConstrainer };
