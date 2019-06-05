import React from 'react';

import Svg from './Svg';

const Feedback = props => (
	<Svg viewBox="0 0 36 35" {...props}>
		<rect fill="none" stroke="none" x="0" y="0" width="36" height="36" />
		<polyline strokeLinecap="round" strokeLinejoin="round" points="11 11 1.5 11 1.5 27.6 1.5 33.1 7.8 27.6 25.9 27.6 25.9 19.1 25.9 19.1" />
		<polygon strokeLinecap="round" strokeLinejoin="round" points="11 2.5 11 19.1 29.1 19.1 35.4 24.6 35.4 19.1 35.4 2.5" />
		<path d="M15.4,9.2 L29.9,9.2" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M15.4,12.8 L29.9,12.8" strokeLinecap="round" strokeLinejoin="round" />
	</Svg>
);

export default Feedback;
