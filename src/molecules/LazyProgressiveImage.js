import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import { Lazy } from 'react-lazy';

import { StyledProgressiveImage } from './StyledProgressiveImage';

const StyledLazy = Styled(Lazy)`
	height: ${props => props.height || 'auto'};
	width: ${props => props.width || 'auto'};
`;

const LazyProgressiveImage = ({
	width, height, placeholderUrl, imageUrl, offset,
}) => (
	<StyledLazy cushion={offset}>
		<StyledProgressiveImage
			width={width}
			height={height}
			src={imageUrl}
			placeholder={placeholderUrl}
			component="img"
		/>
	</StyledLazy>
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
