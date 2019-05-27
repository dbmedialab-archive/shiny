import React from 'react';

import Svg from './Svg';

const Medal = props => (
	<Svg viewBox="0 0 32 32" strokeWidth="1.5" {...props}>
		<circle cx="7.3" cy="23.3" r="6.6" />
		<polyline points="0.8 0.8 7.3 16.8 13.9 0.8" />
	</Svg>
);

export default Medal;
