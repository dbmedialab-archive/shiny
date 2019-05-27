import React from 'react';

import Svg from './Svg';

const Travel = props => (
	<Svg viewBox="0 0 33 32" strokeWidth="1.5" {...props}>
		<g transform="translate(1.000000, 0.000000)">
			<path d="M23.1,29.8 L3.8,29.8 C2.1,29.8 0.7,28.2 0.7,26.3 L0.7,9 C0.7,7.1 2.1,5.5 3.8,5.5 L27.7,5.5 C29.4,5.5 30.8,7.1 30.8,9 L30.8,26.4 C30.8,28.2 29.5,29.7 27.8,29.7 L23.1,29.7 L23.1,29.8 Z"  />
			<path d="M9,5.5 L9,2.9 C9,1.7 10,0.8 11.1,0.8 L20.4,0.8 C21.6,0.8 22.5,1.8 22.5,2.9 L22.5,5.5 L22.5,10.4"  />
			<polyline points="22.6 10.3 19.2 12.1 19.2 19 22.6 19" />
			<polyline points="22.6 10.3 26 12.1 26 19 22.6 19" />
		</g>
	</Svg>
);

export default Travel;
