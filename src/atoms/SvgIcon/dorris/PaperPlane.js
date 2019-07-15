import React from 'react';

import Svg from './Svg';

const PaperPlane = props => (
	<Svg {...props}>
		<path d="M1.4,15.1l20.9,13.3c0.3,0.2,0.8,0.1,0.9-0.3l8.6-24.4c0.2-0.5-0.3-1-0.8-0.8L1.5,14C1,14.1,1,14.8,1.4,15.1z" />
		<polyline points="31.3,3.5 10.7,21 10.7,31.7 16.8,25.1 " />
	</Svg>
);

export default PaperPlane;
