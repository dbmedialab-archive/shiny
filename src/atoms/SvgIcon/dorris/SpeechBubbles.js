import React from 'react';

import Svg from './Svg';

const SpeechBubbles = props => (
	<Svg {...props}>
		<polyline points="9.6,10.8 0.9,10.8 0.9,26 0.9,31.1 6.7,26 23.4,26 23.4,18.2 23.4,18.2 	" />
		<polygon points="9.6,3 9.6,18.2 26.3,18.2 32.1,23.3 32.1,18.2 32.1,3 	" />
		<line x1="13.7" y1="9.1" x2="27" y2="9.1" />
		<line x1="13.7" y1="12.4" x2="27" y2="12.4" />
	</Svg>
);

export default SpeechBubbles;
