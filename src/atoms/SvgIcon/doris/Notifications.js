import React from 'react';

import Svg from './Svg';

const Notifications = props => (
	<Svg viewBox="0 0 25 33" {...props}>
		<path d="M3.9,11.9c0-4.9,3.9-8.8,8.8-8.8c4.9,0,8.8,3.9,8.8,8.8" />
		<polyline points="21.6,11.9 21.6,24.7 3.9,24.7 3.9,11.9 " />
		<rect x="0.5" y="24.7" width="24.5" height="4.5" />
		<path d="M16.1,29.2c0,1.8-1.5,3.3-3.3,3.3S9.4,31,9.4,29.2" />
		<path d="M10.2,3.1c0-1.4,1.1-2.6,2.6-2.6s2.6,1.1,2.6,2.6" />
	</Svg>
);

export default Notifications;
