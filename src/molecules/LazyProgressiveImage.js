import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from '@emotion/styled';

import { Picture } from './Picture';
import { Image } from '../atoms/Image';

const Figure = styled.figure`
	order: ${props => props.order};
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
		backgroundColor: PropTypes.string,
		/** Low quality image used for first load */
		src: PropTypes.string.isRequired,
		/** The alt attribute for the <img> and <picture> tags */
		alt: PropTypes.string,
		/** Figcaption, text content */
		caption: PropTypes.string,
		/** Should be <source> tags */
		children: PropTypes.node.isRequired,
		/** Aspect ratio of the image, used to reserve space */
		ratio: PropTypes.number.isRequired,
		/** Prevents using the blur-up technique (https://jmperezperez.com/medium-image-progressive-loading-placeholder/) when true */
		preventBlur: PropTypes.bool,
		/** Option to fadein the image. */
		fadeIn: PropTypes.bool,
		/** Customize the flexbox order of the component */
		order: PropTypes.number,
	}

	static defaultProps = {
		caption: null,
		preventBlur: false,
		alt: 'Artikkelbilde.',
		backgroundColor: '#ececec',
		fadeIn: false,
		order: 0,
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
			caption,
			...rest
		} = this.props;

		return (
			<Figure
				paddingBottom={ratio * 100}
				{...rest}
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
				{caption && <figcaption>{caption}</figcaption>}
			</Figure>
		);
	}
}
LazyProgressiveImage.displayName = 'LazyProgressiveImage';

export { LazyProgressiveImage };
