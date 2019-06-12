import React from 'react';

import Svg from './Svg';

const DocumentAlt = props => (
	<Svg {...props}>
		<path d="M3.3,14.3H0.9v12.8c0,1.5,1.2,2.8,2.8,2.8h25.7c1.5,0,2.8-1.2,2.8-2.8v-24H3.3V14.3v10.9" />
		<line x1="6.6" y1="7.5" x2="28.4" y2="7.5" />
		<line x1="6.6" y1="24.3" x2="28.4" y2="24.3" />
		<line x1="17.5" y1="10.9" x2="28.4" y2="10.9" />
		<line x1="17.5" y1="14.2" x2="28.4" y2="14.2" />
		<line x1="17.5" y1="17.5" x2="28.4" y2="17.5" />
		<line x1="17.5" y1="20.8" x2="28.4" y2="20.8" />
		<rect x="6.6" y="10.9" width="7.6" height="9.1" />
	</Svg>
);

export default DocumentAlt;
