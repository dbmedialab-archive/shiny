import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { LinkBarNav } from '../..';

import { DesktopWidthConstrainer } from './DesktopWidthConstrainer';
import { ScrollArrow } from './ScrollArrow';

const Nav = styled(LinkBarNav)`
	display: flex;
`;

class NavWithOptionalConstrainer extends Component {
	constructor(props) {
		super(props);

		const { shouldUseScrollArrows, drawRightArrowInitially } = props;

		this.container = null;
		this.firstChild = null;

		this.state = {
			shouldDrawLeftArrow: false,
			shouldDrawRightArrow: shouldUseScrollArrows && drawRightArrowInitially,
		};
	}

	componentDidMount() {
		if (this.container && this.firstChild) {
			this.drawRightArrowOnlyIfNeeded();
		}
	}

	drawRightArrowOnlyIfNeeded() {
		const { shouldDrawRightArrow } = this.state;

		const {
			offsetWidth: containerSize,
		} = this.container;
		const {
			scrollWidth: firstChildFullSize,
			offsetWidth: firstChildVisibleSize,
			scrollLeft: leftScrollPosition,
		} = this.firstChild;

		const contentWiderThanContainer = firstChildFullSize > containerSize;
		const allToTheFarRight = (leftScrollPosition + firstChildVisibleSize) === firstChildFullSize;

		if (contentWiderThanContainer && !allToTheFarRight) {
			!shouldDrawRightArrow && this.setState({ shouldDrawRightArrow: true });
		} else {
			shouldDrawRightArrow && this.setState({ shouldDrawRightArrow: false });
		}
	}

	drawLeftArrowfOnlyIfNeeded() {
		const { shouldDrawLeftArrow } = this.state;
		if (this.firstChild.scrollLeft && this.firstChild.scrollLeft > 5) {
			!shouldDrawLeftArrow && this.setState({ shouldDrawLeftArrow: true });
		} else {
			shouldDrawLeftArrow && this.setState({ shouldDrawLeftArrow: false });
		}
	}

	leftClick = () => {
		const { scrollLength } = this.props;
		this.firstChild.scrollBy(-scrollLength, 0);
		this.drawLeftArrowfOnlyIfNeeded();
		this.drawRightArrowOnlyIfNeeded();
	}

	rightClick = (e) => {
		const { scrollLength } = this.props;
		this.firstChild.scrollBy(scrollLength, 0);
		this.drawLeftArrowfOnlyIfNeeded();
		this.drawRightArrowOnlyIfNeeded();
	}

	addInnerRefToFirstChild(children) {
		return Children.map(
			children,
			(child, i) => {
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
						innerRef: (input) => { this.firstChild = input; },
					}
				);
			},
		);
	}

	render() {
		const {
			width, background, zIndex, isTopLevelComponent, shouldUseScrollArrows, children,
		} = this.props;

		const {
			shouldDrawLeftArrow, shouldDrawRightArrow,
		} = this.state;

		const childrenToDraw = shouldUseScrollArrows
			? this.addInnerRefToFirstChild(children)
			: children;

		const content = isTopLevelComponent
			? (
				<DesktopWidthConstrainer zIndex={zIndex}>
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
