import React from 'react';

import Svg from './Svg';

const Home = props => (
	<Svg {...props}>
		<polyline points="5.4,13.1 5.4,19.9 5.4,30.5 13.2,30.5 	" />
		<polyline points="27.5,13.1 27.5,19.9 27.5,30.5 19.8,30.5 	" />
		<polyline points="0.8,17.2 4.2,13.9 8.6,9.6 16.5,1.9 24.3,9.6 28.7,13.9 32.2,17.2 	" />
		<path d="M13.2,30.5v-6.7c0-1.6,1.5-3,3.3-3l0,0c1.8,0,3.3,1.4,3.3,3v6.7" />
	</Svg>
);

export default Home;
