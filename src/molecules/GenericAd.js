import React from 'react';
import PropTypes from 'prop-types';

import { AdWrapper } from '../atoms/AdWrapper';

const GenericAd = ({ children, width, height }) => (
	<AdWrapper height={height} width={width}>
		{children}
	</AdWrapper>
);

GenericAd.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	children: PropTypes.node.isRequired,
};

GenericAd.defaultProps = {
	width: '32.0rem',
	height: '25.0rem',
};

export { GenericAd };
