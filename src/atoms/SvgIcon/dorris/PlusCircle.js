import React from 'react';

import Svg from './Svg';

const PlusCircle = props => (
	<Svg {...props}>
		<circle cx="16.5" cy="16.5" r="15.5" />
		<line x1="16.5" y1="5.6" x2="16.5" y2="27.5" />
		<line x1="27.4" y1="16.5" x2="5.6" y2="16.5" />
	</Svg>
);

export default PlusCircle;
