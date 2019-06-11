import React from 'react';

import Svg from './Svg';

const HorizontalEllipse = props => (
	<Svg {...props}>
		<circle cx="4.7" cy="16" r="3.8" />
		<circle cx="16.5" cy="16" r="3.8" />
		<circle cx="28.3" cy="16" r="3.8" />
	</Svg>
);

export default HorizontalEllipse;
