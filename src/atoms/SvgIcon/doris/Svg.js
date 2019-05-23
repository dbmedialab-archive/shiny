import React from 'react';

const Svg = props => (<svg
	fill="none"
	stroke="#485D7B"
	strokeLinecap="round"
	strokeLinejoin="round"
	strokeMiterlimit={10}
	{...props}
/>);

export default Svg;
