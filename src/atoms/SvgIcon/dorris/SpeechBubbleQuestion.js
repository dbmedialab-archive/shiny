import React from 'react';

import Svg from './Svg';

const SpeechBubbleQuestion = props => (
	<Svg {...props}>
		<path
			d="M31,4.3V23c0,1.8-1.5,3.3-3.3,3.3h-7.9l-3.2,5.6l-3.2-5.6H5.5c-1.8,0-3.3-1.5-3.3-3.3V4.3C2.2,2.5,3.7,1,5.5,1 h22.2C29.5,1,31,2.5,31,4.3z"
		/>
		<path d="M12.5,10.2c0,0,0.2-4.4,4.5-4.4c2.8,0,5.1,2.8,4.5,5.6c-0.4,1.7-1.9,2.5-3.1,3.5c-1.2,1-1.5,2.4-1.5,4" />
		<path d="M17,22.3c0,0.1-0.1,0.2-0.2,0.2s-0.2-0.1-0.2-0.2c0-0.1,0.1-0.2,0.2-0.2S17,22.1,17,22.3" />
	</Svg>
);

export default SpeechBubbleQuestion;
