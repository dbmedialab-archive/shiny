import propTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import Observer from 'react-intersection-observer';

import { Picture } from './Picture';
import { Image } from '../atoms/Image';

if (typeof window !== 'undefined' &&
	!('IntersectionObserver' in window) &&
	!('IntersectionObserverEntry' in window)
) {
	/* eslint-disable global-require */
	require('intersection-observer');
}

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

	state = {
		isLoaded: false,
	}

	componentWillUnmount() {
		if (this.img) {
			this.img.removeEventListener('load', this.setLoadedStatus);
		}
	}

	onLoadImage = () => {
		this.setLoadedStatus();
	}


	setLoadedStatus = () => {
		this.setState({
			isLoaded: true,
		});
	}


	addImageListener = (img) => {
		if (!this.img) {
			return;
		}

		this.img.addEventListener('load', this.setLoadedStatus);
	}


	render() {
		const {
			backgroundColor, src, alt, ratio, fallbackSrc,
		} = this.props;

		// Mount the picture element if no child components are set
		const onMountPicture = (typeof this.props.children !== 'undefined' || !this.props.children)
			? this.addImageListener
			: () => {};

		return (
			<Observer rootMargin="1000px" triggerOnce>
				{inView => (
					<Figure
						backgroundColor={backgroundColor}
						innerRef={(node) => { this.node = node; }}
						paddingBottom={ratio * 100}
					>
						<Picture {...this.props} isLoaded={this.state.isLoaded} onMounted={onMountPicture} inView={inView}>
							{inView && this.props.children}
							{inView && <StyledImage itemProp="image" src={src} alt={alt} onLoad={this.onLoadImage} /> }
							<noscript><img src={fallbackSrc} alt={alt} itemProp="image" /></noscript>
						</Picture>
					</Figure>
				)}
			</Observer>
		);
	}
}

export { LazyProgressiveImage };
