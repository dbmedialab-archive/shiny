import React from 'react';

import Svg from './Svg';

const Health = props => (
	<Svg viewBox="0 0 35 32" strokeWidth="1.5" {...props}>
		<path d="M17.8,4 C19.5,2 21.9,0.7 24.7,0.7 C32.9,0.7 36.2,10.4 31,16.1 C26.9,20.6 22.2,24.7 17.8,29" />
		<path d="M6.6,18.2 C10.2,21.9 14.1,25.4 17.8,29" />
		<path d="M17.8,4 C16.1,2 13.7,0.7 10.9,0.7 C5.9,0.7 2.8,4.2 2.2,8.3" />
		<polyline points="32.4 14.1 23 14.1 17.9 19.1 13 8.4 9.2 14.1 0.8 14.1" />
	</Svg>
);

export default Health;
