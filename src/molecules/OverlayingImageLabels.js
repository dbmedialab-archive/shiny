import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { OverlayingImageLabel, OverlayingImageLabelPropTypes } from '../atoms/OverlayingImageLabel';
import { getVariable } from '../utils';

const Footer = styled.footer`
	order: ${props => props.order};
	display: flex;
	z-index: 1;

	> :not(:last-child) {
		margin-right: ${getVariable('horizontalBase')};
	}
`;


const OverlayingImageLabels = ({ labels, ...rest }) => (
	<Footer {...rest}>
		{labels.map(label => (
			<OverlayingImageLabel
				src={label.src}
				width={label.width}
				height={label.height}
				alt={label.alt}
				marginTop={`-${label.height}`}
			/>
		))}
	</Footer>
);

OverlayingImageLabels.propTypes = {
	labels: PropTypes.arrayOf(
		PropTypes.shape(OverlayingImageLabelPropTypes),
	),
};

OverlayingImageLabels.defaultProps = {
	labels: [],
};

export { OverlayingImageLabels };
