import React from 'react';

import Svg from './Svg';

const InBrowser = props => (
	<Svg viewBox="0 0 31 26" {...props}>
		<line x1="0.5" y1="8.9" x2="0.5" y2="0.5" />
		<polyline points="29.6,0.5 29.6,24.7 16.6,24.7 " />
		<polyline points="13.3,21.1 13.3,12.2 4.2,12.2 " />
		<line x1="13.3" y1="12.2" x2="0.5" y2="24.7" />
		<line x1="0.5" y1="5.5" x2="29.6" y2="5.5" />
		<line x1="29.6" y1="0.5" x2="0.5" y2="0.5" />
	</Svg>
);

export default InBrowser;
