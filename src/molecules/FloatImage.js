import React from 'react';
import PropTypes from 'prop-types';

import { Figure } from '../atoms/Figure';
import { Image } from '../atoms/Image';
import { FigCaption } from '../atoms/FigCaption';

const FloatImage = ({
	url,
	figCaption,
	...rest
}) => {
	const figCaptionElement = (!figCaption.intro || !figCaption.text)
		? null
		: <FigCaption border><strong>{figCaption.intro}</strong> {figCaption.text}</FigCaption>;

	return (
		<Figure {...rest}>
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
	figCaption: PropTypes.shape({
		active: PropTypes.bool,
		intro: PropTypes.string,
		text: PropTypes.string,
	}),
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
