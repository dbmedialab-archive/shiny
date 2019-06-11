import React from 'react';

import Svg from './Svg';

const Politics = props => (
	<Svg {...props}>
		<line x1="16.5" y1="27.8" x2="16.5" y2="2.3" />
		<line x1="1.2" y1="6.4" x2="31.9" y2="6.4" />
		<rect x="10.1" y="27.8" width="12.9" height="2.9" />
		<path d="M28.8,22.1h-4.4c-1.7,0-3.1-1.4-3.1-3.1v-0.1h10.5V19C31.9,20.7,30.5,22.1,28.8,22.1z" />
		<polygon points="26.6,7.2 28.5,13.1 30.4,18.9 26.6,18.9 22.9,18.9 24.7,13.1 	" />
		<path d="M8.6,22.1H4.2c-1.7,0-3.1-1.4-3.1-3.1v-0.1h10.5V19C11.7,20.7,10.3,22.1,8.6,22.1z" />
		<polygon points="6.4,7.2 8.3,13.1 10.2,18.9 6.4,18.9 2.7,18.9 4.5,13.1 	" />
	</Svg>
);

export default Politics;
