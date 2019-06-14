import React from 'react';

import Svg from './Svg';

const NewTab = props => (
	<Svg {...props}>
		<line x1="1" y1="13.3" x2="1" y2="4.4" />
		<polyline points="31.9,4.4 31.9,30.1 18.1,30.1 " />
		<polyline points="14.6,26.3 14.6,16.8 5,16.8 " />
		<line x1="14.6" y1="16.8" x2="1" y2="30.1" />
		<line x1="1" y1="9.7" x2="31.9" y2="9.7" />
		<line x1="31.9" y1="4.4" x2="1" y2="4.4" />
	</Svg>
);

export default NewTab;
