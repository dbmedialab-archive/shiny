import React from 'react';

import Svg from './Svg';

const Close = props => (
	<Svg {...props}>
		<line x1="1.4" y1="1.5" x2="31.6" y2="31.7" />
		<line x1="31.6" y1="1.5" x2="1.4" y2="31.7" />
	</Svg>
);

export default Close;
