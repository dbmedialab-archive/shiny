import React from 'react';

import Svg from './Svg';

const Dice= props => (
	<Svg {...props}>
		<path
			d="M30.6,31.7H2.4c-0.6,0-1.1-0.5-1.1-1.1V2.4c0-0.6,0.5-1.1,1.1-1.1h28.2c0.6,0,1.1,0.5,1.1,1.1v28.2 C31.7,31.2,31.2,31.7,30.6,31.7z"
		/>
		<circle cx="8.2" cy="8.2" r="3.3" />
		<circle cx="16.5" cy="16.5" r="3.3" />
		<circle cx="24.8" cy="24.8" r="3.3" />
		<circle cx="24.8" cy="8.2" r="3.3" />
		<circle cx="8.2" cy="24.8" r="3.3" />
	</Svg>
);

export default Dice;
