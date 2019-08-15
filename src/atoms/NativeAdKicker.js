import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { Kicker } from './Kicker';

const NativeAdKicker = withTheme(props => (
	<Kicker
		backgroundColor={`${props.theme.colors.skinColors.nativeAd}Light`}
		{...props}
	/>
));

NativeAdKicker.propTypes = {
	theme: PropTypes.shape({
		colors: PropTypes.shape({
			skinColors: PropTypes.shape({
				nativeAd: PropTypes.string.isRequired,
			}).isRequired,
		}).isRequired,
	}).isRequired,
};

export { NativeAdKicker };
