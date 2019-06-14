import React from 'react';

import Svg from './Svg';

const VerticalEllipse = props => (
	<Svg {...props}>
		<circle cx="16.5" cy="4.7" r="3.8" />
		<circle cx="16.5" cy="16.5" r="3.8" />
		<circle cx="16.5" cy="28.3" r="3.8" />
	</Svg>
);

export default VerticalEllipse;
