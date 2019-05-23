import React from 'react';

import Svg from './Svg';

const Position = props => (
	<Svg viewBox="0 0 21 32" {...props}>
		<g transform="translate(-6.000000, -1.000000)">
			<rect fill="none" stroke="none" x="0" y="0" width="33" height="34" />
			<path d="M26.3,11.5 C26.3,12.1 26.2,12.8 26.1,13.4 C25.3,17.7 22.7,21.8 20.5,25.6 C19.2,27.9 16.4,32.4 16.4,32.4 C16.4,32.4 13.5,27.7 13.2,27.3 C11.4,24.3 9.7,21.2 8.2,18 C6.6,14.2 5.6,10.3 7.7,6.6 C9.5,3.5 12.9,1.5 16.4,1.5 C22.1,1.5 26.4,6.2 26.3,11.5 Z" strokeLinecap="round" strokeLinejoin="round" />
			<circle strokeLinecap="round" strokeLinejoin="round" cx="16.4" cy="11.8" r="5.2" />
		</g>
	</Svg>
);

export default Position;
