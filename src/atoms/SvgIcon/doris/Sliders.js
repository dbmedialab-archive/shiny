import React from 'react';

import Svg from './Svg';

const SettingsAlt = props => (
	<Svg {...props}>
		<circle cx="25.7" cy="5.7" r="4" />
		<circle cx="25.7" cy="27" r="4" />
		<circle cx="8.3" cy="16.4" r="4" />
		<line x1="32.1" y1="5.7" x2="29.7" y2="5.7" />
		<line x1="21.6" y1="5.7" x2="0.9" y2="5.7" />
		<line x1="32.1" y1="16.4" x2="12.3" y2="16.4" />
		<line x1="4.2" y1="16.4" x2="0.9" y2="16.4" />
		<line x1="32.1" y1="27" x2="29.7" y2="27" />
		<line x1="21.6" y1="27" x2="0.9" y2="27" />
	</Svg>
);

export default SettingsAlt;
