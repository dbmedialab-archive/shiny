import React from 'react';

const Hamburger = props => (
	<svg width="100%" height="100%" viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg" {...props}>
		<rect x="0" y="0" width="23" height="5" />
		<rect x="0" y="9" width="23" height="5" />
		<rect x="0" y="18" width="23" height="5" />
	</svg>
);

export default Hamburger;
