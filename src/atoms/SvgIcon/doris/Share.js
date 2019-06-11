import React from 'react';

import Svg from './Svg';

const Share = props => (
	<Svg {...props}>
		<polyline points="26.5,1.8 29,4.7 31.4,7.5 29,10.4 26.5,13.3 	" />
		<polyline points="31.4,18.4 31.4,32.1 1.7,32.1 1.7,2.2 15,2.2 	" />
		<path d="M31.4,7.5h-7.4c-4.2,0-7.6,3.4-7.6,7.6v5.6" />
	</Svg>
);

export default Share;
