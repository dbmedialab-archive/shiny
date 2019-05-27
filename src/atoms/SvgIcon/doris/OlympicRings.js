import React from 'react';

import Svg from './Svg';

const OlympicRings = props => (
	<Svg viewBox="0 0 52 32" {...props}>
		<circle cx="8.3" cy="8.3" r="7.5" />
		<circle cx="26.2" cy="8.3" r="7.5" />
		<circle cx="35.2" cy="15.8" r="7.5" />
		<circle cx="44.2" cy="8.3" r="7.5" />
		<circle cx="17.3" cy="15.8" r="7.5" />
	</Svg>
);

export default OlympicRings;
