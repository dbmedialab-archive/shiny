import React from 'react';

import Svg from './Svg';

const Trash = props => (
	<Svg {...props}>
		<g>
			<path d="M18.5,1.1h-2.5h-4.3c-1.5,0-2.7,1.2-2.7,2.8v2.9" />
			<path d="M13.6,1.1h2.5h4.3c1.6,0,2.8,1.2,2.8,2.8v2.9" />
		</g>
		<g>
			<path d="M14.5,31.9h3.1H23c2,0,3.5-1.6,3.5-3.5v-3.8V10.3" />
			<path d="M17.6,31.9h-3.1H9.1c-2,0-3.5-1.6-3.5-3.5v-3.8V10.3" />
		</g>
		<g>
			<line x1="13.2" y1="13.4" x2="13.2" y2="26.6" />
			<line x1="19" y1="13.4" x2="19" y2="26.6" />
		</g>
		<rect x="3.6" y="6.9" width="24.9" height="3.4" />
	</Svg>
);

export default Trash;
