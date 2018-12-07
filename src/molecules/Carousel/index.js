/* eslint-disable react/no-multi-comp */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { DIMENSION_NAMES } from '../../utils/grid-config';
import { SmallPlugHeading as DefaultHeading } from '../../atoms/PlugHeading';
import { FontIcon } from '../../atoms/FontIcon';
import {
	CarouselSlot, CarouselSection, CarouselButton, CarouselSlotList,
} from './styles';

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageIsTurning: false,
			mouseX: 0,
			mouseY: 0,
			isSwiping: false,
			carouselLength: 0,
			pageLength: 0,
			carouselContentEl: null,
			prevArrowVisible: false,
			nextArrowVisible: true,
		};

		this.move = this.move.bind(this);
		this.carouselContentEl = React.createRef();

		this.dragStarted = this.dragStarted.bind(this);
		this.drag = this.drag.bind(this);
		this.dragFinished = this.dragFinished.bind(this);
		this.onScroll = this.onScroll.bind(this);
	}

	componentDidMount() {
		this.setContentEl(this.carouselContentEl.current);
	}

	onScroll(e) {
		const { scrollLeft, scrollTop } = e.target;
		const { carouselLength, pageLength } = this.state;
		const { vertical } = this.props;

		const scrollOffset = vertical ? scrollTop : scrollLeft;

		this.setState({
			nextArrowVisible: scrollOffset + pageLength < carouselLength && this.enoughItemsForScroll,
			prevArrowVisible: scrollOffset > 0 && this.enoughItemsForScroll,
		});
	}

	setContentEl(carouselContentEl) {
		this.setState(
			{
				carouselContentEl,
			},
			() => {
				carouselContentEl.querySelectorAll('a').forEach((a) => {
					// disable link 'dragging' while doing swipe on desktop
					a.addEventListener('mousedown', (e) => {
						e.preventDefault();
					});

					// disable link 'click' after swipe in Chrome
					a.addEventListener('click', (e) => {
						// eslint-disable-next-line react/destructuring-assignment
						if (this.state.isSwiping) {
							e.preventDefault();
						}
					});
				});
				this.setCarouselLength(carouselContentEl);

				// recalculating dimensions onresize
				window.addEventListener('resize', () => this.setCarouselLength(carouselContentEl));
			}
		);
	}

	setCarouselLength(carouselContentDom) {
		const dimensions = carouselContentDom.getBoundingClientRect();

		const { vertical } = this.props;

		this.setState({
			carouselLength: vertical ? carouselContentDom.scrollHeight : carouselContentDom.scrollWidth,
			pageLength: vertical ? dimensions.height : dimensions.width,
		});
	}

	get enoughItemsForScroll() {
		const { carouselLength, pageLength } = this.state;

		return pageLength < carouselLength;
	}

	move(delta) {
		const { vertical } = this.props;
		const { carouselContentEl } = this.state;

		if (vertical) {
			carouselContentEl.scrollTop += delta;
		} else {
			carouselContentEl.scrollLeft += delta;
		}
	}

	doSliding(direction) {
		this.setState(
			{
				pageIsTurning: true,
			},
			() => {
				this.swipePage(direction);

				window.setTimeout(() => {
					this.setState({
						pageIsTurning: false,
					});
				}, 400);
			}
		);
	}

	swipePage(direction) {
		const { pageLength } = this.state;

		const delta = direction === 'next' ? pageLength : -pageLength;
		this.move(delta);
	}

	dragFinished() {
		const { withMouseEvents } = this.props;

		if (!withMouseEvents) {
			return;
		}

		// disable link 'click' after swipe in Chrome
		window.setTimeout(() => {
			this.setState({
				isSwiping: false,
			});
		});
	}

	dragStarted(e) {
		const { withMouseEvents } = this.props;

		if (!withMouseEvents) {
			return;
		}

		this.setState({
			mouseX: e.clientX,
			mouseY: e.clientY,
		});
	}

	drag(e) {
		const { withMouseEvents, vertical } = this.props;

		if (!withMouseEvents) {
			return;
		}

		const { mouseX, mouseY } = this.state;
		const { clientX, clientY, buttons } = e;

		// checking if drag is performed with pressed mouse button
		if (!buttons) {
			return;
		}

		const deltaX = mouseX - clientX;
		const deltaY = mouseY - clientY;

		const delta = vertical ? deltaY : deltaX;

		this.move(delta);

		this.setState({
			mouseX: clientX,
			mouseY: clientY,
			isSwiping: true,
		});
	}

	render() {
		const {
			heading, Heading, headingProps, children, vertical, horizontalSizing, verticalHeight,
		} = this.props;
		const {
			prevArrowVisible, nextArrowVisible, pageIsTurning,
		} = this.state;

		const sizing = !vertical && horizontalSizing;
		return (
			<Fragment>
				{heading && <Heading {...headingProps}>{heading}</Heading>}
				<CarouselSection vertical={vertical} verticalHeight={verticalHeight}>
					<CarouselSlotList
						onMouseDown={this.dragStarted}
						onMouseMove={this.drag}
						onMouseUp={this.dragFinished}
						onMouseLeave={this.dragFinished}
						pageIsTurning={pageIsTurning}
						vertical={vertical}
						onScroll={this.onScroll}
						ref={this.carouselContentEl}
					>
						{children.map((child, i) => (
							<CarouselSlot key={i} vertical={vertical} {...sizing}>
								{child}
							</CarouselSlot>
						))}
					</CarouselSlotList>
					{prevArrowVisible && (
						<CarouselButton vertical={vertical} onClick={() => this.doSliding('prev')}>
							<FontIcon name="arrow-alt-left" size={3} />
						</CarouselButton>
					)}
					{nextArrowVisible && (
						<CarouselButton next vertical={vertical} onClick={() => this.doSliding('next')}>
							<FontIcon name="arrow-alt-right" size={3} />
						</CarouselButton>
					)}
				</CarouselSection>
			</Fragment>
		);
	}
}

Carousel.propTypes = {
	Heading: PropTypes.func,
	headingProps: PropTypes.shape({}),
	heading: PropTypes.string,
	vertical: PropTypes.bool,
	withMouseEvents: PropTypes.bool,
	horizontalSizing: PropTypes.shape({}),
	verticalHeight: PropTypes.string,
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

Carousel.defaultProps = {
	Heading: DefaultHeading,
	headingProps: {},
	heading: '',
	vertical: false,
	withMouseEvents: true,
	horizontalSizing: {
		xs: 6,
		md: 3,
	},
	verticalHeight: '64rem',
};

export { Carousel };
