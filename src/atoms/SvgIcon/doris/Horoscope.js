import React from 'react';

import Svg from './Svg';

const Horoscope = props => (
	<Svg viewBox="0 0 32 32" strokeWidth="1.5" {...props}>
		<circle cx="5.8" cy="18.8" r="5.1" />
		<path d="M10.6,17.2 C10.6,17.2 10.2,15.9 9,14.7 C7.4,13.2 6.7,10.2 6.5,7.9 C6.3,4 9.7,0.8 13.6,0.8 C16.2,0.8 18.6,2.2 19.8,4.5 C21.3,7.3 21.1,10.9 20.5,13.8 C19.7,17.8 17.4,21.8 17.6,25.9 C17.6,28.2 19.5,30.1 21.8,30.1 C23.3,30.1 24.6,29.3 25.4,28.2" />
	</Svg>
);

export default Horoscope;
