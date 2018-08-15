import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


import { HorizontalFlexingList as Bar } from '..';
import { LinkBarItem } from '..';
import { NavWithOptionalConstrainer } from '..';
import { LeftScrollArrow } from '..';
import { RightScrollArrow } from '..';

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

	drawLeftArrowfOnlyIfNeeded() {
		const { shouldDrawLeftArrow } = this.state;
		if (this.content.scrollLeft && this.content.scrollLeft > 5) {
			!shouldDrawLeftArrow && this.setState({ shouldDrawLeftArrow: true });
		} else {
			shouldDrawLeftArrow && this.setState({ shouldDrawLeftArrow: false });
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

	ensureNoArrows() {
		const { drawRightArrowInitially } = this.props;

		if (drawRightArrowInitially) {
			this.setState({ shouldDrawRightArrow: false });
		}
	}

	render() {
		const {
			background,
			children,
			width,
			zIndex,
			isTopLevelComponent,
			arrowGradientRgbBackgroundValues,
			arrowGradientHeight,
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
					{shouldDrawLeftArrow
						&& (
							<LeftScrollArrow
								onClick={this.leftClick}
								background={background}
								arrowGradientRgbBackgroundValues={arrowGradientRgbBackgroundValues}
								arrowGradientHeight={arrowGradientHeight}
							/>
						)
					}
					<Bar
						innerRef={(input) => { this.content = input; }}
						background={background}
						{...rest}
					>
						{children && React.Children.map(children, (child, i) => {
							return (
								<LinkBarItem
									key={i}
									position={child.props.position}
									flex={child.props.flex}
									xs={child.props.xs}
									sm={child.props.sm}
									md={child.props.md}
									lg={child.props.lg}
								>
									{child}
								</LinkBarItem>
							);
						})}
					</Bar>
					{shouldDrawRightArrow
						&& (
							<RightScrollArrow
								onClick={this.rightClick}
								background={background}
								arrowGradientRgbBackgroundValues={arrowGradientRgbBackgroundValues}
								arrowGradientHeight={arrowGradientHeight}
							/>
						)
					}
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
	drawRightArrowInitially: PropTypes.bool,
	scrollLength: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
	]),
	width: PropTypes.string,
	shouldHavePadding: PropTypes.bool,
	zIndex: PropTypes.number,
	isTopLevelComponent: PropTypes.bool,
	arrowGradientRgbBackgroundValues: PropTypes.arrayOf(PropTypes.number),
	arrowGradientHeight: PropTypes.string,
};

ScrollArrowsLinkBar.defaultProps = {
	background: 'papayawhip', // colors.white,
	children: null,
	overflow: 'auto',
	shouldAdjustForNestedPadding: false,
	shouldFlexChildren: false,
	drawRightArrowInitially: false,
	scrollLength: '70%',
	width: 'auto',
	zIndex: 4,
	shouldHavePadding: true,
	isTopLevelComponent: true,
	arrowGradientRgbBackgroundValues: [255, 255, 255],
	arrowGradientHeight: '',
};

export { ScrollArrowsLinkBar };
