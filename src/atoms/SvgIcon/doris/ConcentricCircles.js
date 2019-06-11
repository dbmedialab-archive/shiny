import React from 'react';

import Svg from './Svg';

const LatestNews = props => (
	<Svg {...props}>
		<circle cx="16.6" cy="16.6" r="8.3" />
		<path d="M24.9,29.7c-2.5,1.5-5.2,2.3-8.3,2.3C7.9,32.1,1,25.1,1,16.6c0-3.8,1.4-7.3,3.6-10" />
		<path d="M9.4,2.7c2.1-1.1,4.5-1.7,7-1.7C25.1,1,32,7.9,32,16.6c0,3.6-1.2,6.9-3.3,9.5" />
	</Svg>
);

export default LatestNews;
