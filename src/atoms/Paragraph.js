import React from 'react';
import styled from 'react-emotion';
import propTypes from 'prop-types';

const P = styled.p`
	font-size: 1.8rem;
	font-weight: 300;
	margin-bottom: 2rem;
	text-rendering: optimizeLegibility;
	width: 100%;
	strong {
		font-weight: bold;
	}
`;

const Paragraph = (props) => {
	const { children } = props;

	return (
		<P>{children}</P>
	);
};

Paragraph.propTypes = {
	children: propTypes.node.isRequired,
};

export { Paragraph };
