import React from 'react';

import Svg from './Svg';

const SpeechBubbleQuestion = props => (
	<Svg {...props}>
		<path
			d="M30.8,4.6v18.1c0,1.9-1.3,3.5-2.8,3.5h-9l-1.4,2.4l-1.9,3.3l-1.9-3.3l-1.4-2.4H5.1c-1.6,0-2.9-1.6-2.9-3.6v-18 c0-2,1.3-3.6,2.9-3.6h22.7C29.5,1,30.8,2.6,30.8,4.6z"
		/>
		<path d="M12.4,9.8c0,0,0-4,4.1-4s4.2,4,4.2,4s0.2,1.8-1.8,3.4s-2.6,1.8-2.6,4.5" />
		<circle cx="16.3" cy="20.8" r="0.1" />
	</Svg>
);

export default SpeechBubbleQuestion;
