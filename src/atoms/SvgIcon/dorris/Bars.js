import React from 'react';

import Svg from './Svg';

const Bars = props => (
	<Svg {...props}>
		<line x1="1.2" y1="2.8" x2="31.7" y2="2.8" />
		<line x1="1.2" y1="16.6" x2="31.7" y2="16.6" />
		<line x1="1.2" y1="30.3" x2="31.7" y2="30.3" />
	</Svg>
);

export default Bars;
