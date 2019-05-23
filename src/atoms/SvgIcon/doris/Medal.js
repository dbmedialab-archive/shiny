import React from 'react';

import Svg from './Svg';

const Medal = props => (
	<Svg viewBox="0 0 30 14" strokeWidth="1.5" {...props}>
		<g transform="translate(1.000000, 0.000000)">
			<circle cx="7.3" cy="23.3" r="6.6" />
			<polyline points="0.8 0.8 7.3 16.8 13.9 0.8" />
		</g>
	</Svg>
);

export default Medal;
