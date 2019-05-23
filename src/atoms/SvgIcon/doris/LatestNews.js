import React from 'react';

import Svg from './Svg';

const LatestNews = props => (
	<Svg viewBox="0 0 32 32" {...props}>
		<g>
			<circle cx="15.1" cy="15.1" r="7.8" />
			<path d="M22.9,27.4c-2.3,1.4-4.9,2.2-7.8,2.2C7,29.7,0.5,23.1,0.5,15.1c0-3.6,1.3-6.8,3.4-9.4" />
			<path d="M8.4,2.1c2-1,4.2-1.6,6.6-1.6c8.1,0,14.6,6.5,14.6,14.6c0,3.4-1.1,6.5-3.1,8.9" />
		</g>
	</Svg>
);

export default LatestNews;
