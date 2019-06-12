import React from 'react';

import Svg from './Svg';

const HeartLine = props => (
	<Svg {...props}>
		<path d="M17.1,7.2c1.6-1.9,3.9-3.1,6.5-3.1c7.7,0,10.8,9.1,5.9,14.5c-3.9,4.2-8.3,8.1-12.4,12.1" />
		<path d="M6.6,20.5c3.4,3.5,7,6.8,10.5,10.1" />
		<path d="M17.1,7.2c-1.6-1.9-3.9-3.1-6.5-3.1c-4.7,0-7.6,3.3-8.2,7.1" />
		<polyline points="30.8,16.7 22,16.7 17.2,21.4 12.6,11.3 9,16.7 1.1,16.7" />
	</Svg>
);

export default HeartLine;
