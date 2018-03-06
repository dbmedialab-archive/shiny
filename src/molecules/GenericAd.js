import React from 'react';
import PropTypes from 'prop-types';

import { AdWrapper } from '../atoms/AdWrapper';

const GenericAd = ({
	children, width, height, shouldHideAttribution,
}) => (
	<AdWrapper height={height} width={width} shouldHideAttribution={shouldHideAttribution}>
		{children}
	</AdWrapper>
);

GenericAd.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	children: PropTypes.node.isRequired,
	shouldHideAttribution: PropTypes.bool.isRequired,
};

GenericAd.defaultProps = {
	width: '32.0rem',
	height: '25.0rem',
};

export { GenericAd };
