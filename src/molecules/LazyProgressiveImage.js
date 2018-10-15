import propTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'react-emotion';

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

const FigCaption = styled.figcaption`
	font-size: 1.4rem;
	font-weight: 400;
	border-bottom: 1px solid #f4f4f4;
	display: block;
	padding: 1.6rem .5rem;
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 1;
	max-width: 100%;
`;

const figcaptionType = {
	active: false,
	intro: '',
	text: '',
};

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
		figCaption: propTypes.instanceOf(figcaptionType),
	}

	static defaultProps = {
		preventBlur: false,
		alt: 'Artikkelbilde.',
		backgroundColor: '#ececec',
		fadeIn: false,
		figCaption: {
			active: false,
			intro: '',
			text: '',
		},
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
			figCaption,
			preventBlur,
			backgroundColor,
		} = this.props;

		let figCaptionElement = null;
		if (figCaption.intro && figCaption.text) {
			figCaptionElement = <FigCaption><strong>{figCaption.intro}</strong> {figCaption.text}</FigCaption>;
		}

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
				{figCaptionElement}
			</Figure>
		);
	}
}
LazyProgressiveImage.displayName = 'LazyProgressiveImage';

export { LazyProgressiveImage };
