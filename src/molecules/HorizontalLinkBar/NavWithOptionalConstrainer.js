import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { Nav } from './Nav';
import { DesktopWidthConstrainer } from './DesktopWidthConstrainer';
import { ScrollArrow } from './ScrollArrow';

class NavWithOptionalConstrainer extends Component {
	constructor(props) {
		super(props);

		const { drawRightArrowInitially } = props;

		this.container = null;
		this.firstChild = null;

		this.state = {
			shouldDrawLeftArrow: false,
			shouldDrawRightArrow: drawRightArrowInitially,
		};
	}

	componentDidMount() {
		this.drawRightArrowIfNeeded();
	}

	drawRightArrowIfNeeded() {
		if (!this.container || !this.firstChild) {
			return;
		}

		const containerSize = this.container.offsetWidth;
		const firstChildSize = this.firstChild.scrollWidth;

		const {
			shouldDrawRightArrow,
		} = this.state;

		if (firstChildSize > containerSize && !shouldDrawRightArrow) {
			this.setState({ shouldDrawRightArrow: true });
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
	}

	rightClick = (e) => {
		const { scrollLength } = this.props;
		this.firstChild.scrollBy(scrollLength, 0);
		this.drawLeftArrowfOnlyIfNeeded();
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
				{shouldUseScrollArrows && shouldDrawLeftArrow && <ScrollArrow onClick={this.leftClick} pointsTo="left" />}
				{content}
				{shouldUseScrollArrows && shouldDrawRightArrow && <ScrollArrow onClick={this.rightClick} pointsTo="right" />}
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
