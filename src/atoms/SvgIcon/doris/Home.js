import React from 'react';

import Svg from './Svg';

const Home = props => (
	<Svg viewBox="0 0 35 32" {...props}>
		<path d="M29.9,12.4 L29.9,31.9 L21.3,31.9 L21.3,24.5 C21.3,23.6 20.9,22.8 20.2,22.2 C19.6,21.6 18.6,21.2 17.6,21.2 C15.6,21.2 14,22.7 14,24.5 L14,31.9 L5.5,31.9 L5.5,12.4 L9.1,8.9 L17.7,0.5 L26.3,8.9 L29.9,12.4 Z" />
		<polyline points="29.9 12.4 31.2 13.7 34.9 17.3" />
		<polyline points="0.5 17.3 4.2 13.7 5.5 12.4" />
	</Svg>
);

export default Home;
