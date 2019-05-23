import React from 'react';

import Svg from './Svg';

const Bolig = props => (
	<Svg viewBox="0 0 31 29" {...props}>
		<rect x="3.2" y="15.3" width="25.8" height="13.9" />
		<polygon points="28.4,5.9 25.4,5.9 6.8,5.9 3.8,5.9 0.8,15.3 6.8,15.3 25.4,15.3 31.5,15.3" />
		<rect x="9.3" y="18.5" width="6.4" height="10.8" />
		<rect x="19.6" y="18.6" width="5.8" height="5.8" />
		<rect x="10.7" y="0.8" width="3.5" height="5.1" />
	</Svg>
);

export default Bolig;
