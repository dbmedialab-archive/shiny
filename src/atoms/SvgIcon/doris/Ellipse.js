import React from 'react';

import Svg from './Svg';

const Ellipse = props => (
	<Svg viewBox="0 0 100 100" {...props}>
		<circle cx="7" cy="7" r="7" />
		<circle cx="7" cy="28.8" r="7" />
		<circle cx="7" cy="50.6" r="7" />
	</Svg>
);

export default Ellipse;
