import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { Figure } from '../atoms/Figure';
import { Image } from '../atoms/Image';

const FigCaption = styled.figcaption`
	font-size: 1.4rem;
	font-weight: 400;
	border-bottom: 1px solid #f4f4f4;
	display: block;
	padding: 1.6rem 0.5rem;
	position: relative;
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

const FloatImage = ({
	float,
	width,
	paddingBottom,
	url,
	figCaption,
}) => {
	let figCaptionElement = null;
	if (figCaption.intro && figCaption.text) {
		figCaptionElement = <FigCaption><strong>{figCaption.intro}</strong> {figCaption.text}</FigCaption>;
	}
	return (
		<Figure float={float} width={width} paddingBottom={paddingBottom}>
			<Image src={url} />
			{figCaptionElement}
		</Figure>
	);
};

FloatImage.propTypes = {
	float: PropTypes.string,
	width: PropTypes.string,
	paddingBottom: PropTypes.string,
	url: PropTypes.string.isRequired,
	figCaption: PropTypes.instanceOf(figcaptionType),
};

FloatImage.defaultProps = {
	float: '',
	width: 'auto',
	paddingBottom: '0',
	figCaption: {
		active: false,
		intro: '',
		text: '',
	},
};

export { FloatImage };
