import React from 'react';

import Svg from './Svg';

const News = props => (
	<Svg viewBox="0 0 37 32" strokeWidth="1.5" {...props}>
		<path d="M3.4,25.1 L3.4,0.8 L34.9,0.8 L34.9,26 C34.9,28.2 33.1,30 30.9,30 L3.4,30" />
		<path d="M7,5.6 L30.8,5.6" />
		<path d="M7,23.9 L30.8,23.9" />
		<path d="M18.9,9.3 L30.8,9.3" />
		<path d="M18.9,12.9 L30.8,12.9" />
		<path d="M18.9,16.6 L30.8,16.6" />
		<path d="M18.9,20.3 L30.8,20.3" />
		<path d="M3.4,29.9 C1.4,29.9 0.7,28.3 0.7,26.2" />
		<polyline points="0.8 26.2 0.8 13 3.4 13" />
		<rect x="7" y="9.3" width="8.3" height="9.9" />
	</Svg>
);

export default News;
