import React from 'react';
import PropTypes from 'prop-types';

import { Figure } from '../atoms/Figure';
import { Image } from '../atoms/Image';

const FloatImage = ({
	float,
	width,
	paddingBottom,
	url,
}) => (
	<Figure float={float} width={width} paddingBottom={paddingBottom}>
		<Image src={url} />
	</Figure>
);

FloatImage.propTypes = {
	float: PropTypes.string,
	width: PropTypes.string,
	paddingBottom: PropTypes.string,
	url: PropTypes.string.isRequired,
};

FloatImage.defaultProps = {
	float: '',
	width: 'auto',
	paddingBottom: '0',
};

export { FloatImage };
