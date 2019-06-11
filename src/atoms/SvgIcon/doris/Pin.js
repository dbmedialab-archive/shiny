import React from 'react';

import Svg from './Svg';

const Position = props => (
	<Svg {...props}>
		<path
			d="M25.9,11.1c0,0.6-0.1,1.3-0.2,1.9c-0.8,4.3-3.4,8.4-5.6,12.2c-1.3,2.3-4.1,6.8-4.1,6.8s-2.9-4.7-3.2-5.1 c-1.8-3-3.5-6.1-5-9.3C6.2,13.8,5.2,9.9,7.3,6.2c1.8-3.1,5.2-5.1,8.7-5.1C21.7,1.1,26,5.8,25.9,11.1z"
		/>
		<circle cx="16" cy="11.4" r="5.2" />
	</Svg>
);

export default Position;
