import React from 'react';

import Svg from './Svg';

const Silhouette = props => (
	<Svg {...props}>
		<circle cx="16.5" cy="8.8" r="7.7" />
		<path d="M30.9,31.9H2v-3c0-4.1,3.3-7.4,7.4-7.4h14.2c4.1,0,7.4,3.3,7.4,7.4v3H30.9z" />
	</Svg>
);

export default Silhouette;
