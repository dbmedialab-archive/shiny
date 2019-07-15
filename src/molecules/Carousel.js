import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { SmallPlugHeading as DefaultHeading } from '../atoms/PlugHeading';
import { CarouselSlot } from '../atoms/CarouselSlot';
import { CarouselSection } from '../atoms/CarouselSection';
import { CarouselButton } from '../atoms/CarouselButton';
import { CarouselSlotList } from '../atoms/CarouselSlotList';
import { CarouselBar } from '../atoms/CarouselBar';
import { Arrow } from '../atoms/Arrow';

const clickThreshold = 10;

const CarouselArrow = styled(Arrow)`
	position: absolute;
    top: 25%;
    box-shadow: 0.2rem 0.2rem rgba(0,0,0,0.3);
    @media screen and (min-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
    	top: 30%;
    }
`;

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageIsTurning: false,
			initialMouseX: 0,
			initialMouseY: 0,
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
		this.setContentEl(this.carouselContentEl.current);
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
		const { vertical } = this.props;

		this.setState({
			carouselLength: vertical ? carouselContentDom.scrollHeight : carouselContentDom.scrollWidth,
			pageLength: vertical ? carouselContentDom.clientHeight : carouselContentDom.clientWidth,
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
			initialMouseX: e.clientX,
			initialMouseY: e.clientY,
		});
	}

	drag(e) {
		const { withMouseEvents, vertical } = this.props;

		if (!withMouseEvents) {
			return;
		}

		const {
			mouseX,
			mouseY,
			initialMouseX,
			initialMouseY,
		} = this.state;
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
		});

		// considering a swipe only after swipe reached threashold
		// otherwise link can not be clicked if user 'slightly' moved carousel
		if (Math.abs(clientX - initialMouseX) > clickThreshold
			|| Math.abs(clientY - initialMouseY) > clickThreshold) {
			this.setState({
				isSwiping: true,
			});
		}
	}

	render() {
		const {
			heading, Heading, headingProps, children, vertical, horizontalSizing, verticalHeight, horizontalArrowOffset,
			hideButtons, ...rest
		} = this.props;
		const {
			prevArrowVisible, nextArrowVisible, pageIsTurning,
		} = this.state;

		const sizing = !vertical && horizontalSizing;
		return (
			<CarouselSection vertical={vertical} verticalHeight={verticalHeight} {...rest}>
				{heading && <Heading {...headingProps}>{heading}</Heading>}
				<CarouselBar>
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
						<CarouselButton
							aria-label="Scroll to previous items"
							vertical={vertical}
							onClick={() => this.doSliding('prev')}
							horizontalArrowOffset={horizontalArrowOffset}
							hide={hideButtons}
						>
							<CarouselArrow direction={vertical ? 'up' : 'left'} color="white" />
						</CarouselButton>
					)}
					{nextArrowVisible && (
						<CarouselButton
							next
							aria-label="Scroll to next items"
							vertical={vertical}
							onClick={() => this.doSliding('next')}
							horizontalArrowOffset={horizontalArrowOffset}
							hide={hideButtons}
						>
							<CarouselArrow direction={vertical ? 'down' : 'right'} color="white" />
						</CarouselButton>
					)}
				</CarouselBar>
			</CarouselSection>
		);
	}
}

Carousel.propTypes = {
	Heading: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ render: PropTypes.func }),
	]),
	headingProps: PropTypes.shape({}),
	heading: PropTypes.string,
	vertical: PropTypes.bool,
	hideButtons: PropTypes.bool,
	withMouseEvents: PropTypes.bool,
	horizontalSizing: PropTypes.shape({}),
	verticalHeight: PropTypes.string,
	children: PropTypes.arrayOf(PropTypes.element).isRequired,

	// because carousel slots could be any DOM elements,
	// often we want to align arrows with offset from center
	// (for instance, for TrysilPlug we want to align arrows by center of
	// the image, which is not a vertical center of CarouselBar)
	horizontalArrowOffset: PropTypes.string,
};

Carousel.defaultProps = {
	Heading: DefaultHeading,
	headingProps: {},
	heading: '',
	vertical: false,
	hideButtons: false,
	withMouseEvents: true,
	horizontalSizing: {
		xs: 6,
		md: 3,
	},
	verticalHeight: '100%',
	horizontalArrowOffset: '-7rem',
};

export { Carousel };
