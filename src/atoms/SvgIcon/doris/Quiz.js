import React from 'react';

import Svg from './Svg';

const Quiz = props => (
	<Svg viewBox="0 0 42 38" {...props}>
		<path d="M38.4,6v23.1c0,2.4-1.6,4.4-3.6,4.4H23.2l-1.7,3.1L19,40.9l-2.4-4.2l-1.7-3.1H5.6c-2,0-3.8-2-3.8-4.6V6 c0-2.6,1.6-4.6,3.8-4.6h29C36.8,1.5,38.4,3.5,38.4,6z" />
		<path d="M14.9,12.8c0,0,0-5.1,5.2-5.1s5.4,5.1,5.4,5.1s0.3,2.3-2.3,4.3s-3.4,2.3-3.4,5.8" />
		<circle cx="19.8" cy="25.7" r="0.8" />
	</Svg>
);

export default Quiz;
