import React from 'react';

import Svg from './Svg';

const Medal = props => (
	<Svg {...props}>
		<circle cx="16.6" cy="24.8" r="6.6" />
		<polyline points="10,1.7 16.5,17.7 23.1,1.7" />
	</Svg>
);

export default Medal;
