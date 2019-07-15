import React from 'react';

import Svg from './Svg';

const Dial = props => (
	<Svg {...props}>
		<circle cx="16.5" cy="16.5" r="15.5" />
		<polyline points="16.4,4.3 16.5,16.5 24,24.2 " />
	</Svg>
);

export default Dial;
