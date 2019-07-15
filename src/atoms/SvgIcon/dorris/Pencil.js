import React from 'react';

import Svg from './Svg';

const Pencil = props => (
	<Svg {...props}>
		<polygon points="29.1,5.5 11.3,28 4.6,31.1 5.9,23.7 23.6,1.2 " />
		<line x1="20.5" y1="5.1" x2="26" y2="9.4" />
		<line x1="5.9" y1="23.7" x2="11.3" y2="28" />
	</Svg>
);

export default Pencil;
