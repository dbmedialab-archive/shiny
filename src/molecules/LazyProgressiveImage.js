import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import { StyledProgressiveImage } from './StyledProgressiveImage';

const MockImage = styled.div`
	width: ${props => `${props.width}px` || '100%'};
	height: ${props => `${props.height}px` || '100%'};
`;

const StyledPlaceholder = styled.img`
	width: ${props => `${props.width}px`};
	height: ${props => `${props.height}px`};
`;

const LazyProgressiveImage = ({
	width, height, placeholderUrl, imageUrl, offset,
}) => {
	if (typeof window !== 'undefined') {
		return (
			<LazyLoad
				offset={offset}
				height={parseInt(height)}
				once
				placeholder={<StyledPlaceholder height={height} width={width} />}
			>
				<StyledProgressiveImage
					src={imageUrl}
					placeholder={placeholderUrl}
					component="img"
				/>
			</LazyLoad>
		);
	}

	const staticMarkup = `<img src="${imageUrl}" width="${width}" height="${height} alt="" />`;

	/* eslint-disable react/no-danger */
	return (
		<Fragment>
			<MockImage width={width} height={height}>
				<noscript dangerouslySetInnerHTML={{ __html: staticMarkup }} />
			</MockImage>
		</Fragment>
	);
	/* eslint-enable react/no-danger */
};

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
