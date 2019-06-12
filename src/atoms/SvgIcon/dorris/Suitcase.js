import React from 'react';

import Svg from './Svg';

const Suitcase = props => (
	<Svg {...props}>
		<path d="M23.2,31H4.5c-1.7,0-3.1-1.6-3.1-3.5V10.2c0-1.9,1.4-3.5,3.1-3.5h23.9c1.7,0,3.1,1.6,3.1,3.5v17.4v0 c0,1.9-1.5,3.4-3.4,3.4H23.2z" />
		<path d="M9.8,6.7V4.1c0-1.2,1-2.1,2.1-2.1h9.3c1.2,0,2.1,1,2.1,2.1v2.6v4.9" />
		<polyline points="23.4,11.5 20,13.3 20,20.2 23.4,20.2 	" />
		<polyline points="23.4,11.5 26.8,13.3 26.8,20.2 23.4,20.2 	" />
	</Svg>
);

export default Suitcase;
