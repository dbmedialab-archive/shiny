import React from 'react';

import Svg from './Svg';

const Bell = props => (
	<Svg {...props}>
		<path d="M7.9,12c0-4.8,3.8-8.6,8.6-8.6S25,7.3,25,12v12.5H7.9V12" />
		<rect x="4.6" y="24.5" width="23.8" height="4.4" />
		<path d="M19.8,28.9c0,1.8-1.5,3.2-3.2,3.2c-1.8,0-3.3-1.5-3.3-3.2" />
		<path d="M14,3.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5" />
	</Svg>
);

export default Bell;
