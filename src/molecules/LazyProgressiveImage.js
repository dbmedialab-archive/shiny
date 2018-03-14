import propTypes from 'prop-types';
import React, { cloneElement, Component } from 'react';
import styled from 'styled-components';
import Observer from 'react-intersection-observer';

import { Picture } from './Picture';
import { Image } from '../atoms/Image';


const Figure = styled.figure`
	position: relative;
	background-color: ${props => props.backgroundColor};
	display: block;
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
		isLoaded: false,
	}

	componentDidMount() {
		if (!('IntersectionObserver' in window)) {
			import('intersection-observer').then((module) => {
			});
		}
	}

	onLoadImage = () => {
		this.setLoadedStatus();
	}

	addImageListener = (img) => {
		if (!img) {
			return;
		}

		this.img = img;
		this.img.addEventListener('load', this.setLoadedStatus);
	}

	setLoadedStatus = () => {
		this.setState({
			isLoaded: true,
		});
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
			<Observer rootMargin="400px" triggerOnce>
				{inView => (
					<Figure
						backgroundColor={backgroundColor}
						innerRef={(node) => { this.node = node; }}
						paddingBottom={ratio * 100}
					>
						<Picture {...this.props} isLoaded={this.state.isLoaded} onMounted={onMountPicture}>
							{inView ?
								React.Children.map(this.props.children, child => child && cloneElement(child, {
									onLoad: () => {
										this.onLoadImage();
									},
								})) : null
							}
							<StyledImage
								src={src}
								alt={alt}
							/>
						</Picture>
					</Figure>
				)}
			</Observer>
		);
	}
}

export { LazyProgressiveImage };
