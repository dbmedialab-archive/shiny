import React from 'react';

import Svg from './Svg';

const HorizontalEllipse = props => (
	<Svg viewBox="0 0 36 9" fillRule="nonzero" {...props}>
		<circle id="Oval" cx="4.5" cy="4.5" r="4.5" />
		<circle id="Oval" cx="17.5" cy="4.5" r="4.5" />
		<circle id="Oval" cx="31.5" cy="4.5" r="4.5" />
	</Svg>
);

export default HorizontalEllipse;
