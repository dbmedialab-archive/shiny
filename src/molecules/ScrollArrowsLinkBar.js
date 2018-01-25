import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
	HorizontalOverflowGradient,
	HorizontalFlexingList as Bar,
	LinkBarItem,
	NavWithOptionalConstrainer,
} from '../..';

import {
	LeftScrollArrow,
	RightScrollArrow,
} from '../atoms/ScrollArrow';

const Container = styled.div`
	overflow: hidden;
`;

class ScrollArrowsLinkBar extends Component {
	constructor(props) {
		super(props);

		const { drawRightArrowInitially } = props;

		this.container = null;
		this.content = null;

		this.state = {
			shouldDrawLeftArrow: false,
			shouldDrawRightArrow: drawRightArrowInitially,
		};
	}

	componentDidMount() {
		if (!this.container || !this.content) {
			this.ensureNoArrows();
		}
		this.drawRightArrowOnlyIfNeeded();
	}

	ensureNoArrows() {
		const { drawRightArrowInitially } = this.props;
		if (drawRightArrowInitially) {
			this.setState({ shouldDrawRightArrow: false });
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

	calculateScrollLength() {
		const { scrollLength } = this.props;

		if (typeof scrollLength === 'number') {
			return parseInt(scrollLength);
		}

		const lastChar = scrollLength.slice(-1);
		if (lastChar !== '%') {
			const aNumber = parseInt(scrollLength);
			return (aNumber) ? aNumber : 200;
		}

		const {
			offsetWidth: containerSize,
		} = this.container;
		const percent = parseInt(scrollLength) / 100;
		const approximateArrowSize = 40 * 2;
		return (containerSize * percent) - approximateArrowSize;
	}

	leftClick = () => {
		const scrollLength = this.calculateScrollLength();
		this.content.scrollBy(-scrollLength, 0);
		this.drawLeftArrowfOnlyIfNeeded();
		this.drawRightArrowOnlyIfNeeded();
	}

	rightClick = (e) => {
		const scrollLength = this.calculateScrollLength();
		this.content.scrollBy(scrollLength, 0);
		this.drawLeftArrowfOnlyIfNeeded();
		this.drawRightArrowOnlyIfNeeded();
	}

	render() {
		const {
			background,
			children,
			shouldFadeOut,
			width,
			zIndex,
			isTopLevelComponent,
			...rest
		} = this.props;

		const {
			shouldDrawLeftArrow, shouldDrawRightArrow,
		} = this.state;

		return (
			<NavWithOptionalConstrainer
				background={background}
				width={width}
				zIndex={zIndex}
				isTopLevelComponent={isTopLevelComponent}
			>
				<Container innerRef={(input) => { this.container = input; }}>
					{shouldDrawLeftArrow &&
						<LeftScrollArrow onClick={this.leftClick} background={background} />
					}
					<Bar
						innerRef={(input) => { this.content = input; }}
						background={background}
						{...rest}
					>
						{children && children.map((child, i) => {
							return (
								<LinkBarItem key={i} {...child.props}>
									{child}
								</LinkBarItem>
							);
						})}
					</Bar>
					{shouldDrawRightArrow &&
						<RightScrollArrow onClick={this.rightClick} background={background} />
					}
					{shouldFadeOut && <HorizontalOverflowGradient />}
				</Container>
			</NavWithOptionalConstrainer>
		);
	}
}

ScrollArrowsLinkBar.propTypes = {
	background: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	overflow: PropTypes.string,
	shouldAdjustForNestedPadding: PropTypes.bool,
	shouldFlexChildren: PropTypes.bool,
	shouldFadeOut: PropTypes.bool,
	drawRightArrowInitially: PropTypes.bool,
	scrollLength: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
	]),
	width: PropTypes.string,
	shouldHavePadding: PropTypes.bool,
	zIndex: PropTypes.number,
	isTopLevelComponent: PropTypes.bool,
};

ScrollArrowsLinkBar.defaultProps = {
	background: 'papayawhip', // colors.white,
	children: null,
	overflow: 'auto',
	shouldAdjustForNestedPadding: false,
	shouldFlexChildren: false,
	shouldFadeOut: false,
	drawRightArrowInitially: false,
	scrollLength: '70%',
	width: 'auto',
	zIndex: 4,
	shouldHavePadding: true,
	isTopLevelComponent: true,
};

export { ScrollArrowsLinkBar };
