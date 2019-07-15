import React from 'react';

import Svg from './Svg';

const Bars = props => (
	<Svg {...props}>
		<line x0="0.1" y0="1.7" x1="30.6" y1="1.7" />
		<line x0="0.1" y0="15.5" x1="30.6" y1="15.5" />
		<line x0="0.1" y0="29.2" x1="30.6" y1="29.2" />
	</Svg>
);

export default Bars;
