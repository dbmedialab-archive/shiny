import React from 'react';

import Svg from './Svg';

const Horoscope = props => (
	<Svg {...props}>
		<circle cx="9.2" cy="19.8" r="5.1" />
		<path
			d="M14.1,18.2c0,0-0.4-1.3-1.6-2.5c-1.6-1.5-2.3-4.5-2.5-6.8C9.8,5,13.1,1.8,17.1,1.8c2.6,0,5,1.4,6.2,3.7 c1.5,2.8,1.3,6.4,0.7,9.3c-0.8,4-3.1,8-2.9,12.1c0,2.3,1.9,4.2,4.2,4.2c1.5,0,2.8-0.8,3.6-1.9"
		/>
	</Svg>
);

export default Horoscope;
