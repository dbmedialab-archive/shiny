import propTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from '@emotion/styled';

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

/**
 * LazyProgressiveImage downloads a small version of an image first, then loads the correct size when it is ready
 */
class LazyProgressiveImage extends PureComponent {
	static propTypes = {
		/** Background color used on the <figure> tag */
		backgroundColor: propTypes.string,
		/** Low quality image used for first load */
		src: propTypes.string.isRequired,
		/** The alt attribute for the <img> and <picture> tags */
		alt: propTypes.string,
		/** Should be <source> tags */
		children: propTypes.node.isRequired,
		/** Aspect ratio of the image, used to reserve space */
		ratio: propTypes.number.isRequired,
		/** Prevents using the blur-up technique (https://jmperezperez.com/medium-image-progressive-loading-placeholder/) when true */
		preventBlur: propTypes.bool,
		/** Option to fadein the image. */
		fadeIn: propTypes.bool,
	}

	static defaultProps = {
		preventBlur: false,
		alt: 'Artikkelbilde.',
		backgroundColor: '#ececec',
		fadeIn: false,
	}

	componentDidMount() {
		/* eslint-disable global-require */
		require('lazysizes');
	}

	render() {
		const {
			alt,
			src,
			ratio,
			fadeIn,
			children,
			preventBlur,
			backgroundColor,
		} = this.props;

		return (
			<Figure
				backgroundColor={backgroundColor}
				paddingBottom={ratio * 100}
			>
				<Picture alt={alt} preventBlur={preventBlur} fadeIn={fadeIn}>
					{children}
					<Image
						itemProp="image"
						alt={alt}
						data-sizes="auto"
						src={src}
						data-src={src}
						className={`lazyload ${preventBlur ? '' : 'blur-up'} ${fadeIn ? 'fade-in' : ''}`}
					/>
					<noscript><img src={src} alt={alt} itemProp="image" /></noscript>
				</Picture>
			</Figure>
		);
	}
}
LazyProgressiveImage.displayName = 'LazyProgressiveImage';

export { LazyProgressiveImage };
