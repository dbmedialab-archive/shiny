import React from 'react';

import Svg from './Svg';

const Medal = props => (
	<Svg viewBox="0 0 32 32" strokeWidth="1.5" {...props}>
		<circle cx="16" cy="23.3" r="6.6" />
		<polyline points="
			9.5 0.8
			16 16.8
			22.6 0.8
		"
		/>
	</Svg>
);

export default Medal;
