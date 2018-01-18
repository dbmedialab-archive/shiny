import propTypes from 'prop-types';
import React, { cloneElement, Component } from 'react';
import styled from 'styled-components';

import { Picture } from './Picture';
import { Image } from '../atoms/Image';


const Container = styled.figure`
	position: relative;
	background-color: ${props => props.backgroundColor};
	display: inline-block;
	padding-bottom: ${props => `${props.paddingBottom}%`};
	width: 100%;
	overflow: hidden;
	margin: 0;
`;

const StyledImage = Image.extend`
	height: 100%;
`;

class LazyProgressiveImage extends Component {
	static propTypes = {
		backgroundColor: propTypes.string,
		src: propTypes.string.isRequired,
		fallbackSrc: propTypes.string.isRequired,
		alt: propTypes.string,
		offset: propTypes.number,
		children: propTypes.node.isRequired,
		ratio: propTypes.number.isRequired,
	}

	static defaultProps = {
		backgroundColor: '#ececec',
		alt: 'Artikkelbilde.',
		offset: 0,
	}

	constructor(props) {
		super(props);

		this.props = props;
	}

	state = {
		hasViewed: false,
		isLoaded: false,
	}

	componentDidMount() {
		if (!('IntersectionObserver' in window)) {
			import('intersection-observer').then((module) => {
			});
		}
		this.initObserver();
	}

	componentWillUnmount() {
		if (this.img) {
			this.img.removeEventListener('load', this.setLoadedStatus);
		}

		this.observer.unobserve(this.node);
		this.observer = null;
		this.node = null;
	}


	setLoadedStatus = () => {
		this.setState({
			isLoaded: true,
		});
	}

	addImageListener = (img) => {
		if (!img) {
			return;
		}

		this.img = img;
		this.img.addEventListener('load', this.setLoadedStatus);
	}

	initObserver = (offset) => {
		if (!this.node) {
			return;
		}


		if (!('IntersectionObserver' in window)) {
			this.setState({
				hasViewed: true,
			});

			return;
		}

		const callback = (entries) => {
			entries.forEach((entry) => {
				const hasViewed = this.state.hasViewed || entry.isIntersecting;

				this.setState({
					hasViewed,
				});
			});
		};
		const options = {
			threshold: 0,
			rootMargin: this.props.offset ? `${this.props.offset}px` : '0px',
		};

		this.observer = new IntersectionObserver(callback, options);
		this.observer.observe(this.node);
	}

	render() {
		const {
			backgroundColor, src, alt, ratio,
		} = this.props;

		// Mount the picture element if no child components are set
		const onMountPicture = (typeof this.props.children !== 'undefined' || !this.props.children)
			? this.addImageListener
			: () => {};

		return (
			<Container
				backgroundColor={backgroundColor}
				innerRef={(node) => { this.node = node; }}
				paddingBottom={ratio * 100}
			>
				<Picture {...this.props} isLoaded={this.state.isLoaded} onMounted={onMountPicture}>
					{this.state.hasViewed ?
						React.Children.map(this.props.children, child => child && cloneElement(child, {
							onMounted: this.addImageListener,
						})) : null
					}
					<StyledImage src={src} alt={alt} />
				</Picture>
			</Container>
		);
	}
}

export { LazyProgressiveImage };
