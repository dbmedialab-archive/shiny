import React from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image';
import { Lazy } from 'react-lazy';

const LazyProgressiveImage = ({
	width, height, placeholderUrl, imageUrl, offset,
}) => (
	<Lazy cushion={offset}>
		<Img
			width={width}
			height={height}
			src={imageUrl}
			loader={
				<img src={placeholderUrl} width={width} height={height} alt="" />
			}
		/>
	</Lazy>
);

LazyProgressiveImage.propTypes = {
	width:
		PropTypes
			.string
			.isRequired,
	height:
		PropTypes
			.string
			.isRequired,
	placeholderUrl:
		PropTypes.string,
	imageUrl:
		PropTypes
			.string
			.isRequired,
	offset:
		PropTypes
			.number,
};

LazyProgressiveImage.defaultProps = {
	placeholderUrl:
		'',
	offset: 0,
};

export { LazyProgressiveImage };
