import React from 'react';

import Svg from './Svg';

const Trash = props => (
	<Svg viewBox="0 0 27 32" {...props}>
		<g>
			<path d="M14.9,0.5h-2.4H8.4C7,0.5,5.8,1.7,5.8,3.2V6" />
			<path d="M10.1,0.5h2.4h4.1c1.5,0,2.7,1.2,2.7,2.7V6" />
		</g>
		<g>
			<path d="M11,30.1H14h5.2c1.9,0,3.4-1.5,3.4-3.4V23V9.3" />
			<path d="M14,30.1H11H5.8c-1.9,0-3.4-1.5-3.4-3.4V23V9.3" />
		</g>
		<g>
			<line x1="9.7" y1="12.3" x2="9.7" y2="25" />
			<line x1="15.3" y1="12.3" x2="15.3" y2="25" />
		</g>
		<rect x="0.5" y="6" width="24" height="3.3" />
	</Svg>
);

export default Trash;
